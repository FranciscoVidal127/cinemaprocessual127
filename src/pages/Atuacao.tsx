import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Atuacao.css';

export function Atuacao() {
  return (
    <div className="atuacao-page">

      {/* HEADER */}
      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">Atuação</h1>
          <p className="page-intro">
            Presença, escuta, corpo e transformação diante da câmera. A atuação como investigação contínua.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="atuacao-intro">
        <div className="container">
          <div className="atuacao-intro-grid">
            <div className="atuacao-intro-text">
              <p className="atuacao-lead">
                O que busca na atuação não é a construção de personagens, mas a disponibilidade radical ao encontro: o corpo como membrana sensível ao outro, ao espaço, ao ritmo singular de cada realizador.
              </p>
              <p>
                Não uma identidade fixa — um ator em processo contínuo, que entende o set como lugar de escuta antes de tudo. Trabalha com flexibilidade de registro: ficção, documentário, experimental. O que importa é a seriedade com a linguagem.
              </p>
            </div>
            <div className="atuacao-intro-image">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-1.png"
                alt="Francisco Vidal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="atuacao-reel">
        <div className="container">
          <div className="atuacao-section-header">
            <span className="label">Reel</span>
          </div>
          <div className="atuacao-reel-video">
            <YouTubeEmbed url={siteData.reel.videos[0]} title="Reel - Francisco Vidal" />
          </div>
          <div className="atuacao-reel-footer">
            <Link to="/reel" className="atuacao-link">Ver reel completo →</Link>
          </div>
        </div>
      </section>

      {/* FOTOS */}
      <section className="atuacao-fotos">
        <div className="container">
          <div className="atuacao-section-header">
            <span className="label">Em cena</span>
          </div>
          <div className="atuacao-fotos-grid">
            <div className="atuacao-foto-item">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-2.png"
                alt="Francisco Vidal"
                loading="lazy"
              />
            </div>
            <div className="atuacao-foto-item">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/photoshoot-new-3.png"
                alt="Francisco Vidal"
                loading="lazy"
              />
            </div>
            <div className="atuacao-foto-item">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg"
                alt="Francisco Vidal em O Mundo dos Mortos"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORMACAO */}
      <section className="atuacao-formacao">
        <div className="container">
          <div className="atuacao-section-header">
            <span className="label">Formação recente</span>
          </div>
          <p className="atuacao-formacao-intro">
            Pesquisa contínua de atuação para câmera, presença cênica e corpo no espaço cinematográfico.
          </p>
          <div className="atuacao-formacao-list">
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">06 mai → 03 jul 2025</span>
              <span className="atuacao-formacao-name">O Poder da Câmera: Atuação para TV e Cinema</span>
              <span className="atuacao-formacao-info">Ricardo Conti + Heitor Martinez · 48h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">20 mai → 11 jul 2025</span>
              <span className="atuacao-formacao-name">Laboratório de Atuação para Câmera</span>
              <span className="atuacao-formacao-info">Gustavo Pace · 40h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">31 mai e 19 jul 2025</span>
              <span className="atuacao-formacao-name">Interpretação para TV e Cinema</span>
              <span className="atuacao-formacao-info">Andrea Avancini · 21h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">04 jun → 23 jul 2025</span>
              <span className="atuacao-formacao-name">O Teatro do Não Eu</span>
              <span className="atuacao-formacao-info">Rafael Infante · 36h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">17 set → 17 dez 2025</span>
              <span className="atuacao-formacao-name">O Teatro do Não Eu — Módulo II</span>
              <span className="atuacao-formacao-info">Rafael Infante · 46h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">18 dez 2025</span>
              <span className="atuacao-formacao-name">Atuando para o Audiovisual</span>
              <span className="atuacao-formacao-info">Mentoria Walter Lima · 12h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">12 → 16 jan 2026</span>
              <span className="atuacao-formacao-name">Desenvolvimento de Cenas, Personagens e Repertório</span>
              <span className="atuacao-formacao-info">Rafael Infante · 14h</span>
            </div>
            <div className="atuacao-formacao-item">
              <span className="atuacao-formacao-date">Em curso</span>
              <span className="atuacao-formacao-name">LABO com Patrick Sampaio</span>
              <span className="atuacao-formacao-info">Prática contínua: gravar / assistir / regravar</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="atuacao-contato">
        <div className="container">
          <div className="atuacao-contato-inner">
            <h2 className="atuacao-contato-title">Disponível para projetos</h2>
            <p className="atuacao-contato-text">
              Aberto a longas, curtas, séries, documentários e trabalhos que atravessam fronteiras de forma. O que orienta o interesse não é o formato, mas a qualidade da visão.
            </p>
            <a href="mailto:franciscovidalcs@gmail.com" className="atuacao-contato-email">
              franciscovidalcs@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
