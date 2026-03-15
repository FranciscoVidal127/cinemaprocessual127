import { useState, useEffect, useRef } from 'react';
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

function useParallax(speed = 0.18) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}

export function Home() {
  const [recentEscritos, setRecentEscritos] = useState<Escrito[]>([]);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const parallaxRef = useParallax(0.18);

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
          tags: Array.isArray(post.tags) ? post.tags : (post.tags ? [post.tags] : []),
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

      {/* HERO */}
      <section className="hero">
        <span className="hero-bg-text" aria-hidden="true">cinema</span>

        <div className="hero-inner">
          <div className="hero-grid">

            <div className="hero-left">
              <div className="hero-location">
                <span className="hero-location-dot" aria-hidden="true" />
                <span>Rio de Janeiro · Brasil</span>
              </div>

              <h1 className="hero-name">
                <span className="hero-name-first">Francisco</span>
                <span className="hero-name-last">Vidal</span>
              </h1>

              <p className="hero-statement">
                Entrou no cinema pela engrenagem — tradução, montagem, pós-produção. Agora está diante da câmera, escreve sobre cinema, e continua, por todos esses meios, a perguntar o que uma imagem pode.
              </p>

              <div className="hero-roles" aria-label="Áreas de atuação">
                <span className="hero-roles-primary">Ator</span>
                <span className="hero-roles-sep" aria-hidden="true">—</span>
                <span>Cineasta</span>
                <span className="hero-roles-sep" aria-hidden="true">—</span>
                <span>Escritor de cinema</span>
                <span className="hero-roles-sep" aria-hidden="true">—</span>
                <span>Tradutor</span>
              </div>

              <nav className="hero-nav" aria-label="Navegação rápida">
                <Link to="/reel" className="hero-nav-link">
                  <span className="hero-nav-label">Reel</span>
                  <span className="hero-nav-arrow" aria-hidden="true">↗</span>
                </Link>
                <Link to="/filmografia" className="hero-nav-link">
                  <span className="hero-nav-label">Filmografia</span>
                  <span className="hero-nav-arrow" aria-hidden="true">↗</span>
                </Link>
                <Link to="/escrita" className="hero-nav-link">
                  <span className="hero-nav-label">Escrita</span>
                  <span className="hero-nav-arrow" aria-hidden="true">↗</span>
                </Link>
                <Link to="/sobre" className="hero-nav-link">
                  <span className="hero-nav-label">Sobre</span>
                  <span className="hero-nav-arrow" aria-hidden="true">↗</span>
                </Link>
              </nav>
            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <div className="hero-image-parallax" ref={parallaxRef}>
                  <img
                    src={siteData.hero.image}
                    alt="Francisco Vidal"
                    className={`hero-image${heroLoaded ? ' hero-image--loaded' : ''}`}
                    onLoad={() => setHeroLoaded(true)}
                  />
                </div>
                <div className="hero-image-grain" aria-hidden="true" />
              </div>
            </div>

          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {['Cinema', 'Escuta', 'Rio de Janeiro', 'Presença', 'Matéria', 'Processo', 'Tradução', 'Encontro', 'Tempo', 'Corpo', 'Gesto', 'Cinema', 'Escuta', 'Rio de Janeiro', 'Presença', 'Matéria', 'Processo', 'Tradução', 'Encontro', 'Tempo', 'Corpo', 'Gesto'].map((word, i) => (
            <span key={i} className="ticker-word">{word}<span className="ticker-dot">·</span></span>
          ))}
        </div>
      </div>

      {/* STATEMENT */}
      <section className="home-statement">
        <div className="container">
          <div className="home-statement-inner">
            <div className="home-statement-marker">
              <span className="label">Sobre</span>
            </div>
            <div className="home-statement-body">
              <blockquote className="home-statement-quote">
                "O cinema deixou de ser ideia e virou matéria: tempo, montagem, escuta, relação entre corpos no espaço."
              </blockquote>
              <p className="home-statement-text">
                Ator e cineasta formado por dentro do cinema — pela pós-produção, pela tradução, pelo convívio próximo com realizadores que pensam a câmera como linguagem. Busca na atuação uma disponibilidade radical: o corpo sensível ao outro, ao espaço, ao ritmo singular de cada diretor. A escrita e a realização não são atividades paralelas — são o mesmo projeto de atenção, em outros meios.
              </p>
              <Link to="/sobre" className="home-statement-link">
                Trajetória completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STILLS */}
      <section className="home-stills">
        <div className="home-stills-inner">
          <div className="home-stills-grid">
            <div className="home-stills-item home-stills-item--primary">
              <img
                src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-1.jpg"
                alt="Francisco Vidal como Fábio em O Mundo dos Mortos"
                loading="lazy"
              />
              <div className="home-stills-caption">
                <span className="home-stills-role">Fábio</span>
                <span className="home-stills-film">O Mundo dos Mortos · dir. Pedro Tavares</span>
              </div>
            </div>
            <div className="home-stills-stack">
              <div className="home-stills-item">
                <img
                  src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/still-2.jpg"
                  alt="Francisco Vidal em O Mundo dos Mortos"
                  loading="lazy"
                />
              </div>
              <div className="home-stills-item">
                <img
                  src="https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/Captura_de_tela_de_2026-02-10_07-41-26.png"
                  alt="Francisco Vidal como Espectro F. em O Inspetor Geral"
                  loading="lazy"
                />
                <div className="home-stills-caption">
                  <span className="home-stills-role">Espectro F.</span>
                  <span className="home-stills-film">O Inspetor Geral · dir. Gregório Gananian</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-stills-footer">
            <span className="home-stills-note">Em tela</span>
          </div>
        </div>
      </section>

      {/* FEATURED FILM */}
      {featuredFilme && (
        <section className="home-film">
          <div className="container">
            <div className="home-film-header">
              <span className="label">Filmografia recente</span>
              <Link to="/filmografia" className="home-film-all">Ver todos →</Link>
            </div>
          </div>

          <Link to={`/filme/${featuredFilme.slug}`} className="home-film-card">
            <div className="home-film-image-wrap">
              <img src={featuredFilme.image} alt={featuredFilme.title} className="home-film-image" />
              <div className="home-film-image-vignette" aria-hidden="true" />
            </div>
            <div className="home-film-overlay-panel">
              <div className="home-film-overlay-inner">
                <p className="home-film-meta">
                  {featuredFilme.year} · Dir. {featuredFilme.director}
                </p>
                <h2 className="home-film-title">{featuredFilme.title}</h2>
                <p className="home-film-role-label">Papel</p>
                <p className="home-film-role-name">{featuredFilme.role}</p>
                <p className="home-film-synopsis">{featuredFilme.description}</p>
                {featuredFilme.festivals && (
                  <p className="home-film-festivals">{featuredFilme.festivals}</p>
                )}
                <span className="home-film-cta">Ficha completa →</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* WRITING */}
      {featuredEscrito && (
        <section className="home-writing">
          <div className="container">
            <div className="home-writing-header">
              <span className="label">Escrita recente</span>
              <Link to="/escrita" className="home-writing-all">Arquivo completo →</Link>
            </div>

            <div className="home-writing-grid">
              <Link to={`/post/${featuredEscrito.slug}`} className="home-writing-featured">
                <span className="home-writing-num" aria-hidden="true">01</span>
                <span className="home-writing-category">{featuredEscrito.category}</span>
                <h2 className="home-writing-title">{featuredEscrito.title}</h2>
                <p className="home-writing-excerpt">{featuredEscrito.excerpt}</p>
                <div className="home-writing-foot">
                  <span className="home-writing-date">{formatDate(featuredEscrito.date)}</span>
                  <span className="home-writing-read">Ler →</span>
                </div>
              </Link>

              {otherEscritos.length > 0 && (
                <div className="home-writing-list">
                  {otherEscritos.map((item, i) => (
                    <Link key={item.id} to={`/post/${item.slug}`} className="home-writing-item">
                      <span className="home-writing-item-num" aria-hidden="true">0{i + 2}</span>
                      <div className="home-writing-item-body">
                        <div className="home-writing-item-meta">
                          <span className="home-writing-item-category">{item.category}</span>
                          <span className="home-writing-item-date">{formatDate(item.date)}</span>
                        </div>
                        <h3 className="home-writing-item-title">{item.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PHOTOS */}
      <section className="home-fotos">
        <div className="home-fotos-inner">
          <div className="home-fotos-track">
            {[...siteData.fotos, ...siteData.fotos].map((foto, i) => (
              <div key={i} className="home-fotos-item">
                <img src={foto.url} alt={foto.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <Link to="/fotos" className="home-fotos-link">
            Ver fotos →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="home-contact">
        <div className="container">
          <div className="home-contact-inner">
            <div className="home-contact-text">
              <p className="home-contact-heading">Escreva.</p>
              <p className="home-contact-body">
                Um projeto em desenvolvimento, uma pergunta sobre o trabalho, uma colaboração que ainda não tem forma — se algo aqui ressoa com o que você faz, escreva. Estou em atividade contínua e aberto ao encontro.
              </p>
              <p className="home-contact-sub">
                Rio de Janeiro · ator · disponível para projetos de cinema
              </p>
            </div>
            <div className="home-contact-links">
              <a href="mailto:franciscovidalcs@gmail.com" className="home-contact-email">
                franciscovidalcs@gmail.com
              </a>
              <a
                href="https://www.instagram.com/franciscovidalcs/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-social"
              >
                @franciscovidalcs
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
