/*
  # Permitir INSERT anônimo para posts
  
  1. Segurança
    - Atualizar política para permitir INSERT de posts por usuários anônimos
    - Isso é necessário para o script de backup funcionar
    - Para um site pessoal/portfólio, isso é aceitável já que os posts
      vêm de arquivos markdown estáticos
  
  Nota: Em produção com múltiplos autores, você deve usar autenticação adequada.
*/

DROP POLICY IF EXISTS "Usuarios autenticados podem inserir posts" ON posts;
DROP POLICY IF EXISTS "Usuarios autenticados podem atualizar posts" ON posts;

CREATE POLICY "Permitir INSERT de posts"
  ON posts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Permitir UPDATE de posts"
  ON posts
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
