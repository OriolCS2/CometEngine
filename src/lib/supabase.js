import { createClient } from '@supabase/supabase-js';

// ============================================================================
// Supabase configuration.
// Until these are filled in, the marketplace runs in DEMO mode (sample data,
// no login). See MARKETPLACE_SETUP.md for the step-by-step setup guide.
// The URL and anon key are safe to ship in client code: all real protection
// comes from the Row Level Security policies in supabase/schema.sql.
// ============================================================================
export const SUPABASE_URL = 'https://wahwdszfywobmyyuyihu.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_ukJVlh6J3LcDiG5774YU7g_KGjiuB9P';

let client = null;

export function isConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

export function getClient() {
  if (!isConfigured()) return null;
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return client;
}
