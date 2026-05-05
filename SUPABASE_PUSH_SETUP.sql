-- Push notification subscriptions table
-- Run this in Supabase SQL Editor (after SUPABASE_SETUP.sql)

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
  subscription jsonb NOT NULL,
  created_at  timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
-- Service role has full access; no client-facing RLS needed (admin only)
