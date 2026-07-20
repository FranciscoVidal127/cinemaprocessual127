import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmeBySlug } from '../lib/supabase';
import { siteData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import './FilmeDetail.css';

export function FilmeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [filme, setFilme] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

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

  const translateStatus = (status: string | undefined) => {
    if (!status) return '';
    if (language === 'en') {
      if (status === 'Em produção') return t.filmMeta.inProduction;
      if (status === 'Em pós-produção') return t.filmMeta.inPostProduction;
    }
    return status;
  };

  const translateGenre = (genre: string | undefined) => {
    if (!genre) return '';
    if (language === 'en') {
      return genre
        .replace('Longa-metragem', 'Feature Film')
        .replace('Curta-metragem', 'Short Film')
        .replace('Ficção', 'Fiction')
        .replace('Documentário', 'Documentary');
    }
    return genre;
  };

  if (loading) {
    return (
      <div className="filme-detail-loading">
        <div className="container">
          <p className="filme-detail-loading-text">{t.filmography.loading}</p>
        </div>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="filme-detail-loading">
        <div className="container">
          <p>{t.filmography.notFound}</p>
          <Link to="/filmografia" className="filme-back">{t.filmography.backToFilmography}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="filme-detail">

      <header className="filme-detail-header">
        <div className="container">
          <Link to="/filmografia" className="filme-back">{t.filmography.backToFilmography}</Link>
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
                {filme.status && <span className="filme-detail-status">{translateStatus(filme.status)}</span>}
              </div>

              <h1 className="filme-detail-title">{filme.title}</h1>

              <div className="filme-detail-meta">
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">{t.filmography.year}</span>
                  <span className="filme-detail-meta-value">{filme.year}</span>
                </div>
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">{t.filmography.direction}</span>
                  <span className="filme-detail-meta-value">{filme.director}</span>
                </div>
                <div className="filme-detail-meta-row">
                  <span className="filme-detail-meta-label">{t.filmography.role}</span>
                  <span className="filme-detail-meta-value">{filme.role}</span>
                </div>
                {filme.genre && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">{t.filmography.format}</span>
                    <span className="filme-detail-meta-value">{translateGenre(filme.genre)}</span>
                  </div>
                )}
                {filme.country && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">{t.filmography.country}</span>
                    <span className="filme-detail-meta-value">{filme.country}</span>
                  </div>
                )}
                {filme.duration && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">{t.filmography.duration}</span>
                    <span className="filme-detail-meta-value">{filme.duration}</span>
                  </div>
                )}
                {filme.productionCompanies && filme.productionCompanies.length > 0 && (
                  <div className="filme-detail-meta-row">
                    <span className="filme-detail-meta-label">{t.filmography.productionCompanies}</span>
                    <span className="filme-detail-meta-value">{filme.productionCompanies.join(', ')}</span>
                  </div>
                )}
              </div>

              <div className="filme-detail-divider" />

              {filme.description && (
                <div className="filme-detail-synopsis">
                  <p>{filme.description}</p>
                </div>
              )}

              {filme.festivals && (
                <div className="filme-detail-festival">
                  <span className="label">{t.filmography.festival}</span>
                  <p>{filme.festivals}</p>
                </div>
              )}

              {filme.producers && filme.producers.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.production}</span>
                  <p className="filme-detail-crew-names">{filme.producers.join(', ')}</p>
                </div>
              )}

              {filme.coproducers && filme.coproducers.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.coproduction}</span>
                  <p className="filme-detail-crew-names">{filme.coproducers.join(', ')}</p>
                </div>
              )}

              {filme.supporters && filme.supporters.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.support}</span>
                  <p className="filme-detail-crew-names">{filme.supporters.join(', ')}</p>
                </div>
              )}

              {filme.castPrincipal && filme.castPrincipal.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.cast}</span>
                  <p className="filme-detail-crew-names">{filme.castPrincipal.join(', ')}</p>
                </div>
              )}

              {filme.castSecundario && filme.castSecundario.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.supportingCast}</span>
                  <p className="filme-detail-crew-names">{filme.castSecundario.join(', ')}</p>
                </div>
              )}

              {!filme.castPrincipal && filme.cast && filme.cast.length > 0 && (
                <div className="filme-detail-crew-block">
                  <span className="label">{t.filmography.cast}</span>
                  <p className="filme-detail-crew-names">{filme.cast.join(', ')}</p>
                </div>
              )}

              {filme.crew && filme.crew.length > 0 && (
                <div className="filme-detail-crew-section">
                  <span className="label">{t.filmography.crew}</span>
                  <div className="filme-detail-crew-list">
                    {filme.crew.map((member: { role: string; name: string }, idx: number) => (
                      <div key={idx} className="filme-detail-crew-row">
                        <span className="filme-detail-crew-role">{member.role}</span>
                        <span className="filme-detail-crew-name">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {filme.stills && filme.stills.length > 0 && (
        <section className="filme-detail-stills">
          <div className="container">
            <p className="filme-detail-section-title">{t.filmography.filmStills}</p>
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
            <p className="filme-detail-section-title">{t.filmography.selectedScenes}</p>
            <p className="filme-scenes-intro">
              {t.filmography.selectedScenesIntro} — {filme.role} (Francisco Vidal)
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
