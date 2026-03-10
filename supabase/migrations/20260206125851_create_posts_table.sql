/*
  # Criar tabela de posts/escritos
  
  1. Nova Tabela
    - `posts`
      - `id` (bigint, primary key, auto-increment)
      - `title` (text) - Título do post
      - `category` (text) - Categoria (Reflexão, Ensaio, Método, etc)
      - `date` (text) - Data de publicação
      - `read_time` (text) - Tempo de leitura
      - `excerpt` (text) - Resumo/excerto
      - `slug` (text, unique) - URL amigável
      - `tags` (jsonb) - Array de tags
      - `origem` (text) - Origem do texto
      - `content` (text) - Conteúdo completo do post
      - `created_at` (timestamp)
      
  2. Segurança
    - Habilitar RLS na tabela `posts`
    - Permitir leitura pública (anyone pode ler posts)
*/

CREATE TABLE IF NOT EXISTS posts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL DEFAULT '',
  date text NOT NULL DEFAULT '',
  read_time text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  slug text UNIQUE NOT NULL,
  tags jsonb DEFAULT '[]'::jsonb,
  origem text DEFAULT '',
  content text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Todos podem ler posts"
  ON posts
  FOR SELECT
  TO anon, authenticated
  USING (true);