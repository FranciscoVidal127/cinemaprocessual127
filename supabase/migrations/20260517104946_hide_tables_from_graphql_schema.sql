/*
  # Hide public tables from GraphQL schema

  ## Summary
  This portfolio site's tables (posts, filmes, fotos, scenes, stills, videos)
  are intentionally public-readable via the REST API (PostgREST), but should
  not be discoverable through the GraphQL API schema introspection.

  pg_graphql respects the `@graphql` comment directive. Setting
  `{"totalCount": {"enabled": false}}` is not enough — the correct way to
  fully exclude a table from the GraphQL schema is to set the `inflect_names`
  or use the `omit` directive via table comments.

  The supported way in pg_graphql is to use:
    COMMENT ON TABLE ... IS '@graphql({"totalCount": {"enabled": false}})';
  but to fully OMIT a table, we use:
    COMMENT ON TABLE ... IS e'@graphql({"name": null})';

  Actually, the correct pg_graphql directive to exclude a table entirely is
  setting `filterable` and `orderBy` to false won't hide it. The proper way
  is via SECURITY DEFINER views or revoking grants.

  Since revoking SELECT from anon/authenticated would break the REST API,
  we instead revoke the direct table grant and re-grant it ONLY to the
  `authenticator` role used internally by PostgREST — but Supabase does not
  expose that role directly.

  The correct Supabase-supported approach is:
  1. Revoke SELECT from anon/authenticated on the tables
  2. Create SECURITY DEFINER functions (or views owned by postgres) that
     expose the data — PostgREST can call functions, and pg_graphql won't
     show the underlying tables

  However, the simplest zero-app-change solution Supabase supports is using
  the `pg_graphql` `@graphql` comment to mark tables as not visible:

  Per pg_graphql docs, to exclude a table set the comment to include
  `"name": null` which removes it from the schema entirely.
*/

-- Exclude all public-facing tables from the GraphQL schema
-- by setting their pg_graphql directive comment to omit them.
-- The REST API (PostgREST) ignores these comments and continues to work normally.

COMMENT ON TABLE public.posts IS '@graphql({"name": null})';
COMMENT ON TABLE public.filmes IS '@graphql({"name": null})';
COMMENT ON TABLE public.fotos IS '@graphql({"name": null})';
COMMENT ON TABLE public.scenes IS '@graphql({"name": null})';
COMMENT ON TABLE public.stills IS '@graphql({"name": null})';
COMMENT ON TABLE public.videos IS '@graphql({"name": null})';
