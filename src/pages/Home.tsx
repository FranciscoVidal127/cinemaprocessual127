import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import './Home.css';

export function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const featuredFilme = siteData.filmografia[0];

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-grid">

            <div className="hero-left">
              <div className="hero-location">
                <span className="hero-location-dot" aria-hidden="true" />
                <span>Rio de Janeiro · Brasil</span>
              </div>

              <h1 className="hero-name">
                <span className="hero-name-first">Francisco</span>
                <span className="hero-name-last">Vidal</span>
              </h1>

              <p className="hero-title">{siteData.hero.title}</p>

              <p className="hero-statement">{siteData.hero.bio}</p>

              <nav className="hero-cta" aria-label="Ações principais">
                <Link to="/reel" className="hero-cta-btn hero-cta-btn--primary">Ver reel</Link>
                <Link to="/fotos" className="hero-cta-btn">Ver fotos</Link>
                <a href="mailto:franciscovidalcs@gmail.com" className="hero-cta-btn">Contato</a>
              </nav>
            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <img
                  src={siteData.hero.image}
                  alt="Francisco Vidal, ator e cineasta."
                  className={`hero-image${heroLoaded ? ' hero-image--loaded' : ''}`}
                  onLoad={() => setHeroLoaded(true)}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* ATUACAO */}
      <section className="home-atuacao">
        <div className="container">
          <div className="home-atuacao-inner">
            <div className="home-atuacao-label">
              <span className="label">Atuação</span>
            </div>
            <div className="home-atuacao-body">
              <p className="home-atuacao-lead">
                Como ator, Francisco Vidal trabalha a partir da escuta, da presença física e da relação entre corpo, câmera e espaço. Sua pesquisa de atuação atravessa estados de atenção, silêncio, vulnerabilidade e transformação diante da imagem.
              </p>
              <Link to="/atuacao" className="home-atuacao-link">
                Ver atuação completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="home-gallery">
        <div className="home-gallery-inner">
          <div className="home-gallery-grid">
            <div className="home-gallery-item home-gallery-item--large">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-1.png"
                alt="Francisco Vidal"
                loading="lazy"
              />
              <span className="home-gallery-category">Rosto</span>
            </div>
            <div className="home-gallery-item home-gallery-item--medium">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-2.png"
                alt="Francisco Vidal"
                loading="lazy"
              />
              <span className="home-gallery-category">Corpo</span>
            </div>
            <div className="home-gallery-item home-gallery-item--medium">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-3.png"
                alt="Francisco Vidal"
                loading="lazy"
              />
              <span className="home-gallery-category">Presença</span>
            </div>
          </div>
          <div className="home-gallery-footer">
            <Link to="/fotos" className="home-gallery-link">Galeria completa →</Link>
          </div>
        </div>
      </section>

      {/* FILMOGRAFIA */}
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
              <div className="home-film-image-vignette" aria-hidden="true" />
            </div>
            <div className="home-film-overlay-panel">
              <div className="home-film-overlay-inner">
                <p className="home-film-meta">
                  {featuredFilme.year} · Dir. {featuredFilme.director}
                </p>
                <h2 className="home-film-title">{featuredFilme.title}</h2>
                <p className="home-film-role-label">Papel</p>
                <p className="home-film-role-name">{featuredFilme.role}</p>
                <p className="home-film-synopsis">{featuredFilme.description}</p>
                {featuredFilme.festivals && (
                  <p className="home-film-festivals">{featuredFilme.festivals}</p>
                )}
                <span className="home-film-cta">Ficha completa →</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* SOBRE */}
      <section className="home-sobre">
        <div className="container">
          <div className="home-sobre-inner">
            <div className="home-sobre-label">
              <span className="label">Sobre</span>
            </div>
            <div className="home-sobre-body">
              <p className="home-sobre-text">
                {siteData.sobre.text[0]}
              </p>
              <p className="home-sobre-statement">
                {siteData.sobre.statement}
              </p>
              <Link to="/sobre" className="home-sobre-link">
                Trajetória completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="home-contact">
        <div className="container">
          <div className="home-contact-inner">
            <div className="home-contact-text">
              <h2 className="home-contact-heading">Disponível para projetos</h2>
              <p className="home-contact-body">
                {siteData.contato.cta}
              </p>
              <p className="home-contact-location">
                {siteData.contato.location}
              </p>
            </div>
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
