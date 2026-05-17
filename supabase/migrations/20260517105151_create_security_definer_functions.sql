/*
  # Create SECURITY DEFINER functions for public data access

  ## Summary
  The app's tables are publicly readable but should not be visible in the
  GraphQL schema. The solution is to:
  1. Expose data through SECURITY DEFINER functions owned by postgres
  2. Grant EXECUTE on those functions to anon/authenticated
  3. Revoke direct SELECT on the tables from anon/authenticated

  SECURITY DEFINER functions run as the function owner (postgres), so they
  bypass RLS and can read the tables regardless of the caller's role.
  pg_graphql does not expose these tables in the schema because anon/authenticated
  no longer have SELECT grants on them.

  ## New Functions
  - get_posts() — returns all posts ordered by date desc
  - get_post_by_slug(slug text) — returns a single post by slug
  - get_filmes() — returns all filmes ordered by year desc
  - get_filme_by_slug(slug text) — returns a single filme with stills and scenes
  - get_fotos() — returns all fotos ordered by ordem asc
  - get_videos() — returns all videos ordered by order_index asc
  - get_stills_by_filme(filme_id bigint) — returns stills for a filme
  - get_scenes_by_filme(filme_id bigint) — returns scenes for a filme
*/

-- posts
CREATE OR REPLACE FUNCTION public.get_posts()
RETURNS SETOF public.posts
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.posts ORDER BY date DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_post_by_slug(p_slug text)
RETURNS SETOF public.posts
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.posts WHERE slug = p_slug LIMIT 1;
$$;

-- filmes
CREATE OR REPLACE FUNCTION public.get_filmes()
RETURNS SETOF public.filmes
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.filmes ORDER BY year DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_filme_by_slug(p_slug text)
RETURNS SETOF public.filmes
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.filmes WHERE slug = p_slug LIMIT 1;
$$;

-- fotos
CREATE OR REPLACE FUNCTION public.get_fotos()
RETURNS SETOF public.fotos
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.fotos ORDER BY ordem ASC;
$$;

-- videos
CREATE OR REPLACE FUNCTION public.get_videos()
RETURNS SETOF public.videos
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.videos ORDER BY order_index ASC;
$$;

-- stills
CREATE OR REPLACE FUNCTION public.get_stills_by_filme(p_filme_id bigint)
RETURNS SETOF public.stills
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.stills WHERE filme_id = p_filme_id ORDER BY ordem ASC;
$$;

-- scenes
CREATE OR REPLACE FUNCTION public.get_scenes_by_filme(p_filme_id bigint)
RETURNS SETOF public.scenes
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.scenes WHERE filme_id = p_filme_id ORDER BY ordem ASC;
$$;

-- Grant execute to anon and authenticated
GRANT EXECUTE ON FUNCTION public.get_posts() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_post_by_slug(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_filmes() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_filme_by_slug(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_fotos() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_videos() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_stills_by_filme(bigint) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_scenes_by_filme(bigint) TO anon, authenticated;

-- Revoke direct SELECT from anon and authenticated on all tables
REVOKE SELECT ON public.posts FROM anon, authenticated;
REVOKE SELECT ON public.filmes FROM anon, authenticated;
REVOKE SELECT ON public.fotos FROM anon, authenticated;
REVOKE SELECT ON public.scenes FROM anon, authenticated;
REVOKE SELECT ON public.stills FROM anon, authenticated;
REVOKE SELECT ON public.videos FROM anon, authenticated;
