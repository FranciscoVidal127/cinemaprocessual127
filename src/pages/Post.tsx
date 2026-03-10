import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './Post.css';

interface PostMetadata {
  title: string;
  subtitle: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  origem?: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 220);
  return `${minutes} min`;
}

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [metadata, setMetadata] = useState<PostMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingMode, setReadingMode] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('readingMode');
    if (savedMode === 'true') {
      setReadingMode(true);
    }
  }, []);

  useEffect(() => {
    async function loadPost() {
      try {
        const { data: dbPost, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (!error && dbPost) {
          const meta: PostMetadata = {
            title: dbPost.title,
            subtitle: '',
            date: dbPost.date || '',
            category: dbPost.category || 'Escrita',
            tags: dbPost.tags || [],
            readTime: dbPost.read_time || calculateReadTime(dbPost.content),
            origem: dbPost.origem || 'por Francisco Vidal'
          };

          setMetadata(meta);
          setContent(dbPost.content);

          const extractedHeadings: Heading[] = [];
          dbPost.content.split('\n').forEach((line: string) => {
            if (line.startsWith('## ')) {
              const text = line.replace('## ', '');
              extractedHeadings.push({ id: slugify(text), text, level: 2 });
            } else if (line.startsWith('### ')) {
              const text = line.replace('### ', '');
              extractedHeadings.push({ id: slugify(text), text, level: 3 });
            }
          });
          setHeadings(extractedHeadings);
          setLoading(false);
          return;
        }

        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();

        const metadataMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

        if (metadataMatch) {
          const metadataText = metadataMatch[1];
          const contentText = metadataMatch[2];

          const meta: any = {};
          metadataText.split('\n').forEach(line => {
            const match = line.match(/^(\w+):\s*(.*)$/);
            if (match) {
              const key = match[1];
              let value = match[2].replace(/^["']|["']$/g, '');

              if (key === 'tags') {
                const tagsArray = value.replace(/^\[|\]$/g, '').split(',').map((t: string) => t.trim().replace(/^["']|["']$/g, ''));
                meta[key] = tagsArray;
              } else {
                meta[key] = value;
              }
            }
          });

          if (!meta.readTime) {
            meta.readTime = calculateReadTime(contentText);
          }

          setMetadata(meta as PostMetadata);
          setContent(contentText);

          const extractedHeadings: Heading[] = [];
          contentText.split('\n').forEach(line => {
            if (line.startsWith('## ')) {
              const text = line.replace('## ', '');
              extractedHeadings.push({ id: slugify(text), text, level: 2 });
            } else if (line.startsWith('### ')) {
              const text = line.replace('### ', '');
              extractedHeadings.push({ id: slugify(text), text, level: 3 });
            }
          });
          setHeadings(extractedHeadings);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  useEffect(() => {
    function handleScroll() {
      if (!articleRef.current) return;

      const article = articleRef.current;
      const scrollTop = window.scrollY;
      const docHeight = article.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.min(100, Math.max(0, scrollPercent * 100));

      setReadProgress(scrollPercentRounded);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleReadingMode() {
    const newMode = !readingMode;
    setReadingMode(newMode);
    localStorage.setItem('readingMode', String(newMode));
  }

  if (loading) {
    return (
      <div className="post-page">
        <div className="post-loading">Carregando...</div>
      </div>
    );
  }

  if (!metadata) {
    return (
      <div className="post-page">
        <div className="post-not-found">Post não encontrado</div>
      </div>
    );
  }

  const showTOC = headings.length >= 3;

  return (
    <div className="post-page" data-reading={readingMode}>
      <div className="read-progress" style={{ width: `${readProgress}%` }} />

      {!readingMode && (
        <header className="post-header">
          <Link to="/#escrita" className="back-link">← Francisco Vidal</Link>
        </header>
      )}

      <article className="essay" ref={articleRef}>
        <header className="essay-header">
          <div className="eyebrow">
            {metadata.category || 'ESCRITA'} • {metadata.date}
          </div>

          <h1 className="essay-title">{metadata.title}</h1>

          {metadata.subtitle && (
            <p className="lead">{metadata.subtitle}</p>
          )}

          <div className="meta">
            <span className="meta-author">
              {metadata.origem || 'por Francisco Vidal'}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-time">{metadata.readTime} de leitura</span>
            <button className="reading-toggle" onClick={toggleReadingMode}>
              {readingMode ? 'Sair do modo leitura' : 'Modo leitura'}
            </button>
          </div>

          <hr className="rule" />
        </header>

        {slug === 'sobre-o-vazio-jeanne-dielman' && (
          <figure className="essay-hero-image">
            <div className="essay-hero-frame">
              <img
                src="/images/jeannedielman1.png"
                alt="Jeanne Dielman (still do filme)"
                loading="lazy"
              />
            </div>
          </figure>
        )}

        {slug === 'inconsciente-maquinico' && (
          <>
            <figure className="essay-hero-image">
              <div className="essay-hero-frame">
                <img
                  src="/images/inconscientemaquinico1.png"
                  alt="Capa de O Inconsciente Maquínico, Félix Guattari"
                  loading="eager"
                />
              </div>
            </figure>
            <figure className="essay-hero-image essay-hero-image--stacked">
              <div className="essay-hero-frame">
                <img
                  src="/images/guattarisorindo.png"
                  alt="Félix Guattari (foto)"
                  loading="lazy"
                />
              </div>
            </figure>
          </>
        )}

        {slug === 'festival-ecra-2023' && (
          <figure className="essay-hero-image">
            <div className="essay-hero-frame">
              <img
                src="/images/ecra-1.png"
                alt="Festival Ecrã 2023"
                loading="lazy"
              />
            </div>
          </figure>
        )}

        {slug === 'uma-entrevista-em-pijamas' && (
          <figure className="essay-editorial-image">
            <div className="essay-editorial-frame">
              <img
                src="/images/Akerman.png"
                alt="Chantal Akerman"
                loading="lazy"
              />
            </div>
          </figure>
        )}

        {showTOC && (
          <nav className="toc">
            <div className="toc-title">Sumário</div>
            <ol className="toc-list">
              {headings.map((heading) => (
                <li key={heading.id} className={`toc-item toc-level-${heading.level}`}>
                  <a href={`#${heading.id}`} className="toc-link">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <section className="essay-body">
          {(() => {
            const lines = content.split('\n');
            const elements: JSX.Element[] = [];

            for (let idx = 0; idx < lines.length; idx++) {
              const line = lines[idx];

              if (slug === 'uma-entrevista-em-pijamas' && line.includes('**Início**')) {
                elements.push(
                  <p key={idx} className="essay-p" style={{ textAlign: 'center', fontWeight: 'bold', margin: '1.8em 0 1.2em 0' }}>
                    Início
                  </p>
                );
                elements.push(
                  <figure key={`${idx}-inline-img`} className="essay-editorial-inline">
                    <div className="essay-editorial-frame">
                      <img
                        src="/images/Akerbrenez.png"
                        alt="Chantal Akerman e Nicole Brenez"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                );
                continue;
              }

              if (line.trim().startsWith('<figure')) {
                let htmlBlock = line + '\n';
                idx++;
                while (idx < lines.length && !lines[idx].includes('</figure>')) {
                  htmlBlock += lines[idx] + '\n';
                  idx++;
                }
                if (idx < lines.length) {
                  htmlBlock += lines[idx];
                }

                const srcMatch = htmlBlock.match(/src="([^"]+)"/);
                const altMatch = htmlBlock.match(/alt="([^"]*)"/);
                const classMatch = htmlBlock.match(/className="([^"]+)"/);

                if (srcMatch) {
                  const imgSrc = srcMatch[1];
                  const imgAlt = altMatch ? altMatch[1] : '';
                  const figureClass = classMatch ? classMatch[1] : 'essay-editorial-inline';

                  elements.push(
                    <figure key={idx} className={figureClass}>
                      <div className="essay-editorial-frame">
                        <img src={imgSrc} alt={imgAlt} loading="lazy" />
                      </div>
                    </figure>
                  );
                }
                continue;
              }

              if (line.trim() === '---') {
                elements.push(<hr key={idx} className="section-break" />);
                continue;
              }

              if (line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)) {
                const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                if (match) {
                  const alt = match[1];
                  const src = match[2];
                  elements.push(
                    <figure key={idx} className="essay-image">
                      <img src={src} alt={alt} />
                    </figure>
                  );
                  continue;
                }
              }

              if (line.startsWith('### ')) {
                const text = line.replace('### ', '');
                const id = slugify(text);
                elements.push(
                  <h3 key={idx} id={id} className="essay-h3">
                    {text}
                  </h3>
                );
                continue;
              }

              if (line.startsWith('## ')) {
                const text = line.replace('## ', '');
                const id = slugify(text);
                elements.push(
                  <h2 key={idx} id={id} className="essay-h2">
                    {text}
                  </h2>
                );
                continue;
              }

              if (line.startsWith('# ')) {
                const text = line.replace('# ', '').trim();
                if (text) {
                  elements.push(
                    <p key={idx} className="essay-p">
                      {text.split(/(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[([^\]]+)\]\(([^)]+)\))/).map((part, i) => {
                        if (!part) return null;
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                          return <em key={i}>{part.slice(1, -1)}</em>;
                        }
                        const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                        if (linkMatch) {
                          return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>;
                        }
                        return part;
                      })}
                    </p>
                  );
                }
                continue;
              }

              if (line.match(/^\*\*[^*]+\*\*:/)) {
                const match = line.match(/^\*\*([^*]+)\*\*:\s*(.*)$/);
                if (match) {
                  const speaker = match[1];
                  const text = match[2];
                  elements.push(
                    <p key={idx} className="interview-answer">
                      <span className="speaker">{speaker}:</span> {text.split(/(\*[^*]+\*)/).map((part, i) => {
                        if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                          return <em key={i}>{part.slice(1, -1)}</em>;
                        }
                        return part;
                      })}
                    </p>
                  );
                  continue;
                }
              }

              if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
                const text = line.slice(1, -1);
                elements.push(
                  <p key={idx} className="interview-question">
                    {text}
                  </p>
                );
                continue;
              }

              if (line.startsWith('[') && line.includes('](')) {
                const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (match) {
                  elements.push(
                    <p key={idx} className="essay-p">
                      <a href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]}</a>
                    </p>
                  );
                  continue;
                }
              }

              if (line.trim() === '') {
                continue;
              }

              elements.push(
                <p key={idx} className="essay-p">
                  {line.split(/(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[([^\]]+)\]\(([^)]+)\))/).map((part, i) => {
                    if (!part) return null;
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                      return <em key={i}>{part.slice(1, -1)}</em>;
                    }
                    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                    if (linkMatch) {
                      return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>;
                    }
                    return part;
                  })}
                </p>
              );
            }

            return elements;
          })()}
        </section>

        {slug === 'sobre-o-vazio-jeanne-dielman' && (
          <figure className="essay-hero-image essay-hero-image--end">
            <div className="essay-hero-frame">
              <img
                src="/images/jeannedielman2.png"
                alt="Jeanne Dielman (still do filme)"
                loading="lazy"
              />
            </div>
          </figure>
        )}

        {!readingMode && (
          <footer className="essay-footer">
            <Link to="/#escrita" className="essay-back">← Voltar para Escrita</Link>
          </footer>
        )}
      </article>
    </div>
  );
}
