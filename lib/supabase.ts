import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
// Prefer the service role key in server contexts so RLS doesn't block writes.
// Fall back to the anon key if no service key is configured.
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY)!;

export const supabase = createClient(supabaseUrl, supabaseKey);
