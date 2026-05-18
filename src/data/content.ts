type Still = {
  src: string;
  alt: string;
};

type Scene = {
  title: string;
  subtitle: string;
  youtubeUrl: string;
};

type CrewMember = {
  role: string;
  name: string;
};

type Filme = {
  id: number;
  slug: string;
  title: string;
  year: number;
  country: string;
  duration: string;
  role: string;
  director: string;
  type: string;
  genre?: string;
  status?: string;
  festivals: string;
  description: string;
  image: string;
  cast: string[];
  castPrincipal?: string[];
  castSecundario?: string[];
  producers?: string[];
  coproducers?: string[];
  supporters?: string[];
  productionCompanies?: string[];
  crew?: CrewMember[];
  stills: Still[];
  scenes: Scene[];
};

type Escrito = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  tags: string[];
  origem: string;
};

export const siteData = {
  hero: {
    name: "Francisco Vidal",
    title: "Ator · Cineasta · Assistente de Direção",
    bio: "Presença, escuta e corpo diante da câmera.",
    image: "/images/BLOCO 1-HERO.png/image.png"
  },

  reel: {
    videos: [
      "https://www.youtube.com/watch?v=Ify4U-E4aaE",
      "https://www.youtube.com/embed/UbjvM_b4o70",
      "https://www.youtube.com/embed/rzGUuYIckv4",
      "https://www.youtube.com/watch?v=L3EEwFrGslw"
    ],
    description: "Seleção de trabalhos recentes em cinema e televisão."
  },

  sobre: {
    text: [
      "Francisco Vidal é ator, cineasta e assistente de direção, com trajetória ligada ao cinema autoral brasileiro. Sua formação passa pela prática de set, pela assistência de direção, pela escrita sobre cinema e por processos recentes de pesquisa em atuação. Seu trabalho investiga a presença do corpo diante da câmera, a escuta do espaço e a colaboração com realizadores.",
      "A entrada no cinema não começou diante da câmera, mas por dentro da engrenagem: em 2023, trabalhando com tradução e pós-produção em Canto das Amapolas, dirigido por Paula Gaitán.",
      "Em 2024, estreou como ator em dois longas: O Inspetor Geral, dirigido por Gregório Gananian (Zaum), e O Mundo dos Mortos, dirigido por Pedro Tavares (7 a 1 Filmes e Cavideo), selecionado para a Mostra Olhos Livres do Festival de Tiradentes (2025). Acompanhou a pós-produção de O Inspetor Geral como assistente de direção. Em 2026, filmou Acronon, dirigido por Gananian ao lado de Clara Choveaux.",
      "Em 2025–2026, aprofunda sua pesquisa de atuação em oficinas, encontros e processos de preparação voltados à presença, escuta, corpo e criação de personagem."
    ],
    statement: "O cinema deixou de ser ideia e virou matéria: tempo, montagem, escuta, relação entre corpos no espaço.",
    image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/captura_de_tela_de_2026-02-06_18-14-50.png"
  },

  filmografia: [
    {
      id: 1,
      slug: "o-mundo-dos-mortos",
      title: "O Mundo dos Mortos",
      year: 2025,
      country: "Brasil",
      duration: "78min",
      role: "Fábio",
      director: "Pedro Tavares",
      type: "Cinema",
      genre: "Longa-metragem, Ficção",
      festivals: "28ª Mostra de Cinema de Tiradentes — Mostra Olhos Livres",
      description: "No segundo dia após a morte de Cristo, humanos, anjos e demônios questionam o futuro da existência enquanto vagam pela Terra agora abandonada.",
      image: "/images/mundo-mortos-poster.png",
      productionCompanies: ["7 a 1 Filmes", "Cavideo"],
      producers: ["Pedro Tavares"],
      coproducers: ["João Lanari", "Cavi Borges"],
      supporters: ["Daniel Diaz e Cara Feia Productions", "Damien Cattinari", "Dean Kavanagh", "Evan Snyder", "Joshua R. Troxler", "Steven Adam Renkovish"],
      cast: [],
      castPrincipal: [
        "Estêvão Nogueira",
        "Morgana Corrêa",
        "Raquel Monteiro",
        "Araci Breckenfeld",
        "Diana Deyse",
        "Francisco Vidal",
        "Renatto Venâncio",
        "Cecília Bittencourt"
      ],
      crew: [
        { role: "Roteiro", name: "Pedro Tavares" },
        { role: "Montagem", name: "Waleska Antunes" },
        { role: "Assistente de Direção", name: "Gabriel Papaléo" },
        { role: "Direção de Fotografia", name: "Vinicius Dratovsky" },
        { role: "Direção de Som", name: "Jotapê de Souza" },
        { role: "Mixagem de Som", name: "Guilherme Leite, Pedro Tavares e Waleska Antunes" },
        { role: "Produção Executiva", name: "Pedro Tavares e Gabriel Papaléo" },
        { role: "Assistentes de Produção", name: "Francisco Vidal e Leila Almeida" },
        { role: "Direção de Arte", name: "Leila Almeida" },
        { role: "Cabelo e Maquiagem", name: "Julio Napoli" },
        { role: "Figurino", name: "Neide Pereira" },
        { role: "Colorização", name: "Waleska Antunes" },
        { role: "Efeitos Especiais", name: "Daniel Diaz" },
        { role: "Trilha Original", name: "Guilherme Leite" },
        { role: "Making of", name: "Julio Napoli" }
      ],
      stills: [
        { src: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg", alt: "O Mundo dos Mortos - Still 1" },
        { src: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-2.jpg", alt: "O Mundo dos Mortos - Still 2" },
        { src: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-3.jpg", alt: "O Mundo dos Mortos - Still 3" }
      ],
      scenes: [
        { title: "Cena 01", subtitle: "O Mundo dos Mortos (2025) — Fábio", youtubeUrl: "https://www.youtube.com/watch?v=2x_u4B0Tj1w" },
        { title: "Cena 04", subtitle: "O Mundo dos Mortos (2025) — Fábio", youtubeUrl: "https://www.youtube.com/watch?v=9TLh-rUE2ZU" },
        { title: "Cena 05", subtitle: "O Mundo dos Mortos (2025) — Fábio", youtubeUrl: "https://www.youtube.com/watch?v=rzGUuYIckv4" }
      ]
    },
    {
      id: 2,
      slug: "inspetor-geral",
      title: "O Inspetor Geral",
      year: 2025,
      country: "Brasil",
      duration: "",
      role: "Espectro F.",
      director: "Gregório Gananian",
      type: "Cinema",
      genre: "Longa-metragem, Ficção",
      status: "Em pós-produção",
      festivals: "",
      description: "Adaptação cinematográfica da clássica peça de Nikolai Gogol sobre corrupção e engano na Rússia czarista.",
      image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/INSPETORIMAGEM.png",
      cast: [],
      castPrincipal: ["Clara Choveaux", "Ivon Patrocínio"],
      castSecundario: ["Cláudia Ohana", "Elder Gama (Catraca)", "Ewerton Belico", "Francisco Vidal", "José Roberto Aguilar", "Marcelo Ariel", "Negro Léo", "Paulo Jordão", "Renan Rovida", "Rosângela Baptista Ignacio", "Sérgio Villafranca", "Silvana Stein", "Thiago Matéria", "Toni Nogueira", "Viviane Ferreira", "Walter Figueiredo"],
      producers: ["Marisa Merlo", "Gregório Gananian", "Clara Choveaux"],
      productionCompanies: ["Anacoluto", "Zaum", "Satyros"],
      stills: [],
      scenes: []
    }
  ] as Filme[],

  fotos: [
    { id: 1, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-1.png", alt: "Francisco Vidal em retrato em preto e branco, meio-corpo, contra fundo escuro", category: "Rosto", slot: "rosto" },
    { id: 2, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-2.png", alt: "Francisco Vidal em pé, em ambiente externo, com postura integral visível", category: "Corpo", slot: "corpo" },
    { id: 3, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-3.png", alt: "Close de Francisco Vidal em luz âmbar desfocada, com expressão recolhida", category: "Gesto", slot: "gesto" },
    { id: 4, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg", alt: "Francisco Vidal em cena de O Mundo dos Mortos, em escuta diante da câmera", category: "Processo", slot: "processo" },
    { id: 5, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-2.jpg", alt: "Francisco Vidal em set, momento de preparação entre takes", category: "Processo", slot: "processo" },
    { id: 6, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-3.jpg", alt: "Francisco Vidal em cena, corpo inteiro com presença física definida", category: "Corpo", slot: "corpo" }
  ],

  escritos: [] as Escrito[],

  contato: {
    email: "franciscovidalcs@gmail.com",
    instagram: "https://www.instagram.com/franciscovidalcs/",
    instagramHandle: "@franciscovidalcs",
    location: "Rio de Janeiro / São Paulo",
    cta: "Para trabalhos como ator, assistência de direção, colaborações criativas e projetos audiovisuais."
  }
};

export type SiteData = typeof siteData;
