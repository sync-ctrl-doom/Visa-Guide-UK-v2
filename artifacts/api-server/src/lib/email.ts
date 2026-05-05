import { Resend } from "resend";
import { logger } from "./logger";

const resend = new Resend(process.env["RESEND_API_KEY"]);
const FROM = "Britannia Visas <onboarding@resend.dev>";
const PORTAL_URL = (process.env["REPLIT_DOMAINS"] ?? "").split(",")[0]
  ? `https://${(process.env["REPLIT_DOMAINS"] ?? "").split(",")[0]}/secure-portal`
  : "https://britannia-visas.replit.app/secure-portal";

export async function sendWelcomeEmail(opts: {
  to: string;
  fullName: string;
  refNumber: string;
  plainPassword: string;
}) {
  try {
    await resend.emails.send({
      from: FROM,
      to: opts.to,
      subject: "Your client portal is ready — Britannia Visas & Immigration Consultancy",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1a2744;padding:24px;color:white">
            <h1 style="margin:0;font-size:22px">Britannia Visas & Immigration Consultancy</h1>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #e5e7eb">
            <p>Dear ${opts.fullName},</p>
            <p>Your secure client portal has been created. Please use the credentials below to log in and begin uploading your documents.</p>
            <div style="background:#f3f4f6;border-left:4px solid #1a2744;padding:16px;margin:24px 0">
              <p style="margin:0 0 8px"><strong>Client Reference:</strong> ${opts.refNumber}</p>
              <p style="margin:0"><strong>Temporary Password:</strong> ${opts.plainPassword}</p>
            </div>
            <p>Please change your password after your first login.</p>
            <a href="${PORTAL_URL}" style="display:inline-block;background:#c8102e;color:white;padding:12px 24px;text-decoration:none;font-weight:bold;margin:16px 0">Access Your Portal →</a>
            <p style="font-size:13px;color:#6b7280;margin-top:24px">
              IAA Level 1 Regulated Adviser. This email is confidential.
            </p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send welcome email");
  }
}

export async function sendDocumentApprovedEmail(opts: {
  to: string;
  fullName: string;
  documentName: string;
}) {
  try {
    await resend.emails.send({
      from: FROM,
      to: opts.to,
      subject: `Document approved — ${opts.documentName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1a2744;padding:24px;color:white">
            <h1 style="margin:0;font-size:22px">Britannia Visas & Immigration Consultancy</h1>
          </div>
          <div style="padding:32px">
            <p>Dear ${opts.fullName},</p>
            <p>Your document <strong>${opts.documentName}</strong> has been reviewed and <span style="color:#059669;font-weight:bold">approved</span> by your adviser.</p>
            <a href="${PORTAL_URL}" style="display:inline-block;background:#1a2744;color:white;padding:12px 24px;text-decoration:none;font-weight:bold">View Portal →</a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send document approved email");
  }
}

export async function sendDocumentRejectedEmail(opts: {
  to: string;
  fullName: string;
  documentName: string;
  reason: string;
}) {
  try {
    await resend.emails.send({
      from: FROM,
      to: opts.to,
      subject: `Action required — ${opts.documentName} needs to be re-uploaded`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1a2744;padding:24px;color:white">
            <h1 style="margin:0;font-size:22px">Britannia Visas & Immigration Consultancy</h1>
          </div>
          <div style="padding:32px">
            <p>Dear ${opts.fullName},</p>
            <p>Your document <strong>${opts.documentName}</strong> could not be accepted for the following reason:</p>
            <div style="background:#fef2f2;border-left:4px solid #c8102e;padding:16px;margin:16px 0">
              <p style="margin:0;color:#991b1b">${opts.reason}</p>
            </div>
            <p>Please log in to your portal and re-upload this document.</p>
            <a href="${PORTAL_URL}" style="display:inline-block;background:#c8102e;color:white;padding:12px 24px;text-decoration:none;font-weight:bold">Re-upload Document →</a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send document rejected email");
  }
}

export async function sendNewMessageEmail(opts: {
  to: string;
  fullName: string;
}) {
  try {
    await resend.emails.send({
      from: FROM,
      to: opts.to,
      subject: "New message from your adviser — Britannia Visas",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1a2744;padding:24px;color:white">
            <h1 style="margin:0;font-size:22px">Britannia Visas & Immigration Consultancy</h1>
          </div>
          <div style="padding:32px">
            <p>Dear ${opts.fullName},</p>
            <p>Your adviser has sent you a new message. Please log in to your secure portal to read it.</p>
            <a href="${PORTAL_URL}" style="display:inline-block;background:#1a2744;color:white;padding:12px 24px;text-decoration:none;font-weight:bold">Read Message →</a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send new message email");
  }
}

export async function sendReminderEmail(opts: {
  to: string;
  fullName: string;
  outstandingDocs: string[];
}) {
  try {
    const docList = opts.outstandingDocs.map(d => `<li>${d}</li>`).join("");
    await resend.emails.send({
      from: FROM,
      to: opts.to,
      subject: "Reminder: documents still outstanding — Britannia Visas",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1a2744;padding:24px;color:white">
            <h1 style="margin:0;font-size:22px">Britannia Visas & Immigration Consultancy</h1>
          </div>
          <div style="padding:32px">
            <p>Dear ${opts.fullName},</p>
            <p>We noticed the following documents are still outstanding for your application:</p>
            <ul style="color:#1a2744">${docList}</ul>
            <p>Please log in and upload them at your earliest convenience.</p>
            <a href="${PORTAL_URL}" style="display:inline-block;background:#c8102e;color:white;padding:12px 24px;text-decoration:none;font-weight:bold">Upload Documents →</a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send reminder email");
  }
}
