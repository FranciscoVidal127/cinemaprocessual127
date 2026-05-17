import { siteData } from '../data/content';
import './Fotos.css';

export function Fotos() {
  const fotos = siteData.fotos;

  return (
    <div className="fotos-page">

      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">Galeria de Atuação</h1>
          <p className="page-intro">Rosto, corpo, presença e processo.</p>
        </div>
      </header>

      <section className="fotos-editorial">
        <div className="fotos-editorial-grid">

          {/* Large structural image */}
          {fotos[0] && (
            <div className="fotos-item fotos-item--hero">
              <img src={fotos[0].url} alt={fotos[0].alt} loading="lazy" />
              <span className="fotos-item-category">{fotos[0].category}</span>
            </div>
          )}

          {/* Medium pair */}
          <div className="fotos-pair">
            {fotos[1] && (
              <div className="fotos-item fotos-item--medium">
                <img src={fotos[1].url} alt={fotos[1].alt} loading="lazy" />
                <span className="fotos-item-category">{fotos[1].category}</span>
              </div>
            )}
            {fotos[2] && (
              <div className="fotos-item fotos-item--medium">
                <img src={fotos[2].url} alt={fotos[2].alt} loading="lazy" />
                <span className="fotos-item-category">{fotos[2].category}</span>
              </div>
            )}
          </div>

          {/* Breathing space with text */}
          <div className="fotos-divider">
            <span className="fotos-divider-line" />
            <span className="fotos-divider-text">Presença diante da câmera</span>
            <span className="fotos-divider-line" />
          </div>

          {/* Second row - asymmetric */}
          <div className="fotos-row-asymmetric">
            {fotos[3] && (
              <div className="fotos-item fotos-item--wide">
                <img src={fotos[3].url} alt={fotos[3].alt} loading="lazy" />
                <span className="fotos-item-category">{fotos[3].category}</span>
              </div>
            )}
            {fotos[4] && (
              <div className="fotos-item fotos-item--tall">
                <img src={fotos[4].url} alt={fotos[4].alt} loading="lazy" />
                <span className="fotos-item-category">{fotos[4].category}</span>
              </div>
            )}
          </div>

          {/* Final image - full width cinematic */}
          {fotos[5] && (
            <div className="fotos-item fotos-item--cinematic">
              <img src={fotos[5].url} alt={fotos[5].alt} loading="lazy" />
              <span className="fotos-item-category">{fotos[5].category}</span>
            </div>
          )}

        </div>

        <div className="fotos-note">
          <span className="fotos-note-line" aria-hidden="true" />
          <p className="fotos-note-text">Ensaio fotográfico · Rio de Janeiro · 2025</p>
        </div>
      </section>

    </div>
  );
}
