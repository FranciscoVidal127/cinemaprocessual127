import { siteData } from '../data/content';
import './Sobre.css';

export function Sobre() {
  return (
    <div className="sobre-page">

      {/* Portrait image — full width */}
      <section className="sobre-portrait">
        <img
          src={siteData.sobre.image}
          alt="Francisco Vidal"
        />
        <span className="sobre-portrait-label">SOBRE</span>
      </section>

      {/* Bio */}
      <section className="sobre-bio">
        <div className="sobre-bio-inner">
          <p className="sobre-bio-text">
            Francisco Vidal e ator, cineasta e assistente de direcao, com trajetoria ligada ao cinema autoral brasileiro. Sua formacao passa pela pratica de set, pela assistencia de direcao, pela escrita sobre cinema e por processos recentes de pesquisa em atuacao. Seu trabalho investiga a presenca do corpo diante da camera, a escuta do espaco e a colaboracao com realizadores.
          </p>
          <p className="sobre-bio-secondary">
            {siteData.sobre.statement}
          </p>
        </div>
      </section>

      {/* Pratica */}
      <section className="sobre-pratica">
        <div className="sobre-pratica-header">
          <span className="sobre-mono">PRATICA</span>
        </div>
        <div className="sobre-pratica-grid">
          <div className="sobre-pratica-item">
            <span className="sobre-pratica-title">ATUACAO</span>
            <p className="sobre-pratica-text">Disponibilidade radical ao encontro. O corpo como membrana sensivel ao outro, ao espaco e ao ritmo singular de cada realizador. Nao a construcao de personagens, mas a abertura ao que o set exige — escuta, adaptacao, presenca sustentada.</p>
          </div>
          <div className="sobre-pratica-item">
            <span className="sobre-pratica-title">REALIZACAO</span>
            <p className="sobre-pratica-text">Formado por dentro do processo — traducao, montagem, pos-producao, assistencia de direcao. Nao pela escola, mas pelo contato direto com realizadores que pensam a camera como linguagem.</p>
          </div>
          <div className="sobre-pratica-item">
            <span className="sobre-pratica-title">ASSISTENCIA DE DIRECAO</span>
            <p className="sobre-pratica-text">Organizacao do processo de filmagem, comunicacao entre equipe e direcao, acompanhamento de set. A experiencia como ator permite uma mediacao singular entre a visao artistica e a execucao pratica.</p>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="sobre-trajectory">
        <div className="sobre-trajectory-header">
          <span className="sobre-mono">CREDITOS COMO ATOR</span>
        </div>
        <div className="sobre-trajectory-list">
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-title">O Mundo dos Mortos</span>
            <span className="sobre-trajectory-role">Fabio</span>
            <span className="sobre-trajectory-meta">Dir. Pedro Tavares · 7 a 1 Filmes e Cavideo · 28a Mostra de Cinema de Tiradentes (2025)</span>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-title">O Inspetor Geral</span>
            <span className="sobre-trajectory-role">Espectro F.</span>
            <span className="sobre-trajectory-meta">Dir. Gregorio Gananian · Zaum · em pos-producao</span>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-title">Acronon</span>
            <span className="sobre-trajectory-role"></span>
            <span className="sobre-trajectory-meta">Dir. Gregorio Gananian · com Clara Choveaux · 2026</span>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="sobre-formation">
        <div className="sobre-formation-header">
          <span className="sobre-mono">FORMACAO 2025–2026</span>
        </div>
        <div className="sobre-formation-list">
          <div className="sobre-formation-item">
            <span className="sobre-formation-date">06 mai → 03 jul 2025</span>
            <span className="sobre-formation-name">O Poder da Camera: Atuacao para TV e Cinema</span>
            <span className="sobre-formation-info">Ricardo Conti + Heitor Martinez · 48h</span>
          </div>
          <div className="sobre-formation-item">
            <span className="sobre-formation-date">20 mai → 11 jul 2025</span>
            <span className="sobre-formation-name">Laboratorio de Atuacao para Camera</span>
            <span className="sobre-formation-info">Gustavo Pace · 40h</span>
          </div>
          <div className="sobre-formation-item">
            <span className="sobre-formation-date">04 jun → 23 jul 2025</span>
            <span className="sobre-formation-name">O Teatro do Nao Eu</span>
            <span className="sobre-formation-info">Rafael Infante · 36h</span>
          </div>
          <div className="sobre-formation-item">
            <span className="sobre-formation-date">17 set → 17 dez 2025</span>
            <span className="sobre-formation-name">O Teatro do Nao Eu — Modulo II</span>
            <span className="sobre-formation-info">Rafael Infante · 46h</span>
          </div>
          <div className="sobre-formation-item">
            <span className="sobre-formation-date">Em curso</span>
            <span className="sobre-formation-name">LABO com Patrick Sampaio</span>
            <span className="sobre-formation-info">Pratica continua: gravar / assistir / regravar</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sobre-contact">
        <p className="sobre-contact-body">Disponivel para longas, curtas, documentarios e trabalhos que atravessam fronteiras de forma.</p>
        <a href="mailto:franciscovidalcs@gmail.com" className="sobre-contact-email">franciscovidalcs@gmail.com</a>
        <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="sobre-contact-social">@franciscovidalcs</a>
      </section>

    </div>
  );
}
