import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import './Escrita.css';

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

export function Escrita() {
  const [allEscritos, setAllEscritos] = useState<Escrito[]>([]);
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase.rpc('get_posts');

      if (!error && data) {
        const posts: Escrito[] = data.map((post: any) => ({
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
        setAllEscritos(posts);
      }
      setLoading(false);
    }
    loadPosts();
  }, []);

  const categories = [t.escrita.all, ...Array.from(new Set(allEscritos.map(e => e.category)))];

  const filtered = allEscritos.filter(item => {
    const matchesFilter = filter === t.escrita.all || item.category === filter;
    const matchesSearch = !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  function formatDate(raw: string): string {
    if (!raw) return '';
    const iso = raw.match(/^\d{4}-\d{2}-\d{2}$/);
    if (iso) {
      const [year, month, day] = raw.split('-');
      return `${parseInt(day)} ${t.months[parseInt(month) - 1]} ${year}`;
    }
    return raw;
  }

  return (
    <div className="escrita-page">

      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">{t.escrita.pageTitle}</h1>
          <p className="page-intro">{t.escrita.pageIntro}</p>
        </div>
      </header>

      <section className="escrita-controls">
        <div className="container">
          <div className="escrita-controls-inner">
            <div className="escrita-categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`escrita-cat-btn${filter === cat ? ' active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="escrita-search"
              placeholder={t.escrita.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label={t.escrita.searchAriaLabel}
            />
          </div>
        </div>
      </section>

      <section className="escrita-archive">
        <div className="container">
          {loading ? (
            <p className="escrita-loading">{t.escrita.loading}</p>
          ) : filtered.length === 0 ? (
            <p className="escrita-empty">{t.escrita.empty}</p>
          ) : (
            <div className="escrita-list">
              {filtered.map((item, idx) => (
                <article key={item.id} className="escrita-entry">
                  <div className="escrita-entry-number">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="escrita-entry-body">
                    <div className="escrita-entry-top">
                      <span className="escrita-entry-category">{item.category}</span>
                      <span className="escrita-entry-date">{formatDate(item.date)}</span>
                      {item.readTime && <span className="escrita-entry-time">{item.readTime}</span>}
                      {item.origem && <span className="escrita-entry-origem">{item.origem}</span>}
                    </div>
                    <h2 className="escrita-entry-title">
                      {item.slug ? (
                        <Link to={`/post/${item.slug}`}>{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </h2>
                    {item.excerpt && (
                      <p className="escrita-entry-excerpt">{item.excerpt}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="escrita-entry-tags">
                        {item.tags.map(tag => (
                          <span key={tag} className="escrita-entry-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="escrita-entry-cta">
                    {item.slug ? (
                      <Link to={`/post/${item.slug}`} className="escrita-entry-link">
                        {t.escrita.readLink}
                      </Link>
                    ) : (
                      <span className="escrita-entry-soon">{t.escrita.comingSoon}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
