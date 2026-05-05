import { Router } from "express";
import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";
import { requireAdmin } from "../middleware/auth";
import { getTemplateForVisaType } from "../lib/docTemplates";
import { logger } from "../lib/logger";
import { sendWelcomeEmail } from "../lib/email";

const router = Router();
router.use(requireAdmin);

function generatePassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let pwd = "";
  for (let i = 0; i < 8; i++) pwd += chars[Math.floor(Math.random() * chars.length)];
  return pwd;
}

async function generateRefNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const { count } = await supabase
    .from("clients")
    .select("*", { count: "exact", head: true })
    .like("client_ref", `BVI-${year}-%`);
  const next = ((count ?? 0) + 1).toString().padStart(5, "0");
  return `BVI-${year}-${next}`;
}

router.get("/clients", async (req, res) => {
  const { status, visa_type, search } = req.query as Record<string, string>;
  let query = supabase
    .from("clients")
    .select(`id, client_ref, full_name, email, phone, visa_type, case_status, adviser_name, created_at, notes,
      documents(id, status, is_required)`)
    .order("created_at", { ascending: false });

  if (status) query = query.eq("case_status", status);
  if (visa_type) query = query.eq("visa_type", visa_type);
  if (search) query = query.or(`full_name.ilike.%${search}%,client_ref.ilike.%${search}%`);

  const { data, error } = await query;
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json(data);
});

router.post("/clients", async (req, res) => {
  const { full_name, email, phone, visa_type, adviser_name, notes } =
    req.body as Record<string, string>;
  if (!full_name || !email || !visa_type) {
    res.status(400).json({ error: "full_name, email, and visa_type are required" });
    return;
  }
  const client_ref = await generateRefNumber();
  const plainPassword = generatePassword();
  const password_hash = await bcrypt.hash(plainPassword, 12);

  const { data: client, error } = await supabase
    .from("clients")
    .insert({
      client_ref,
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() ?? null,
      visa_type: visa_type.trim(),
      adviser_name: adviser_name?.trim() ?? null,
      notes: notes?.trim() ?? null,
      password_hash,
      case_status: "In Preparation",
      must_change_password: true,
    })
    .select()
    .single();

  if (error || !client) {
    logger.error({ error }, "Failed to create client");
    res.status(500).json({ error: error?.message ?? "Failed to create client" });
    return;
  }

  const docs = getTemplateForVisaType(visa_type).map(d => ({ ...d, client_id: client.id }));
  if (docs.length > 0) {
    const { error: docError } = await supabase.from("documents").insert(docs);
    if (docError) logger.error({ docError }, "Failed to create default documents");
  }

  logger.info({ clientId: client.id, client_ref }, "Client created");
  res.status(201).json({ client, plainPassword, client_ref });
});

router.get("/clients/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("clients")
    .select(`*, documents(*), messages(*)`)
    .eq("id", req.params["id"])
    .single();
  if (error || !data) { res.status(404).json({ error: "Client not found" }); return; }
  res.json(data);
});

router.patch("/clients/:id", async (req, res) => {
  const allowed = ["full_name", "email", "phone", "visa_type", "case_status", "adviser_name", "notes"];
  const updates: Record<string, string> = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }
  const { data, error } = await supabase
    .from("clients")
    .update(updates)
    .eq("id", req.params["id"])
    .select()
    .single();
  if (error || !data) { res.status(500).json({ error: error?.message }); return; }
  res.json(data);
});

router.post("/clients/:id/send-welcome-email", async (req, res) => {
  const { plain_password } = req.body as { plain_password?: string };
  const { data: client, error } = await supabase
    .from("clients")
    .select("full_name, email, client_ref")
    .eq("id", req.params["id"])
    .single();
  if (error || !client) { res.status(404).json({ error: "Client not found" }); return; }
  if (!plain_password) { res.status(400).json({ error: "plain_password required" }); return; }
  await sendWelcomeEmail({
    to: client.email,
    fullName: client.full_name,
    refNumber: client.client_ref,
    plainPassword: plain_password,
  });
  res.json({ sent: true });
});

router.post("/clients/:id/send-reminder", async (req, res) => {
  const { data: client } = await supabase
    .from("clients").select("full_name, email").eq("id", req.params["id"]).single();
  const { data: docs } = await supabase
    .from("documents")
    .select("document_name, status, is_required")
    .eq("client_id", req.params["id"])
    .eq("is_required", true)
    .eq("status", "Not uploaded");
  if (!client) { res.status(404).json({ error: "Client not found" }); return; }
  const outstanding = (docs ?? []).map((d: { document_name: string }) => d.document_name);
  const { sendReminderEmail } = await import("../lib/email");
  await sendReminderEmail({ to: client.email, fullName: client.full_name, outstandingDocs: outstanding });
  res.json({ sent: true, count: outstanding.length });
});

export default router;
