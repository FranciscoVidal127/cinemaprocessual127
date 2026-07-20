import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { siteData } from '../data/content'
import YouTubeEmbed from '../components/YouTubeEmbed'

export default function FilmeDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { language, t } = useLanguage()

  const filme = siteData.filmografia.find((f) => f.slug === slug)

  if (!filme) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-text-muted)]">Filme não encontrado.</p>
        <Link to="/filmografia" className="text-[var(--color-accent)] mt-4 inline-block">
          ← {t('filmografia.title')}
        </Link>
      </div>
    )
  }

  const title = language === 'en' && filme.titleEn ? filme.titleEn : filme.title
  const description = language === 'en' ? filme.descriptionEn : filme.description
  const role = language === 'en' ? filme.roleEn : filme.role
  const status = language === 'en' && filme.statusEn ? filme.statusEn : filme.status

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/filmografia"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8 inline-block"
      >
        ← {t('filmografia.title')}
      </Link>

      {filme.image && (
        <img
          src={filme.image}
          alt={title}
          className={`w-full rounded-lg mb-8 object-cover ${
            filme.imagePanoramic ? 'aspect-[21/9]' : 'aspect-video max-h-96'
          }`}
        />
      )}

      <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">{title}</h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        {filme.year} · {filme.director}
      </p>

      {status && (
        <span className="inline-block mb-6 text-xs uppercase tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-3 py-1 rounded">
          {status}
        </span>
      )}

      <section className="mb-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{t('filme.description')}</h2>
        <p className="text-[var(--color-text)] leading-relaxed">{description}</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-8 text-sm">
        <Detail label={t('filme.role')} value={role} />
        <Detail label={t('filme.type')} value={filme.type} />
        {filme.country && <Detail label={t('filme.country')} value={filme.country} />}
        {filme.duration && <Detail label={t('filme.duration')} value={filme.duration} />}
        <Detail label={t('filme.production')} value={filme.productionCompanies} />
        <Detail label={t('filme.producers')} value={filme.producers} />
        {filme.coproducers && <Detail label={t('filme.coproducers')} value={filme.coproducers} />}
        {filme.supporters && <Detail label={t('filme.supporters')} value={filme.supporters} />}
        {filme.festivals && <Detail label={t('filme.festivals')} value={filme.festivals} />}
      </div>

      {filme.castPrincipal && (
        <section className="mb-6">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{t('filme.cast')}</h2>
          <p className="text-sm text-[var(--color-text)]">{filme.castPrincipal}</p>
        </section>
      )}

      {filme.castSecundario && (
        <section className="mb-6">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{t('filme.castSecundario')}</h2>
          <p className="text-sm text-[var(--color-text)]">{filme.castSecundario}</p>
        </section>
      )}

      {filme.crew.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">{t('filme.crew')}</h2>
          <div className="space-y-1 text-sm">
            {filme.crew.map((c, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-[var(--color-text-muted)] min-w-[200px]">{c.role}</span>
                <span className="text-[var(--color-text)]">{c.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {filme.stills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">{t('filme.stills')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filme.stills.map((src, i) => (
              <img key={i} src={src} alt={`${title} still ${i + 1}`} className="w-full rounded-lg object-cover aspect-video" />
            ))}
          </div>
        </section>
      )}

      {filme.scenes.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">{t('filme.scenes')}</h2>
          <div className="grid gap-6">
            {filme.scenes.map((url, i) => (
              <YouTubeEmbed key={i} url={url} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2 border-b border-[var(--color-border)]">
      <span className="text-[var(--color-text-muted)]">{label}: </span>
      <span className="text-[var(--color-text)]">{value}</span>
    </div>
  )
}
