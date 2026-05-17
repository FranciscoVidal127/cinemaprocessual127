/*
  # Switch RPC functions to SECURITY INVOKER and restore table SELECT grants

  ## Summary
  The SECURITY DEFINER functions created to hide tables from the GraphQL schema
  introduced a new class of warning: anon/authenticated can execute SECURITY DEFINER
  functions, which run as the postgres superuser. This is a higher-severity issue.

  The fix is to:
  1. Switch all functions to SECURITY INVOKER (they run as the calling role)
  2. Restore SELECT grants on the underlying tables so the functions can actually
     read data (SECURITY INVOKER functions need the caller to have table access)

  With SECURITY INVOKER, the functions are equivalent to direct table access
  through PostgREST — same as before, controlled by RLS policies.

  ## Changes
  - All 8 get_* functions switched from SECURITY DEFINER to SECURITY INVOKER
  - SELECT re-granted to anon and authenticated on all 6 tables
*/

-- Restore SELECT grants on all tables
GRANT SELECT ON public.posts TO anon, authenticated;
GRANT SELECT ON public.filmes TO anon, authenticated;
GRANT SELECT ON public.fotos TO anon, authenticated;
GRANT SELECT ON public.scenes TO anon, authenticated;
GRANT SELECT ON public.stills TO anon, authenticated;
GRANT SELECT ON public.videos TO anon, authenticated;

-- Switch all functions to SECURITY INVOKER
CREATE OR REPLACE FUNCTION public.get_posts()
RETURNS SETOF public.posts
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.posts ORDER BY date DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_post_by_slug(p_slug text)
RETURNS SETOF public.posts
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.posts WHERE slug = p_slug LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.get_filmes()
RETURNS SETOF public.filmes
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.filmes ORDER BY year DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_filme_by_slug(p_slug text)
RETURNS SETOF public.filmes
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.filmes WHERE slug = p_slug LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.get_fotos()
RETURNS SETOF public.fotos
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.fotos ORDER BY ordem ASC;
$$;

CREATE OR REPLACE FUNCTION public.get_videos()
RETURNS SETOF public.videos
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.videos ORDER BY order_index ASC;
$$;

CREATE OR REPLACE FUNCTION public.get_stills_by_filme(p_filme_id bigint)
RETURNS SETOF public.stills
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.stills WHERE filme_id = p_filme_id ORDER BY ordem ASC;
$$;

CREATE OR REPLACE FUNCTION public.get_scenes_by_filme(p_filme_id bigint)
RETURNS SETOF public.scenes
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.scenes WHERE filme_id = p_filme_id ORDER BY ordem ASC;
$$;
