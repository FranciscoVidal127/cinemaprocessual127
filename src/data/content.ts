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
      "https://www.youtube.com/watch?v=qRzh9oAaoWk",
      "https://www.youtube.com/watch?v=gKwFF0I_xW4",
      "https://www.youtube.com/watch?v=EBk0wJLshWo"
    ],
    description: "Seleção de trabalhos recentes em cinema e televisão."
  },

  sobre: {
    text: [
      "Francisco Vidal é ator e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua entrada no audiovisual não aconteceu primeiro diante da câmera, mas por dentro da matéria do filme: pela tradução, pela pós-produção, pela montagem e pela escuta do processo.",
      "Em 2023, trabalhou com Paula Gaitán na pós-produção de O Canto das Amapolas, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes. A experiência abriu uma passagem decisiva em sua trajetória: além de aproximá-lo da fabricação concreta de um filme, colocou Francisco em contato com uma constelação de artistas que passaria a marcar seu caminho, como Clara Choveaux, Negro Leo e Gregório Gananian.",
      "A partir desse encontro, Francisco passou a trabalhar também na pós-produção de Aquele que Viu o Abismo, dirigido por Gregório Gananian e Negro Leo, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes em 2024. O convívio com esse processo aprofundou sua relação com o cinema como construção coletiva — uma arte feita de tempo, pensamento, montagem, presença, escuta e confiança.",
      "No início de 2024, essa aproximação se desdobrou em uma nova etapa. Francisco foi convidado por Gregório Gananian a participar de O Inspetor Geral em duas frentes simultâneas: como assistente na pré-produção e como ator no elenco do longa. Antes de chegar ao set, acompanhou por dentro a preparação do filme, sua lógica de criação, sua construção de mundo e o ritmo de trabalho de seu realizador. Filmado no primeiro semestre de 2024, no estado de São Paulo, O Inspetor Geral é uma adaptação livre da peça de Nikolai Gogol, transposta para o Brasil contemporâneo.",
      "No segundo semestre de 2024, Francisco filmou no Rio de Janeiro O Mundo dos Mortos, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo. Criador do ECRÃ, festival dedicado ao cinema e à arte experimental, Pedro Tavares desenvolve uma pesquisa ligada à imagem expandida, às formas menos convencionais de narrativa e aos territórios de invenção do audiovisual. Em O Mundo dos Mortos, humanos, anjos e demônios atravessam uma Terra abandonada no segundo dia após a morte de Cristo, enquanto a espera pelo retorno do Messias transforma a existência em um campo de assombro, suspensão e exorcismo. O longa foi exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes em 2025.",
      "A partir de 2025, Francisco intensificou sua formação como ator. Entre março e dezembro de 2025, manteve um percurso contínuo de estudo na CAL — Casa das Artes de Laranjeiras, atravessando cursos, laboratórios e módulos voltados à atuação para câmera, repertório, presença cênica, escuta e construção de personagem. Esse percurso teve como eixo os dois módulos de O Teatro do Não Eu, com Rafael Infante, processo que se estendeu até dezembro e aprofundou sua pesquisa sobre presença, alteridade, deslocamento de si e disponibilidade para aquilo que a cena exige. Paralelamente, ampliou sua formação em atuação para câmera e relação com o set em cursos com Ricardo Cônti, Heitor Martinez, Gustavo Pace e Andrea Avancini.",
      "No segundo semestre de 2025, deu continuidade à colaboração com Gregório Gananian em Música de Invenção, longa-metragem de ficção dirigido por Gregório, produzido pela Zaum e pela Anacoluto, com produção de Marisa Merlo, Gregório Gananian e Clara Choveaux. Coestrelado por Francisco Vidal e Clara Choveaux, o filme reafirma uma trajetória construída na proximidade entre criação, confiança artística e presença em cena.",
      "Atualmente, Francisco segue colaborando com Gregório Gananian como assistente de direção, dando continuidade a uma parceria que atravessa pós-produção, pré-produção, set, atuação e acompanhamento criativo de projetos. Essa colaboração sintetiza uma parte central de seu percurso: estar próximo da criação cinematográfica não apenas como intérprete, mas como alguém que acompanha o filme em sua construção concreta.",
      "Em dezembro de 2025, Francisco participou de Atuando para o Audiovisual, com Walter Lima Jr. Em 2026, deu sequência ao trabalho de formação e prática diante da câmera: em janeiro, realizou o workshop Desenvolvimento de Cenas, Personagens e Repertório, novamente com Rafael Infante; entre janeiro e março, integrou o LABO de Patrick Sampaio, no curso Gravar, Assistir, Regravar, voltado ao exercício contínuo diante da câmera, à revisão do próprio material e à precisão progressiva da atuação audiovisual; em abril, participou da Carpintaria do Ator, com Joana Medeiros, e do workshop de Método Lee Strasberg, com Julia Burnier, em São Paulo.",
      "Sua trajetória se constrói por continuidade: do trabalho de bastidor ao set; da pós-produção à pré-produção; da assistência à atuação; da experiência prática à formação continuada. Entre criação e cena, Francisco reúne duas dimensões complementares: a sensibilidade de quem pensa o filme por dentro e a disponibilidade de quem se oferece ao acontecimento da câmera.",
      "Na atuação, busca presença, escuta e precisão. Interessa-lhe um corpo atento ao outro, ao espaço, ao silêncio e ao ritmo singular de cada direção. Mais do que afirmar uma identidade fixa, Francisco entende o ator como processo: alguém que aprende a chegar, perceber, ajustar-se e sustentar o instante exigido pela cena, com rigor técnico e abertura sensível."
    ],
    statement: "O cinema deixou de ser ideia e virou matéria: tempo, montagem, escuta, relação entre corpos no espaço.",
    image: "/images/photoshoot/francisco-vidal-photoshoot-14.webp"
  },

  filmografia: [
    {
      id: 3,
      slug: "musica-de-invencao",
      title: "Música de Invenção",
      year: 2025,
      country: "Brasil",
      duration: "",
      role: "Filipe",
      director: "Gregório Gananian",
      type: "Cinema",
      genre: "Longa-metragem, Ficção",
      status: "Em produção",
      festivals: "",
      description: "",
      image: "/images/image copy copy copy copy copy copy.png",
      productionCompanies: ["Zaum", "Anacoluto"],
      producers: ["Marisa Merlo", "Gregório Gananian", "Clara Choveaux"],
      castPrincipal: ["Francisco Vidal", "Clara Choveaux"],
      cast: [],
      stills: [],
      scenes: [],
      crew: []
    },
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
      image: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/mundo-mortos.jpg",
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
    { id: 1, url: "/images/photoshoot/francisco-vidal-photoshoot-01.webp", alt: "Francisco Vidal em corpo inteiro, gesto e presença em ambiente natural", category: "Corpo", slot: "corpo" },
    { id: 2, url: "/images/photoshoot/francisco-vidal-photoshoot-04.webp", alt: "Francisco Vidal em movimento, sombra e luz filtrada entre árvores", category: "Gesto", slot: "gesto" },
    { id: 3, url: "/images/photoshoot/francisco-vidal-photoshoot-10.webp", alt: "Francisco Vidal em retrato próximo, expressão contida e olhar direto", category: "Rosto", slot: "rosto" },
    { id: 4, url: "/images/photoshoot/francisco-vidal-photoshoot-05.webp", alt: "Francisco Vidal em postura integral, presença física definida em floresta", category: "Presença", slot: "presenca" },
    { id: 5, url: "/images/photoshoot/francisco-vidal-photoshoot-07.webp", alt: "Francisco Vidal entre sombras, corpo recortado pela luz lateral", category: "Sombra", slot: "sombra" },
    { id: 6, url: "/images/photoshoot/francisco-vidal-photoshoot-11.webp", alt: "Francisco Vidal em close, rosto iluminado com fundo escuro", category: "Rosto", slot: "rosto" },
    { id: 7, url: "/images/photoshoot/francisco-vidal-photoshoot-02.webp", alt: "Francisco Vidal em gesto amplo, corpo em relação com o espaço", category: "Gesto", slot: "gesto" },
    { id: 8, url: "/images/photoshoot/francisco-vidal-photoshoot-15.webp", alt: "Francisco Vidal em meio-corpo, expressão recolhida e contemplativa", category: "Silêncio", slot: "silencio" },
    { id: 9, url: "/images/photoshoot/francisco-vidal-photoshoot-16.webp", alt: "Francisco Vidal em retrato editorial, presença e escuta visíveis", category: "Escuta", slot: "escuta" },
    { id: 10, url: "/images/photoshoot/francisco-vidal-photoshoot-17.webp", alt: "Francisco Vidal em composição vertical, corpo e sombra em equilíbrio", category: "Corpo", slot: "corpo" },
    { id: 11, url: "/images/photoshoot/francisco-vidal-photoshoot-18.webp", alt: "Francisco Vidal em retrato com profundidade, olhar e silêncio", category: "Presença", slot: "presenca" },
    { id: 12, url: "/images/photoshoot/francisco-vidal-photoshoot-14.webp", alt: "Francisco Vidal em close limpo, rosto com luz natural e fundo neutro", category: "Rosto", slot: "rosto" },
    { id: 13, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg", alt: "Francisco Vidal em cena de O Mundo dos Mortos, em escuta diante da câmera", category: "Processo", slot: "processo" },
    { id: 14, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-2.jpg", alt: "Francisco Vidal em set, momento de preparação entre takes", category: "Processo", slot: "processo" },
    { id: 15, url: "https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-3.jpg", alt: "Francisco Vidal em cena, corpo inteiro com presença física definida", category: "Processo", slot: "processo" }
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
