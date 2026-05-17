import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import './Home.css';

export function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const featuredFilme = siteData.filmografia[0];

  return (
    <div className="home">

      {/* HERO — full-bleed image, text overlay */}
      <section className="hero">
        <div className="hero-image-wrap">
          <img
            src={siteData.hero.image}
            alt="Francisco Vidal"
            className={`hero-image${heroLoaded ? ' hero-image--loaded' : ''}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <div className="hero-top">
            <div className="hero-location">
              <span className="hero-location-dot" aria-hidden="true" />
              <span>Rio de Janeiro · Brasil</span>
            </div>
            <div className="hero-roles-inline" aria-label="Funções">
              <span>Ator</span>
              <span className="hero-roles-sep" aria-hidden="true">·</span>
              <span>Cineasta</span>
              <span className="hero-roles-sep" aria-hidden="true">·</span>
              <span>Assistente de Direção</span>
            </div>
          </div>

          <div className="hero-bottom">
            <h1 className="hero-name">
              Francisco<br />Vidal
            </h1>
            <div className="hero-bottom-right">
              <p className="hero-statement">{siteData.hero.bio}</p>
              <nav className="hero-cta" aria-label="Ações principais">
                <Link to="/reel" className="hero-cta-btn hero-cta-btn--primary">Ver reel</Link>
                <Link to="/fotos" className="hero-cta-btn">Ver fotos</Link>
                <a href="mailto:franciscovidalcs@gmail.com" className="hero-cta-btn">Contato</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* ATUACAO — texto manifesto */}
      <section className="home-atuacao">
        <div className="home-atuacao-inner">
          <div className="home-atuacao-number" aria-hidden="true">01</div>
          <div className="home-atuacao-body">
            <span className="label">Atuação</span>
            <p className="home-atuacao-lead">
              Como ator, Francisco Vidal trabalha a partir da escuta, da presença física e da relação entre corpo, câmera e espaço. Sua pesquisa de atuação atravessa estados de atenção, silêncio, vulnerabilidade e transformação diante da imagem.
            </p>
            <Link to="/atuacao" className="home-atuacao-link">Atuação completa →</Link>
          </div>
        </div>
      </section>

      {/* GALERIA — imagens em grade editorial assimétrica */}
      <section className="home-gallery">
        <div className="home-gallery-grid">
          <div className="home-gallery-item home-gallery-item--a">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-1.png"
              alt="Francisco Vidal"
              loading="lazy"
            />
            <span className="home-gallery-label">Rosto</span>
          </div>
          <div className="home-gallery-item home-gallery-item--b">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-2.png"
              alt="Francisco Vidal"
              loading="lazy"
            />
            <span className="home-gallery-label">Corpo</span>
          </div>
          <div className="home-gallery-item home-gallery-item--c">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-3.png"
              alt="Francisco Vidal"
              loading="lazy"
            />
            <span className="home-gallery-label">Presença</span>
          </div>
          <div className="home-gallery-item home-gallery-item--d">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg"
              alt="Francisco Vidal em O Mundo dos Mortos"
              loading="lazy"
            />
            <span className="home-gallery-label">Processo</span>
          </div>
        </div>
        <div className="home-gallery-footer">
          <Link to="/fotos" className="home-gallery-link">Galeria completa →</Link>
        </div>
      </section>

      {/* FILMOGRAFIA — carte de visite da carreira */}
      {featuredFilme && (
        <section className="home-film">
          <div className="container">
            <div className="home-film-header">
              <span className="label">Filmografia</span>
              <Link to="/filmografia" className="home-film-all">Ver todos →</Link>
            </div>
          </div>

          <Link to={`/filme/${featuredFilme.slug}`} className="home-film-card">
            <div className="home-film-image-wrap">
              <img src={featuredFilme.image} alt={featuredFilme.title} className="home-film-image" />
              <div className="home-film-vignette" aria-hidden="true" />
            </div>
            <div className="home-film-panel">
              <p className="home-film-meta">
                {featuredFilme.year} · Dir. {featuredFilme.director}
              </p>
              <h2 className="home-film-title">{featuredFilme.title}</h2>
              <div className="home-film-role-block">
                <span className="home-film-role-label">Papel</span>
                <span className="home-film-role-name">{featuredFilme.role}</span>
              </div>
              <p className="home-film-synopsis">{featuredFilme.description}</p>
              {featuredFilme.festivals && (
                <p className="home-film-festivals">{featuredFilme.festivals}</p>
              )}
              <span className="home-film-cta">Ficha completa →</span>
            </div>
          </Link>
        </section>
      )}

      {/* SOBRE — texto em coluna */}
      <section className="home-sobre">
        <div className="container">
          <div className="home-sobre-grid">
            <div className="home-sobre-left">
              <span className="label">Sobre</span>
              <p className="home-sobre-num" aria-hidden="true">02</p>
            </div>
            <div className="home-sobre-right">
              <p className="home-sobre-text">{siteData.sobre.text[0]}</p>
              <p className="home-sobre-statement">{siteData.sobre.statement}</p>
              <Link to="/sobre" className="home-sobre-link">Trajetória completa →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="home-contact">
        <div className="home-contact-inner">
          <div className="home-contact-left">
            <h2 className="home-contact-heading">
              Disponível<br />para projetos
            </h2>
          </div>
          <div className="home-contact-right">
            <p className="home-contact-body">{siteData.contato.cta}</p>
            <p className="home-contact-location">{siteData.contato.location}</p>
            <div className="home-contact-links">
              <a href={`mailto:${siteData.contato.email}`} className="home-contact-email">
                {siteData.contato.email}
              </a>
              <a
                href={siteData.contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-social"
              >
                {siteData.contato.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
