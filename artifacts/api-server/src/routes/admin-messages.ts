import { Router } from "express";
import { supabase } from "../lib/supabase";
import { requireAdmin } from "../middleware/auth";
import { sendNewMessageEmail } from "../lib/email";

const router = Router();
router.use(requireAdmin);

router.get("/clients/:clientId/messages", async (req, res) => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("client_id", req.params["clientId"])
    .order("sent_at", { ascending: true });
  if (error) { res.status(500).json({ error: error.message }); return; }

  await supabase
    .from("messages")
    .update({ is_read: true })
    .eq("client_id", req.params["clientId"])
    .eq("sender", "client");

  res.json(data);
});

router.post("/clients/:clientId/messages", async (req, res) => {
  const { message_text } = req.body as { message_text?: string };
  if (!message_text?.trim()) { res.status(400).json({ error: "message_text required" }); return; }

  const { data, error } = await supabase
    .from("messages")
    .insert({ client_id: req.params["clientId"], sender: "adviser", message_text: message_text.trim() })
    .select()
    .single();
  if (error) { res.status(500).json({ error: error.message }); return; }

  const { data: client } = await supabase
    .from("clients").select("full_name, email").eq("id", req.params["clientId"]).single();
  if (client) {
    await sendNewMessageEmail({ to: client.email, fullName: client.full_name });
  }

  res.status(201).json(data);
});

router.get("/clients/:clientId/unread-count", async (req, res) => {
  const { count } = await supabase
    .from("messages")
    .select("*", { count: "exact", head: true })
    .eq("client_id", req.params["clientId"])
    .eq("sender", "client")
    .eq("is_read", false);
  res.json({ count: count ?? 0 });
});

export default router;
