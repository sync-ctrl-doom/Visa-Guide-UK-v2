import { Router } from "express";
import webpush from "web-push";
import { supabase } from "../lib/supabase";
import { requireAdmin } from "../middleware/auth";
import { logger } from "../lib/logger";

const router = Router();

const vapidPublicKey  = process.env["VAPID_PUBLIC_KEY"]  ?? "";
const vapidPrivateKey = process.env["VAPID_PRIVATE_KEY"] ?? "";
const vapidEmail      = process.env["VAPID_EMAIL"]       ?? "mailto:info@britannia-visas.co.uk";

if (vapidPublicKey && vapidPrivateKey) {
  webpush.setVapidDetails(vapidEmail, vapidPublicKey, vapidPrivateKey);
}

// GET /api/push/vapid-public-key — return public key to frontend
router.get("/push/vapid-public-key", (_req, res) => {
  res.json({ publicKey: vapidPublicKey });
});

// POST /api/push/subscribe — save a push subscription (admin only)
router.post("/push/subscribe", requireAdmin, async (req, res) => {
  const adminId = res.locals["adminId"] as string;
  const { subscription } = req.body as { subscription?: object };
  if (!subscription) {
    res.status(400).json({ error: "subscription required" }); return;
  }
  const { error } = await supabase
    .from("push_subscriptions")
    .upsert({ user_id: adminId, subscription }, { onConflict: "user_id" });
  if (error) {
    logger.error({ error }, "Failed to save push subscription");
    res.status(500).json({ error: error.message }); return;
  }
  logger.info({ adminId }, "Push subscription saved");
  res.status(201).json({ subscribed: true });
});

// POST /api/push/send — send a notification (admin only, internal use)
router.post("/push/send", requireAdmin, async (req, res) => {
  const { title, body, url } = req.body as { title?: string; body?: string; url?: string };
  if (!title || !body) {
    res.status(400).json({ error: "title and body required" }); return;
  }
  const { data: subs, error } = await supabase
    .from("push_subscriptions")
    .select("id, user_id, subscription");
  if (error) {
    res.status(500).json({ error: error.message }); return;
  }
  const payload = JSON.stringify({ title, body, url: url ?? "/" });
  const results = await Promise.allSettled(
    (subs ?? []).map(async (row) => {
      try {
        await webpush.sendNotification(
          row.subscription as webpush.PushSubscription,
          payload
        );
      } catch (err: unknown) {
        const e = err as { statusCode?: number };
        if (e?.statusCode === 410 || e?.statusCode === 404) {
          // Subscription expired — remove it
          await supabase.from("push_subscriptions").delete().eq("id", row.id);
          logger.info({ subId: row.id }, "Removed expired push subscription");
        }
        throw err;
      }
    })
  );
  const sent     = results.filter(r => r.status === "fulfilled").length;
  const failures = results.filter(r => r.status === "rejected").length;
  logger.info({ sent, failures }, "Push notifications sent");
  res.json({ sent, failures });
});

export default router;
