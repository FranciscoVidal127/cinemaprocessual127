import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/content';

export function Filmografia() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', padding: '120px 32px 96px', background: 'var(--cp-black)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--cp-muted)', display: 'block', marginBottom: '24px' }}>
          {t.filmography.pageLabel}
        </span>
        {siteData.filmografia.map(film => (
          <div key={film.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--cp-line)' }}>
            <div style={{ fontFamily: 'var(--font-meta)', fontSize: '11px', color: 'var(--cp-muted)', marginBottom: '8px' }}>{film.year} · {film.type}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 400, color: 'var(--cp-ivory)', marginBottom: '4px' }}>{film.title}</h2>
            <p style={{ fontSize: '14px', color: 'var(--cp-muted)' }}>dir. {film.director} · {film.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
