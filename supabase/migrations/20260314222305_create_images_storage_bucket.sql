/*
  # Create public images storage bucket

  Creates a public storage bucket for site images so they don't need to be
  bundled with the deployed project code.
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read access for images"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'images');

CREATE POLICY "Service role can upload images"
  ON storage.objects FOR INSERT
  TO service_role
  WITH CHECK (bucket_id = 'images');

CREATE POLICY "Service role can update images"
  ON storage.objects FOR UPDATE
  TO service_role
  USING (bucket_id = 'images');
