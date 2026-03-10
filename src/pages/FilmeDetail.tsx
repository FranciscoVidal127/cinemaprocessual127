import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmeBySlug } from '../lib/supabase';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './FilmeDetail.css';

export function FilmeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [filme, setFilme] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      if (!slug) return;
      try {
        const filmeData = await getFilmeBySlug(slug);
        setFilme(filmeData);
      } catch (error) {
        console.error('Erro ao carregar filme:', error);
      } finally {
        setLoading(false);
      }
    }
    loadFilme();
  }, [slug]);

  if (loading) {
    return (
      <div className="filme-detail-not-found">
        <div className="container">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="filme-detail-not-found">
        <div className="container">
          <h1>Filme não encontrado</h1>
          <Link to="/" className="back-link">← Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="filme-detail">
      <header className="filme-header">
        <div className="container">
          <Link to="/" className="back-link">← Voltar</Link>
        </div>
      </header>

      <div className="filme-detail-content">
        <div className="container-wide">
          <div className="filme-detail-grid">
            <div className="filme-poster-column">
              <img src={filme.image} alt={filme.title} className="filme-poster" />
            </div>

            <div className="filme-info-column">
              <div className="filme-meta-line">
                {filme.type} · {filme.year}
                {filme.genre && ` · ${filme.genre}`}
                {filme.status && ` · ${filme.status}`}
              </div>

              <h1 className="filme-title">{filme.title}</h1>

              <div className="filme-credits">
                <p className="filme-director">Dir. {filme.director}</p>
                <p className="filme-role">Papel: {filme.role}</p>
              </div>

              <div className="filme-separator"></div>

              <div className="filme-synopsis">
                <p>{filme.description}</p>
              </div>

              {filme.festivals && (
                <div className="filme-festival-badge">
                  {filme.festivals}
                </div>
              )}

              {filme.cast && filme.cast.length > 0 && (
                <>
                  <div className="filme-separator"></div>
                  <div className="filme-cast">
                    <h2 className="section-heading">ELENCO</h2>
                    <p className="cast-line">{filme.cast.join(', ')}</p>
                  </div>
                </>
              )}

              {filme.stills && filme.stills.length > 0 && (
                <>
                  <div className="filme-separator"></div>
                  <div className="filme-stills">
                    <h2 className="section-heading">STILLS</h2>
                    <div className="stills-grid">
                      {filme.stills.map((still: { src: string; alt: string }, idx: number) => (
                        <div key={idx} className="still-item">
                          <img src={still.src} alt={still.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {filme.scenes && filme.scenes.length > 0 && (
                <>
                  <div className="filme-separator"></div>
                  <div className="filme-scenes">
                    <h2 className="section-heading">CENAS</h2>
                    <p className="scenes-intro">Cenas selecionadas — {filme.role} (Francisco Vidal)</p>
                    <div className="scenes-grid">
                      {filme.scenes.map((scene: { title: string; subtitle: string; youtubeUrl: string }, idx: number) => (
                        <div key={idx} className="scene-item">
                          <h3 className="scene-title">{scene.title}</h3>
                          <p className="scene-subtitle">{scene.subtitle}</p>
                          <YouTubeEmbed url={scene.youtubeUrl} title={scene.title} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
