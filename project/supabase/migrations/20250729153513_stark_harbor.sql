/*
  # Create consultant_requests table

  1. New Tables
    - `consultant_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `company_name` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultant_requests` table
    - Add policy for public insert access (anyone can submit requests)
    - Add policy for authenticated users to read their own requests
*/

CREATE TABLE IF NOT EXISTS consultant_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE consultant_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert consultant requests (public access)
CREATE POLICY "Anyone can submit consultant requests"
  ON consultant_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy to allow users to read their own requests (if authenticated)
CREATE POLICY "Users can read their own requests"
  ON consultant_requests
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Create an index on email for better query performance
CREATE INDEX IF NOT EXISTS consultant_requests_email_idx ON consultant_requests(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS consultant_requests_created_at_idx ON consultant_requests(created_at DESC);