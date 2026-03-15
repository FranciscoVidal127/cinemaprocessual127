import { siteData } from '../data/content';
import './Fotos.css';

export function Fotos() {
  return (
    <div className="fotos-page">

      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">Fotos</h1>
          <p className="page-intro">A imagem fixa como outro modo de presença.</p>
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
              <span className="foto-cell-num" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        <div className="fotos-note">
          <span className="fotos-note-line" aria-hidden="true" />
          <p className="fotos-note-text">Ensaio fotográfico · Rio de Janeiro</p>
        </div>
      </section>

    </div>
  );
}
