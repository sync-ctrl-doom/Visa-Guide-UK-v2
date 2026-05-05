import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Plus, Trash2, Check, AlertCircle, Shield, Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, type AdminUser } from "@/lib/api";

export default function AdminSettings() {
  const [, setLocation] = useLocation();
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [addError, setAddError] = useState("");
  const [addSuccess, setAddSuccess] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdSuccess, setPwdSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Push notifications
  const [notifEnabled, setNotifEnabled] = useState(
    () => localStorage.getItem("bvi_push_enabled") === "true"
  );
  const [notifStatus, setNotifStatus] = useState("");
  const [notifLoading, setNotifLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("bvi_admin_token")) { setLocation("/admin/login"); return; }
    void api.getAdmins().then(setAdmins).catch(() => {});
  }, [setLocation]);

  async function addAdmin(e: React.FormEvent) {
    e.preventDefault();
    setAddError("");
    setAddSuccess(false);
    if (newPwd.length < 8) { setAddError("Password must be at least 8 characters"); return; }
    setLoading(true);
    try {
      const admin = await api.addAdmin(newEmail, newPwd);
      setAdmins(prev => [...prev, admin]);
      setNewEmail("");
      setNewPwd("");
      setAddSuccess(true);
      setTimeout(() => setAddSuccess(false), 3000);
    } catch (err) {
      setAddError(err instanceof Error ? err.message : "Failed to add admin");
    } finally {
      setLoading(false);
    }
  }

  async function removeAdmin(id: string) {
    if (!confirm("Remove this admin user?")) return;
    await api.deleteAdmin(id);
    setAdmins(prev => prev.filter(a => a.id !== id));
  }

  async function enableNotifications() {
    setNotifLoading(true);
    setNotifStatus("");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setNotifStatus("Permission denied. Please allow notifications in your browser settings.");
        setNotifLoading(false);
        return;
      }
      const { publicKey } = await api.getVapidPublicKey();
      if (!publicKey) throw new Error("Push notifications not configured on the server yet.");
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });
      await api.subscribePush(sub);
      localStorage.setItem("bvi_push_enabled", "true");
      setNotifEnabled(true);
      setNotifStatus("Notifications enabled — you'll be alerted before deadlines.");
    } catch (err) {
      setNotifStatus(err instanceof Error ? err.message : "Failed to enable notifications");
    } finally {
      setNotifLoading(false);
    }
  }

  async function sendTestNotification() {
    setNotifLoading(true);
    setNotifStatus("");
    try {
      const result = await api.sendTestNotification();
      setNotifStatus(`Test notification sent to ${result.sent} subscription(s).`);
    } catch (err) {
      setNotifStatus(err instanceof Error ? err.message : "Failed to send test");
    } finally {
      setNotifLoading(false);
    }
  }

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwdError("");
    setPwdSuccess(false);
    if (newPassword !== confirmPwd) { setPwdError("Passwords do not match"); return; }
    if (newPassword.length < 8) { setPwdError("New password must be at least 8 characters"); return; }
    setLoading(true);
    try {
      await api.changeAdminPassword(currentPwd, newPassword);
      setCurrentPwd("");
      setNewPassword("");
      setConfirmPwd("");
      setPwdSuccess(true);
      setTimeout(() => setPwdSuccess(false), 3000);
    } catch (err) {
      setPwdError(err instanceof Error ? err.message : "Failed to change password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
        <Link href="/admin">
          <button className="text-primary-foreground/70 hover:text-primary-foreground"><ArrowLeft size={18} /></button>
        </Link>
        <h1 className="font-serif font-bold text-lg">Settings</h1>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Change Password */}
        <div className="bg-card border border-border p-6 space-y-4">
          <h2 className="font-serif text-lg font-bold flex items-center gap-2"><Shield size={16} className="text-primary" /> Change Your Password</h2>
          <form onSubmit={changePassword} className="space-y-3">
            <div className="space-y-1.5">
              <Label>Current Password</Label>
              <Input type="password" value={currentPwd} onChange={e => setCurrentPwd(e.target.value)} className="rounded-none" required />
            </div>
            <div className="space-y-1.5">
              <Label>New Password</Label>
              <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="rounded-none" minLength={8} required />
            </div>
            <div className="space-y-1.5">
              <Label>Confirm New Password</Label>
              <Input type="password" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} className="rounded-none" required />
            </div>
            {pwdError && <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2"><AlertCircle size={14} /> {pwdError}</div>}
            {pwdSuccess && <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2"><Check size={14} /> Password updated successfully</div>}
            <Button type="submit" className="rounded-none" disabled={loading}>Update Password</Button>
          </form>
        </div>

        {/* Push Notifications */}
        <div className="bg-card border border-border p-6 space-y-4">
          <h2 className="font-serif text-lg font-bold flex items-center gap-2">
            <Bell size={16} className="text-primary" /> Deadline Notifications
          </h2>
          <p className="text-sm text-muted-foreground">
            Enable push notifications to receive alerts on this device when client application deadlines are approaching.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {notifEnabled ? (
              <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2">
                <Bell size={14} /> Notifications on ✓
              </div>
            ) : (
              <Button
                onClick={enableNotifications}
                disabled={notifLoading || !("Notification" in window) || !("serviceWorker" in navigator)}
                className="rounded-none gap-2"
              >
                <Bell size={14} />
                {notifLoading ? "Enabling…" : "Enable Deadline Notifications"}
              </Button>
            )}
            {notifEnabled && (
              <Button
                variant="outline"
                onClick={sendTestNotification}
                disabled={notifLoading}
                className="rounded-none gap-2 text-sm"
              >
                <BellOff size={13} />
                {notifLoading ? "Sending…" : "Send Test Notification"}
              </Button>
            )}
          </div>
          {notifStatus && (
            <div className={`flex items-center gap-2 text-sm px-3 py-2 border ${notifStatus.includes("enabled") || notifStatus.includes("sent") ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-destructive bg-destructive/10 border-destructive/20"}`}>
              {notifStatus.includes("enabled") || notifStatus.includes("sent") ? <Check size={14} /> : <AlertCircle size={14} />}
              {notifStatus}
            </div>
          )}
          {!("Notification" in window) && (
            <p className="text-xs text-muted-foreground">Push notifications are not supported in this browser.</p>
          )}
        </div>

        {/* Admin Users */}
        <div className="bg-card border border-border p-6 space-y-4">
          <h2 className="font-serif text-lg font-bold">Admin Users</h2>
          <div className="space-y-2">
            {admins.map(admin => (
              <div key={admin.id} className="flex items-center justify-between bg-muted px-4 py-2.5">
                <div>
                  <p className="text-sm font-medium">{admin.email}</p>
                  <p className="text-xs text-muted-foreground">Added {new Date(admin.created_at).toLocaleDateString("en-GB")}</p>
                </div>
                <button onClick={() => removeAdmin(admin.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 space-y-3">
            <h3 className="font-semibold text-sm">Add Admin User</h3>
            <form onSubmit={addAdmin} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Email</Label>
                  <Input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} className="rounded-none text-sm" required />
                </div>
                <div className="space-y-1.5">
                  <Label>Password</Label>
                  <Input type="password" value={newPwd} onChange={e => setNewPwd(e.target.value)} className="rounded-none text-sm" minLength={8} required />
                </div>
              </div>
              {addError && <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2"><AlertCircle size={14} /> {addError}</div>}
              {addSuccess && <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2"><Check size={14} /> Admin user added</div>}
              <Button type="submit" variant="outline" className="rounded-none gap-1.5" disabled={loading}>
                <Plus size={13} /> Add Admin
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
