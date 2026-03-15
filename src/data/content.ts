type Still = {
  src: string;
  alt: string;
};

type Scene = {
  title: string;
  subtitle: string;
  youtubeUrl: string;
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
    title: "Ator · Cineasta · Tradutor · Escritor de Cinema",
    bio: "Cinema, atuação e pensamento como prática contínua. Entre a presença diante da câmera, o processo de realização e a escrita crítica.",
    image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/image-copy-2.png"
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
      "Francisco Vidal é ator e cineasta baseado no Rio de Janeiro. A entrada no cinema não começou diante da câmera, mas por dentro da engrenagem: em 2023, trabalhando com tradução e pós-produção em Canto das Amapolas, dirigido por Paula Gaitán, algo se abriu — não apenas para um filme, mas para um modo de ver. Ali o cinema deixou de ser ideia e virou matéria: tempo, montagem, escuta, relação entre corpos no espaço.",
      "Em 2024, essa passagem se tornou presença. Francisco estreou como ator em dois longas: O Inspetor Geral, dirigido por Gregório Gananian (Zaum), e O Mundo dos Mortos, dirigido por Pedro Tavares (7 a 1 Filmes e Cavideo), selecionado para a Mostra Olhos Livres do Festival de Tiradentes (2025). Acompanhou a pós-produção de O Inspetor Geral como assistente de direção. Em 2026, filmou Acronon, dirigido por Gananian ao lado de Clara Choveaux.",
      "O que busca na atuação não é a construção de personagens mas a disponibilidade radical ao encontro: o corpo como membrana sensível ao outro, ao espaço, ao ritmo singular de cada realizador. Não uma identidade fixa — um ator em processo contínuo, que entende o set como lugar de escuta antes de tudo.",
      "A escrita e a tradução não são atividades paralelas: são o mesmo olhar em outros meios. Escrever sobre cinema é uma forma de continuar a ver. Traduzir é uma forma de habitar outra linguagem. As três práticas — atuação, realização, escrita — formam um único projeto de atenção."
    ],
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
      festivals: "28ª Mostra de Cinema de Tiradentes — Mostra Olhos Livres",
      description: "No segundo dia após a morte de Cristo, humanos, anjos e demônios questionam o futuro da existência enquanto vagam pela Terra agora abandonada.",
      image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/mundo-mortos.jpg",
      cast: [
        "Estêvão Nogueira",
        "Morgana Corrêa",
        "Raquel Monteiro",
        "Francisco Vidal"
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
      image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/Captura_de_tela_de_2026-02-10_07-41-26.png",
      cast: ["Clara Choveaux", "Ivon Patrócínio", "Cláudia Ohana", "Francisco Vidal"],
      stills: [],
      scenes: []
    }
  ] as Filme[],

  fotos: [
    { id: 1, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-1.jpg", alt: "Francisco Vidal - Photoshoot" },
    { id: 2, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-2.jpg", alt: "Francisco Vidal - Photoshoot" },
    { id: 3, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-3.jpg", alt: "Francisco Vidal - Photoshoot" },
    { id: 4, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-4.jpg", alt: "Francisco Vidal - Photoshoot" },
    { id: 5, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-5.jpg", alt: "Francisco Vidal - Photoshoot" },
    { id: 6, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/image copy copy.png", alt: "Francisco Vidal" }
  ],

  escritos: [] as Escrito[],

  contato: {
    email: "franciscovidalcs@gmail.com",
    instagram: "https://www.instagram.com/franciscovidalcs/"
  }
};

export type SiteData = typeof siteData;
