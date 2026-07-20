import { useLanguage } from '../context/LanguageContext'
import { siteData } from '../data/content'

export default function Reel() {
  const { t } = useLanguage()

  if (siteData.reel.videos.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-light tracking-tight mb-4">{t('reel.title')}</h1>
        <p className="text-[var(--color-text-muted)]">{t('reel.empty')}</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-light tracking-tight mb-8">{t('reel.title')}</h1>
      {/* Reel videos would render here when available */}
    </div>
  )
}
