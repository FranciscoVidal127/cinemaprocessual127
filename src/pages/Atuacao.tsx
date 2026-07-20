import { useLanguage } from '../context/LanguageContext'
import { siteData } from '../data/content'

export default function Atuacao() {
  const { language, t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <section className="mb-16">
        <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--color-text)] max-w-3xl">
          {t('atuacao.statement')}
        </p>
      </section>

      {siteData.reel.videos.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-6">Reel</h2>
          {/* Reel videos would render here */}
        </section>
      )}

      <section>
        <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
          {t('atuacao.formationTitle')}
        </h2>
        <div className="space-y-4">
          {siteData.training.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-[var(--color-border)]"
            >
              <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap min-w-[180px]">
                {language === 'en' ? item.dateEn : item.date}
              </span>
              <div className="flex-1">
                <span className="text-[var(--color-text)]">{item.name}</span>
                <span className="text-[var(--color-text-muted)]"> — {item.instructor}</span>
                {item.hours && (
                  <span className="text-[var(--color-accent)] ml-2">· {item.hours}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
