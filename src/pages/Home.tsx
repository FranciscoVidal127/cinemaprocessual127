import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { supabase } from '../lib/supabase';
import './Home.css';

function formatDate(raw: string): string {
  if (!raw) return '';
  if (raw.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = raw.split('-');
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  }
  return raw;
}

type Escrito = {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  tags: string[];
  origem: string;
};

export function Home() {
  const [recentEscritos, setRecentEscritos] = useState<Escrito[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (!error && data) {
        const dbPosts: Escrito[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          category: post.category || 'Escrita',
          date: post.date || '',
          readTime: post.read_time || '',
          excerpt: post.excerpt || '',
          slug: post.slug,
          tags: post.tags || [],
          origem: post.origem || ''
        }));
        setRecentEscritos(dbPosts);
      }
    }
    loadPosts();
  }, []);

  const featuredFilme = siteData.filmografia[0];
  const featuredEscrito = recentEscritos[0];
  const otherEscritos = recentEscritos.slice(1, 4);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="hero-eyebrow label">Rio de Janeiro · Brasil</span>
          </div>
          <div className="hero-body">
            <div className="hero-name-block">
              <h1 className="hero-name">Francisco<br />Vidal</h1>
            </div>
            <div className="hero-right">
              <div className="hero-image-wrap">
                <img
                  src={siteData.hero.image}
                  alt="Francisco Vidal"
                  className="hero-image"
                />
              </div>
              <p className="hero-statement">
                Ator, cineasta, tradutor e escritor de cinema. Uma prática que atravessa a presença diante da câmera, o processo de realização e a escrita crítica.
              </p>
              <div className="hero-roles">
                <span>Atuação</span>
                <span className="hero-roles-dot">·</span>
                <span>Realização</span>
                <span className="hero-roles-dot">·</span>
                <span>Crítica</span>
                <span className="hero-roles-dot">·</span>
                <span>Tradução</span>
              </div>
            </div>
          </div>
          <div className="hero-nav">
            <Link to="/reel" className="hero-nav-link">Reel →</Link>
            <Link to="/filmografia" className="hero-nav-link">Filmografia →</Link>
            <Link to="/escrita" className="hero-nav-link">Escrita →</Link>
            <Link to="/sobre" className="hero-nav-link">Sobre →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED FILM ── */}
      {featuredFilme && (
        <section className="home-film">
          <div className="container">
            <div className="home-film-inner">
              <div className="home-film-label">
                <span className="label">Filmografia recente</span>
              </div>
              <Link to={`/filme/${featuredFilme.slug}`} className="home-film-card">
                <div className="home-film-image">
                  <img src={featuredFilme.image} alt={featuredFilme.title} />
                  <div className="home-film-overlay">
                    <span>Ver ficha completa →</span>
                  </div>
                </div>
                <div className="home-film-info">
                  <p className="home-film-meta">
                    {featuredFilme.year} · Dir. {featuredFilme.director}
                  </p>
                  <h2 className="home-film-title">{featuredFilme.title}</h2>
                  <p className="home-film-role">{featuredFilme.role}</p>
                  <p className="home-film-synopsis">{featuredFilme.description}</p>
                  {featuredFilme.festivals && (
                    <p className="home-film-festival">{featuredFilme.festivals}</p>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURED WRITING ── */}
      {featuredEscrito && (
        <section className="home-writing">
          <div className="container">
            <div className="home-writing-header">
              <span className="label">Escrita recente</span>
              <Link to="/escrita" className="home-writing-all">Ver todos os textos →</Link>
            </div>

            <div className="home-writing-grid">
              <Link to={`/post/${featuredEscrito.slug}`} className="home-writing-featured">
                <span className="home-writing-category">{featuredEscrito.category}</span>
                <h2 className="home-writing-title">{featuredEscrito.title}</h2>
                <p className="home-writing-excerpt">{featuredEscrito.excerpt}</p>
                <div className="home-writing-meta">
                  <span>{formatDate(featuredEscrito.date)}</span>
                  {featuredEscrito.readTime && <span>{featuredEscrito.readTime} de leitura</span>}
                </div>
                <span className="home-writing-read">Ler texto →</span>
              </Link>

              {otherEscritos.length > 0 && (
                <div className="home-writing-list">
                  {otherEscritos.map(item => (
                    <Link key={item.id} to={`/post/${item.slug}`} className="home-writing-item">
                      <div className="home-writing-item-top">
                        <span className="home-writing-item-category">{item.category}</span>
                        <span className="home-writing-item-date">{formatDate(item.date)}</span>
                      </div>
                      <h3 className="home-writing-item-title">{item.title}</h3>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── UNIVERSE STRIP ── */}
      <section className="home-universe">
        <div className="container">
          <div className="home-universe-inner">
            <p className="home-universe-text">
              Um universo onde atuação, realização, crítica, tradução e processo pertencem ao mesmo mundo.
            </p>
            <div className="home-universe-links">
              <Link to="/sobre" className="home-universe-link">
                <span className="home-universe-link-title">Trajetória</span>
                <span className="home-universe-link-desc">Formação, projetos, processo</span>
              </Link>
              <Link to="/fotos" className="home-universe-link">
                <span className="home-universe-link-title">Fotos</span>
                <span className="home-universe-link-desc">Retratos e ensaios</span>
              </Link>
              <Link to="/reel" className="home-universe-link">
                <span className="home-universe-link-title">Reel</span>
                <span className="home-universe-link-desc">Trabalhos audiovisuais</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
