import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Users, Plus, Search, Filter, LogOut, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api, type ClientRecord, type Document } from "@/lib/api";

const STATUS_COLOURS: Record<string, string> = {
  "In Preparation": "bg-amber-100 text-amber-800 border-amber-200",
  "Active": "bg-blue-100 text-blue-800 border-blue-200",
  "Submitted": "bg-purple-100 text-purple-800 border-purple-200",
  "Complete": "bg-emerald-100 text-emerald-800 border-emerald-200",
};

function useAdminGuard() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("bvi_admin_token")) setLocation("/admin/login");
  }, [setLocation]);
}

interface ClientWithDocs extends ClientRecord {
  documents?: Document[];
}

export default function AdminDashboard() {
  useAdminGuard();
  const [, setLocation] = useLocation();
  const [clients, setClients] = useState<ClientWithDocs[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [visaFilter, setVisaFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await api.getClients({ status: statusFilter || undefined, visa_type: visaFilter || undefined, search: search || undefined });
      setClients(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load clients");
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, visaFilter]);

  useEffect(() => { void load(); }, [load]);

  function signOut() {
    localStorage.removeItem("bvi_admin_token");
    setLocation("/admin/login");
  }

  function docProgress(client: ClientWithDocs) {
    const docs = client.documents ?? [];
    const total = docs.length;
    const done = docs.filter(d => d.status !== "Not uploaded").length;
    return total > 0 ? `${done}/${total}` : "—";
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users size={20} />
          <div>
            <h1 className="font-serif font-bold text-lg leading-tight">Admin Dashboard</h1>
            <p className="text-primary-foreground/60 text-xs">Britannia Visas & Immigration</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin/settings">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10 gap-1.5">
              <Settings size={14} /> Settings
            </Button>
          </Link>
          <Button variant="ghost" size="sm" onClick={signOut} className="text-primary-foreground hover:bg-white/10 gap-1.5">
            <LogOut size={14} /> Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-6">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-2 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name or reference…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="rounded-none pl-9"
              />
            </div>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary min-w-[160px]"
            >
              <option value="">All Statuses</option>
              {["In Preparation", "Active", "Submitted", "Complete"].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={visaFilter}
              onChange={e => setVisaFilter(e.target.value)}
              className="border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary min-w-[160px]"
            >
              <option value="">All Visa Types</option>
              {["Skilled Worker", "Spouse / Family", "Student", "Tourist / Visitor", "ILR", "British Citizenship", "EEA Settled Status", "Right of Abode"].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <Link href="/admin/clients/new">
            <Button className="rounded-none gap-2 shrink-0">
              <Plus size={15} /> New Client
            </Button>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-card border border-border overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground text-sm">Loading clients…</div>
          ) : error ? (
            <div className="p-12 text-center text-destructive text-sm">{error}</div>
          ) : clients.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Users size={32} className="text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-sm">No clients found. <Link href="/admin/clients/new" className="text-primary underline">Create your first client</Link></p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Client</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Reference</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Visa Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Status</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Docs</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide text-muted-foreground">Created</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, i) => (
                    <tr
                      key={client.id}
                      className={`border-b border-border hover:bg-muted/30 cursor-pointer transition-colors ${i % 2 === 0 ? "" : "bg-muted/10"}`}
                      onClick={() => setLocation(`/admin/clients/${client.id}`)}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium">{client.full_name}</p>
                        <p className="text-xs text-muted-foreground">{client.email}</p>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{client.client_ref}</td>
                      <td className="px-4 py-3 text-xs">{client.visa_type}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium border ${STATUS_COLOURS[client.case_status] ?? "bg-muted text-muted-foreground"}`}>
                          {client.case_status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-medium">{docProgress(client)}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {client.created_at ? new Date(client.created_at).toLocaleDateString("en-GB") : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground"><ChevronRight size={14} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground">{clients.length} client{clients.length !== 1 ? "s" : ""} shown</p>
      </div>
    </div>
  );
}
