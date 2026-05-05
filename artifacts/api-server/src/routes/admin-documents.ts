import { Router } from "express";
import { supabase } from "../lib/supabase";
import { requireAdmin } from "../middleware/auth";
import { sendDocumentApprovedEmail, sendDocumentRejectedEmail } from "../lib/email";
import { logger } from "../lib/logger";

const router = Router();
router.use(requireAdmin);

router.get("/clients/:clientId/documents", async (req, res) => {
  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("client_id", req.params["clientId"])
    .order("category");
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json(data);
});

router.post("/clients/:clientId/documents", async (req, res) => {
  const { document_name, description, category, is_required } = req.body as Record<string, unknown>;
  if (!document_name) { res.status(400).json({ error: "document_name required" }); return; }
  const { data, error } = await supabase
    .from("documents")
    .insert({
      client_id: req.params["clientId"],
      document_name,
      description: description ?? null,
      category: category ?? "Other",
      is_required: is_required ?? true,
      status: "Not uploaded",
    })
    .select()
    .single();
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.status(201).json(data);
});

router.patch("/documents/:id", async (req, res) => {
  const { status, rejection_reason, is_required, document_name, description, category } =
    req.body as Record<string, unknown>;

  const updates: Record<string, unknown> = {};
  if (status !== undefined) updates["status"] = status;
  if (rejection_reason !== undefined) updates["rejection_reason"] = rejection_reason;
  if (is_required !== undefined) updates["is_required"] = is_required;
  if (document_name !== undefined) updates["document_name"] = document_name;
  if (description !== undefined) updates["description"] = description;
  if (category !== undefined) updates["category"] = category;

  const { data: doc, error } = await supabase
    .from("documents")
    .update(updates)
    .eq("id", req.params["id"])
    .select("*, clients(full_name, email)")
    .single();

  if (error || !doc) { res.status(500).json({ error: error?.message }); return; }

  const client = (doc as Record<string, unknown>)["clients"] as { full_name: string; email: string } | null;
  if (client) {
    if (status === "Approved") {
      await sendDocumentApprovedEmail({
        to: client.email,
        fullName: client.full_name,
        documentName: (doc as Record<string, unknown>)["document_name"] as string,
      });
    } else if (status === "Rejected" && rejection_reason) {
      await sendDocumentRejectedEmail({
        to: client.email,
        fullName: client.full_name,
        documentName: (doc as Record<string, unknown>)["document_name"] as string,
        reason: rejection_reason as string,
      });
    }
  }

  res.json(doc);
});

router.delete("/documents/:id", async (req, res) => {
  const { error } = await supabase.from("documents").delete().eq("id", req.params["id"]);
  if (error) { res.status(500).json({ error: error.message }); return; }
  res.json({ deleted: true });
});

router.get("/documents/:id/signed-url", async (req, res) => {
  const { data: doc } = await supabase
    .from("documents").select("file_url").eq("id", req.params["id"]).single();
  if (!doc?.file_url) { res.status(404).json({ error: "No file uploaded" }); return; }

  const path = (doc.file_url as string).split("client-documents/")[1];
  if (!path) { res.status(400).json({ error: "Invalid file path" }); return; }

  const { data, error } = await supabase.storage
    .from("client-documents")
    .createSignedUrl(path, 3600);
  if (error || !data) { res.status(500).json({ error: error?.message }); return; }
  res.json({ url: data.signedUrl });
});

router.get("/documents/:id/view", async (req, res) => {
  const { data: doc } = await supabase
    .from("documents").select("file_url").eq("id", req.params["id"]).single();
  if (!doc?.file_url) { res.status(404).json({ error: "No file uploaded" }); return; }
  const path = (doc.file_url as string).split("client-documents/")[1];
  if (!path) { res.status(400).json({ error: "Invalid file path" }); return; }
  const { data, error } = await supabase.storage.from("client-documents").createSignedUrl(path, 3600);
  if (error || !data) { res.status(500).json({ error: error?.message }); return; }
  res.redirect(data.signedUrl);
});

logger.info("Admin documents router loaded");
export default router;
