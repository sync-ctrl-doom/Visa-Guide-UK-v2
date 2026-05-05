import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/jwt";

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const auth = req.headers["authorization"];
  if (!auth?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  const token = auth.slice(7);
  const payload = verifyToken(token);
  if (!payload || payload["role"] !== "admin") {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  res.locals["adminId"] = payload["sub"] as string;
  next();
}

export function requireClient(req: Request, res: Response, next: NextFunction): void {
  const auth = req.headers["authorization"];
  if (!auth?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  const token = auth.slice(7);
  const payload = verifyToken(token);
  if (!payload || payload["role"] !== "client") {
    res.status(401).json({ error: "Unauthorised" });
    return;
  }
  res.locals["clientId"] = payload["sub"] as string;
  next();
}
