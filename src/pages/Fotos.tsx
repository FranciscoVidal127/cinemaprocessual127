import { siteData } from '../data/content';
import './Fotos.css';

export function Fotos() {
  return (
    <div className="fotos-page">

      <header className="page-header">
        <div className="page-header-inner">
          <span className="page-eyebrow">Francisco Vidal</span>
          <h1 className="page-title">Fotos</h1>
          <p className="page-intro">Retratos e ensaios fotográficos.</p>
        </div>
      </header>

      <section className="fotos-content">
        <div className="fotos-mosaic">
          {siteData.fotos.map((foto, idx) => (
            <div
              key={foto.id}
              className={`foto-cell foto-cell--${(idx % 5) + 1}`}
            >
              <img src={foto.url} alt={foto.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
