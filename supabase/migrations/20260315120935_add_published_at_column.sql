/*
  # Add published_at column to posts

  ## Summary
  Adds a proper date column `published_at` (date type) to enable reliable chronological
  sorting of posts. Currently the `date` column stores mixed formats (ISO and natural language
  Portuguese strings), making ORDER BY unreliable.

  ## Changes
  - `posts` table: Add `published_at` (date, nullable)
  - Populate `published_at` for all existing posts from their known dates
  - Escrita and Home pages will order by this column

  ## Notes
  - The original `date` column is preserved for display purposes
  - `published_at` is used only for ordering
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'posts' AND column_name = 'published_at'
  ) THEN
    ALTER TABLE posts ADD COLUMN published_at date;
  END IF;
END $$;

UPDATE posts SET published_at = '2023-02-04' WHERE slug = 'anotacoes-knock-at-the-cabin';
UPDATE posts SET published_at = '2023-03-15' WHERE slug = 'um-diva-em-nova-york';
UPDATE posts SET published_at = '2023-02-04' WHERE slug = 'mekas-brakhage';
UPDATE posts SET published_at = '2023-08-06' WHERE slug = 'festival-ecra-2023';
UPDATE posts SET published_at = '2023-08-09' WHERE slug = 'sobre-o-vazio-jeanne-dielman';
UPDATE posts SET published_at = '2023-08-13' WHERE slug = 'o-fim-e-o-principio';
UPDATE posts SET published_at = '2023-08-21' WHERE slug = 'dentro-da-noite-manny-farber';
UPDATE posts SET published_at = '2023-09-19' WHERE slug = 'entrevista-gregorio-gananian-filme-livre';
UPDATE posts SET published_at = '2023-09-21' WHERE slug = 'entrevista-bruno-joao-infinito-abaco';
UPDATE posts SET published_at = '2023-10-07' WHERE slug = 'entrevista-negro-leo-filme-livre';
UPDATE posts SET published_at = '2023-11-20' WHERE slug = 'entrevista-aguilar-mam';
UPDATE posts SET published_at = '2023-11-27' WHERE slug = 'aguilar-gananian';
UPDATE posts SET published_at = '2024-07-02' WHERE slug = 'ecra-2024-kurt-walker-english';
UPDATE posts SET published_at = '2024-07-02' WHERE slug = 'ecra-2024-marianna-milhorat-pt';
UPDATE posts SET published_at = '2024-07-02' WHERE slug = 'ecra-2024-marianna-milhorat-english';
UPDATE posts SET published_at = '2024-07-02' WHERE slug = 'entrevista-kurt-walker-ecra';
UPDATE posts SET published_at = '2024-07-06' WHERE slug = 'ecra-2024-salaman-extensor-english';
UPDATE posts SET published_at = '2024-07-06' WHERE slug = 'ecra-2024-salaman-extensor-pt';
UPDATE posts SET published_at = '2024-07-06' WHERE slug = 'entrevista-matilde-mellado-salaman-extensor';
UPDATE posts SET published_at = '2025-07-01' WHERE slug = 'inconsciente-maquinico';
UPDATE posts SET published_at = '2026-03-08' WHERE slug = 'uma-entrevista-em-pijamas';
