import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/content';
import { sobreTextEn } from '../data/content.en';

export function Sobre() {
  const { language, t } = useLanguage();
  const bioText = language === 'en' ? sobreTextEn : siteData.sobre.text;

  return (
    <div style={{ minHeight: '100vh', padding: '120px 32px 96px', background: 'var(--cp-black)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--cp-muted)', display: 'block', marginBottom: '24px' }}>
          {t.sobre.label}
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 300, color: 'var(--cp-ivory)', marginBottom: '40px' }}>
          Francisco Vidal
        </h1>
        {bioText.map((p, i) => (
          <p key={i} style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--cp-muted)', marginBottom: '1.2em' }}>{p}</p>
        ))}
      </div>
    </div>
  );
}
