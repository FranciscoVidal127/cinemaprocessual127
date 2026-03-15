import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Reel.css';

export function Reel() {
  return (
    <div className="reel-page">

      <header className="page-header">
        <div className="page-header-inner">
          <span className="page-eyebrow">Francisco Vidal</span>
          <h1 className="page-title">Reel</h1>
          <p className="page-intro">Cenas e presença. O corpo diante da câmera como prática — não como demonstração, mas como relação.</p>
        </div>
      </header>

      <section className="reel-content">
        <div className="reel-grid">
          {siteData.reel.videos.map((videoUrl, index) => (
            <div key={index} className="reel-item">
              <YouTubeEmbed
                url={videoUrl}
                title={`Francisco Vidal — Reel ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
