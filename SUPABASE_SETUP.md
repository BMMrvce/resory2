# Supabase Setup Guide

## Step 1: Create the Database Table

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/qplmenbeujydxgakmzab
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the SQL from `supabase-table.sql` and paste it into the query editor
5. Click "Run" to create the table

## Step 2: Get Your Supabase Credentials

1. In your Supabase Dashboard, go to "Settings" → "API"
2. Copy the following values:
   - **Project URL** (looks like: `https://qplmenbeujydxgakmzab.supabase.co`)
   - **anon public key** (a long JWT token)

## Step 3: Update Environment Variables

1. Open the `.env` file in the project root
2. Replace `your_anon_key_here` with your actual anon key:
   ```
   VITE_SUPABASE_URL=https://qplmenbeujydxgakmzab.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
   ```

## Step 4: Restart the Development Server

After updating the `.env` file, restart your dev server:

```bash
npm run dev
```

## Step 5: Test the Form

1. Go to the Contact section of your website
2. Fill out and submit the enquiry form
3. Check your Supabase Dashboard → Table Editor → enquiries to see the submitted data

## Security Notes

- The table has Row Level Security (RLS) enabled
- Anyone can INSERT (submit enquiries)
- Only authenticated users can SELECT (view enquiries)
- To view enquiries in the dashboard, you're authenticated automatically

## Viewing Enquiries

To view submitted enquiries:

1. Go to Supabase Dashboard → Table Editor
2. Select "enquiries" table
3. You'll see all submitted enquiry forms with timestamps
