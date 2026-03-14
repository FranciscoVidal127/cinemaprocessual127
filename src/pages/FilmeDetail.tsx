import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmeBySlug } from '../lib/supabase';
import { siteData } from '../data/content';
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
        if (filmeData) {
          setFilme(filmeData);
        } else {
          const staticFilme = siteData.filmografia.find(f => f.slug === slug);
          if (staticFilme) {
            setFilme({
              ...staticFilme,
              cast: staticFilme.cast || [],
              stills: staticFilme.stills || [],
              scenes: staticFilme.scenes || [],
            });
          }
        }
      } catch {
        const staticFilme = siteData.filmografia.find(f => f.slug === slug);
        if (staticFilme) {
          setFilme({
            ...staticFilme,
            cast: staticFilme.cast || [],
            stills: staticFilme.stills || [],
            scenes: staticFilme.scenes || [],
          });
        }
      } finally {
        setLoading(false);
      }
    }
    loadFilme();
  }, [slug]);

  if (loading) {
    return (
      <div className="filme-detail-loading">
        <div className="container">
          <p className="filme-detail-loading-text">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="filme-detail-loading">
        <div className="container">
          <p>Filme não encontrado.</p>
          <Link to="/filmografia" className="filme-back">← Filmografia</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="filme-detail">

      <header className="filme-detail-header">
        <div className="container">
          <Link to="/filmografia" className="filme-back">← Filmografia</Link>
        </div>
      </header>

      <section className="filme-detail-hero">
        <div className="container">
          <div className="filme-detail-grid">
            <div className="filme-detail-poster">
              <img src={filme.image} alt={filme.title} />
            </div>
            <div className="filme-detail-info">
              <div className="filme-detail-eyebrow">
                <span className="label">{filme.type}</span>
                {filme.status && <span className="filme-detail-status">{filme.status}</span>}
              </div>

              <h1 className="filme-detail-title">{filme.title}</h1>

              <div className="filme-detail-meta">
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">Ano</span>
                  <span className="filme-detail-meta-value">{filme.year}</span>
                </div>
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">Direção</span>
                  <span className="filme-detail-meta-value">{filme.director}</span>
                </div>
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">Papel</span>
                  <span className="filme-detail-meta-value">{filme.role}</span>
                </div>
                {filme.genre && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">Formato</span>
                    <span className="filme-detail-meta-value">{filme.genre}</span>
                  </div>
                )}
                {filme.country && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">País</span>
                    <span className="filme-detail-meta-value">{filme.country}</span>
                  </div>
                )}
                {filme.duration && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">Duração</span>
                    <span className="filme-detail-meta-value">{filme.duration}</span>
                  </div>
                )}
              </div>

              <div className="filme-detail-divider" />

              <div className="filme-detail-synopsis">
                <p>{filme.description}</p>
              </div>

              {filme.festivals && (
                <div className="filme-detail-festival">
                  <span className="label">Festival</span>
                  <p>{filme.festivals}</p>
                </div>
              )}

              {filme.cast && filme.cast.length > 0 && (
                <div className="filme-detail-cast">
                  <span className="label">Elenco</span>
                  <p>{filme.cast.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {filme.stills && filme.stills.length > 0 && (
        <section className="filme-detail-stills">
          <div className="container">
            <h2 className="filme-detail-section-title">Stills</h2>
            <div className="filme-stills-grid">
              {filme.stills.map((still: { src: string; alt: string }, idx: number) => (
                <div key={idx} className="filme-still">
                  <img src={still.src} alt={still.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {filme.scenes && filme.scenes.length > 0 && (
        <section className="filme-detail-scenes">
          <div className="container">
            <h2 className="filme-detail-section-title">Cenas</h2>
            <p className="filme-scenes-intro">
              Cenas selecionadas — {filme.role} (Francisco Vidal)
            </p>
            <div className="filme-scenes-grid">
              {filme.scenes.map((scene: { title: string; subtitle: string; youtubeUrl: string }, idx: number) => (
                <div key={idx} className="filme-scene">
                  <div className="filme-scene-info">
                    <span className="label">{scene.title}</span>
                    <p className="filme-scene-subtitle">{scene.subtitle}</p>
                  </div>
                  <YouTubeEmbed url={scene.youtubeUrl} title={scene.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
