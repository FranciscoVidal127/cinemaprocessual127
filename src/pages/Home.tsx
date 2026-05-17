import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Home.css';

export function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const featuredReel = siteData.reel.videos[0];

  return (
    <div className="home">

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-image-wrap">
          <img
            src="/images/BLOCO 1-HERO.png/image.png"
            alt="Francisco Vidal"
            className={`hero-image${heroLoaded ? ' loaded' : ''}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="hero-subtitle">Ator · Cineasta · Assistente de Direção</p>
          <h1 className="hero-name">
            Francisco<br />Vidal
          </h1>
          <p className="hero-statement">
            Presença, escuta e corpo diante da câmera.
          </p>
          <p className="hero-microprova">
            Trabalhos recentes: Acronon (2026) · O Mundo dos Mortos (2025)
          </p>
          <nav className="hero-cta">
            <a href="#reel" className="cta-link cta-link--primary">Ver Reel</a>
            <Link to="/fotos" className="cta-link">Ver Fotos</Link>
            <a href="#contato" className="cta-link">Contato</a>
          </nav>
        </div>
      </section>

      {/* ============ ABOUT_DOSSIER ============ */}
      <section className="dossier">
        <div className="dossier-inner">
          <div className="dossier-bio">
            <span className="section-label">SOBRE</span>
            <h2 className="dossier-heading">Francisco Vidal</h2>
            <div className="dossier-text">
              <p>
                Francisco Vidal é ator, cineasta e assistente de direção, baseado no Rio de Janeiro, com atuação também em São Paulo. Sua trajetória se desenvolve de dentro do cinema: pela prática de set, pela assistência de direção, pela escrita sobre cinema e pela pesquisa recente em atuação para câmera.
              </p>
              <p>
                Como ator, trabalha a partir de presença, escuta, precisão física e relação entre corpo, espaço e imagem. Sua atuação se interessa por estados de atenção, silêncio, vulnerabilidade e transformação diante da câmera.
              </p>
              <p>
                Seus trabalhos recentes incluem <em>Acronon</em> (dir. Gregorio Gananian, 2026) e <em>O Mundo dos Mortos</em> (dir. Pedro Tavares, 2025), em que interpreta Fábio. Em 2025, aprofundou sua formação com Ricardo Conti, Heitor Martinez, Gustavo Pace, Rafael Infante e Patrick Sampaio.
              </p>
              <p>
                Interessa-se por longas, curtas, documentários, obras híbridas e processos de criação autorais.
              </p>
            </div>
          </div>
          <aside className="dossier-highlights">
            <span className="section-label">PERFIL</span>
            <ul className="highlights-list">
              <li className="highlight-item">
                <span className="highlight-label">Base</span>
                <span className="highlight-value">Rio de Janeiro / São Paulo</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Funções</span>
                <span className="highlight-value">Ator · Cineasta · Assistente de Direção</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Foco</span>
                <span className="highlight-value">Atuação para câmera</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Trabalhos recentes</span>
                <span className="highlight-value">Acronon (2026) · O Mundo dos Mortos (2025)</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Formação recente</span>
                <span className="highlight-value">Ricardo Conti, Heitor Martinez, Gustavo Pace, Rafael Infante, Patrick Sampaio</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Disponível para</span>
                <span className="highlight-value">Curtas, longas, documentários e projetos híbridos</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ============ REEL ============ */}
      <section className="reel" id="reel">
        <div className="reel-inner">
          <div className="reel-header">
            <span className="section-label">REEL</span>
            <p className="reel-desc">Material de atuação diante da câmera.</p>
          </div>
          {featuredReel ? (
            <div className="reel-video">
              <YouTubeEmbed url={featuredReel} title="Francisco Vidal — Reel" />
            </div>
          ) : (
            <div className="reel-placeholder">
              <span className="reel-placeholder-text">REEL EM BREVE</span>
              <span className="reel-placeholder-sub">Inserir reel</span>
            </div>
          )}
          <div className="reel-footer">
            <a href="mailto:franciscovidalcs@gmail.com?subject=Solicitar%20material" className="section-cta">Solicitar material →</a>
          </div>
        </div>
      </section>

      {/* ============ SELECTED_FILMOGRAPHY ============ */}
      <section className="filmography">
        <div className="filmography-inner">
          <div className="filmography-header">
            <span className="section-label">FILMOGRAFIA SELECIONADA</span>
          </div>
          <div className="filmography-grid">
            {siteData.filmografia.map((filme) => (
              <Link to={`/filme/${filme.slug}`} key={filme.id} className="film-card">
                <div className="film-card-meta">
                  <span className="film-card-year">{filme.year}</span>
                  <span className="film-card-type">{filme.type}</span>
                </div>
                <h3 className="film-card-title">{filme.title}</h3>
                <p className="film-card-director">dir. {filme.director}</p>
                <p className="film-card-role">{filme.role}</p>
                {filme.festivals && (
                  <p className="film-card-festivals">{filme.festivals}</p>
                )}
                {filme.status && (
                  <p className="film-card-status">{filme.status}</p>
                )}
              </Link>
            ))}
          </div>
          <div className="filmography-footer">
            <Link to="/filmografia" className="section-cta">Ver filmografia completa →</Link>
          </div>
        </div>
      </section>

      {/* ============ PHOTOS ============ */}
      <section className="photos">
        <div className="photos-inner">
          <div className="photos-header">
            <span className="section-label">GALERIA</span>
            <Link to="/fotos" className="section-cta">Ver galeria completa →</Link>
          </div>
          <div className="photos-grid">
            {siteData.fotos.slice(0, 5).map((foto, i) => (
              <div key={foto.id} className={`photo-item photo-item--${i + 1}`}>
                <img src={foto.url} alt={foto.alt} loading="lazy" />
                <span className="photo-caption">{foto.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FORMACAO ============ */}
      <section className="formacao">
        <div className="formacao-inner">
          <span className="section-label">FORMAÇÃO 2025–2026</span>
          <h2 className="formacao-heading">Processos de atuação</h2>
          <div className="formacao-list">
            <div className="formacao-item">
              <h4 className="formacao-title">O Poder da Câmera: Atuação para TV e Cinema</h4>
              <p className="formacao-meta">Ricardo Conti + Heitor Martinez — 48h</p>
            </div>
            <div className="formacao-item">
              <h4 className="formacao-title">Laboratório de Atuação para Câmera</h4>
              <p className="formacao-meta">Gustavo Pace — 40h</p>
            </div>
            <div className="formacao-item">
              <h4 className="formacao-title">O Teatro do Não Eu</h4>
              <p className="formacao-meta">Rafael Infante — 36h</p>
            </div>
            <div className="formacao-item">
              <h4 className="formacao-title">O Teatro do Não Eu — Módulo II</h4>
              <p className="formacao-meta">Rafael Infante — 46h</p>
            </div>
            <div className="formacao-item">
              <h4 className="formacao-title">LABO com Patrick Sampaio</h4>
              <p className="formacao-meta">Prática contínua: gravar / assistir / regravar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ASSISTENCIA_DIRECAO ============ */}
      <section className="ad-section">
        <div className="ad-inner">
          <span className="section-label">ASSISTÊNCIA DE DIREÇÃO</span>
          <p className="ad-text">
            Como assistente de direção, Francisco Vidal atua na organização do processo de filmagem, na comunicação entre direção e equipe, no acompanhamento de set e na sustentação prática da mise-en-scène.
          </p>
          <div className="ad-works">
            <div className="ad-work-item">
              <span className="ad-work-title">O Inspetor Geral</span>
              <span className="ad-work-meta">dir. Gregório Gananian — Assistente de Direção — Pós-produção</span>
            </div>
            <div className="ad-work-item">
              <span className="ad-work-title">Canto das Amapolas</span>
              <span className="ad-work-meta">dir. Paula Gaitán — Tradução e Pós-produção — 2023</span>
            </div>
          </div>
          <Link to="/assistencia-de-direcao" className="section-cta">Ver trabalhos de AD →</Link>
        </div>
      </section>

      {/* ============ ESCRITA ============ */}
      <section className="escrita-home">
        <div className="escrita-home-inner">
          <span className="section-label">ESCRITA / PENSAMENTO CINEMATOGRÁFICO</span>
          <p className="escrita-home-desc">
            Textos, ensaios e entrevistas sobre cinema, imagem e processo criativo.
          </p>
          <Link to="/escrita" className="section-cta">Ver arquivo de textos →</Link>
        </div>
      </section>

      {/* ============ CONTATO ============ */}
      <section className="contato" id="contato">
        <div className="contato-inner">
          <span className="section-label">CONTATO</span>
          <h2 className="contato-heading">Disponível para projetos</h2>
          <p className="contato-body">
            Para trabalhos como ator, assistência de direção, colaborações criativas e projetos audiovisuais.
          </p>
          <div className="contato-links">
            <a href="mailto:franciscovidalcs@gmail.com" className="contato-email">franciscovidalcs@gmail.com</a>
            <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="contato-social">@franciscovidalcs</a>
          </div>
          <p className="contato-location">Rio de Janeiro / São Paulo</p>
          <p className="contato-availability">Disponível para longas, curtas, documentários e trabalhos híbridos.</p>
        </div>
      </section>

    </div>
  );
}
