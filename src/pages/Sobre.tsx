import { siteData } from '../data/content';
import './Sobre.css';

export function Sobre() {
  return (
    <div className="sobre-page">

      {/* Portrait image — full width */}
      <section className="sobre-portrait">
        <picture>
          <source srcSet={siteData.sobre.image} type="image/webp" />
          <img
            src={siteData.sobre.image}
            alt="Francisco Vidal"
          />
        </picture>
        <span className="sobre-portrait-label">SOBRE</span>
      </section>

      {/* Bio */}
      <section className="sobre-bio">
        <div className="about-container">
          <div className="about-text">
            <p className="sobre-bio-text">
              Francisco Vidal é ator, assistente de direção e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua trajetória começou "por trás" da câmera: trabalhou com tradução, montagem e pós-produção antes de chegar à atuação.
            </p>
            <p className="sobre-bio-text">
              Colaborou com Paula Gaitán na pós-produção de <em>O Canto das Amapolas</em>, conhecendo Clara Choveaux, Negro Leo e Gregório Gananian. Em seguida, trabalhou na pós de <em>Aquele que Viu o Abismo</em> e, em 2024, foi assistente de direção e ator no longa <em>O Inspetor Geral</em>.
            </p>
            <p className="sobre-bio-text">
              Nos ensaios e filmes, sua pesquisa alia duas dimensões complementares: a sensibilidade de quem pensa o cinema por dentro e a entrega de quem se oferece ao acontecimento diante da câmera. Na atuação, busca presença, escuta e precisão — um corpo atento ao outro, ao espaço e ao silêncio.
            </p>
          </div>
          <aside className="profile-block">
            <span className="profile-block-label">PERFIL</span>
            <ul className="profile-block-list">
              <li className="profile-block-item">
                <span className="profile-block-item-label">Base</span>
                <span className="profile-block-item-value">Rio de Janeiro</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">Funções</span>
                <span className="profile-block-item-value">Ator · Cineasta · Assistente de Direção</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">Foco</span>
                <span className="profile-block-item-value">Presença · Escuta · Corpo · Câmera</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">Trabalhos recentes</span>
                <span className="profile-block-item-value">Música de Invenção (2025) · O Mundo dos Mortos (2025) · O Inspetor Geral (2024)</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">Formação recente</span>
                <span className="profile-block-item-value">CAL · Rafael Infante · Patrick Sampaio · Joana Medeiros · Julia Burnier · Walter Lima Jr.</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">Disponível para</span>
                <span className="profile-block-item-value">Curtas, longas, documentários e projetos híbridos</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Trajetoria */}
      <section className="sobre-trajectory">
        <div className="sobre-trajectory-header">
          <span className="sobre-mono">TRAJETÓRIA</span>
        </div>
        <div className="sobre-trajectory-list">
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">2023</span>
            <p className="sobre-trajectory-text">
              Trabalha com Paula Gaitán na pós-produção de <em>O Canto das Amapolas</em>, vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes. A partir desse processo, aproxima-se de Clara Choveaux, Negro Leo e Gregório Gananian.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">2023–2024</span>
            <p className="sobre-trajectory-text">
              Atua na pós-produção de <em>Aquele que Viu o Abismo</em>, de Gregório Gananian e Negro Leo, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes em 2024.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Início de 2024</span>
            <p className="sobre-trajectory-text">
              É convidado por Gregório Gananian a participar de <em>O Inspetor Geral</em> em duas frentes simultâneas: como assistente na pré-produção e como ator no elenco do longa.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Primeiro semestre de 2024</span>
            <p className="sobre-trajectory-text">
              Filma <em>O Inspetor Geral</em>, adaptação livre da peça de Nikolai Gogol transposta para o Brasil contemporâneo, no estado de São Paulo.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Segundo semestre de 2024</span>
            <p className="sobre-trajectory-text">
              Filma no Rio de Janeiro <em>O Mundo dos Mortos</em>, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">2025</span>
            <p className="sobre-trajectory-text">
              <em>O Mundo dos Mortos</em> é exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Março–dezembro de 2025</span>
            <p className="sobre-trajectory-text">
              Mantém um percurso contínuo de formação na CAL — Casa das Artes de Laranjeiras, com foco em atuação para câmera, repertório, presença cênica, escuta e construção de personagem. O processo teve como eixo os dois módulos de <em>O Teatro do Não Eu</em>, com Rafael Infante, além de estudos com Ricardo Cônti, Heitor Martinez, Gustavo Pace e Andrea Avancini.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Segundo semestre de 2025</span>
            <p className="sobre-trajectory-text">
              Filma <em>Música de Invenção</em>, longa-metragem de ficção dirigido por Gregório Gananian, produzido pela Zaum e pela Anacoluto, coestrelado por Francisco Vidal e Clara Choveaux.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Dezembro de 2025</span>
            <p className="sobre-trajectory-text">
              Participa de <em>Atuando para o Audiovisual</em>, com Walter Lima Jr.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Janeiro de 2026</span>
            <p className="sobre-trajectory-text">
              Realiza o workshop <em>Desenvolvimento de Cenas, Personagens e Repertório</em>, com Rafael Infante.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Janeiro–março de 2026</span>
            <p className="sobre-trajectory-text">
              Integra o LABO — <em>Gravar, Assistir, Regravar</em>, com Patrick Sampaio, voltado à prática contínua de atuação para câmera.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Abril de 2026</span>
            <p className="sobre-trajectory-text">
              Participa da <em>Carpintaria do Ator</em>, com Joana Medeiros.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Abril de 2026</span>
            <p className="sobre-trajectory-text">
              Realiza em São Paulo o workshop de <em>Método Lee Strasberg</em>, com Julia Burnier.
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">Atualmente</span>
            <p className="sobre-trajectory-text">
              Trabalha como assistente de direção de Gregório Gananian, dando continuidade a uma parceria construída entre pós-produção, pré-produção, set e criação cinematográfica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sobre-contact">
        <p className="sobre-contact-body">Disponível para longas, curtas, documentários e trabalhos que atravessam fronteiras de forma.</p>
        <a href="mailto:franciscovidalcs@gmail.com" className="sobre-contact-email">franciscovidalcs@gmail.com</a>
        <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="sobre-contact-social">@franciscovidalcs</a>
      </section>

    </div>
  );
}
