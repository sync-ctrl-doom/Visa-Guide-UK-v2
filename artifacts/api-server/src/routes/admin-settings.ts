import { Router } from "express";
import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";
import { requireAdmin } from "../middleware/auth";

const router = Router();
router.use(requireAdmin);

router.get("/settings/admins", async (_req, res) => {
  const { data, error } = await supabase
    .from("admin_users").select("id, email, created_at").order("created_at");
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json(data);
});

router.post("/settings/admins", async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) { res.status(400).json({ error: "email and password required" }); return; }
  if (password.length < 8) { res.status(400).json({ error: "Password must be at least 8 characters" }); return; }
  const password_hash = await bcrypt.hash(password, 12);
  const { data, error } = await supabase
    .from("admin_users")
    .insert({ email: email.trim().toLowerCase(), password_hash })
    .select("id, email, created_at")
    .single();
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.status(201).json(data);
});

router.delete("/settings/admins/:id", async (req, res) => {
  const { error } = await supabase.from("admin_users").delete().eq("id", req.params["id"]);
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json({ deleted: true });
});

router.post("/settings/change-password", async (req, res) => {
  const adminId = res.locals["adminId"] as string;
  const { current_password, new_password } = req.body as { current_password?: string; new_password?: string };
  if (!current_password || !new_password) {
    res.status(400).json({ error: "current_password and new_password required" }); return;
  }
  if (new_password.length < 8) { res.status(400).json({ error: "New password must be at least 8 characters" }); return; }
  const { data: admin } = await supabase
    .from("admin_users").select("password_hash").eq("id", adminId).single();
  if (!admin) { res.status(404).json({ error: "Admin not found" }); return; }
  const valid = await bcrypt.compare(current_password, admin.password_hash);
  if (!valid) { res.status(401).json({ error: "Current password incorrect" }); return; }
  const password_hash = await bcrypt.hash(new_password, 12);
  await supabase.from("admin_users").update({ password_hash }).eq("id", adminId);
  res.json({ updated: true });
});

export default router;
