import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="not-found-page">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">{t.notFound.title}</h1>
        <p className="not-found-text">{t.notFound.text}</p>
        <Link to="/" className="not-found-link">{t.notFound.backLink}</Link>
      </div>
    </div>
  );
}
