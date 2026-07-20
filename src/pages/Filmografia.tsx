import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import './Filmografia.css';

export function Filmografia() {
  const { language, t } = useLanguage();

  const filmStatus = (status: string | undefined) => {
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

      <section className="filmografia-list">
        {siteData.filmografia.map((filme) => (
          <Link to={`/filme/${filme.slug}`} key={filme.id} className="filmografia-item">
            <div className="filmografia-item-year">{filme.year}</div>
            <div className="filmografia-item-body">
              <h2 className="filmografia-item-title">{filme.title}</h2>
              <p className="filmografia-item-director">dir. {filme.director}</p>
              <p className="filmografia-item-role">{filme.role}</p>
              {filme.festivals && (
                <p className="filmografia-item-festivals">{filme.festivals}</p>
              )}
              {filme.status && (
                <p className="filmografia-item-status">{filmStatus(filme.status)}</p>
              )}
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}
