import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import {
  Shield, Upload, FileText, CreditCard, HeartPulse, Lock,
  CheckCircle2, AlertCircle, Eye, EyeOff, ArrowRight, Clock,
  User, Key, RefreshCw, Paperclip, X, Send, XCircle, ExternalLink,
  KeyRound
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, type ClientRecord, type Document, type Message } from "@/lib/api";

const STATUS_CONFIG: Record<string, { label: string; colour: string; icon: typeof CheckCircle2 }> = {
  "Not uploaded": { label: "Not uploaded",  colour: "text-muted-foreground bg-muted border-muted-foreground/20", icon: Upload },
  "Uploaded":     { label: "Under review",  colour: "text-amber-700 bg-amber-50 border-amber-200",              icon: Clock },
  "Approved":     { label: "Approved",       colour: "text-emerald-700 bg-emerald-50 border-emerald-200",        icon: CheckCircle2 },
  "Rejected":     { label: "Rejected",       colour: "text-red-700 bg-red-50 border-red-200",                   icon: XCircle },
};

export default function SecurePortal() {
  const [isLoggedIn, setIsLoggedIn]           = useState(false);
  const [mustChangePassword, setMustChange]   = useState(false);
  const [client, setClient]                   = useState<ClientRecord | null>(null);
  const [refNumber, setRefNumber]             = useState("");
  const [password, setPassword]               = useState("");
  const [showPassword, setShowPassword]       = useState(false);
  const [loginError, setLoginError]           = useState("");
  const [loginLoading, setLoginLoading]       = useState(false);

  // Change-password form state
  const [currentPwd, setCurrentPwd]           = useState("");
  const [newPwd, setNewPwd]                   = useState("");
  const [confirmPwd, setConfirmPwd]           = useState("");
  const [showNewPwd, setShowNewPwd]           = useState(false);
  const [pwdError, setPwdError]               = useState("");
  const [pwdLoading, setPwdLoading]           = useState(false);

  const [docs, setDocs]         = useState<Document[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [msgText, setMsgText]   = useState("");
  const [sending, setSending]   = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const msgEndRef = useRef<HTMLDivElement>(null);

  // Restore session on mount
  useEffect(() => {
    const token = localStorage.getItem("bvi_client_token");
    if (!token) return;
    api.getMe()
      .then(me => {
        setClient(me);
        setIsLoggedIn(true);
      })
      .catch(() => localStorage.removeItem("bvi_client_token"));
  }, []);

  const loadPortalData = useCallback(async () => {
    try {
      const [docsData, msgsData] = await Promise.all([api.getMyDocuments(), api.getMyMessages()]);
      setDocs(docsData);
      setMessages(msgsData);
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    if (isLoggedIn) void loadPortalData();
  }, [isLoggedIn, loadPortalData]);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await api.clientLogin(refNumber.trim(), password);
      localStorage.setItem("bvi_client_token", res.token);
      setClient(res.client);
      setIsLoggedIn(true);
      if (res.must_change_password) {
        setCurrentPwd(password);
        setMustChange(true);
      }
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwdError("");
    if (newPwd.length < 8) { setPwdError("New password must be at least 8 characters."); return; }
    if (newPwd !== confirmPwd) { setPwdError("Passwords do not match."); return; }
    if (newPwd === currentPwd) { setPwdError("New password must be different from your current password."); return; }
    setPwdLoading(true);
    try {
      await api.changeClientPassword(currentPwd, newPwd);
      setMustChange(false);
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
    } catch (err) {
      setPwdError(err instanceof Error ? err.message : "Password change failed");
    } finally {
      setPwdLoading(false);
    }
  }

  function signOut() {
    localStorage.removeItem("bvi_client_token");
    setIsLoggedIn(false);
    setMustChange(false);
    setClient(null);
    setDocs([]);
    setMessages([]);
    setRefNumber("");
    setPassword("");
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
  }

  async function handleUpload(docId: string, file: File) {
    setUploading(docId);
    try {
      const updated = await api.uploadDocument(docId, file);
      setDocs(prev => prev.map(d => d.id === docId ? updated : d));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(null);
    }
  }

  async function handleViewFile(docId: string) {
    try {
      const { url } = await api.getMySignedUrl(docId);
      window.open(url, "_blank");
    } catch { /* noop */ }
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!msgText.trim()) return;
    setSending(true);
    try {
      const msg = await api.sendClientMessage(msgText.trim());
      setMessages(prev => [...prev, msg]);
      setMsgText("");
    } finally {
      setSending(false);
    }
  }

  const uploadedCount  = docs.filter(d => d.status !== "Not uploaded").length;
  const requiredCount  = docs.filter(d => d.is_required).length;
  const requiredDone   = docs.filter(d => d.is_required && d.status !== "Not uploaded").length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-secondary text-secondary-foreground font-medium tracking-wide mb-6 rounded-sm">
            <Lock size={13} /> Secure &amp; Encrypted
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">Client Document Portal</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Securely submit your passports, financial records, and supporting documents directly to your case adviser. All uploads are encrypted in transit and at rest.
          </p>
        </div>
      </section>

      {isLoggedIn && mustChangePassword ? (
        <section className="py-16 md:py-24 bg-muted/30 flex-1">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-md mx-auto">
              <div className="bg-card border border-border p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary text-primary-foreground"><KeyRound size={20} /></div>
                  <div>
                    <h2 className="font-serif text-xl font-bold">Set Your Password</h2>
                    <p className="text-sm text-muted-foreground">Choose a new password to secure your account</p>
                  </div>
                </div>

                <div className="mb-6 mt-4 bg-amber-50 border border-amber-200 p-3 flex items-start gap-2.5 text-sm text-amber-800">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>You are using a temporary password issued by your adviser. Please set a personal password before continuing.</span>
                </div>

                <form onSubmit={handleChangePassword} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="new-pwd">New Password</Label>
                    <div className="relative">
                      <Input
                        id="new-pwd"
                        type={showNewPwd ? "text" : "password"}
                        placeholder="Minimum 8 characters"
                        value={newPwd}
                        onChange={e => setNewPwd(e.target.value)}
                        className="rounded-none border-border pr-10"
                        autoFocus
                      />
                      <button type="button" onClick={() => setShowNewPwd(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        {showNewPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="confirm-pwd">Confirm New Password</Label>
                    <Input
                      id="confirm-pwd"
                      type="password"
                      placeholder="Re-enter new password"
                      value={confirmPwd}
                      onChange={e => setConfirmPwd(e.target.value)}
                      className="rounded-none border-border"
                    />
                  </div>

                  {pwdError && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2">
                      <AlertCircle size={14} /> {pwdError}
                    </div>
                  )}

                  <Button type="submit" className="w-full rounded-none font-serif h-11 text-base gap-2" disabled={pwdLoading}>
                    <KeyRound size={15} /> {pwdLoading ? "Saving…" : "Set Password & Continue"}
                  </Button>
                </form>

                <div className="mt-5 pt-4 border-t border-border text-center">
                  <button onClick={signOut} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Sign out and return to login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : !isLoggedIn ? (
        <section className="py-16 md:py-24 bg-muted/30 flex-1">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-md mx-auto">
              <div className="bg-card border border-border p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary text-primary-foreground"><Key size={20} /></div>
                  <div>
                    <h2 className="font-serif text-xl font-bold">Portal Access</h2>
                    <p className="text-sm text-muted-foreground">Enter your credentials to continue</p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="ref">Client Reference Number</Label>
                    <Input
                      id="ref"
                      placeholder="e.g. BVI-2025-00001"
                      value={refNumber}
                      onChange={e => setRefNumber(e.target.value)}
                      className="rounded-none border-border"
                      autoCapitalize="characters"
                    />
                    <p className="text-xs text-muted-foreground">Found in your welcome email from Britannia Visas &amp; Immigration Consultancy</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="pass">Password</Label>
                    <div className="relative">
                      <Input
                        id="pass"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your portal password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="rounded-none border-border pr-10"
                      />
                      <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2">
                      <AlertCircle size={14} /> {loginError}
                    </div>
                  )}

                  <Button type="submit" className="w-full rounded-none font-serif h-11 text-base gap-2" disabled={loginLoading}>
                    <Lock size={15} /> {loginLoading ? "Signing in…" : "Access My Portal"}
                  </Button>
                </form>

                <div className="mt-6 pt-5 border-t border-border text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Don't have access? <Link href="/contact" className="text-primary hover:underline font-medium">Contact your adviser</Link>
                  </p>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 mx-auto">
                    <RefreshCw size={11} /> Forgot your password? Contact your adviser
                  </button>
                </div>
              </div>

              <div className="mt-6 bg-card border border-border p-5 space-y-3">
                <h3 className="font-semibold text-sm flex items-center gap-2"><Shield size={14} className="text-primary" /> Security Information</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {[
                    "256-bit TLS encryption for all data in transit",
                    "Documents stored in encrypted, UK-based secure servers",
                    "Files automatically purged 90 days after case closure",
                    "GDPR compliant — see our Privacy Policy for full details",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={11} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-10 md:py-16 bg-muted/30 flex-1">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-8">

            {/* Status bar */}
            <div className="bg-primary text-primary-foreground p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10"><User size={18} /></div>
                <div>
                  <p className="font-serif font-bold text-base">{client?.full_name}</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Ref: <span className="font-mono">{client?.client_ref}</span> · Status: <span className="text-secondary font-semibold">{client?.case_status}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-serif font-bold">{uploadedCount}</p>
                  <p className="text-primary-foreground/70 text-xs">Docs uploaded</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-serif font-bold">{requiredDone}/{requiredCount}</p>
                  <p className="text-primary-foreground/70 text-xs">Required done</p>
                </div>
                <button onClick={signOut} className="text-primary-foreground/60 hover:text-primary-foreground text-xs underline ml-4">
                  Sign out
                </button>
              </div>
            </div>

            {requiredDone < requiredCount && (
              <div className="bg-amber-50 border border-amber-200 p-4 flex items-start gap-3 text-sm text-amber-800">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{requiredCount - requiredDone} required document{requiredCount - requiredDone !== 1 ? "s" : ""} still outstanding. Your application cannot proceed until all required items are received.</span>
              </div>
            )}
            {requiredDone === requiredCount && requiredCount > 0 && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-sm text-emerald-800">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>All required documents received. Your adviser will be in touch shortly to confirm next steps.</span>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Documents */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="font-serif text-2xl font-bold">Document Checklist</h2>
                {docs.length === 0 ? (
                  <div className="bg-card border border-border p-8 text-center text-muted-foreground text-sm">No documents assigned yet. Contact your adviser.</div>
                ) : (
                  <div className="space-y-3">
                    {docs.map(doc => {
                      const cfg = STATUS_CONFIG[doc.status] ?? STATUS_CONFIG["Not uploaded"]!;
                      const Icon = cfg.icon;
                      return (
                        <div key={doc.id} className="bg-card border border-border p-4 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-sm">{doc.document_name}</span>
                                {doc.is_required && (
                                  <span className="text-[10px] bg-secondary/20 text-secondary-foreground font-medium px-1.5 py-0.5 uppercase tracking-wide">Required</span>
                                )}
                                <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 uppercase tracking-wide">{doc.category}</span>
                              </div>
                              {doc.description && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{doc.description}</p>}
                            </div>
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 border shrink-0 ${cfg.colour}`}>
                              <Icon size={11} /> {cfg.label}
                            </span>
                          </div>

                          {doc.rejection_reason && (
                            <div className="flex items-start gap-2 text-xs text-red-700 bg-red-50 border border-red-100 px-3 py-2">
                              <AlertCircle size={12} className="mt-0.5 shrink-0" />
                              <span><strong>Rejection reason:</strong> {doc.rejection_reason}. Please re-upload a corrected version.</span>
                            </div>
                          )}

                          {(doc.status === "Not uploaded" || doc.status === "Rejected") ? (
                            <label className="w-full border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-colors py-3 text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2 group cursor-pointer">
                              <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                className="hidden"
                                disabled={uploading === doc.id}
                                onChange={e => {
                                  const file = e.target.files?.[0];
                                  if (file) void handleUpload(doc.id, file);
                                }}
                              />
                              <Upload size={14} className="group-hover:text-primary transition-colors" />
                              {uploading === doc.id ? "Uploading…" : "Click to upload — PDF, JPG, PNG (max 20 MB)"}
                            </label>
                          ) : (
                            <div className="flex items-center justify-between bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-2"><Paperclip size={11} /> {doc.document_name}</span>
                              <div className="flex items-center gap-2">
                                {doc.file_url && (
                                  <button onClick={() => handleViewFile(doc.id)} className="text-primary hover:underline flex items-center gap-1">
                                    <ExternalLink size={11} /> View
                                  </button>
                                )}
                                {doc.status === "Uploaded" && (
                                  <button
                                    onClick={() => setDocs(prev => prev.map(d => d.id === doc.id ? { ...d, status: "Not uploaded", file_url: undefined } : d))}
                                    className="text-muted-foreground/60 hover:text-destructive transition-colors"
                                  >
                                    <X size={13} />
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Secure messaging */}
                <div className="bg-card border border-border flex flex-col" style={{ minHeight: "400px" }}>
                  <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                    <Shield size={14} className="text-primary" />
                    <span className="font-semibold text-sm">Secure Messages</span>
                  </div>
                  <div className="flex-1 p-4 space-y-3 overflow-y-auto" style={{ maxHeight: "300px" }}>
                    {messages.length === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-6">No messages yet. Your adviser will be in touch.</p>
                    )}
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${msg.sender === "adviser" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                          <p>{msg.message_text}</p>
                          <p className={`mt-1 text-[10px] ${msg.sender === "adviser" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                            {new Date(msg.sent_at).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={msgEndRef} />
                  </div>
                  <form onSubmit={handleSendMessage} className="p-3 border-t border-border flex gap-2">
                    <input
                      value={msgText}
                      onChange={e => setMsgText(e.target.value)}
                      placeholder="Type a message…"
                      className="flex-1 text-xs bg-muted border border-border px-3 py-2 outline-none focus:border-primary transition-colors rounded-none"
                    />
                    <button type="submit" disabled={sending || !msgText.trim()} className="bg-primary text-primary-foreground p-2 hover:bg-primary/90 transition-colors disabled:opacity-50">
                      <Send size={13} />
                    </button>
                  </form>
                </div>

                {/* Document guide */}
                <div className="bg-card border border-border p-4 space-y-3">
                  <h3 className="font-semibold text-sm">Accepted Formats</h3>
                  <div className="space-y-2">
                    {[
                      { icon: FileText, label: "Identity", items: "Passport, BRP, driving licence" },
                      { icon: CreditCard, label: "Financial", items: "Bank statements, payslips, tax returns" },
                      { icon: HeartPulse, label: "Medical", items: "TB certificate, IHS receipt, medical records" },
                    ].map(({ icon: Icon, label, items }) => (
                      <div key={label} className="flex items-start gap-2.5">
                        <div className="p-1.5 bg-primary/10 mt-0.5"><Icon size={12} className="text-primary" /></div>
                        <div>
                          <p className="text-xs font-semibold">{label}</p>
                          <p className="text-[11px] text-muted-foreground">{items}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed border-t border-border pt-3">
                    Files must be legible, colour scans or high-quality photos. Max 20 MB per file. PDF, JPEG, or PNG only.
                  </p>
                </div>

                {/* Need help */}
                <div className="bg-primary text-primary-foreground p-4 space-y-3">
                  <h3 className="font-serif font-bold text-base">Need Help?</h3>
                  <p className="text-primary-foreground/80 text-xs leading-relaxed">
                    {client?.adviser_name ? `Your adviser is ${client.adviser_name}.` : "Contact your assigned adviser directly"} if you have questions about which documents are required.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full rounded-none border-white/30 text-primary-foreground hover:bg-white/10 hover:border-white/50 text-xs gap-1.5 mt-1">
                      <ArrowRight size={12} /> Contact Your Adviser
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info strip */}
      <section className="py-10 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              { icon: Lock, title: "256-bit Encryption", desc: "All documents transmitted via TLS 1.3 and stored with AES-256 encryption." },
              { icon: Shield, title: "GDPR Compliant", desc: "Your data is processed lawfully under Article 6(1)(b) of UK GDPR." },
              { icon: RefreshCw, title: "Auto-purged", desc: "Files are securely deleted 90 days after your case is closed." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-2">
                <div className="p-3 bg-primary/10"><Icon size={20} className="text-primary" /></div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
