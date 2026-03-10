# Francisco Vidal — Portfólio

Portfólio editorial minimalista de Francisco Vidal, ator e cineasta.

## Design System

### Cores
- **Background**: `#FAF8F5` (off-white quente)
- **Surface**: `#FFFFFF` (branco puro)
- **Text**: `#141414` (carvão)
- **Text Muted**: `#4A4A4A` (cinza quente)
- **Border**: `#E6E0D9` (cinza leve)
- **Link**: `#0B4AA2` (azul discreto)

### Tipografia
- **Títulos**: Serif stack (ui-serif, Georgia, Times New Roman)
- **Corpo**: Sans stack (ui-sans-serif, system-ui, -apple-system)
- **Line Height**: 1.7-1.85 para leitura confortável
- **Letter Spacing**: -0.02em em títulos

### Espaçamento
- Sistema de 8px base
- Container: 1120px
- Reading width: 70ch (para posts)

## Estrutura

```
src/
├── data/
│   └── content.ts          # Conteúdo do site
├── pages/
│   ├── Post.tsx            # Página individual de post
│   └── Post.css            # Estilos de post
├── App.tsx                 # Página principal (one-page)
├── App.css                 # Estilos principais
├── main.tsx                # Entry point + rotas
└── index.css               # Tokens CSS globais

public/
└── posts/
    └── *.md                # Posts em Markdown
```

## Seções

1. **Hero**: Apresentação com nome, título e bio
2. **Reel**: Vídeo embed
3. **Sobre**: Texto biográfico + foto
4. **Filmografia**: Cards de filmes com info detalhada
5. **Fotos**: Grid de imagens
6. **Escrita**: Lista de posts com busca e filtros
7. **Contato**: Links de contato

## Sistema de Posts

Posts são arquivos `.md` em `/public/posts/` com frontmatter:

```markdown
---
title: "Título do Post"
subtitle: "Linha fina"
date: "DD mmm AAAA"
category: "Categoria"
tags: ["Tag1", "Tag2"]
readTime: "X min"
origem: "Origem (opcional)"
---

Conteúdo em Markdown...
```

## Comandos

```bash
npm run dev      # Dev server
npm run build    # Build para produção
npm run preview  # Preview do build
```

## Filosofia de Design

- **Editorial First**: Prioriza legibilidade e hierarquia tipográfica
- **Minimalismo Sofisticado**: Elementos essenciais, muito respiro
- **Light Theme**: Fundo claro, texto escuro, bordas sutis
- **Responsivo**: Mobile-first com breakpoints em 980px e 640px
- **Performance**: Sem dependências pesadas, CSS otimizado

## Referências

Inspirado no estilo "Hercules": layout limpo, fundo claro, tipografia refinada, muito respiro, sem preto monocromático excessivo.
