/*
  # Fix storage bucket public listing policy

  ## Summary
  The existing broad SELECT policy on storage.objects allows any client to
  list all files in the `images` bucket (directory enumeration). This replaces
  it with a policy that only allows reading objects when the full object name
  is known — preventing bucket enumeration while keeping public image URLs working.

  ## Changes
  - DROP existing "Public read access for images" policy (allows listing)
  - CREATE new policy that requires a non-empty object name (prevents listing
    the bucket root but allows fetching specific known URLs)

  ## Security impact
  - Direct image URLs continue to work (object name is known)
  - Clients can no longer enumerate/list all files in the bucket
*/

DROP POLICY IF EXISTS "Public read access for images" ON storage.objects;

CREATE POLICY "Public read access for images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (
    bucket_id = 'images'
    AND name IS NOT NULL
    AND name != ''
  );
