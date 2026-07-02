import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { dossierTextEn } from '../data/content.en';
import { useLanguage } from '../context/LanguageContext';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Home.css';

export function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const { language, t } = useLanguage();
  const featuredReel = siteData.reel.videos[0];

  const dossierParagraphs = language === 'en' ? dossierTextEn : [
    "Francisco Vidal é ator, assistente de direção e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua entrada no audiovisual aconteceu primeiro por dentro da matéria do filme: pela tradução, pela pós-produção, pela montagem e pela escuta do processo.",
    "Em 2023, ao trabalhar com Paula Gaitán na pós-produção de O Canto das Amapolas, vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes, aproximou-se de Clara Choveaux, Negro Leo e Gregório Gananian. Esse encontro abriu uma trajetória construída entre bastidor, criação e presença: Francisco trabalhou na pós-produção de Aquele que Viu o Abismo e, no início de 2024, foi convidado por Gregório Gananian a participar de O Inspetor Geral em duas frentes simultâneas — como assistente na pré-produção e como ator no elenco do longa, filmado no estado de São Paulo no primeiro semestre de 2024.",
    "No segundo semestre de 2024, filmou no Rio de Janeiro O Mundo dos Mortos, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo, longa exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes em 2025. Atualmente, segue colaborando com Gregório Gananian como assistente de direção, dando continuidade a uma parceria que atravessa pós-produção, pré-produção, set e criação cinematográfica.",
    "Na atuação, busca presença, escuta e precisão — um corpo atento ao outro, ao espaço, ao silêncio e ao ritmo singular de cada direção. Sua formação continuada, realizada entre a CAL, laboratórios e oficinas especializadas, aprofunda esse percurso: atuação para câmera, construção de personagem, repertório, método, escuta e prontidão para o set.",
  ];

  const filmStatus = (status: string | undefined) => {
    if (!status) return null;
    if (language === 'en') {
      if (status === 'Em produção') return t.filmMeta.inProduction;
      if (status === 'Em pós-produção') return t.filmMeta.inPostProduction;
    }
    return status;
  };

  return (
    <div className="home">

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-image-wrap">
          <img
            src="/images/BLOCO 1-HERO.png/image.png"
            alt="Retrato de Francisco Vidal em floresta, olhando para cima, com luz filtrada entre folhas"
            className={`hero-image${heroLoaded ? ' loaded' : ''}`}
            width={1920}
            height={1080}
            fetchPriority="high"
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <h1 className="hero-name">
            Francisco<br />Vidal
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <nav className="hero-cta">
            <Link to="/sobre" className="cta-link">{t.nav.sobre}</Link>
            <Link to="/reel" className="cta-link">{t.nav.reel}</Link>
            <Link to="/filmografia" className="cta-link">{t.nav.filmografia}</Link>
            <Link to="/textos" className="cta-link">{t.nav.textos}</Link>
            <Link to="/fotos" className="cta-link">{t.nav.fotos}</Link>
          </nav>
        </div>
      </section>

      {/* ============ ABOUT_DOSSIER ============ */}
      <section className="dossier">
        <div className="dossier-inner">
          <div className="dossier-bio">
            <span className="section-label">{t.home.aboutLabel}</span>
            <h2 className="dossier-heading">Francisco Vidal</h2>
            <div className="dossier-text">
              {dossierParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.recentWork}</span>
                <span className="highlight-value">{t.profile.recentWorkValue}</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.recentTraining}</span>
                <span className="highlight-value">{t.profile.recentTrainingValue}</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">{t.profile.availableFor}</span>
                <span className="highlight-value">{t.profile.availableForValue}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ============ CINEMA PROCESSUAL — ESCRITOS ============ */}
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
            {/* Featured card - Bressane/Godard */}
            <Link to="/texto/julio-bressane-sobre-jean-luc-godard" className="texto-card texto-card--featured">
              <div className="texto-card-header">
                <span className="texto-card-code">{t.texts.bressaneGodard.archiveCode}</span>
                <span className="texto-card-category">{t.texts.bressaneGodard.category}</span>
              </div>
              <h3 className="texto-card-title">{t.texts.bressaneGodard.title}</h3>
              <p className="texto-card-desc">{t.texts.bressaneGodard.description}</p>
              <div className="texto-card-footer">
                <span className="texto-card-cta">{t.textos.readButton}</span>
                <span className="texto-card-arrow" aria-hidden="true">→</span>
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
                <span className="texto-card-arrow" aria-hidden="true">→</span>
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
                <span className="texto-card-arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ REEL ============ */}
      <section className="reel" id="reel">
        <div className="reel-inner">
          {featuredReel ? (
            <div className="reel-video">
              <YouTubeEmbed url={featuredReel} title="Francisco Vidal — Reel" />
            </div>
          ) : (
            <div className="reel-placeholder">
              <span className="reel-placeholder-heading">REEL</span>
              <span className="reel-placeholder-sub">INSERIR REEL</span>
              <p className="reel-placeholder-desc">Material de atuação diante da câmera.</p>
            </div>
          )}
          <div className="reel-footer">
            <a href="#reel" className="reel-cta reel-cta--primary">{t.home.viewReel}</a>
            <a href="#contato" className="reel-cta">{t.home.requestMaterial}</a>
          </div>
        </div>
      </section>

      {/* ============ SELECTED_FILMOGRAPHY ============ */}
      <section className="filmography">
        <div className="filmography-inner">
          <div className="filmography-header">
            <span className="section-label">{t.home.filmographyLabel}</span>
          </div>
          <div className="filmography-grid">
            {siteData.filmografia.slice(0, 4).map((filme) => (
              <Link to={`/filme/${filme.slug}`} key={filme.id} className="film-card">
                <div className="film-card-meta">
                  <span className="film-card-year">{filme.year}</span>
                  <span className="film-card-type">{filme.type}</span>
                </div>
                <h3 className="film-card-title">{filme.title}</h3>
                <p className="film-card-director">dir. {filme.director}</p>
                <p className="film-card-role">{filme.role}</p>
                {filme.description && (
                  <p className="film-card-context">{filme.description}</p>
                )}
                {filme.festivals && (
                  <p className="film-card-festivals">{filme.festivals}</p>
                )}
                {filme.status && (
                  <p className="film-card-status">{filmStatus(filme.status)}</p>
                )}
              </Link>
            ))}
          </div>
          <div className="filmography-footer">
            <Link to="/filmografia" className="section-cta">{t.home.viewFullFilmography}</Link>
          </div>
        </div>
      </section>

      {/* ============ PHOTOS ============ */}
      <section className="photos">
        <div className="photos-inner">
          <div className="photos-header">
            <span className="section-label">{t.home.galleryLabel}</span>
            <Link to="/fotos" className="section-cta">{t.home.viewFullGallery}</Link>
          </div>
          <div className="photos-editorial">
            <div className="photo-item photo-area--large">
              <img src={siteData.fotos[0].url} alt={siteData.fotos[0].alt} loading="lazy" />
              <span className="photo-label">{t.photoCategories.corpo}</span>
            </div>
            <div className="photo-item photo-area--vert">
              <img src={siteData.fotos[4].url} alt={siteData.fotos[4].alt} loading="lazy" />
              <span className="photo-label">{t.photoCategories.sombra}</span>
            </div>
            <div className="photo-item photo-area--horiz">
              <img src={siteData.fotos[8].url} alt={siteData.fotos[8].alt} loading="lazy" />
              <span className="photo-label">{t.photoCategories.escuta}</span>
            </div>
            <div className="photo-item photo-area--med">
              <img src={siteData.fotos[1].url} alt={siteData.fotos[1].alt} loading="lazy" />
              <span className="photo-label">{t.photoCategories.gesto}</span>
            </div>
            <div className="photo-item photo-area--detail">
              <img src={siteData.fotos[5].url} alt={siteData.fotos[5].alt} loading="lazy" />
              <span className="photo-label">{t.photoCategories.rosto}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORMACAO ============ */}
      <section className="formacao" id="formacao">
        <div className="formacao-inner">
          <span className="section-label">{t.home.formationLabel}</span>
          <div className="formacao-table">
            <div className="formacao-row">
              <span className="formacao-period">2025</span>
              <span className="formacao-course">O Poder da Câmera: Atuação para TV e Cinema</span>
              <span className="formacao-note">Ricardo Conti + Heitor Martinez — 48h</span>
            </div>
            <div className="formacao-row">
              <span className="formacao-period">2025</span>
              <span className="formacao-course">Laboratório de Atuação para Câmera</span>
              <span className="formacao-note">Gustavo Pace — 40h</span>
            </div>
            <div className="formacao-row">
              <span className="formacao-period">2025</span>
              <span className="formacao-course">O Teatro do Não Eu</span>
              <span className="formacao-note">Rafael Infante — 36h</span>
            </div>
            <div className="formacao-row">
              <span className="formacao-period">2025–26</span>
              <span className="formacao-course">O Teatro do Não Eu — Módulo II</span>
              <span className="formacao-note">Rafael Infante — 46h</span>
            </div>
            <div className="formacao-row">
              <span className="formacao-period">2025–26</span>
              <span className="formacao-course">LABO com Patrick Sampaio</span>
              <span className="formacao-note">{t.atuacao.continuousPractice}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ASSISTENCIA_DIRECAO ============ */}
      <section className="ad-section">
        <div className="ad-inner">
          <span className="section-label">{t.home.adLabel}</span>
          <p className="ad-text">{t.home.adDesc}</p>
          <div className="ad-works">
            <div className="ad-work-item">
              <span className="ad-work-title">O Inspetor Geral</span>
              <span className="ad-work-meta">dir. Gregório Gananian — {language === 'en' ? 'Assistant Direction' : 'Assistente de Direção'} — {language === 'en' ? 'Post-production' : 'Pós-produção'}</span>
            </div>
            <div className="ad-work-item">
              <span className="ad-work-title">Canto das Amapolas</span>
              <span className="ad-work-meta">dir. Paula Gaitán — {language === 'en' ? 'Translation and Post-production' : 'Tradução e Pós-produção'} — 2023</span>
            </div>
          </div>
          <Link to="/assistencia-de-direcao" className="section-cta">{t.home.viewADWorks}</Link>
        </div>
      </section>

      {/* ============ ESCRITA ============ */}
      <section className="escrita-home">
        <div className="escrita-home-inner">
          <span className="section-label">{t.home.writingLabel}</span>
          <p className="escrita-home-desc">{t.home.writingDesc}</p>
          <Link to="/escrita" className="section-cta">{t.home.viewWritingArchive}</Link>
        </div>
      </section>

      {/* ============ CONTATO ============ */}
      <section className="contato" id="contato">
        <div className="contato-inner">
          <span className="section-label">{t.home.contactLabel}</span>
          <h2 className="contato-heading">{t.home.contactHeading}</h2>
          <p className="contato-availability">{t.home.contactAvailability}</p>
          <a href="mailto:franciscovidalcs@gmail.com" className="contato-email">franciscovidalcs@gmail.com</a>
          <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="contato-social">@franciscovidalcs</a>
          <span className="contato-location">Rio de Janeiro / São Paulo</span>
        </div>
      </section>

    </div>
  );
}
