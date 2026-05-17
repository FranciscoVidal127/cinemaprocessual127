import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './Reel.css';

export function Reel() {
  const [featured, ...rest] = siteData.reel.videos;

  return (
    <div className="reel-page">

      <div className="reel-header">
        <span className="reel-label">REEL</span>
      </div>

      {featured && (
        <section className="reel-featured">
          <YouTubeEmbed url={featured} title="Francisco Vidal — Reel" />
        </section>
      )}

      {rest.length > 0 && (
        <section className="reel-grid-section">
          <div className="reel-grid">
            {rest.map((videoUrl, index) => (
              <div key={index} className="reel-item">
                <YouTubeEmbed url={videoUrl} title={`Francisco Vidal — Cena ${index + 2}`} />
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
