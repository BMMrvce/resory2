-- Create enquiries table in Supabase
-- Go to: https://supabase.com/dashboard/project/qplmenbeujydxgakmzab
-- Navigate to: SQL Editor → New Query
-- Paste this SQL and run it

CREATE TABLE IF NOT EXISTS enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  room_type TEXT NOT NULL,
  check_in_date TEXT NOT NULL,
  check_out_date TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries (created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert for everyone (for form submissions)
CREATE POLICY "Enable insert for all users" ON enquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow read only for authenticated users (for admin access)
CREATE POLICY "Enable read for authenticated users only" ON enquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Optional: If you want to view enquiries in the dashboard, you can disable RLS temporarily
-- or create additional policies as needed
