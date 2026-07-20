import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'Início',
    'nav.atuacao': 'Atuação',
    'nav.filmografia': 'Filmografia',
    'nav.reel': 'Reel',
    'atuacao.statement': 'Como ator, Francisco Vidal trabalha a partir da escuta, da presença física e da relação entre corpo, câmera e espaço.',
    'atuacao.formationTitle': 'FORMAÇÃO 2024–2026',
    'profile.recentWorkLabel': 'Trabalhos recentes',
    'profile.recentWorkValue': 'Música de Invenção · O Mundo dos Mortos · O Inspetor Geral',
    'filmografia.title': 'Filmografia',
    'filme.director': 'Direção',
    'filme.role': 'Papel',
    'filme.type': 'Tipo',
    'filme.country': 'País',
    'filme.duration': 'Duração',
    'filme.production': 'Produção',
    'filme.producers': 'Produtores',
    'filme.coproducers': 'Coprodutores',
    'filme.supporters': 'Apoio',
    'filme.cast': 'Elenco principal',
    'filme.castSecundario': 'Elenco',
    'filme.crew': 'Ficha técnica',
    'filme.festivals': 'Festivais',
    'filme.scenes': 'Cenas selecionadas',
    'filme.stills': 'Stills',
    'filme.status': 'Status',
    'filme.description': 'Sinopse',
    'reel.title': 'Reel',
    'reel.empty': 'Em breve.',
    'home.title': 'Francisco Vidal',
    'home.subtitle': 'Ator',
    'footer.rights': '© 2026 Francisco Vidal. Todos os direitos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.atuacao': 'Acting',
    'nav.filmografia': 'Filmography',
    'nav.reel': 'Reel',
    'atuacao.statement': 'As an actor, Francisco Vidal works from listening, physical presence, and the relationship between body, camera, and space.',
    'atuacao.formationTitle': 'TRAINING 2024–2026',
    'profile.recentWorkLabel': 'Recent work',
    'profile.recentWorkValue': 'Música de Invenção · O Mundo dos Mortos · O Inspetor Geral',
    'filmografia.title': 'Filmography',
    'filme.director': 'Director',
    'filme.role': 'Role',
    'filme.type': 'Type',
    'filme.country': 'Country',
    'filme.duration': 'Duration',
    'filme.production': 'Production',
    'filme.producers': 'Producers',
    'filme.coproducers': 'Co-producers',
    'filme.supporters': 'Support',
    'filme.cast': 'Main cast',
    'filme.castSecundario': 'Cast',
    'filme.crew': 'Crew',
    'filme.festivals': 'Festivals',
    'filme.scenes': 'Selected scenes',
    'filme.stills': 'Stills',
    'filme.status': 'Status',
    'filme.description': 'Synopsis',
    'reel.title': 'Reel',
    'reel.empty': 'Coming soon.',
    'home.title': 'Francisco Vidal',
    'home.subtitle': 'Actor',
    'footer.rights': '© 2026 Francisco Vidal. All rights reserved.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string): string => {
    return translations[language][key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
