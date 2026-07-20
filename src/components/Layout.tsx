import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/atuacao', label: t('nav.atuacao') },
    { path: '/filmografia', label: t('nav.filmografia') },
    { path: '/reel', label: t('nav.reel') },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-border)] sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-light tracking-wide hover:text-[var(--color-accent)] transition-colors">
            Francisco Vidal
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="text-xs uppercase tracking-widest border border-[var(--color-border)] px-3 py-1 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-[var(--color-text-muted)]">
          {t('footer.rights')}
        </div>
      </footer>
    </div>
  )
}
