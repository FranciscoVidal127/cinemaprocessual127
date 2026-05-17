import { siteData } from '../data/content';
import './Fotos.css';

export function Fotos() {
  const fotos = siteData.fotos;

  return (
    <div className="fotos-page">

      <div className="fotos-header">
        <span className="fotos-header-label">GALERIA / ENSAIO / RIO DE JANEIRO / 2025</span>
      </div>

      <section className="fotos-grid">
        {fotos.map((foto) => (
          <div key={foto.id} className={`fotos-cell fotos-slot--${foto.slot}`}>
            <img src={foto.url} alt={foto.alt} loading="lazy" />
            <span className="fotos-cell-caption">{foto.category.toUpperCase()}</span>
          </div>
        ))}
      </section>

      <div className="fotos-footer">
        <span className="fotos-footer-text">FRANCISCO VIDAL — ENSAIO FOTOGRAFICO — 2025</span>
      </div>

    </div>
  );
}
