import { Link } from 'react-router-dom';
import './AssistenciaDirecao.css';

export function AssistenciaDirecao() {
  return (
    <div className="ad-page">

      {/* HEADER */}
      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">Assistência de Direção</h1>
          <p className="page-intro">
            Organização, comunicação e sustentação prática da mise-en-scène.
          </p>
        </div>
      </header>

      {/* DESCRICAO */}
      <section className="ad-descricao">
        <div className="container">
          <div className="ad-descricao-grid">
            <div className="ad-descricao-text">
              <p className="ad-lead">
                Como assistente de direção, Francisco atua na organização do processo de filmagem, na comunicação entre direção e equipe, no acompanhamento de set e na sustentação prática da mise-en-scène.
              </p>
              <p>
                A experiência como ator e a familiaridade com o processo criativo do diretor permitem uma mediação singular entre a visão artística e a execução prática — entendendo o ritmo do set e garantindo que o espaço de criação se mantenha protegido.
              </p>
            </div>
            <div className="ad-descricao-aside">
              <div className="ad-competencias">
                <h3 className="ad-competencias-title">Competências</h3>
                <ul className="ad-competencias-list">
                  <li>Organização do processo de filmagem</li>
                  <li>Comunicação equipe-direção</li>
                  <li>Acompanhamento e continuidade de set</li>
                  <li>Coordenação de elenco e figuração</li>
                  <li>Gestão de cronograma de filmagem</li>
                  <li>Sustentação prática da mise-en-scène</li>
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
            <span className="label">Créditos</span>
          </div>
          <div className="ad-creditos-list">
            <div className="ad-credito-item">
              <div className="ad-credito-info">
                <h3 className="ad-credito-title">O Inspetor Geral</h3>
                <p className="ad-credito-meta">Dir. Gregório Gananian · Zaum / Anacoluto / Satyros</p>
                <p className="ad-credito-desc">Assistência de direção na pós-produção. Longa-metragem de ficção, adaptação de Nikolai Gogol.</p>
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
            <h2 className="ad-contato-title">Disponível para novos projetos</h2>
            <p className="ad-contato-text">
              Aberto a trabalhos de assistência de direção em longas, curtas e séries — com interesse particular em projetos de cinema autoral e processos colaborativos.
            </p>
            <div className="ad-contato-links">
              <a href="mailto:franciscovidalcs@gmail.com" className="ad-contato-email">
                franciscovidalcs@gmail.com
              </a>
              <Link to="/filmografia" className="ad-contato-filmografia">
                Ver filmografia completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
