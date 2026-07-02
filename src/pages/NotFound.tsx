import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', background: 'var(--cp-black)' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--cp-ivory)', marginBottom: '12px' }}>{t.notFound.title}</h1>
        <p style={{ fontSize: '15px', color: 'var(--cp-muted)', marginBottom: '24px' }}>{t.notFound.text}</p>
        <Link to="/" style={{ fontFamily: 'var(--font-meta)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--cp-muted)' }}>{t.notFound.backLink}</Link>
      </div>
    </div>
  );
}
