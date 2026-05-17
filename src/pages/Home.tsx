import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Home.css';

export function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const featuredFilme = siteData.filmografia[0];
  const featuredReel = siteData.reel.videos[0];

  return (
    <div className="home">

      {/* SCENE 01 — OPENING */}
      <section className="scene-opening">
        <div className="scene-opening-image-wrap">
          <img
            src="/images/BLOCO 1-HERO.png/image.png"
            alt="Francisco Vidal"
            className={`scene-opening-image${heroLoaded ? ' loaded' : ''}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="scene-opening-veil" aria-hidden="true" />
        </div>

        <div className="scene-opening-roles" aria-label="Funcoes">
          <span>ATOR</span>
          <span>CINEASTA</span>
          <span>ASSISTENTE DE DIRECAO</span>
        </div>

        <div className="scene-opening-content">
          <h1 className="scene-opening-name">
            Francisco<br />Vidal
          </h1>
          <p className="scene-opening-statement">
            Presenca, escuta e corpo diante da camera.
          </p>
        </div>

        <nav className="scene-opening-cta">
          <Link to="/reel" className="cta-link">Ver Reel</Link>
          <Link to="/fotos" className="cta-link">Ver Fotos</Link>
          <a href="mailto:franciscovidalcs@gmail.com" className="cta-link">Contato</a>
        </nav>
      </section>

      {/* SCENE 02 — FACE / BODY / CAMERA */}
      <section className="scene-presence">
        <div className="scene-presence-grid">
          <div className="scene-presence-image">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-1.png"
              alt="Francisco Vidal — Rosto"
              loading="lazy"
            />
          </div>
          <div className="scene-presence-text">
            <div className="scene-presence-words">
              <span className="presence-word">ESCUTA.</span>
              <span className="presence-word">PRESENCA.</span>
              <span className="presence-word">CORPO DIANTE DA CAMERA.</span>
            </div>
            <div className="scene-presence-detail">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-3.png"
                alt="Francisco Vidal — Presenca"
                loading="lazy"
              />
            </div>
            <p className="scene-presence-quote">
              Como ator, Francisco Vidal trabalha a partir da escuta, da presenca fisica e da relacao entre corpo, camera e espaco. Sua pesquisa atravessa estados de atencao, silencio, vulnerabilidade e transformacao diante da imagem.
            </p>
            <Link to="/atuacao" className="scene-presence-link">Atuacao →</Link>
          </div>
        </div>
      </section>

      {/* SCENE 03 — CONTACT SHEET */}
      <section className="scene-contact-sheet">
        <div className="scene-contact-sheet-header">
          <span className="mono-label">GALERIA / ENSAIO</span>
          <Link to="/fotos" className="mono-link">Ver completa →</Link>
        </div>
        <div className="contact-sheet-grid">
          {siteData.fotos.map((foto, i) => (
            <div
              key={foto.id}
              className={`contact-sheet-item contact-sheet-item--${i + 1}`}
            >
              <img src={foto.url} alt={foto.alt} loading="lazy" />
              <span className="contact-sheet-caption">{foto.category.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SCENE 04 — REEL */}
      <section className="scene-reel">
        <div className="scene-reel-label">
          <span className="mono-label">REEL</span>
        </div>
        {featuredReel ? (
          <div className="scene-reel-video">
            <YouTubeEmbed url={featuredReel} title="Francisco Vidal — Reel" />
          </div>
        ) : (
          <div className="scene-reel-placeholder">
            <h2>Reel em breve</h2>
          </div>
        )}
        <p className="scene-reel-desc">{siteData.reel.description}</p>
      </section>

      {/* SCENE 05 — FILMOGRAFIA */}
      {featuredFilme && (
        <section className="scene-film">
          <Link to={`/filme/${featuredFilme.slug}`} className="scene-film-link">
            <div className="scene-film-image-wrap">
              <img
                src={featuredFilme.image}
                alt={featuredFilme.title}
                loading="lazy"
                className="scene-film-image"
              />
              <div className="scene-film-overlay" aria-hidden="true" />
            </div>
            <div className="scene-film-info">
              <span className="mono-label">{featuredFilme.year} · DIR. {featuredFilme.director.toUpperCase()}</span>
              <h2 className="scene-film-title">{featuredFilme.title}</h2>
              <span className="scene-film-role">{featuredFilme.role}</span>
              {featuredFilme.festivals && (
                <span className="scene-film-festival">{featuredFilme.festivals}</span>
              )}
            </div>
          </Link>
          <div className="scene-film-footer">
            <Link to="/filmografia" className="mono-link">Filmografia completa →</Link>
          </div>
        </section>
      )}

      {/* SCENE 06 — CONTATO */}
      <section className="scene-contact">
        <span className="scene-contact-eyebrow">CONTATO</span>
        <h2 className="scene-contact-heading">Disponivel<br />para projetos</h2>
        <p className="scene-contact-body">{siteData.contato.cta}</p>
        <div className="scene-contact-links">
          <a href={`mailto:${siteData.contato.email}`} className="scene-contact-email">{siteData.contato.email}</a>
          <a href={siteData.contato.instagram} target="_blank" rel="noopener noreferrer" className="scene-contact-social">{siteData.contato.instagramHandle}</a>
        </div>
        <span className="scene-contact-location">{siteData.contato.location}</span>
      </section>

    </div>
  );
}
