import { siteData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import './Fotos.css';

const categoryMap: Record<string, string> = {
  'Corpo': 'corpo',
  'Gesto': 'gesto',
  'Rosto': 'rosto',
  'Presença': 'presenca',
  'Sombra': 'sombra',
  'Escuta': 'escuta',
  'Silêncio': 'silencio',
  'Processo': 'processo',
};

export function Fotos() {
  const fotos = siteData.fotos;
  const { t } = useLanguage();

  const translateCategory = (cat: string) => {
    const key = categoryMap[cat] as keyof typeof t.photoCategories | undefined;
    if (key && t.photoCategories[key]) return t.photoCategories[key];
    return cat.toUpperCase();
  };

  return (
    <div className="fotos-page">

      <div className="fotos-header">
        <span className="fotos-header-label">{t.fotos.headerLabel}</span>
      </div>

      <section className="fotos-grid">
        {fotos.map((foto) => (
          <div key={foto.id} className={`fotos-cell fotos-slot--${foto.slot}`}>
            <img src={foto.url} alt={foto.alt} loading="lazy" />
            <span className="fotos-cell-caption">{translateCategory(foto.category)}</span>
          </div>
        ))}
      </section>

      <div className="fotos-footer">
        <span className="fotos-footer-text">{t.fotos.footerText}</span>
      </div>

    </div>
  );
}
