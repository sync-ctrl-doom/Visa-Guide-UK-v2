import jwt from "jsonwebtoken";

const SECRET = process.env["SESSION_SECRET"] ?? "bvi-fallback-secret-change-in-prod";

export function signToken(payload: object, expiresIn = "8h"): string {
  return jwt.sign(payload, SECRET, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string): jwt.JwtPayload | null {
  try {
    return jwt.verify(token, SECRET) as jwt.JwtPayload;
  } catch {
    return null;
  }
}
