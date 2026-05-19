import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import './Filmografia.css';

export function Filmografia() {
  const { language, t } = useLanguage();

  const translateStatus = (status: string | undefined) => {
    if (!status) return null;
    if (language === 'en') {
      if (status === 'Em produção') return t.filmMeta.inProduction;
      if (status === 'Em pós-produção') return t.filmMeta.inPostProduction;
    }
    return status;
  };

  return (
    <div className="filmografia-page">

      <div className="filmografia-header">
        <span className="filmografia-label">{t.filmography.pageLabel}</span>
      </div>

      <div className="filmografia-list">
        {siteData.filmografia.map((filme) => (
          <Link
            key={filme.id}
            to={`/filme/${filme.slug}`}
            className="filmografia-entry"
          >
            <div className="filmografia-entry-poster">
              <img src={filme.image} alt={filme.title} />
            </div>
            <div className="filmografia-entry-body">
              <h2 className="filmografia-entry-title">{filme.title}</h2>
              <div className="filmografia-entry-meta-row">
                <span className="filmografia-entry-year">{filme.year}</span>
                <span className="filmografia-entry-director">Dir. {filme.director}</span>
              </div>
              <span className="filmografia-entry-role">{filme.role}</span>
              {filme.status && (
                <span className="filmografia-entry-status">{translateStatus(filme.status)}</span>
              )}
              {filme.festivals && (
                <span className="filmografia-entry-festival">{filme.festivals}</span>
              )}
            </div>
            <span className="filmografia-entry-arrow">&rarr;</span>
          </Link>
        ))}
      </div>

    </div>
  );
}
