import { createClient } from "@supabase/supabase-js";

// Vite uses import.meta.env for environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
