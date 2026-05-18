import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Atuacao.css';

export function Atuacao() {
  const featuredReel = siteData.reel.videos[0];

  return (
    <div className="atuacao-page">

      {/* Full-width cinematic still */}
      <section className="atuacao-hero">
        <img
          src="/images/photoshoot/francisco-vidal-photoshoot-16.webp"
          alt="Francisco Vidal"
        />
        <div className="atuacao-hero-veil" />
        <span className="atuacao-hero-label">ATUACAO</span>
      </section>

      {/* Statement */}
      <section className="atuacao-statement">
        <p className="atuacao-statement-text">
          Como ator, Francisco Vidal trabalha a partir da escuta, da presenca fisica e da relacao entre corpo, camera e espaco. Sua pesquisa atravessa estados de atencao, silencio, vulnerabilidade e transformacao diante da imagem.
        </p>
      </section>

      {/* Reel */}
      {featuredReel && (
        <section className="atuacao-reel">
          <div className="atuacao-reel-header">
            <span className="atuacao-mono">REEL</span>
          </div>
          <div className="atuacao-reel-video">
            <YouTubeEmbed url={featuredReel} title="Francisco Vidal — Reel" />
          </div>
        </section>
      )}

      {/* Contact sheet strip */}
      <section className="atuacao-strip">
        <div className="atuacao-strip-grid">
          <div className="atuacao-strip-item">
            <img
              src="/images/photoshoot/francisco-vidal-photoshoot-17.webp"
              alt="Francisco Vidal — Corpo"
              loading="lazy"
            />
          </div>
          <div className="atuacao-strip-item atuacao-strip-item--wide">
            <img
              src="/images/photoshoot/francisco-vidal-photoshoot-18.webp"
              alt="Francisco Vidal — Presenca"
              loading="lazy"
            />
          </div>
          <div className="atuacao-strip-item">
            <img
              src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg"
              alt="Francisco Vidal em O Mundo dos Mortos"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="atuacao-formation">
        <div className="atuacao-formation-header">
          <span className="atuacao-mono">FORMACAO 2025–2026</span>
        </div>
        <div className="atuacao-formation-list">
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">06 mai → 03 jul 2025</span>
            <span className="atuacao-formation-name">O Poder da Camera: Atuacao para TV e Cinema</span>
            <span className="atuacao-formation-info">Ricardo Conti + Heitor Martinez · 48h</span>
          </div>
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">20 mai → 11 jul 2025</span>
            <span className="atuacao-formation-name">Laboratorio de Atuacao para Camera</span>
            <span className="atuacao-formation-info">Gustavo Pace · 40h</span>
          </div>
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">31 mai e 19 jul 2025</span>
            <span className="atuacao-formation-name">Interpretacao para TV e Cinema</span>
            <span className="atuacao-formation-info">Andrea Avancini · 21h</span>
          </div>
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">04 jun → 23 jul 2025</span>
            <span className="atuacao-formation-name">O Teatro do Nao Eu</span>
            <span className="atuacao-formation-info">Rafael Infante · 36h</span>
          </div>
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">17 set → 17 dez 2025</span>
            <span className="atuacao-formation-name">O Teatro do Nao Eu — Modulo II</span>
            <span className="atuacao-formation-info">Rafael Infante · 46h</span>
          </div>
          <div className="atuacao-formation-item">
            <span className="atuacao-formation-date">Em curso</span>
            <span className="atuacao-formation-name">LABO com Patrick Sampaio</span>
            <span className="atuacao-formation-info">Pratica continua: gravar / assistir / regravar</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="atuacao-contact">
        <p className="atuacao-contact-text">Para trabalhos como ator — longas, curtas, documentarios e projetos experimentais.</p>
        <a href="mailto:franciscovidalcs@gmail.com" className="atuacao-contact-email">franciscovidalcs@gmail.com</a>
        <Link to="/filmografia" className="atuacao-contact-link">Filmografia →</Link>
      </section>

    </div>
  );
}
