import { siteData } from '../data/content';
import './Sobre.css';

export function Sobre() {
  return (
    <div className="sobre-page">

      <header className="page-header">
        <div className="page-header-inner">
          <span className="page-eyebrow">Francisco Vidal</span>
          <h1 className="page-title">Sobre</h1>
          <p className="page-intro">Rio de Janeiro. Atuação, realização, escrita.</p>
        </div>
      </header>

      <section className="sobre-bio">
        <div className="container">
          <div className="sobre-bio-grid">
            <div className="sobre-bio-text">
              {siteData.sobre.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="sobre-bio-image">
              <img src={siteData.sobre.image} alt="Francisco Vidal" />
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
                <p>Em 2023, trabalhou com tradução e pós-produção no longa <em>Canto das Amapolas</em> (dir. Paula Gaitán), experiência que consolidou sua relação com o cinema como linguagem e processo e impulsionou sua transição para a atuação.</p>
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
                <span className="label">Pesquisa</span>
              </div>
              <div className="trajetoria-entry-content">
                <p>Seu trabalho busca uma atuação de alta presença e escuta, com flexibilidade para diferentes estilos de direção autoral — mantendo precisão, adaptação e disponibilidade. O corpo como membrana: sensível ao outro, ao espaço, ao ritmo de cada realizador.</p>
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
              <span className="label">Disponibilidade</span>
            </div>
            <div className="sobre-encontro-right">
              <h2 className="sobre-encontro-title">Aberto ao encontro</h2>
              <div className="sobre-encontro-body">
                <p>Estou em atividade contínua como ator e estou disponível para projetos de cinema — de longas e curtas de ficção a documentários e trabalhos experimentais. Tenho interesse particular em diretores com visão autoral, em projetos que levem a linguagem cinematográfica a sério.</p>
                <p>Também escrevo sobre cinema e estou aberto a colaborações editoriais, diálogos sobre crítica e tradução, e encontros que não se enquadram em categorias óbvias.</p>
                <p>Se o que você viu aqui ressoa com algo que você faz ou quer fazer — escreva.</p>
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
