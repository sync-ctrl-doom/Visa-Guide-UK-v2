import { Router } from "express";
import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";
import { requireClient } from "../middleware/auth";
import { logger } from "../lib/logger";
import multer from "multer";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

router.get("/portal/me", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { data, error } = await supabase
    .from("clients")
    .select("id, client_ref, full_name, email, visa_type, case_status, adviser_name")
    .eq("id", clientId)
    .single();
  if (error || !data) { res.status(404).json({ error: "Client not found" }); return; }
  res.json(data);
});

router.get("/portal/documents", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { data, error } = await supabase
    .from("documents")
    .select("id, document_name, description, category, is_required, status, file_url, uploaded_at, rejection_reason")
    .eq("client_id", clientId)
    .order("category");
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json(data);
});

router.post("/portal/documents/:id/upload", requireClient, upload.single("file"), async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  if (!req.file) { res.status(400).json({ error: "No file provided" }); return; }

  const { data: doc } = await supabase
    .from("documents").select("client_id").eq("id", req.params["id"]).single();
  if (!doc || doc.client_id !== clientId) {
    res.status(403).json({ error: "Forbidden" }); return;
  }

  const ext = req.file.originalname.split(".").pop() ?? "bin";
  const storagePath = `${clientId}/${req.params["id"]}-${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("client-documents")
    .upload(storagePath, req.file.buffer, { contentType: req.file.mimetype, upsert: true });

  if (uploadError) {
    logger.error({ uploadError }, "Storage upload failed");
    res.status(500).json({ error: uploadError.message }); return;
  }

  const fileUrl = `${process.env["SUPABASE_URL"]}/storage/v1/object/client-documents/${storagePath}`;
  const { data: updated, error: updateError } = await supabase
    .from("documents")
    .update({ status: "Uploaded", file_url: fileUrl, uploaded_at: new Date().toISOString(), rejection_reason: null })
    .eq("id", req.params["id"])
    .select()
    .single();

  if (updateError) { res.status(500).json({ error: updateError.message }); return; }
  res.json(updated);
});

router.get("/portal/documents/:id/signed-url", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { data: doc } = await supabase
    .from("documents").select("client_id, file_url").eq("id", req.params["id"]).single();
  if (!doc || doc.client_id !== clientId) { res.status(403).json({ error: "Forbidden" }); return; }
  if (!doc.file_url) { res.status(404).json({ error: "No file uploaded" }); return; }
  const storagePath = (doc.file_url as string).split("client-documents/")[1];
  if (!storagePath) { res.status(400).json({ error: "Invalid path" }); return; }
  const { data, error } = await supabase.storage.from("client-documents").createSignedUrl(storagePath, 3600);
  if (error || !data) { res.status(500).json({ error: error?.message }); return; }
  res.json({ url: data.signedUrl });
});

router.get("/portal/messages", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("client_id", clientId)
    .order("sent_at", { ascending: true });
  if (error) { res.status(500).json({ error: error.message }); return; }
  await supabase
    .from("messages").update({ is_read: true })
    .eq("client_id", clientId).eq("sender", "adviser");
  res.json(data);
});

router.patch("/portal/change-password", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { current_password, new_password } = req.body as { current_password?: string; new_password?: string };
  if (!current_password || !new_password) {
    res.status(400).json({ error: "current_password and new_password required" }); return;
  }
  if (new_password.length < 8) {
    res.status(400).json({ error: "New password must be at least 8 characters" }); return;
  }
  const { data: client } = await supabase
    .from("clients").select("password_hash").eq("id", clientId).single();
  if (!client) { res.status(404).json({ error: "Client not found" }); return; }
  const valid = await bcrypt.compare(current_password, client.password_hash);
  if (!valid) { res.status(401).json({ error: "Current password is incorrect" }); return; }
  const new_hash = await bcrypt.hash(new_password, 12);
  const { error } = await supabase
    .from("clients")
    .update({ password_hash: new_hash, must_change_password: false })
    .eq("id", clientId);
  if (error) { res.status(500).json({ error: error.message }); return; }
  logger.info({ clientId }, "Client changed password");
  res.json({ success: true });
});

router.post("/portal/messages", requireClient, async (req, res) => {
  const clientId = res.locals["clientId"] as string;
  const { message_text } = req.body as { message_text?: string };
  if (!message_text?.trim()) { res.status(400).json({ error: "message_text required" }); return; }
  const { data, error } = await supabase
    .from("messages")
    .insert({ client_id: clientId, sender: "client", message_text: message_text.trim() })
    .select()
    .single();
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.status(201).json(data);
});

export default router;
