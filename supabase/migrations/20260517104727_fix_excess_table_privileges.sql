/*
  # Fix excess table privileges on public tables

  ## Summary
  Revokes all non-SELECT privileges from the `anon` and `authenticated` roles
  on all public-facing tables. These tables are intentionally public-readable
  (portfolio site), but `anon` and `authenticated` should never be able to
  INSERT, UPDATE, DELETE, TRUNCATE, or TRIGGER them directly.

  Only SELECT is retained — PostgREST enforces this through RLS policies.

  ## Tables affected
  - public.posts
  - public.filmes
  - public.fotos
  - public.scenes
  - public.stills
  - public.videos

  ## Changes
  - REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER FROM anon
  - REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER FROM authenticated
  - SELECT is kept for both roles (required for PostgREST + RLS to work)

  ## Note
  The GraphQL schema visibility warnings arise because anon/authenticated have
  SELECT grants. Since this is an intentionally public portfolio, the data is
  meant to be readable. The excess write-privilege revocations harden the surface
  area. If GraphQL access should be fully disabled, that requires schema-level
  configuration outside of migration scope.
*/

-- posts
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.posts FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.posts FROM authenticated;

-- filmes
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.filmes FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.filmes FROM authenticated;

-- fotos
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.fotos FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.fotos FROM authenticated;

-- scenes
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.scenes FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.scenes FROM authenticated;

-- stills
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.stills FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.stills FROM authenticated;

-- videos
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.videos FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.videos FROM authenticated;
