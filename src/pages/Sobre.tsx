import { siteData } from '../data/content';
import { sobreTextEn, trajectoryEn } from '../data/content.en';
import { useLanguage } from '../context/LanguageContext';
import './Sobre.css';

export function Sobre() {
  const { language, t } = useLanguage();
  const bioText = language === 'en' ? sobreTextEn : siteData.sobre.text;

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
        <span className="sobre-portrait-label">{t.sobre.label}</span>
      </section>

      {/* Bio */}
      <section className="sobre-bio">
        <div className="about-container">
          <div className="about-text">
            {bioText.map((paragraph, index) => (
              <p key={index} className="sobre-bio-text">{paragraph}</p>
            ))}
          </div>
          <aside className="profile-block">
            <span className="profile-block-label">{t.home.profileLabel}</span>
            <ul className="profile-block-list">
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.base}</span>
                <span className="profile-block-item-value">{t.profile.baseValue}</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.roles}</span>
                <span className="profile-block-item-value">{t.profile.rolesValue}</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.focus}</span>
                <span className="profile-block-item-value">{t.profile.focusValue}</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.recentWork}</span>
                <span className="profile-block-item-value">{t.profile.recentWorkValue}</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.recentTraining}</span>
                <span className="profile-block-item-value">{t.profile.recentTrainingValue}</span>
              </li>
              <li className="profile-block-item">
                <span className="profile-block-item-label">{t.profile.availableFor}</span>
                <span className="profile-block-item-value">{t.profile.availableForValue}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Trajetoria */}
      <section className="sobre-trajectory">
        <div className="sobre-trajectory-header">
          <span className="sobre-mono">{t.sobre.trajectoryLabel}</span>
        </div>
        <div className="sobre-trajectory-list">
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.date2023}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[0] : <>Trabalha com Paula Gaitán na pós-produção de <em>O Canto das Amapolas</em>, vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes. A partir desse processo, aproxima-se de Clara Choveaux, Negro Leo e Gregório Gananian.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.date2023_2024}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[1] : <>Atua na pós-produção de <em>Aquele que Viu o Abismo</em>, de Gregório Gananian e Negro Leo, longa vencedor da Mostra Olhos Livres no Festival de Cinema de Tiradentes em 2024.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateEarly2024}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[2] : <>É convidado por Gregório Gananian a participar de <em>O Inspetor Geral</em> em duas frentes simultâneas: como assistente na pré-produção e como ator no elenco do longa.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateFirstHalf2024}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[3] : <>Filma <em>O Inspetor Geral</em>, adaptação livre da peça de Nikolai Gogol transposta para o Brasil contemporâneo, no estado de São Paulo.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateSecondHalf2024}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[4] : <>Filma no Rio de Janeiro <em>O Mundo dos Mortos</em>, de Pedro Tavares, produzido pela 7 a 1 Filmes e pela Cavideo.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.date2025}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[5] : <><em>O Mundo dos Mortos</em> é exibido na Mostra Olhos Livres do Festival de Cinema de Tiradentes.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateMarchDec2025}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[6] : <>Mantém um percurso contínuo de formação na CAL — Casa das Artes de Laranjeiras, com foco em atuação para câmera, repertório, presença cênica, escuta e construção de personagem. O processo teve como eixo os dois módulos de <em>O Teatro do Não Eu</em>, com Rafael Infante, além de estudos com Ricardo Cônti, Heitor Martinez, Gustavo Pace e Andrea Avancini.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateSecondHalf2025}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[7] : <>Filma <em>Música de Invenção</em>, longa-metragem de ficção dirigido por Gregório Gananian, produzido pela Zaum e pela Anacoluto, coestrelado por Francisco Vidal e Clara Choveaux.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateDec2025}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[8] : <>Participa de <em>Atuando para o Audiovisual</em>, com Walter Lima Jr.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateJan2026}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[9] : <>Realiza o workshop <em>Desenvolvimento de Cenas, Personagens e Repertório</em>, com Rafael Infante.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateJanMar2026}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[10] : <>Integra o LABO — <em>Gravar, Assistir, Regravar</em>, com Patrick Sampaio, voltado à prática contínua de atuação para câmera.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateApr2026}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[11] : <>Participa da <em>Carpintaria do Ator</em>, com Joana Medeiros.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateApr2026b}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[12] : <>Realiza em São Paulo o workshop de <em>Método Lee Strasberg</em>, com Julia Burnier.</>}
            </p>
          </div>
          <div className="sobre-trajectory-item">
            <span className="sobre-trajectory-date">{t.trajectory.dateCurrent}</span>
            <p className="sobre-trajectory-text">
              {language === 'en' ? trajectoryEn[13] : <>Trabalha como assistente de direção de Gregório Gananian, dando continuidade a uma parceria construída entre pós-produção, pré-produção, set e criação cinematográfica.</>}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sobre-contact">
        <p className="sobre-contact-body">{t.sobre.contactText}</p>
        <a href="mailto:franciscovidalcs@gmail.com" className="sobre-contact-email">franciscovidalcs@gmail.com</a>
        <a href="https://www.instagram.com/franciscovidalcs/" target="_blank" rel="noopener noreferrer" className="sobre-contact-social">@franciscovidalcs</a>
      </section>

    </div>
  );
}
