import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import { supabase } from '../lib/supabase';

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
  const [escritaFilter, setEscritaFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [allEscritos, setAllEscritos] = useState<Escrito[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

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
        setAllEscritos(dbPosts);
      }
    }
    loadPosts();
  }, []);

  const filteredEscrita = allEscritos.filter(item => {
    const matchesFilter = escritaFilter === 'Todos' || item.category === escritaFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['Todos', ...Array.from(new Set(allEscritos.map(e => e.category)))];

  return (
    <>
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>{siteData.hero.name}</h1>
              <p className="hero-title">{siteData.hero.title}</p>
              <p className="hero-bio">{siteData.hero.bio}</p>
              <div className="hero-ctas">
                <a href="#reel" className="cta-primary">Ver Reel →</a>
                <a href="#contato" className="cta-secondary">Contato</a>
              </div>
            </div>
            <div className="hero-image">
              <img src={siteData.hero.image} alt={siteData.hero.name} />
            </div>
          </div>
        </div>
      </section>

      <section id="reel" className="section reel-section">
        <div className="container">
          <h2 className="section-title">Reel</h2>
          <p className="reel-description">{siteData.reel.description}</p>
          <div className="reel-grid">
            {siteData.reel.videos.map((videoUrl, index) => (
              <YouTubeEmbed
                key={index}
                url={videoUrl}
                title={`Reel Francisco Vidal ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section sobre-section">
        <div className="container">
          <h2 className="section-title">Sobre</h2>
          <nav className="sobre-menu">
            <a href="#sobre-intro" className="sobre-menu-link">Sobre</a>
            <span className="sobre-menu-separator">/</span>
            <a href="#trajetoria" className="sobre-menu-link">Trajetória</a>
          </nav>
          <div id="sobre-intro" className="sobre-grid">
            <div className="sobre-text">
              {siteData.sobre.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="sobre-image">
              <img src={siteData.sobre.image} alt="Francisco Vidal" />
            </div>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="section trajetoria-section">
        <div className="container">
          <h2 className="section-title">Trajetória</h2>

          <div className="trajetoria-content">
            <p className="trajetoria-intro">Francisco Vidal é ator e cineasta baseado no Rio de Janeiro.</p>

            <div className="trajetoria-block">
              <h3 className="trajetoria-subtitle">Entrada no cinema (bastidores → atuação)</h3>
              <p>Em 2023, trabalhou com tradução e pós-produção no longa <em>Canto das Amapolas</em> (dir. Paula Gaitán), experiência que consolidou sua relação com o cinema como linguagem e processo e impulsionou sua transição para a atuação.</p>
            </div>

            <div className="trajetoria-block">
              <h3 className="trajetoria-subtitle">Créditos como ator (estreias em longa-metragem)</h3>
              <ul className="trajetoria-list">
                <li><strong>O Inspetor Geral</strong> — dir. Gregório Gananian | prod. Zaum | filmado maio–junho/2024 | em pós-produção.</li>
                <li><strong>O Mundo dos Mortos</strong> — dir. Pedro Tavares | prod. 7 a 1 Filmes e Cavideo | exibido na Mostra Olhos Livres — Festival de Cinema de Tiradentes (2025).</li>
              </ul>
            </div>

            <div className="trajetoria-block">
              <h3 className="trajetoria-subtitle">Atuação + set hoje</h3>
              <p>Atualmente trabalha como assistente de direção na pós-produção de <em>O Inspetor Geral</em> e filmou <em>Acronon</em> (2026) (dir. Gregório Gananian), com Clara Choveaux no elenco.</p>
            </div>

            <div className="trajetoria-block">
              <h3 className="trajetoria-subtitle">Pesquisa de atuação (presença e escuta)</h3>
              <p>Seu trabalho busca uma atuação de alta presença e escuta, com flexibilidade para diferentes estilos de direção autoral — mantendo precisão, adaptação e disponibilidade.</p>
            </div>

            <div className="trajetoria-block">
              <h3 className="trajetoria-subtitle">Formação (2025–2026 | cronológica)</h3>
              <ul className="trajetoria-list">
                <li>06 mai → 03 jul 2025 — <strong>O Poder da Câmera: Atuação para TV e Cinema</strong> (Ricardo Conti + Heitor Martinez) — 48h</li>
                <li>20 mai → 11 jul 2025 — <strong>Laboratório de Atuação para Câmera</strong> (Gustavo Pace) — 40h</li>
                <li>31 mai e 19 jul 2025 — <strong>Interpretação para TV e Cinema</strong> (Andrea Avancini) — 21h</li>
                <li>04 jun → 23 jul 2025 — <strong>O Teatro do Não Eu</strong> (Rafael Infante) — 36h</li>
                <li>17 set → 17 dez 2025 — <strong>O Teatro do Não Eu — Módulo II</strong> (Rafael Infante) — 46h</li>
                <li>18 dez 2025 — <strong>Atuando para o Audiovisual</strong> (Mentoria Walter Lima) — 12h</li>
                <li>12 → 16 jan 2026 — <strong>Workshop: Desenvolvimento de Cenas, Personagens e Repertório</strong> (Rafael Infante) — 14h</li>
                <li><strong>Em curso:</strong> LABO com Patrick Sampaio — prática contínua (gravar/assistir/regravar + Métodos)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="filmografia" className="section filmografia-section">
        <div className="container">
          <h2 className="section-title">Filmografia</h2>
          <div className="filmografia-grid">
            {siteData.filmografia.map(filme => (
              <Link
                key={filme.id}
                to={`/filme/${filme.slug}`}
                className="filme-card"
              >
                <div className="filme-image">
                  <img src={filme.image} alt={filme.title} />
                </div>
                <div className="filme-info">
                  <h3>{filme.title}</h3>
                  <p className="filme-meta">{filme.year} · {filme.type}</p>
                  <p className="filme-role">Papel: {filme.role}</p>
                  {filme.director && <p className="filme-director">Dir. {filme.director}</p>}
                  <p className="filme-description">{filme.description}</p>
                  {filme.festivals && (
                    <div className="filme-festivals">
                      <span className="festival-tag">{filme.festivals}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="fotos" className="section fotos-section">
        <div className="container">
          <h2 className="section-title">Fotos</h2>
          <div className="fotos-grid">
            {siteData.fotos.map(foto => (
              <div key={foto.id} className="foto-item">
                <img src={foto.url} alt={foto.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="escrita" className="section escrita-section">
        <div className="container">
          <h2 className="section-title">Escrita</h2>

          <div className="escrita-filters">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar textos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${escritaFilter === cat ? 'active' : ''}`}
                  onClick={() => setEscritaFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="escrita-list">
            {filteredEscrita.map(item => (
              <article key={item.id} className="escrita-item">
                <div className="escrita-meta">
                  <span className="escrita-category">{item.category}</span>
                  <span className="escrita-date">{item.date}</span>
                  <span className="escrita-read-time">{item.readTime}</span>
                </div>
                <h3 className="escrita-title">{item.title}</h3>
                <p className="escrita-excerpt">{item.excerpt}</p>
                {item.slug ? (
                  <a href={`/post/${item.slug}`} className="escrita-link">Ler →</a>
                ) : (
                  <span className="escrita-link-disabled">Em breve</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section contato-section">
        <div className="container">
          <h2 className="section-title">Contato</h2>
          <div className="contato-content">
            <div className="contato-links">
              <a href={`mailto:${siteData.contato.email}`} className="contato-link">
                {siteData.contato.email}
              </a>
              <a href={siteData.contato.instagram} target="_blank" rel="noopener noreferrer" className="contato-link">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
