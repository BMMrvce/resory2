import { createClient } from '@supabase/supabase-js';

// NOTE: In a real environment, use process.env.REACT_APP_SUPABASE_URL
// For this demo generation, we check if variables exist. 
// If not, we will handle it gracefully in the services.

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;