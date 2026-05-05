const BASE = "/api";

function getToken(role: "admin" | "client"): string | null {
  return localStorage.getItem(role === "admin" ? "bvi_admin_token" : "bvi_client_token");
}

async function request<T>(
  path: string,
  options: RequestInit & { role?: "admin" | "client" } = {}
): Promise<T> {
  const { role, ...init } = options;
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
  };
  if (!(init.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  if (role) {
    const token = getToken(role);
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE}${path}`, { ...init, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error ?? "Request failed");
  }
  return res.json() as Promise<T>;
}

export const api = {
  // Auth
  adminLogin: (email: string, password: string) =>
    request<{ token: string; email: string }>("/auth/admin-login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  clientLogin: (refNumber: string, password: string) =>
    request<{ token: string; must_change_password: boolean; client: ClientRecord }>("/auth/client-login", {
      method: "POST",
      body: JSON.stringify({ refNumber, password }),
    }),

  // Admin — clients
  getClients: (params?: { status?: string; visa_type?: string; search?: string }) => {
    const qs = new URLSearchParams(
      Object.fromEntries(Object.entries(params ?? {}).filter(([, v]) => v))
    ).toString();
    return request<ClientRecord[]>(`/admin/clients${qs ? `?${qs}` : ""}`, { role: "admin" });
  },

  createClient: (data: CreateClientPayload) =>
    request<{ client: ClientRecord; plainPassword: string; client_ref: string }>(
      "/admin/clients",
      { method: "POST", body: JSON.stringify(data), role: "admin" }
    ),

  getClient: (id: string) =>
    request<ClientRecord & { documents: Document[]; messages: Message[] }>(
      `/admin/clients/${id}`,
      { role: "admin" }
    ),

  updateClient: (id: string, data: Partial<ClientRecord>) =>
    request<ClientRecord>(`/admin/clients/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      role: "admin",
    }),

  sendWelcomeEmail: (id: string, plainPassword: string) =>
    request<{ sent: boolean }>(`/admin/clients/${id}/send-welcome-email`, {
      method: "POST",
      body: JSON.stringify({ plain_password: plainPassword }),
      role: "admin",
    }),

  sendReminder: (id: string) =>
    request<{ sent: boolean; count: number }>(`/admin/clients/${id}/send-reminder`, {
      method: "POST",
      role: "admin",
    }),

  // Admin — documents
  getAdminDocuments: (clientId: string) =>
    request<Document[]>(`/admin/clients/${clientId}/documents`, { role: "admin" }),

  addDocument: (clientId: string, data: Partial<Document>) =>
    request<Document>(`/admin/clients/${clientId}/documents`, {
      method: "POST",
      body: JSON.stringify(data),
      role: "admin",
    }),

  updateDocument: (id: string, data: Partial<Document>) =>
    request<Document>(`/admin/documents/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      role: "admin",
    }),

  deleteDocument: (id: string) =>
    request<{ deleted: boolean }>(`/admin/documents/${id}`, { method: "DELETE", role: "admin" }),

  getSignedUrl: (id: string) =>
    request<{ url: string }>(`/admin/documents/${id}/signed-url`, { role: "admin" }),

  // Admin — messages
  getAdminMessages: (clientId: string) =>
    request<Message[]>(`/admin/clients/${clientId}/messages`, { role: "admin" }),

  sendAdminMessage: (clientId: string, message_text: string) =>
    request<Message>(`/admin/clients/${clientId}/messages`, {
      method: "POST",
      body: JSON.stringify({ message_text }),
      role: "admin",
    }),

  getUnreadCount: (clientId: string) =>
    request<{ count: number }>(`/admin/clients/${clientId}/unread-count`, { role: "admin" }),

  // Admin — settings
  getAdmins: () => request<AdminUser[]>("/admin/settings/admins", { role: "admin" }),
  addAdmin: (email: string, password: string) =>
    request<AdminUser>("/admin/settings/admins", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      role: "admin",
    }),
  deleteAdmin: (id: string) =>
    request<{ deleted: boolean }>(`/admin/settings/admins/${id}`, { method: "DELETE", role: "admin" }),
  changeAdminPassword: (current_password: string, new_password: string) =>
    request<{ updated: boolean }>("/admin/settings/change-password", {
      method: "POST",
      body: JSON.stringify({ current_password, new_password }),
      role: "admin",
    }),

  // Client portal
  getMe: () => request<ClientRecord>("/client/portal/me", { role: "client" }),
  getMyDocuments: () => request<Document[]>("/client/portal/documents", { role: "client" }),
  uploadDocument: (docId: string, file: File) => {
    const form = new FormData();
    form.append("file", file);
    return request<Document>(`/client/portal/documents/${docId}/upload`, {
      method: "POST",
      body: form,
      role: "client",
    });
  },
  getMySignedUrl: (docId: string) =>
    request<{ url: string }>(`/client/portal/documents/${docId}/signed-url`, { role: "client" }),
  getMyMessages: () => request<Message[]>("/client/portal/messages", { role: "client" }),
  sendClientMessage: (message_text: string) =>
    request<Message>("/client/portal/messages", {
      method: "POST",
      body: JSON.stringify({ message_text }),
      role: "client",
    }),
  changeClientPassword: (current_password: string, new_password: string) =>
    request<{ success: boolean }>("/client/portal/change-password", {
      method: "PATCH",
      body: JSON.stringify({ current_password, new_password }),
      role: "client",
    }),

  // Push notifications (admin)
  getVapidPublicKey: () =>
    request<{ publicKey: string }>("/push/vapid-public-key"),
  subscribePush: (subscription: PushSubscription) =>
    request<{ subscribed: boolean }>("/push/subscribe", {
      method: "POST",
      body: JSON.stringify({ subscription: subscription.toJSON() }),
      role: "admin",
    }),
  sendTestNotification: () =>
    request<{ sent: number; failures: number }>("/push/send", {
      method: "POST",
      body: JSON.stringify({
        title: "Britannia Visas — Test",
        body: "Push notifications are working correctly.",
        url: "/admin",
      }),
      role: "admin",
    }),
};

export interface ClientRecord {
  id: string;
  client_ref: string;
  full_name: string;
  email: string;
  phone?: string;
  visa_type: string;
  case_status: string;
  adviser_name?: string;
  notes?: string;
  created_at?: string;
  documents?: Document[];
}

export interface Document {
  id: string;
  client_id: string;
  document_name: string;
  description?: string;
  category: string;
  is_required: boolean;
  status: string;
  file_url?: string;
  uploaded_at?: string;
  rejection_reason?: string;
}

export interface Message {
  id: string;
  client_id: string;
  sender: "adviser" | "client";
  message_text: string;
  sent_at: string;
  is_read: boolean;
}

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export interface CreateClientPayload {
  full_name: string;
  email: string;
  phone?: string;
  visa_type: string;
  adviser_name?: string;
  notes?: string;
}
