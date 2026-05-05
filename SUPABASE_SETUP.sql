-- ============================================================
-- Britannia Visas & Immigration Consultancy
-- Supabase Schema Setup — run this in the Supabase SQL Editor
-- ============================================================

-- 1. TABLES

CREATE TABLE IF NOT EXISTS admin_users (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email         text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at    timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS clients (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    timestamp DEFAULT now(),
  client_ref    text UNIQUE NOT NULL,
  full_name     text NOT NULL,
  email         text NOT NULL,
  phone         text,
  visa_type     text NOT NULL,
  case_status   text DEFAULT 'In Preparation',
  password_hash text NOT NULL,
  notes         text,
  adviser_name  text
);

CREATE TABLE IF NOT EXISTS documents (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id        uuid REFERENCES clients(id) ON DELETE CASCADE,
  document_name    text NOT NULL,
  description      text,
  category         text DEFAULT 'Other',
  is_required      boolean DEFAULT true,
  status           text DEFAULT 'Not uploaded',
  uploaded_at      timestamp,
  file_url         text,
  rejection_reason text
);

CREATE TABLE IF NOT EXISTS messages (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id    uuid REFERENCES clients(id) ON DELETE CASCADE,
  sender       text NOT NULL,
  message_text text NOT NULL,
  sent_at      timestamp DEFAULT now(),
  is_read      boolean DEFAULT false
);

-- 2. INDEXES
CREATE INDEX IF NOT EXISTS idx_documents_client_id ON documents(client_id);
CREATE INDEX IF NOT EXISTS idx_messages_client_id  ON messages(client_id);
CREATE INDEX IF NOT EXISTS idx_clients_ref         ON clients(client_ref);

-- 3. ROW LEVEL SECURITY
-- All tables: enable RLS. The API server uses the service role key
-- which bypasses RLS, so these policies protect against accidental
-- direct anon/authenticated access.

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients     ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents   ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages    ENABLE ROW LEVEL SECURITY;

-- Deny all direct anon access (API server uses service_role which bypasses RLS)
CREATE POLICY "deny_anon_admin_users" ON admin_users FOR ALL TO anon USING (false);
CREATE POLICY "deny_anon_clients"     ON clients     FOR ALL TO anon USING (false);
CREATE POLICY "deny_anon_documents"   ON documents   FOR ALL TO anon USING (false);
CREATE POLICY "deny_anon_messages"    ON messages    FOR ALL TO anon USING (false);

-- 4. STORAGE BUCKET
-- Create a PRIVATE bucket called 'client-documents'
INSERT INTO storage.buckets (id, name, public)
VALUES ('client-documents', 'client-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Deny all public access to the bucket
CREATE POLICY "deny_public_uploads"   ON storage.objects FOR INSERT TO anon USING (false);
CREATE POLICY "deny_public_downloads" ON storage.objects FOR SELECT TO anon USING (false);

-- 5. SEED FIRST ADMIN USER
-- Replace the email and password hash below.
-- To generate a bcrypt hash, run this in Node.js:
--   const bcrypt = require('bcryptjs');
--   console.log(await bcrypt.hash('YourPassword123', 12));
--
-- Default credentials (CHANGE IMMEDIATELY after first login):
--   Email:    admin@britannia-visas.co.uk
--   Password: Admin1234!
INSERT INTO admin_users (email, password_hash)
VALUES (
  'admin@britannia-visas.co.uk',
  '$2b$12$fT5z7pzhgdbBC/Rj7W.UieIsNco2fwYKG2aAgiUGRbHLvcylVyVcO'
)
ON CONFLICT (email) DO NOTHING;
