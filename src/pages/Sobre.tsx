import { siteData } from '../data/content';
import './Sobre.css';

export function Sobre() {
  return (
    <div className="sobre-page">

      <header className="sobre-header">
        <div className="sobre-header-inner">
          <div className="sobre-header-meta">
            <span className="page-eyebrow">Rio de Janeiro · Brasil</span>
          </div>
          <h1 className="sobre-header-name">Francisco<br />Vidal</h1>
          <div className="sobre-header-statement">
            <p className="sobre-opening-line">
              Ator, cineasta, escritor.<br />Um único projeto de atenção.
            </p>
          </div>
        </div>
      </header>

      <section className="sobre-bio">
        <div className="container">
          <div className="sobre-bio-grid">
            <div className="sobre-bio-text">
              {siteData.sobre.text.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'sobre-bio-lead' : undefined}>{paragraph}</p>
              ))}
            </div>
            <div className="sobre-bio-image">
              <img src={siteData.sobre.image} alt="Francisco Vidal" />
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-pratica">
        <div className="container">
          <div className="sobre-pratica-inner">
            <div className="sobre-pratica-label">
              <span className="label">Prática</span>
            </div>
            <div className="sobre-pratica-body">
              <div className="sobre-pratica-item">
                <span className="sobre-pratica-num" aria-hidden="true">I</span>
                <div>
                  <h3 className="sobre-pratica-title">Atuação</h3>
                  <p className="sobre-pratica-text">Disponibilidade radical ao encontro. O corpo como membrana sensível ao outro, ao espaço e ao ritmo singular de cada realizador. Não a construção de personagens, mas a abertura ao que o set exige — escuta, adaptação, presença sustentada.</p>
                </div>
              </div>
              <div className="sobre-pratica-item">
                <span className="sobre-pratica-num" aria-hidden="true">II</span>
                <div>
                  <h3 className="sobre-pratica-title">Realização</h3>
                  <p className="sobre-pratica-text">Formado por dentro do processo — tradução, montagem, pós-produção, assistência de direção. Não pela escola, mas pelo contato direto com realizadores que pensam a câmera como linguagem e o set como lugar de investigação.</p>
                </div>
              </div>
              <div className="sobre-pratica-item">
                <span className="sobre-pratica-num" aria-hidden="true">III</span>
                <div>
                  <h3 className="sobre-pratica-title">Escrita</h3>
                  <p className="sobre-pratica-text">Crítica, tradução, ensaio. Escrever sobre cinema é continuar a ver — com outra velocidade. Traduzir é habitar outra língua cinematográfica de dentro. Não uma atividade paralela: é o mesmo olhar, em outro meio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-trajetoria">
        <div className="container">
          <div className="sobre-trajetoria-header">
            <h2 className="sobre-trajetoria-title">Trajetória</h2>
          </div>
          <div className="sobre-trajetoria-body">

            <div className="trajetoria-entry">
              <div className="trajetoria-entry-label">
                <span className="label">Entrada no cinema</span>
              </div>
              <div className="trajetoria-entry-content">
                <p>Em 2023, trabalhou com tradução e pós-produção no longa <em>Canto das Amapolas</em> (dir. Paula Gaitán) — experiência que não foi apenas formação, mas revelação: o cinema como tempo, montagem, relação entre corpos. Dali saiu com uma pergunta nova sobre o que queria fazer diante da câmera.</p>
              </div>
            </div>

            <div className="trajetoria-entry">
              <div className="trajetoria-entry-label">
                <span className="label">Créditos como ator</span>
              </div>
              <div className="trajetoria-entry-content">
                <ul className="trajetoria-credits">
                  <li>
                    <strong>O Inspetor Geral</strong>
                    <span className="trajetoria-credits-meta">Dir. Gregório Gananian · Zaum · filmado maio–junho/2024 · em pós-produção</span>
                  </li>
                  <li>
                    <strong>O Mundo dos Mortos</strong>
                    <span className="trajetoria-credits-meta">Dir. Pedro Tavares · 7 a 1 Filmes e Cavideo · 28ª Mostra de Cinema de Tiradentes (2025)</span>
                  </li>
                  <li>
                    <strong>Acronon</strong>
                    <span className="trajetoria-credits-meta">Dir. Gregório Gananian · com Clara Choveaux · 2026</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="trajetoria-entry">
              <div className="trajetoria-entry-label">
                <span className="label">Modo de trabalho</span>
              </div>
              <div className="trajetoria-entry-content">
                <p>Tem interesse particular em realizadores com visão autoral — que usam a câmera como instrumento de pensamento e o ator como parceiro de uma descoberta, não como executor de uma ideia já formada. Trabalha com flexibilidade de registro: ficção, documentário, experimental. O que importa é a seriedade com a linguagem.</p>
              </div>
            </div>

            <div className="trajetoria-entry">
              <div className="trajetoria-entry-label">
                <span className="label">Formação 2025–2026</span>
              </div>
              <div className="trajetoria-entry-content">
                <ul className="trajetoria-formation">
                  <li>
                    <span className="trajetoria-formation-date">06 mai → 03 jul 2025</span>
                    <span className="trajetoria-formation-name">O Poder da Câmera: Atuação para TV e Cinema</span>
                    <span className="trajetoria-formation-info">Ricardo Conti + Heitor Martinez · 48h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">20 mai → 11 jul 2025</span>
                    <span className="trajetoria-formation-name">Laboratório de Atuação para Câmera</span>
                    <span className="trajetoria-formation-info">Gustavo Pace · 40h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">31 mai e 19 jul 2025</span>
                    <span className="trajetoria-formation-name">Interpretação para TV e Cinema</span>
                    <span className="trajetoria-formation-info">Andrea Avancini · 21h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">04 jun → 23 jul 2025</span>
                    <span className="trajetoria-formation-name">O Teatro do Não Eu</span>
                    <span className="trajetoria-formation-info">Rafael Infante · 36h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">17 set → 17 dez 2025</span>
                    <span className="trajetoria-formation-name">O Teatro do Não Eu — Módulo II</span>
                    <span className="trajetoria-formation-info">Rafael Infante · 46h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">18 dez 2025</span>
                    <span className="trajetoria-formation-name">Atuando para o Audiovisual</span>
                    <span className="trajetoria-formation-info">Mentoria Walter Lima · 12h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">12 → 16 jan 2026</span>
                    <span className="trajetoria-formation-name">Desenvolvimento de Cenas, Personagens e Repertório</span>
                    <span className="trajetoria-formation-info">Rafael Infante · 14h</span>
                  </li>
                  <li>
                    <span className="trajetoria-formation-date">Em curso</span>
                    <span className="trajetoria-formation-name">LABO com Patrick Sampaio</span>
                    <span className="trajetoria-formation-info">Prática contínua: gravar / assistir / regravar</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="sobre-encontro">
        <div className="container">
          <div className="sobre-encontro-inner">
            <div className="sobre-encontro-left">
              <span className="label">Contato</span>
            </div>
            <div className="sobre-encontro-right">
              <h2 className="sobre-encontro-title">Disponível para<br />o próximo projeto</h2>
              <div className="sobre-encontro-body">
                <p>Estou em atividade contínua como ator — aberto a longas, curtas, documentários e trabalhos que atravessam fronteiras de forma. O que orienta o interesse não é o formato, mas a qualidade da visão: realizadores que pensam o cinema como linguagem e o set como espaço de descoberta.</p>
                <p>Também estou aberto a encontros que não têm nome ainda — conversas sobre crítica, colaborações editoriais, projetos que precisam de alguém que entende o cinema de dentro.</p>
                <p>Se algo aqui ressoa com o que você faz — escreva.</p>
              </div>
              <div className="sobre-encontro-links">
                <a href="mailto:franciscovidalcs@gmail.com" className="sobre-encontro-email">
                  franciscovidalcs@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/franciscovidalcs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sobre-encontro-instagram"
                >
                  @franciscovidalcs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
