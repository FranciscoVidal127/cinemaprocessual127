import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
          {t('home.title')}
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] font-light tracking-wide mb-12">
          {t('home.subtitle')}
        </p>
        <div className="mt-8 border-t border-[var(--color-border)] pt-8">
          <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
            {t('profile.recentWorkLabel')}
          </p>
          <p className="text-[var(--color-accent)] font-light">
            {t('profile.recentWorkValue')}
          </p>
        </div>
      </div>
    </div>
  )
}
