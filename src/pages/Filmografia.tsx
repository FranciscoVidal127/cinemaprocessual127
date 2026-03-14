import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import './Filmografia.css';

export function Filmografia() {
  return (
    <div className="filmografia-page">

      <header className="page-header">
        <div className="page-header-inner">
          <span className="page-eyebrow">Francisco Vidal</span>
          <h1 className="page-title">Filmografia</h1>
          <p className="page-intro">Longas-metragens e trabalhos audiovisuais.</p>
        </div>
      </header>

      <section className="filmografia-list-section">
        <div className="container">
          <div className="filmografia-list">
            {siteData.filmografia.map((filme, idx) => (
              <Link
                key={filme.id}
                to={`/filme/${filme.slug}`}
                className="filmografia-entry"
              >
                <div className="filmografia-entry-count">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="filmografia-entry-image">
                  <img src={filme.image} alt={filme.title} />
                </div>
                <div className="filmografia-entry-body">
                  <div className="filmografia-entry-meta">
                    <span>{filme.year}</span>
                    <span className="filmografia-entry-sep">·</span>
                    <span>{filme.type}</span>
                    {filme.genre && (
                      <>
                        <span className="filmografia-entry-sep">·</span>
                        <span>{filme.genre}</span>
                      </>
                    )}
                    {filme.status && (
                      <span className="filmografia-entry-status">{filme.status}</span>
                    )}
                  </div>
                  <h2 className="filmografia-entry-title">{filme.title}</h2>
                  <div className="filmografia-entry-credits">
                    <span>Dir. {filme.director}</span>
                    <span className="filmografia-entry-sep">·</span>
                    <span>{filme.role}</span>
                  </div>
                  <p className="filmografia-entry-synopsis">{filme.description}</p>
                  {filme.festivals && (
                    <div className="filmografia-entry-festival">
                      {filme.festivals}
                    </div>
                  )}
                </div>
                <div className="filmografia-entry-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
