/*
  # Adicionar política de INSERT para posts
  
  1. Segurança
    - Adicionar política para permitir INSERT de posts por usuários autenticados
    - Adicionar política para permitir UPDATE de posts por usuários autenticados
    - Isso é necessário para o script de backup funcionar corretamente
  
  Nota: Para uso em produção, você pode querer restringir isso ainda mais,
  permitindo apenas usuários com uma role específica de admin.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'posts' 
    AND policyname = 'Usuarios autenticados podem inserir posts'
  ) THEN
    CREATE POLICY "Usuarios autenticados podem inserir posts"
      ON posts
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'posts' 
    AND policyname = 'Usuarios autenticados podem atualizar posts'
  ) THEN
    CREATE POLICY "Usuarios autenticados podem atualizar posts"
      ON posts
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
