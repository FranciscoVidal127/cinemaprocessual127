export interface Filme {
  slug: string
  title: string
  titleEn?: string
  year: string
  director: string
  status?: string
  statusEn?: string
  role: string
  roleEn: string
  type: string
  country?: string
  duration?: string
  image: string
  imagePanoramic?: boolean
  productionCompanies: string
  producers: string
  coproducers?: string
  supporters?: string
  castPrincipal: string
  castSecundario?: string
  crew: { role: string; name: string }[]
  festivals?: string
  description: string
  descriptionEn: string
  stills: string[]
  scenes: string[]
}

export interface TrainingItem {
  date: string
  dateEn: string
  name: string
  instructor: string
  hours?: string
}

export interface SiteData {
  filmografia: Filme[]
  reel: { videos: string[] }
  training: TrainingItem[]
}

export const siteData: SiteData = {
  reel: {
    videos: [],
  },

  training: [
    {
      date: 'out 2024',
      dateEn: 'Oct 2024',
      name: 'Carpintaria do Ator',
      instructor: 'Joana Medeiros',
    },
    {
      date: '06 mai → 03 jul 2025',
      dateEn: '06 May → 03 Jul 2025',
      name: 'O Poder da Câmera: Atuação para TV e Cinema',
      instructor: 'Ricardo Cônti + Heitor Martinez',
      hours: '48h',
    },
    {
      date: '20 mai → 11 jul 2025',
      dateEn: '20 May → 11 Jul 2025',
      name: 'Laboratório de Atuação para Câmera',
      instructor: 'Gustavo Pace',
      hours: '40h',
    },
    {
      date: '31 mai e 19 jul 2025',
      dateEn: '31 May & 19 Jul 2025',
      name: 'Interpretação para TV e Cinema',
      instructor: 'Andrea Avancini',
      hours: '21h',
    },
    {
      date: '04 jun → 23 jul 2025',
      dateEn: '04 Jun → 23 Jul 2025',
      name: 'O Teatro do Não Eu — Módulo I',
      instructor: 'Rafael Infante',
      hours: '36h',
    },
    {
      date: '17 set → 17 dez 2025',
      dateEn: '17 Sep → 17 Dec 2025',
      name: 'O Teatro do Não Eu — Módulo II',
      instructor: 'Rafael Infante',
      hours: '46h',
    },
    {
      date: 'dez 2025',
      dateEn: 'Dec 2025',
      name: 'Atuando para o Audiovisual',
      instructor: 'Walter Lima Jr.',
    },
    {
      date: 'jan 2026',
      dateEn: 'Jan 2026',
      name: 'Desenvolvimento de Cenas, Personagens e Repertório',
      instructor: 'Rafael Infante',
    },
    {
      date: 'jan → mar 2026',
      dateEn: 'Jan → Mar 2026',
      name: 'LABO de Patrick Sampaio — Gravar, Assistir, Regravar (prática contínua diante da câmera)',
      instructor: 'Patrick Sampaio',
    },
    {
      date: 'abr 2026',
      dateEn: 'Apr 2026',
      name: 'Carpintaria do Ator',
      instructor: 'Joana Medeiros',
    },
    {
      date: 'abr → jul 2026',
      dateEn: 'Apr → Jul 2026',
      name: 'Dois Workshops de Método Lee Strasberg',
      instructor: 'Julia Burnier · São Paulo',
    },
  ],

  filmografia: [
    {
      slug: 'musica-de-invencao',
      title: 'Música de Invenção',
      year: '2025',
      director: 'Gregório Gananian',
      status: 'Em produção',
      statusEn: 'In production',
      role: 'Coprotagonista (Filipe)',
      roleEn: 'Co-lead (Filipe)',
      type: 'Longa-metragem, Ficção',
      image: '/images/musica-de-invencao-still-01.png',
      productionCompanies: 'Zaum, Anacoluto',
      producers: 'Marisa Merlo, Gregório Gananian, Clara Choveaux',
      castPrincipal: 'Francisco Vidal, Clara Choveaux',
      crew: [],
      description: 'A história de uma compositora e seu aluno, a união entre vida e ficção.',
      descriptionEn: 'The story of a composer and her student — the union between life and fiction.',
      stills: [],
      scenes: [],
    },
    {
      slug: 'o-mundo-dos-mortos',
      title: 'O Mundo dos Mortos',
      titleEn: 'The World of the Dead',
      year: '2025',
      director: 'Pedro Tavares',
      role: 'Ator (Fábio) · Assistente de produção',
      roleEn: 'Actor (Fábio) · Assistant producer',
      type: 'Longa-metragem, Ficção · cor · DCP',
      country: 'Brasil (RJ)',
      duration: '78 min',
      image: '/images/mundo-dos-mortos-poster.png',
      productionCompanies: '7 a 1 Filmes, Cavideo',
      producers: 'Pedro Tavares (roteiro, produção e direção); produção executiva: Pedro Tavares, Gabriel Papaléo; assistência de produção: Francisco Vidal, Leila Almeida',
      coproducers: 'Cavi Borges, João Lanari',
      supporters: 'Daniel Diaz e Cara Feia Productions, Damien Cattinari, Dean Kavanagh, Evan Snyder, Joshua R. Troxler, Steven Adam Renkovish',
      castPrincipal: 'Estevão Nogueira, Morgana Corrêa, Raquel Monteiro, Araci Breckenfeld, Diana Deyse, Francisco Vidal, Renatto Venâncio e, apresentando, Cecilia Bittencourt',
      crew: [
        { role: 'Montagem e finalização', name: 'Waleska Antunes' },
        { role: 'Assistência de direção', name: 'Gabriel Papaléo' },
        { role: 'Direção de fotografia', name: 'Vinicius Dratovsky' },
        { role: 'Direção de som', name: 'Jotapê de Souza' },
        { role: 'Mixagem de som', name: 'Guilherme Leite, Pedro Tavares, Waleska Antunes' },
        { role: 'Direção de arte', name: 'Leila Almeida' },
        { role: 'Figurino', name: 'Neide Pereira' },
        { role: 'Cabelo, maquiagem e making of', name: 'Julio Napoli' },
        { role: 'Colorgrade', name: 'Waleska Antunes' },
        { role: 'Efeitos especiais', name: 'Daniel Diaz' },
        { role: 'Trilha original', name: 'Guilherme Leite' },
      ],
      festivals: '28ª Mostra de Cinema de Tiradentes — Mostra Olhos Livres (30/01/2025, Cine-Tenda)',
      description: 'No segundo dia após a morte de Cristo, humanos, anjos e demônios questionam o futuro da existência enquanto vagueiam pela Terra, agora abandonada. Sem perceber, o exorcismo existencial fica cada vez mais intenso conforme o retorno do Messias se aproxima. Filme totalmente independente, realizado sem recursos públicos.',
      descriptionEn: 'On the second day after the death of Christ, humans, angels, and demons question the future of existence as they wander an Earth now abandoned. Without noticing, the existential exorcism grows ever more intense as the return of the Messiah draws near. A totally independent film, made without public funding.',
      stills: ['/images/mundo-dos-mortos-still-francisco-01.png', '/images/mundo-dos-mortos-still-francisco-02.png'],
      scenes: ['https://youtu.be/qRzh9oAaoWk', 'https://www.youtube.com/watch?v=gKwFF0I_xW4', 'https://www.youtube.com/watch?v=EBk0wJLshWo'],
    },
    {
      slug: 'o-inspetor-geral',
      title: 'O Inspetor Geral',
      titleEn: 'The Inspector General',
      year: '2024',
      director: 'Gregório Gananian',
      status: 'Em pós-produção / Captação',
      statusEn: 'In post-production / Financing',
      role: 'Ator (Espectro F.) · Assistente de pré-produção',
      roleEn: 'Actor (Espectro F.) · Pre-production assistant',
      type: 'Longa-metragem, Ficção',
      country: 'Brasil',
      duration: '100 min',
      image: '/images/inspetor-geral-poster.png',
      imagePanoramic: true,
      productionCompanies: 'Anacoluto, Zaum, Satyros',
      producers: 'Marisa Merlo, Gregório Gananian, Clara Choveaux',
      supporters: 'Secult-SP, Governo de São Paulo · Curitiba Lab 2026',
      castPrincipal: 'Clara Choveaux, Ivon Patrocínio',
      castSecundario: 'Cláudia Ohana, Elder Gama (Catraca), Ewerton Belico, Francisco Vidal, José Roberto Aguilar, Marcelo Ariel, Negro Léo, Paulo Jordão, Renan Rovida, Rosângela Baptista Ignacio, Sérgio Villafranca, Silvana Stein, Thiago Matéria, Toni Nogueira, Viviane Ferreira, Walter Figueiredo',
      crew: [
        { role: 'Roteiro', name: 'Gregório Gananian' },
        { role: 'Montagem', name: 'Rodrigo Lima' },
      ],
      description: 'Quando a notícia da chegada de um Inspetor Geral começa a circular, a CEO de uma empresa de mineração mergulha num processo crescente de paranoia. Sob a ameaça de uma investigação iminente, ela revisita sua própria trajetória dentro da companhia e reconstrói, em memória, os caminhos que a levaram até ali. É desse ponto de vista instável e retrospectivo que o filme acompanha a formação de um poder erguido sobre medo, chantagens e dissimulação.',
      descriptionEn: 'When news of an Inspector General\'s arrival begins to circulate, the CEO of a mining company spirals into a growing state of paranoia. Under the threat of an imminent investigation, she revisits her own trajectory within the company, reconstructing from memory the paths that led her there. It is from this unstable, retrospective point of view that the film follows the formation of a power built on fear, blackmail, and dissimulation.',
      stills: ['/images/inspetor-geral-still-01.png', '/images/inspetor-geral-still-02.png'],
      scenes: [],
    },
  ],
}
