import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="not-found-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', paddingTop: '72px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, color: 'var(--text)', marginBottom: '12px' }}>
          {t.notFound.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>
          {t.notFound.text}
        </p>
        <Link to="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
          {t.notFound.backLink}
        </Link>
      </div>
    </div>
  );
}
