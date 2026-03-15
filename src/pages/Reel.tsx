import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Reel.css';

export function Reel() {
  const [featured, ...rest] = siteData.reel.videos;

  return (
    <div className="reel-page">

      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">Reel</h1>
          <p className="page-intro">O corpo diante da câmera como prática — não como demonstração, mas como relação.</p>
        </div>
      </header>

      {featured && (
        <section className="reel-featured">
          <YouTubeEmbed
            url={featured}
            title="Francisco Vidal — Reel"
          />
        </section>
      )}

      {rest.length > 0 && (
        <section className="reel-content">
          <div className="reel-grid">
            {rest.map((videoUrl, index) => (
              <div key={index} className="reel-item">
                <YouTubeEmbed
                  url={videoUrl}
                  title={`Francisco Vidal — Cena ${index + 2}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
