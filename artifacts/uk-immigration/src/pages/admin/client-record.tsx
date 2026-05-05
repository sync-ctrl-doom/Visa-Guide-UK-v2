import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft, FileText, MessageSquare, CheckCircle2, XCircle, Upload,
  Trash2, Plus, Send, Bell, AlertCircle, ExternalLink, Pencil, Save, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, type ClientRecord, type Document, type Message } from "@/lib/api";

const STATUS_COLOURS: Record<string, string> = {
  "Not uploaded": "text-muted-foreground bg-muted border-muted-foreground/20",
  "Uploaded": "text-amber-700 bg-amber-50 border-amber-200",
  "Approved": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Rejected": "text-red-700 bg-red-50 border-red-200",
};

const VISA_TYPES = ["Skilled Worker","Spouse / Family","Student","Tourist / Visitor","ILR","British Citizenship","EEA Settled Status","Right of Abode"];
const CASE_STATUSES = ["In Preparation","Active","Submitted","Complete"];
const CATEGORIES = ["Identity","Financial","Medical","Employment","Other"];

export default function ClientRecord({ id }: { id: string }) {
  const [, setLocation] = useLocation();
  const [client, setClient] = useState<ClientRecord | null>(null);
  const [docs, setDocs] = useState<Document[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"details" | "documents" | "messages">("documents");
  const [msgText, setMsgText] = useState("");
  const [sending, setSending] = useState(false);
  const [editingClient, setEditingClient] = useState(false);
  const [editForm, setEditForm] = useState<Partial<ClientRecord>>({});
  const [rejectingDoc, setRejectingDoc] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [addDocOpen, setAddDocOpen] = useState(false);
  const [newDoc, setNewDoc] = useState({ document_name: "", description: "", category: "Other", is_required: true });
  const [reminderSent, setReminderSent] = useState(false);
  const msgEndRef = useRef<HTMLDivElement>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getClient(id);
      setClient(data);
      setEditForm(data);
      setDocs(data.documents ?? []);
      setMessages(data.messages ?? []);
    } catch {
      setLocation("/admin");
    } finally {
      setLoading(false);
    }
  }, [id, setLocation]);

  useEffect(() => { void load(); }, [load]);
  useEffect(() => {
    if (!localStorage.getItem("bvi_admin_token")) setLocation("/admin/login");
  }, [setLocation]);
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function saveClientEdits() {
    if (!client) return;
    try {
      const updated = await api.updateClient(client.id, editForm);
      setClient(updated);
      setEditingClient(false);
    } catch { /* noop */ }
  }

  async function approveDoc(docId: string) {
    const updated = await api.updateDocument(docId, { status: "Approved" });
    setDocs(prev => prev.map(d => d.id === docId ? updated : d));
  }

  async function rejectDoc(docId: string) {
    if (!rejectReason.trim()) return;
    const updated = await api.updateDocument(docId, { status: "Rejected", rejection_reason: rejectReason });
    setDocs(prev => prev.map(d => d.id === docId ? updated : d));
    setRejectingDoc(null);
    setRejectReason("");
  }

  async function toggleRequired(doc: Document) {
    const updated = await api.updateDocument(doc.id, { is_required: !doc.is_required });
    setDocs(prev => prev.map(d => d.id === doc.id ? updated : d));
  }

  async function deleteDoc(docId: string) {
    if (!confirm("Remove this document from the checklist?")) return;
    await api.deleteDocument(docId);
    setDocs(prev => prev.filter(d => d.id !== docId));
  }

  async function viewDoc(docId: string) {
    const { url } = await api.getSignedUrl(docId);
    window.open(url, "_blank");
  }

  async function addDoc() {
    if (!client || !newDoc.document_name.trim()) return;
    const doc = await api.addDocument(client.id, newDoc);
    setDocs(prev => [...prev, doc]);
    setAddDocOpen(false);
    setNewDoc({ document_name: "", description: "", category: "Other", is_required: true });
  }

  async function sendMessage() {
    if (!client || !msgText.trim()) return;
    setSending(true);
    try {
      const msg = await api.sendAdminMessage(client.id, msgText);
      setMessages(prev => [...prev, msg]);
      setMsgText("");
    } finally {
      setSending(false);
    }
  }

  async function sendReminder() {
    if (!client) return;
    await api.sendReminder(client.id);
    setReminderSent(true);
    setTimeout(() => setReminderSent(false), 3000);
  }

  if (loading) return <div className="min-h-screen bg-muted/30 flex items-center justify-center text-muted-foreground text-sm">Loading…</div>;
  if (!client) return null;

  const uploadedDocs = docs.filter(d => d.status !== "Not uploaded").length;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
        <Link href="/admin">
          <button className="text-primary-foreground/70 hover:text-primary-foreground"><ArrowLeft size={18} /></button>
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="font-serif font-bold text-lg leading-tight truncate">{client.full_name}</h1>
          <p className="text-primary-foreground/60 text-xs font-mono">{client.client_ref} · {client.visa_type}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={sendReminder}
          className="text-primary-foreground hover:bg-white/10 gap-1.5 shrink-0"
        >
          <Bell size={14} /> {reminderSent ? "Sent!" : "Send Reminder"}
        </Button>
      </header>

      {/* Status bar */}
      <div className="bg-card border-b border-border px-6 py-3 flex flex-wrap items-center gap-4 text-sm">
        <span className={`inline-flex px-2 py-0.5 text-xs font-medium border ${
          { "In Preparation": "bg-amber-100 text-amber-800 border-amber-200", "Active": "bg-blue-100 text-blue-800 border-blue-200", "Submitted": "bg-purple-100 text-purple-800 border-purple-200", "Complete": "bg-emerald-100 text-emerald-800 border-emerald-200" }[client.case_status] ?? "bg-muted text-muted-foreground"
        }`}>{client.case_status}</span>
        <span className="text-muted-foreground text-xs">{uploadedDocs}/{docs.length} documents uploaded</span>
        {client.adviser_name && <span className="text-muted-foreground text-xs">Adviser: {client.adviser_name}</span>}
      </div>

      {/* Tabs */}
      <div className="bg-card border-b border-border px-6 flex gap-0">
        {(["documents", "details", "messages"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            {tab === "documents" ? <span className="flex items-center gap-1.5"><FileText size={13} /> Documents</span>
            : tab === "messages" ? <span className="flex items-center gap-1.5"><MessageSquare size={13} /> Messages</span>
            : "Details"}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6">

        {/* DOCUMENTS TAB */}
        {activeTab === "documents" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold">Document Checklist</h2>
              <Button size="sm" variant="outline" className="rounded-none gap-1.5" onClick={() => setAddDocOpen(true)}>
                <Plus size={13} /> Add Document
              </Button>
            </div>

            {addDocOpen && (
              <div className="bg-card border border-primary/30 p-4 space-y-3">
                <h3 className="font-semibold text-sm">Add Custom Document</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Document Name</Label>
                    <Input value={newDoc.document_name} onChange={e => setNewDoc(p => ({...p, document_name: e.target.value}))} className="rounded-none text-sm" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Category</Label>
                    <select value={newDoc.category} onChange={e => setNewDoc(p => ({...p, category: e.target.value}))} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none">
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <Label className="text-xs">Description (optional)</Label>
                    <Input value={newDoc.description} onChange={e => setNewDoc(p => ({...p, description: e.target.value}))} className="rounded-none text-sm" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="req" checked={newDoc.is_required} onChange={e => setNewDoc(p => ({...p, is_required: e.target.checked}))} />
                    <label htmlFor="req" className="text-sm">Required</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="rounded-none" onClick={addDoc}>Add</Button>
                  <Button size="sm" variant="outline" className="rounded-none" onClick={() => setAddDocOpen(false)}>Cancel</Button>
                </div>
              </div>
            )}

            {docs.length === 0 ? (
              <div className="bg-card border border-border p-8 text-center text-muted-foreground text-sm">No documents assigned yet.</div>
            ) : (
              <div className="space-y-2">
                {docs.map(doc => (
                  <div key={doc.id} className="bg-card border border-border p-4 space-y-3">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-sm">{doc.document_name}</span>
                          <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 uppercase tracking-wide">{doc.category}</span>
                          <button
                            onClick={() => toggleRequired(doc)}
                            className={`text-[10px] px-1.5 py-0.5 border uppercase tracking-wide transition-colors ${doc.is_required ? "bg-primary/10 text-primary border-primary/20 hover:bg-muted" : "bg-muted text-muted-foreground border-border hover:bg-primary/10 hover:text-primary"}`}
                          >
                            {doc.is_required ? "Required" : "Optional"}
                          </button>
                        </div>
                        {doc.description && <p className="text-xs text-muted-foreground mt-1">{doc.description}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 border ${STATUS_COLOURS[doc.status] ?? ""}`}>
                          {doc.status}
                        </span>
                        {doc.status === "Not uploaded" && (
                          <button onClick={() => deleteDoc(doc.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1">
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>

                    {doc.rejection_reason && (
                      <div className="text-xs text-red-700 bg-red-50 border border-red-100 px-3 py-2 flex items-start gap-2">
                        <AlertCircle size={12} className="mt-0.5 shrink-0" /> {doc.rejection_reason}
                      </div>
                    )}

                    {doc.status === "Uploaded" && (
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" className="rounded-none gap-1.5 text-xs h-7" onClick={() => viewDoc(doc.id)}>
                          <ExternalLink size={11} /> View File
                        </Button>
                        <Button size="sm" className="rounded-none gap-1.5 text-xs h-7 bg-emerald-600 hover:bg-emerald-700" onClick={() => approveDoc(doc.id)}>
                          <CheckCircle2 size={11} /> Approve
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-none gap-1.5 text-xs h-7 border-red-200 text-red-700 hover:bg-red-50" onClick={() => setRejectingDoc(doc.id)}>
                          <XCircle size={11} /> Reject
                        </Button>
                      </div>
                    )}

                    {doc.status === "Approved" && doc.file_url && (
                      <Button size="sm" variant="outline" className="rounded-none gap-1.5 text-xs h-7" onClick={() => viewDoc(doc.id)}>
                        <ExternalLink size={11} /> View File
                      </Button>
                    )}

                    {rejectingDoc === doc.id && (
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={rejectReason}
                          onChange={e => setRejectReason(e.target.value)}
                          placeholder="Reason for rejection…"
                          className="rounded-none text-sm h-8 flex-1"
                        />
                        <Button size="sm" className="rounded-none h-8 bg-red-600 hover:bg-red-700 gap-1" onClick={() => rejectDoc(doc.id)}>
                          <XCircle size={12} /> Reject
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-none h-8" onClick={() => setRejectingDoc(null)}>
                          Cancel
                        </Button>
                      </div>
                    )}

                    {doc.uploaded_at && (
                      <p className="text-[10px] text-muted-foreground">
                        Uploaded {new Date(doc.uploaded_at).toLocaleString("en-GB")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="bg-card border border-border p-6 space-y-5 max-w-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold">Client Details</h2>
              {editingClient ? (
                <div className="flex gap-2">
                  <Button size="sm" className="rounded-none gap-1.5" onClick={saveClientEdits}><Save size={13} /> Save</Button>
                  <Button size="sm" variant="outline" className="rounded-none" onClick={() => { setEditingClient(false); setEditForm(client); }}><X size={13} /></Button>
                </div>
              ) : (
                <Button size="sm" variant="outline" className="rounded-none gap-1.5" onClick={() => setEditingClient(true)}><Pencil size={13} /> Edit</Button>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {([
                { key: "full_name", label: "Full Name" },
                { key: "email", label: "Email" },
                { key: "phone", label: "Phone" },
                { key: "adviser_name", label: "Adviser" },
              ] as { key: keyof ClientRecord; label: string }[]).map(({ key, label }) => (
                <div key={key} className="space-y-1">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">{label}</Label>
                  {editingClient ? (
                    <Input
                      value={(editForm[key] as string) ?? ""}
                      onChange={e => setEditForm(p => ({ ...p, [key]: e.target.value }))}
                      className="rounded-none text-sm"
                    />
                  ) : (
                    <p className="text-sm">{(client[key] as string) || "—"}</p>
                  )}
                </div>
              ))}

              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">Visa Type</Label>
                {editingClient ? (
                  <select value={editForm.visa_type ?? ""} onChange={e => setEditForm(p => ({ ...p, visa_type: e.target.value }))} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none">
                    {VISA_TYPES.map(v => <option key={v}>{v}</option>)}
                  </select>
                ) : <p className="text-sm">{client.visa_type}</p>}
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">Case Status</Label>
                {editingClient ? (
                  <select value={editForm.case_status ?? ""} onChange={e => setEditForm(p => ({ ...p, case_status: e.target.value }))} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none">
                    {CASE_STATUSES.map(s => <option key={s}>{s}</option>)}
                  </select>
                ) : <p className="text-sm">{client.case_status}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide">Notes</Label>
              {editingClient ? (
                <textarea
                  value={editForm.notes ?? ""}
                  onChange={e => setEditForm(p => ({ ...p, notes: e.target.value }))}
                  rows={4}
                  className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              ) : <p className="text-sm text-muted-foreground">{client.notes || "No notes"}</p>}
            </div>
          </div>
        )}

        {/* MESSAGES TAB */}
        {activeTab === "messages" && (
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-xl font-bold">Secure Messages</h2>
            <div className="bg-card border border-border flex flex-col" style={{ minHeight: "440px" }}>
              <div className="flex-1 p-4 space-y-3 overflow-y-auto" style={{ maxHeight: "400px" }}>
                {messages.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">No messages yet.</p>
                )}
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === "adviser" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed ${msg.sender === "adviser" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                      <p>{msg.message_text}</p>
                      <p className={`mt-1 text-[10px] ${msg.sender === "adviser" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        {msg.sender === "adviser" ? "You" : "Client"} · {new Date(msg.sent_at).toLocaleString("en-GB")}
                        {!msg.is_read && msg.sender === "client" && <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-blue-500 align-middle" />}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={msgEndRef} />
              </div>
              <form
                onSubmit={e => { e.preventDefault(); void sendMessage(); }}
                className="p-3 border-t border-border flex gap-2"
              >
                <input
                  value={msgText}
                  onChange={e => setMsgText(e.target.value)}
                  placeholder="Type a message to the client…"
                  className="flex-1 text-sm bg-muted border border-border px-3 py-2 outline-none focus:border-primary transition-colors rounded-none"
                />
                <button
                  type="submit"
                  disabled={sending || !msgText.trim()}
                  className="bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
