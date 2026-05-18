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
            Francisco Vidal é ator e cineasta radicado no Rio de Janeiro. Formado em Cinema pela ESPM, sua entrada no audiovisual não aconteceu primeiro diante da câmera, mas por dentro da matéria do filme: pela tradução, pela pós-produção, pela montagem e pela escuta do processo.
          </p>
          <p className="sobre-bio-text">
            Em 2023, trabalhou com Paula Gaitán na pós-produção de <em>O Canto das Amapolas</em>, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes. A experiência abriu uma passagem decisiva em sua trajetória: além de aproximá-lo da fabricação concreta de um filme, colocou Francisco em contato com uma constelação de artistas que passaria a marcar seu caminho, como Clara Choveaux, Negro Leo e Gregório Gananian.
          </p>
          <p className="sobre-bio-text">
            A partir desse encontro, Francisco passou a trabalhar também na pós-produção de <em>Aquele que Viu o Abismo</em>, dirigido por Gregório Gananian e Negro Leo, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes em 2024. O convívio com esse processo aprofundou sua relação com o cinema como construção coletiva — uma arte feita de tempo, pensamento, montagem, presença, escuta e confiança.
          </p>
          <p className="sobre-bio-text">
            No início de 2024, essa aproximação se desdobrou em uma nova etapa. Francisco foi convidado por Gregório Gananian a participar de <em>O Inspetor Geral</em> em duas frentes simultâneas: como assistente na pré-produção e como ator no elenco do longa. Antes de chegar ao set, acompanhou por dentro a preparação do filme, sua lógica de criação, sua construção de mundo e o ritmo de trabalho de seu realizador. Filmado no primeiro semestre de 2024, no estado de São Paulo, <em>O Inspetor Geral</em> é uma adaptação livre da peça de Nikolai Gogol, transposta para o Brasil contemporâneo.
          </p>
          <p className="sobre-bio-text">
            No segundo semestre de 2024, Francisco filmou no Rio de Janeiro <em>O Mundo dos Mortos</em>, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo. Criador do ECRÃ, festival dedicado ao cinema e à arte experimental, Pedro Tavares desenvolve uma pesquisa ligada à imagem expandida, às formas menos convencionais de narrativa e aos territórios de invenção do audiovisual. Em <em>O Mundo dos Mortos</em>, humanos, anjos e demônios atravessam uma Terra abandonada no segundo dia após a morte de Cristo, enquanto a espera pelo retorno do Messias transforma a existência em um campo de assombro, suspensão e exorcismo. O longa foi exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes em 2025.
          </p>
          <p className="sobre-bio-text">
            A partir de 2025, Francisco intensificou sua formação como ator. Entre março e dezembro de 2025, manteve um percurso contínuo de estudo na CAL — Casa das Artes de Laranjeiras, atravessando cursos, laboratórios e módulos voltados à atuação para câmera, repertório, presença cênica, escuta e construção de personagem. Esse percurso teve como eixo os dois módulos de <em>O Teatro do Não Eu</em>, com Rafael Infante, processo que se estendeu até dezembro e aprofundou sua pesquisa sobre presença, alteridade, deslocamento de si e disponibilidade para aquilo que a cena exige. Paralelamente, ampliou sua formação em atuação para câmera e relação com o set em cursos com Ricardo Cônti, Heitor Martinez, Gustavo Pace e Andrea Avancini.
          </p>
          <p className="sobre-bio-text">
            No segundo semestre de 2025, deu continuidade à colaboração com Gregório Gananian em <em>Música de Invenção</em>, longa-metragem de ficção dirigido por Gregório, produzido pela Zaum e pela Anacoluto, com produção de Marisa Merlo, Gregório Gananian e Clara Choveaux. Coestrelado por Francisco Vidal e Clara Choveaux, o filme reafirma uma trajetória construída na proximidade entre criação, confiança artística e presença em cena.
          </p>
          <p className="sobre-bio-text">
            Atualmente, Francisco segue colaborando com Gregório Gananian como assistente de direção, dando continuidade a uma parceria que atravessa pós-produção, pré-produção, set, atuação e acompanhamento criativo de projetos. Essa colaboração sintetiza uma parte central de seu percurso: estar próximo da criação cinematográfica não apenas como intérprete, mas como alguém que acompanha o filme em sua construção concreta.
          </p>
          <p className="sobre-bio-text">
            Em dezembro de 2025, Francisco participou de <em>Atuando para o Audiovisual</em>, com Walter Lima Jr. Em 2026, deu sequência ao trabalho de formação e prática diante da câmera: em janeiro, realizou o workshop <em>Desenvolvimento de Cenas, Personagens e Repertório</em>, novamente com Rafael Infante; entre janeiro e março, integrou o LABO de Patrick Sampaio, no curso <em>Gravar, Assistir, Regravar</em>, voltado ao exercício contínuo diante da câmera, à revisão do próprio material e à precisão progressiva da atuação audiovisual; em abril, participou da <em>Carpintaria do Ator</em>, com Joana Medeiros, e do workshop de <em>Método Lee Strasberg</em>, com Julia Burnier, em São Paulo.
          </p>
          <p className="sobre-bio-text">
            Sua trajetória se constrói por continuidade: do trabalho de bastidor ao set; da pós-produção à pré-produção; da assistência à atuação; da experiência prática à formação continuada. Entre criação e cena, Francisco reúne duas dimensões complementares: a sensibilidade de quem pensa o filme por dentro e a disponibilidade de quem se oferece ao acontecimento da câmera.
          </p>
          <p className="sobre-bio-text">
            Na atuação, busca presença, escuta e precisão. Interessa-lhe um corpo atento ao outro, ao espaço, ao silêncio e ao ritmo singular de cada direção. Mais do que afirmar uma identidade fixa, Francisco entende o ator como processo: alguém que aprende a chegar, perceber, ajustar-se e sustentar o instante exigido pela cena, com rigor técnico e abertura sensível.
          </p>
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
