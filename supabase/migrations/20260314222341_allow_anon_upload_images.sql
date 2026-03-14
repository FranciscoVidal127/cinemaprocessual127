/*
  # Allow anon users to upload images to storage

  Adds a policy so unauthenticated (anon) users can upload to the images bucket.
  This is needed for the upload script which uses the anon key.
  This policy can be removed after images are migrated to Supabase Storage.
*/

CREATE POLICY "Anon can upload images"
  ON storage.objects FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'images');
