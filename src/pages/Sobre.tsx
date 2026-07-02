import { siteData } from '../data/content';
import { sobreTextEn } from '../data/content.en';
import { useLanguage } from '../context/LanguageContext';
import './Sobre.css';

export function Sobre() {
  const { language, t } = useLanguage();
  const bioText = language === 'en' ? sobreTextEn : siteData.sobre.text;

  return (
    <div className="sobre-page">

      {/* Portrait image */}
      <section className="sobre-portrait">
        <picture>
          <source srcSet={siteData.sobre.image} type="image/webp" />
          <img src={siteData.sobre.image} alt="Francisco Vidal" />
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
                <span className="profile-block-item-label">{t.profile.availableFor}</span>
                <span className="profile-block-item-value">{t.profile.availableForValue}</span>
              </li>
            </ul>
          </aside>
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
