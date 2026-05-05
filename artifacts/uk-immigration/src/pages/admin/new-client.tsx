import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Copy, Check, Mail, UserPlus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, type CreateClientPayload } from "@/lib/api";

const VISA_TYPES = [
  "Skilled Worker",
  "Spouse / Family",
  "Student",
  "Tourist / Visitor",
  "ILR",
  "British Citizenship",
  "EEA Settled Status",
  "Right of Abode",
];

interface CreatedClient {
  client_ref: string;
  plainPassword: string;
  clientId: string;
  email: string;
  full_name: string;
}

export default function NewClient() {
  const [, setLocation] = useLocation();
  const [form, setForm] = useState<CreateClientPayload>({
    full_name: "",
    email: "",
    phone: "",
    visa_type: "Skilled Worker",
    adviser_name: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<CreatedClient | null>(null);
  const [copied, setCopied] = useState<"ref" | "pwd" | "both" | null>(null);
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function set(key: keyof CreateClientPayload, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.createClient(form);
      setCreated({
        client_ref: res.client_ref,
        plainPassword: res.plainPassword,
        clientId: res.client.id,
        email: res.client.email,
        full_name: res.client.full_name,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create client");
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text: string, which: "ref" | "pwd" | "both") {
    await navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 2000);
  }

  async function handleSendEmail() {
    if (!created) return;
    setEmailSending(true);
    try {
      await api.sendWelcomeEmail(created.clientId, created.plainPassword);
      setEmailSent(true);
    } catch {
      // silent — email may still send
    } finally {
      setEmailSending(false);
    }
  }

  if (created) {
    return (
      <div className="min-h-screen bg-muted/30">
        <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
          <Link href="/admin">
            <button className="text-primary-foreground/70 hover:text-primary-foreground">
              <ArrowLeft size={18} />
            </button>
          </Link>
          <h1 className="font-serif font-bold text-lg">Client Created</h1>
        </header>
        <div className="max-w-lg mx-auto px-4 py-10 space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
            <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-800">Client account created for {created.full_name}</p>
              <p className="text-sm text-emerald-700 mt-0.5">Document checklist pre-populated. Note the credentials below — the password will not be shown again.</p>
            </div>
          </div>

          <div className="bg-card border border-border p-6 space-y-4">
            <h2 className="font-serif font-bold text-lg">Login Credentials</h2>
            <p className="text-sm text-muted-foreground">Share these with the client via a secure channel. The password is shown once only.</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-muted px-4 py-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Client Reference</p>
                  <p className="font-mono font-bold text-base mt-0.5">{created.client_ref}</p>
                </div>
                <button onClick={() => copyText(created.client_ref, "ref")} className="text-muted-foreground hover:text-primary transition-colors">
                  {copied === "ref" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="flex items-center justify-between bg-muted px-4 py-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Temporary Password</p>
                  <p className="font-mono font-bold text-base mt-0.5">{created.plainPassword}</p>
                </div>
                <button onClick={() => copyText(created.plainPassword, "pwd")} className="text-muted-foreground hover:text-primary transition-colors">
                  {copied === "pwd" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
              <button
                onClick={() => copyText(`Reference: ${created.client_ref}\nPassword: ${created.plainPassword}`, "both")}
                className="w-full text-xs text-primary hover:underline flex items-center justify-center gap-1.5 py-1"
              >
                {copied === "both" ? <><Check size={12} className="text-emerald-600" /> Copied!</> : <><Copy size={12} /> Copy both</>}
              </button>
            </div>

            <div className="pt-2 border-t border-border space-y-2">
              {emailSent ? (
                <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2">
                  <Check size={14} /> Welcome email sent to {created.email}
                </div>
              ) : (
                <Button
                  variant="outline"
                  className="w-full rounded-none gap-2"
                  onClick={handleSendEmail}
                  disabled={emailSending}
                >
                  <Mail size={14} /> {emailSending ? "Sending…" : "Send Welcome Email"}
                </Button>
              )}
              <Button
                className="w-full rounded-none gap-2"
                onClick={() => setLocation(`/admin/clients/${created.clientId}`)}
              >
                Open Client Record
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
        <Link href="/admin">
          <button className="text-primary-foreground/70 hover:text-primary-foreground">
            <ArrowLeft size={18} />
          </button>
        </Link>
        <h1 className="font-serif font-bold text-lg">New Client</h1>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-card border border-border p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="full_name">Full Name <span className="text-destructive">*</span></Label>
                <Input id="full_name" value={form.full_name} onChange={e => set("full_name", e.target.value)} className="rounded-none" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" value={form.email} onChange={e => set("email", e.target.value)} className="rounded-none" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+44 7700 900000" className="rounded-none" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="visa_type">Visa Type <span className="text-destructive">*</span></Label>
                <select
                  id="visa_type"
                  value={form.visa_type}
                  onChange={e => set("visa_type", e.target.value)}
                  className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {VISA_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="adviser">Assigned Adviser</Label>
                <Input id="adviser" value={form.adviser_name} onChange={e => set("adviser_name", e.target.value)} placeholder="Adviser name" className="rounded-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="notes">Notes</Label>
              <textarea
                id="notes"
                value={form.notes}
                onChange={e => set("notes", e.target.value)}
                rows={3}
                placeholder="Any additional notes about this client or case…"
                className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <div className="bg-muted/50 border border-border p-3 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Document checklist auto-population</p>
              <p>Standard documents for <strong>{form.visa_type}</strong> will be automatically added when the client is created. You can add, remove, or edit documents afterwards.</p>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2">
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Link href="/admin" className="flex-1">
                <Button type="button" variant="outline" className="w-full rounded-none">Cancel</Button>
              </Link>
              <Button type="submit" className="flex-1 rounded-none gap-2" disabled={loading}>
                <UserPlus size={14} /> {loading ? "Creating…" : "Create Client"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
