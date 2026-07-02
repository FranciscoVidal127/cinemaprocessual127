import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { dossierTextEn } from '../data/content.en';
import './Home.css';

export function Home() {
  const { language, t } = useLanguage();

  const dossierParagraphs = language === 'en' ? dossierTextEn : [
    "Francisco Vidal é ator, assistente de direção e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua entrada no audiovisual aconteceu primeiro por dentro da matéria do filme: pela tradução, pela pós-produção, pela montagem e pela escuta do processo.",
    "Em 2023, ao trabalhar com Paula Gaitán na pós-produção de O Canto das Amapolas, vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes, aproximou-se de Clara Choveaux, Negro Leo e Gregório Gananian.",
    "No segundo semestre de 2024, filmou no Rio de Janeiro O Mundo dos Mortos, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo, longa exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes em 2025.",
    "Na atuação, busca presença, escuta e precisão — um corpo atento ao outro, ao espaço, ao silêncio e ao ritmo singular de cada direção.",
  ];

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Francisco<br />Vidal</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <nav className="hero-cta">
            <Link to="/sobre" className="cta-link">{t.nav.sobre}</Link>
            <Link to="/filmografia" className="cta-link">{t.nav.filmografia}</Link>
            <Link to="/textos" className="cta-link">{t.nav.textos}</Link>
          </nav>
        </div>
      </section>

      {/* About / Dossier */}
      <section className="dossier">
        <div className="dossier-inner">
          <div className="dossier-bio">
            <span className="section-label">{t.home.aboutLabel}</span>
            <h2 className="dossier-heading">Francisco Vidal</h2>
            <div className="dossier-text">
              {dossierParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <aside className="dossier-highlights">
            <span className="section-label">{t.home.profileLabel}</span>
            <ul className="highlights-list">
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.base}</span>
                <span className="highlight-value">{t.profile.baseValue}</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.roles}</span>
                <span className="highlight-value">{t.profile.rolesValue}</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.focus}</span>
                <span className="highlight-value">{t.profile.focusValue}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Cinema Processual */}
      <section className="textos-home">
        <div className="textos-home-grain" aria-hidden="true" />
        <div className="textos-home-inner">
          <div className="textos-home-editorial">
            <span className="textos-home-eyebrow">{t.textos.eyebrow}</span>
            <h2 className="textos-home-title">{t.textos.sectionTitle}</h2>
            <p className="textos-home-subtitle">{t.textos.sectionSubtitle}</p>
            <Link to="/textos" className="textos-home-cta">{t.textos.viewAll}</Link>
          </div>

          <div className="textos-home-cards">
            {/* Featured card */}
            <Link to="/texto/julio-bressane-sobre-jean-luc-godard" className="texto-card texto-card--featured">
              <div className="texto-card-header">
                <span className="texto-card-code">{t.texts.bressaneGodard.archiveCode}</span>
                <span className="texto-card-category">{t.texts.bressaneGodard.category}</span>
              </div>
              <h3 className="texto-card-title">{t.texts.bressaneGodard.title}</h3>
              <p className="texto-card-desc">{t.texts.bressaneGodard.description}</p>
              <div className="texto-card-footer">
                <span className="texto-card-meta">CP-002 · 2022 · 5 min</span>
                <span className="texto-card-cta">{t.textos.readButton}</span>
              </div>
            </Link>

            {/* Secondary cards */}
            <Link to="/texto/mekas-brakhage" className="texto-card texto-card--secondary">
              <div className="texto-card-header">
                <span className="texto-card-code">{t.texts.mekasBrakhage.archiveCode}</span>
                <span className="texto-card-category">{t.texts.mekasBrakhage.category}</span>
              </div>
              <h3 className="texto-card-title">{t.texts.mekasBrakhage.title}</h3>
              <p className="texto-card-desc">{t.texts.mekasBrakhage.description}</p>
              <div className="texto-card-footer">
                <span className="texto-card-cta">{t.textos.readButton}</span>
              </div>
            </Link>

            <Link to="/texto/cinema-processual" className="texto-card texto-card--secondary">
              <div className="texto-card-header">
                <span className="texto-card-code">{t.texts.cinemaProcessual.archiveCode}</span>
                <span className="texto-card-category">{t.texts.cinemaProcessual.category}</span>
              </div>
              <h3 className="texto-card-title">{t.texts.cinemaProcessual.title}</h3>
              <p className="texto-card-desc">{t.texts.cinemaProcessual.description}</p>
              <div className="texto-card-footer">
                <span className="texto-card-cta">{t.textos.readButton}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contato" id="contato">
        <div className="contato-inner">
          <span className="section-label">{t.home.contactLabel}</span>
          <h2 className="contato-heading">{t.home.contactHeading}</h2>
          <p className="contato-availability">{t.home.contactAvailability}</p>
          <a href="mailto:franciscovidalcs@gmail.com" className="contato-email">franciscovidalcs@gmail.com</a>
        </div>
      </section>

    </div>
  );
}
