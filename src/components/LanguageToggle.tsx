import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={`lang-toggle-btn${language === 'pt' ? ' lang-toggle-btn--active' : ''}`}
        onClick={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
      >
        PT
      </button>
      <span className="lang-toggle-sep" aria-hidden="true">/</span>
      <button
        className={`lang-toggle-btn${language === 'en' ? ' lang-toggle-btn--active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
