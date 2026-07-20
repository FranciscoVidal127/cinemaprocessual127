import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { siteData } from '../data/content'

export default function Filmografia() {
  const { language, t } = useLanguage()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-light tracking-tight mb-12">{t('filmografia.title')}</h1>
      <div className="grid gap-8">
        {siteData.filmografia.map((filme) => (
          <Link
            key={filme.slug}
            to={`/filmografia/${filme.slug}`}
            className="group flex flex-col sm:flex-row gap-6 p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all hover:bg-[var(--color-surface-elevated)]"
          >
            <div className="sm:w-48 shrink-0">
              <img
                src={filme.image}
                alt={filme.title}
                className={`w-full rounded object-cover ${filme.imagePanoramic ? 'aspect-[21/9]' : 'aspect-[2/3]'}`}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-light group-hover:text-[var(--color-accent)] transition-colors">
                {language === 'en' && filme.titleEn ? filme.titleEn : filme.title}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {filme.year} · {filme.director}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">
                {language === 'en' ? filme.roleEn : filme.role}
              </p>
              {filme.status && (
                <span className="inline-block mt-3 text-xs uppercase tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded w-fit">
                  {language === 'en' && filme.statusEn ? filme.statusEn : filme.status}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
