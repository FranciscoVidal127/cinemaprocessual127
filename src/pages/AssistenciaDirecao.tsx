import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './AssistenciaDirecao.css';

export function AssistenciaDirecao() {
  const { t } = useLanguage();

  return (
    <div className="ad-page">

      {/* HEADER */}
      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">{t.ad.pageTitle}</h1>
          <p className="page-intro">{t.ad.pageIntro}</p>
        </div>
      </header>

      {/* DESCRICAO */}
      <section className="ad-descricao">
        <div className="container">
          <div className="ad-descricao-grid">
            <div className="ad-descricao-text">
              <p className="ad-lead">{t.ad.leadText}</p>
              <p>{t.ad.secondText}</p>
            </div>
            <div className="ad-descricao-aside">
              <div className="ad-competencias">
                <h3 className="ad-competencias-title">{t.ad.competenciesTitle}</h3>
                <ul className="ad-competencias-list">
                  {t.ad.competencies.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDITOS */}
      <section className="ad-creditos">
        <div className="container">
          <div className="ad-section-header">
            <span className="label">{t.ad.creditsLabel}</span>
          </div>
          <div className="ad-creditos-list">
            <div className="ad-credito-item">
              <div className="ad-credito-info">
                <h3 className="ad-credito-title">O Inspetor Geral</h3>
                <p className="ad-credito-meta">Dir. Gregório Gananian · Zaum / Anacoluto / Satyros</p>
                <p className="ad-credito-desc">{t.ad.creditDesc}</p>
              </div>
              <div className="ad-credito-year">2024–2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="ad-contato">
        <div className="container">
          <div className="ad-contato-inner">
            <h2 className="ad-contato-title">{t.ad.contactTitle}</h2>
            <p className="ad-contato-text">{t.ad.contactText}</p>
            <div className="ad-contato-links">
              <a href="mailto:franciscovidalcs@gmail.com" className="ad-contato-email">
                franciscovidalcs@gmail.com
              </a>
              <Link to="/filmografia" className="ad-contato-filmografia">
                {t.ad.viewFilmography}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
