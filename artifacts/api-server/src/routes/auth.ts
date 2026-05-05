import { Router } from "express";
import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";
import { signToken } from "../lib/jwt";
import { logger } from "../lib/logger";

const router = Router();

const loginAttempts = new Map<string, { count: number; lockedUntil: number }>();

function checkRateLimit(key: string): { allowed: boolean; waitMinutes?: number } {
  const now = Date.now();
  const entry = loginAttempts.get(key);
  if (entry && entry.lockedUntil > now) {
    return { allowed: false, waitMinutes: Math.ceil((entry.lockedUntil - now) / 60000) };
  }
  return { allowed: true };
}

function recordFailure(key: string) {
  const now = Date.now();
  const entry = loginAttempts.get(key) ?? { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= 5) {
    entry.lockedUntil = now + 15 * 60 * 1000;
    entry.count = 0;
  }
  loginAttempts.set(key, entry);
}

function clearAttempts(key: string) {
  loginAttempts.delete(key);
}

router.post("/auth/admin-login", async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" });
    return;
  }
  const key = `admin:${email}`;
  const rl = checkRateLimit(key);
  if (!rl.allowed) {
    res.status(429).json({ error: `Too many attempts. Try again in ${rl.waitMinutes} minute(s).` });
    return;
  }
  const { data: admin, error } = await supabase
    .from("admin_users")
    .select("id, email, password_hash")
    .eq("email", email.trim().toLowerCase())
    .single();
  if (error || !admin) {
    recordFailure(key);
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  const valid = await bcrypt.compare(password, admin.password_hash);
  if (!valid) {
    recordFailure(key);
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  clearAttempts(key);
  const token = signToken({ sub: admin.id, role: "admin", email: admin.email });
  logger.info({ adminId: admin.id }, "Admin login");
  res.json({ token, email: admin.email });
});

router.post("/auth/client-login", async (req, res) => {
  const { refNumber, password } = req.body as { refNumber?: string; password?: string };
  if (!refNumber || !password) {
    res.status(400).json({ error: "Reference number and password required" });
    return;
  }
  const key = `client:${refNumber}`;
  const rl = checkRateLimit(key);
  if (!rl.allowed) {
    res.status(429).json({ error: `Too many attempts. Try again in ${rl.waitMinutes} minute(s).` });
    return;
  }
  const { data: client, error } = await supabase
    .from("clients")
    .select("id, full_name, email, client_ref, case_status, password_hash, visa_type, adviser_name, must_change_password")
    .eq("client_ref", refNumber.trim().toUpperCase())
    .single();
  if (error || !client) {
    recordFailure(key);
    res.status(401).json({ error: "Invalid reference number or password" });
    return;
  }
  const valid = await bcrypt.compare(password, client.password_hash);
  if (!valid) {
    recordFailure(key);
    res.status(401).json({ error: "Invalid reference number or password" });
    return;
  }
  clearAttempts(key);
  const token = signToken({ sub: client.id, role: "client", ref: client.client_ref });
  logger.info({ clientId: client.id }, "Client login");
  res.json({
    token,
    must_change_password: client.must_change_password ?? false,
    client: {
      id: client.id,
      full_name: client.full_name,
      email: client.email,
      client_ref: client.client_ref,
      case_status: client.case_status,
      visa_type: client.visa_type,
      adviser_name: client.adviser_name,
    },
  });
});

export default router;
