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
          <nav className="hero-cta">
            <Link to="/sobre" className="cta-link">Sobre</Link>
            <a href="#reel" className="cta-link">Ver Reel</a>
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
                Francisco Vidal é ator e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua entrada no audiovisual aconteceu por dentro da matéria do filme: pela tradução, pela pós-produção, pela montagem e pela escuta do processo.
              </p>
              <p>
                A partir do trabalho em <em>O Canto das Amapolas</em>, de Paula Gaitán, aproximou-se de Clara Choveaux, Negro Leo e Gregório Gananian, dando início a uma trajetória construída entre bastidor, criação e presença. Trabalhou na pós-produção de <em>Aquele que Viu o Abismo</em> e, em seguida, passou a colaborar com Gregório Gananian como assistente de direção e ator em <em>O Inspetor Geral</em>, filmado no estado de São Paulo no primeiro semestre de 2024.
              </p>
              <p>
                No segundo semestre de 2024, filmou no Rio de Janeiro <em>O Mundo dos Mortos</em>, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo, longa exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes em 2025. Entre criação e cena, sua pesquisa atravessa duas dimensões complementares: a sensibilidade de quem pensa o cinema por dentro e a disponibilidade de quem se oferece ao acontecimento da câmera.
              </p>
              <p>
                Na atuação, busca presença, escuta e precisão — um corpo atento ao outro, ao espaço, ao silêncio e ao ritmo singular de cada direção. Sua formação continuada, realizada entre a CAL, laboratórios e oficinas especializadas, aprofunda esse percurso: atuação para câmera, construção de personagem, repertório, método, escuta e prontidão para o set.
              </p>
            </div>
          </div>
          <aside className="dossier-highlights">
            <span className="section-label">PERFIL</span>
            <ul className="highlights-list">
              <li className="highlight-item">
                <span className="highlight-label">Base</span>
                <span className="highlight-value">Rio de Janeiro</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Funções</span>
                <span className="highlight-value">Ator · Cineasta · Assistente de Direção</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Foco</span>
                <span className="highlight-value">Presença · Escuta · Corpo · Câmera · Processo</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Trabalhos recentes</span>
                <span className="highlight-value">O Mundo dos Mortos · O Inspetor Geral</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Formação recente</span>
                <span className="highlight-value">CAL · Rafael Infante · Patrick Sampaio · Joana Medeiros · Julia Burnier · Walter Lima Jr.</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-label">Disponível para</span>
                <span className="highlight-value">Longas, curtas, projetos híbridos, cinema autoral e audiovisual experimental</span>
              </li>
            </ul>
          </aside>
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
            <a href="#reel" className="reel-cta reel-cta--primary">Ver reel</a>
            <a href="#contato" className="reel-cta">Solicitar material →</a>
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
            {siteData.filmografia.slice(0, 4).map((filme) => (
              <Link to={`/filme/${filme.slug}`} key={filme.id} className="film-card">
                <div className="film-card-meta">
                  <span className="film-card-year">{filme.year}</span>
                  <span className="film-card-type">{filme.type}</span>
                </div>
                <h3 className="film-card-title">{filme.title}</h3>
                <p className="film-card-director">dir. {filme.director}</p>
                <p className="film-card-role">{filme.role}</p>
                <p className="film-card-context">{filme.description}</p>
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
          <div className="photos-editorial">
            <div className="photo-item photo-area--large">
              <img src={siteData.fotos[0].url} alt={siteData.fotos[0].alt} loading="lazy" />
              <span className="photo-label">CORPO</span>
            </div>
            <div className="photo-item photo-area--vert">
              <img src={siteData.fotos[4].url} alt={siteData.fotos[4].alt} loading="lazy" />
              <span className="photo-label">SOMBRA</span>
            </div>
            <div className="photo-item photo-area--horiz">
              <img src={siteData.fotos[8].url} alt={siteData.fotos[8].alt} loading="lazy" />
              <span className="photo-label">ESCUTA</span>
            </div>
            <div className="photo-item photo-area--med">
              <img src={siteData.fotos[1].url} alt={siteData.fotos[1].alt} loading="lazy" />
              <span className="photo-label">GESTO</span>
            </div>
            <div className="photo-item photo-area--detail">
              <img src={siteData.fotos[5].url} alt={siteData.fotos[5].alt} loading="lazy" />
              <span className="photo-label">ROSTO</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORMACAO ============ */}
      <section className="formacao" id="formacao">
        <div className="formacao-inner">
          <span className="section-label">FORMAÇÃO 2025–2026</span>
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
              <span className="formacao-note">Prática contínua: gravar / assistir / regravar</span>
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
          <h2 className="contato-heading">Vamos conversar</h2>
          <p className="contato-availability">
            Disponível para longas, curtas, documentários e trabalhos híbridos.
          </p>
          <a href="mailto:franciscovidalcs@gmail.com" className="contato-email">franciscovidalcs@gmail.com</a>
          <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="contato-social">@franciscovidalcs</a>
          <span className="contato-location">Rio de Janeiro / São Paulo</span>
        </div>
      </section>

    </div>
  );
}
