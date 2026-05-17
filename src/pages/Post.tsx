import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './Post.css';

function formatDate(raw: string): string {
  if (!raw) return '';
  if (raw.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = raw.split('-');
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return `${parseInt(day)} de ${months[parseInt(month) - 1]} de ${year}`;
  }
  return raw;
}

interface PostMetadata {
  title: string;
  subtitle: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  origem?: string;
  credit?: string;
  source_url?: string;
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
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}

function renderInline(text: string): React.ReactNode {
  if (!text) return null;
  const segments: React.ReactNode[] = [];
  const regex = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      segments.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith('***') && token.endsWith('***')) {
      segments.push(<strong key={key++}><em>{token.slice(3, -3)}</em></strong>);
    } else if (token.startsWith('**') && token.endsWith('**')) {
      segments.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      segments.push(<em key={key++}>{token.slice(1, -1)}</em>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        segments.push(
          <a key={key++} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
            {linkMatch[1]}
          </a>
        );
      } else {
        segments.push(token);
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    segments.push(text.slice(last));
  }

  return segments.length === 1 ? segments[0] : segments;
}

type ImageVariant = 'opening' | 'inline' | 'closing' | 'sequel';

type ParsedElement =
  | { type: 'p'; text: string; isFirst?: boolean }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string; id: string }
  | { type: 'blockquote'; lines: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'rule' }
  | { type: 'image'; src: string; alt: string; caption?: string; variant?: ImageVariant }
  | { type: 'interview-question'; text: string }
  | { type: 'interview-answer'; speaker: string; text: string }
  | { type: 'note'; text: string }
  | { type: 'credit'; text: string };

function parseContent(raw: string): ParsedElement[] {
  const lines = raw.split('\n');
  const elements: ParsedElement[] = [];
  let i = 0;
  let firstParagraphSeen = false;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '') {
      i++;
      continue;
    }

    if (trimmed === '---') {
      elements.push({ type: 'rule' });
      i++;
      continue;
    }

    if (trimmed.startsWith('<figure')) {
      let block = trimmed;
      if (!block.includes('</figure>')) {
        i++;
        while (i < lines.length && !lines[i].includes('</figure>')) {
          block += ' ' + lines[i].trim();
          i++;
        }
        if (i < lines.length) block += ' ' + lines[i].trim();
      }
      const srcMatch = block.match(/src="([^"]+)"/);
      const altMatch = block.match(/alt="([^"]*)"/);
      const captionMatch = block.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/);
      if (srcMatch) {
        elements.push({
          type: 'image',
          src: srcMatch[1],
          alt: altMatch ? altMatch[1] : '',
          caption: captionMatch ? captionMatch[1].replace(/<[^>]+>/g, '').trim() : undefined,
        });
      }
      i++;
      continue;
    }

    const mdImageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (mdImageMatch) {
      elements.push({ type: 'image', src: mdImageMatch[2], alt: mdImageMatch[1] });
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3).trim();
      elements.push({ type: 'h2', text, id: slugify(text) });
      i++;
      continue;
    }

    if (trimmed.startsWith('### ') || trimmed.startsWith('#### ')) {
      const text = trimmed.replace(/^#{3,4} /, '').trim();
      elements.push({ type: 'h3', text, id: slugify(text) });
      i++;
      continue;
    }

    if (trimmed.startsWith('# ') || trimmed === '#') {
      const inner = trimmed.slice(2).trim();
      if (!inner) { i++; continue; }

      const speakerInner = inner.match(/^\*\*([^*]+)\*\*:\s*(.*)$/);
      if (speakerInner) {
        elements.push({ type: 'interview-answer', speaker: speakerInner[1], text: speakerInner[2] });
        i++;
        continue;
      }

      if (inner.startsWith('***') && inner.endsWith('***')) {
        elements.push({ type: 'h3', text: inner.slice(3, -3).trim(), id: slugify(inner.slice(3, -3).trim()) });
        i++;
        continue;
      }

      if (inner.startsWith('*') && inner.endsWith('*') && !inner.startsWith('**')) {
        elements.push({ type: 'note', text: inner.slice(1, -1) });
        i++;
        continue;
      }

      if (inner.startsWith('**') && inner.endsWith('**') && !inner.match(/^\*\*([^*]+)\*\*:/)) {
        elements.push({ type: 'h3', text: inner.slice(2, -2).trim(), id: slugify(inner.slice(2, -2).trim()) });
        i++;
        continue;
      }

      const isFirst = !firstParagraphSeen;
      firstParagraphSeen = true;
      elements.push({ type: 'p', text: inner, isFirst });
      i++;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        bqLines.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push({ type: 'blockquote', lines: bqLines });
      continue;
    }

    if (trimmed.match(/^[-*] /) && !trimmed.match(/^\*\*[^*]+\*\*:/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^[-*] /)) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push({ type: 'list', items });
      continue;
    }

    const speakerAnswerMatch = trimmed.match(/^\*\*([^*]+)\*\*:\s*(.*)$/);
    if (speakerAnswerMatch) {
      elements.push({
        type: 'interview-answer',
        speaker: speakerAnswerMatch[1],
        text: speakerAnswerMatch[2],
      });
      i++;
      continue;
    }

    if (
      trimmed.startsWith('*') &&
      trimmed.endsWith('*') &&
      !trimmed.startsWith('**') &&
      trimmed.length > 2
    ) {
      const inner = trimmed.slice(1, -1);
      const isNote = inner.startsWith('Tradução') || inner.startsWith('Entrevista realizada') || inner.startsWith('A seguinte') || inner.startsWith('Texto original') || inner.length < 180;
      if (isNote) {
        elements.push({ type: 'note', text: inner });
      } else {
        elements.push({ type: 'interview-question', text: inner });
      }
      i++;
      continue;
    }

    if (trimmed.startsWith('_') && trimmed.endsWith('_') && trimmed.length > 2) {
      elements.push({ type: 'note', text: trimmed.slice(1, -1) });
      i++;
      continue;
    }

    const creditMatch = trimmed.match(/^\[([^\]]+)\]\(([^)]+)\)\s*$/);
    if (creditMatch && (creditMatch[1].startsWith('Texto original') || creditMatch[1].startsWith('Tradução'))) {
      elements.push({ type: 'credit', text: `${creditMatch[1]} — ${creditMatch[2]}` });
      i++;
      continue;
    }

    if (trimmed) {
      const isFirst = !firstParagraphSeen;
      firstParagraphSeen = true;
      elements.push({ type: 'p', text: trimmed, isFirst });
    }
    i++;
  }

  return elements;
}

function classifyImageVariants(elements: ParsedElement[]): ParsedElement[] {
  return elements.map((el, i) => {
    if (el.type !== 'image') return el;

    const prev = elements[i - 1];
    const next = elements[i + 1];

    const prevIsImage = prev?.type === 'image';
    const nextIsImage = next?.type === 'image';

    const allBeforeAreImages = elements.slice(0, i).every(e => e.type === 'image');
    const allAfterAreImages = !next || elements.slice(i + 1).every(e => e.type === 'image');

    let variant: ImageVariant;

    if (prevIsImage) {
      variant = 'sequel';
    } else if (allBeforeAreImages) {
      variant = 'opening';
    } else if (allAfterAreImages && !nextIsImage) {
      variant = 'closing';
    } else if (allAfterAreImages && nextIsImage) {
      variant = 'closing';
    } else {
      variant = 'inline';
    }

    return { ...el, variant };
  });
}

function isBoldOnlyLine(text: string): boolean {
  return text.startsWith('**') && text.endsWith('**') && !text.match(/^\*\*([^*]+)\*\*:/) && text.length > 4;
}

function groupInterviewTurns(elements: ParsedElement[]): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < elements.length) {
    const el = elements[i];

    if (el.type === 'interview-question') {
      nodes.push(
        <div key={`q-${i}`} className="interview-exchange">
          <p className="interview-question">{renderInline(el.text)}</p>
        </div>
      );
      i++;
      continue;
    }

    if (el.type === 'interview-answer') {
      const paragraphs: ParsedElement[] = [];
      i++;
      while (
        i < elements.length &&
        (elements[i].type === 'p' ||
          (elements[i].type === 'interview-answer' &&
            (elements[i] as { type: 'interview-answer'; speaker: string; text: string }).speaker === el.speaker))
      ) {
        paragraphs.push(elements[i]);
        i++;
      }

      nodes.push(
        <div key={`a-${i}`} className="interview-response">
          <span className="interview-speaker">{el.speaker}</span>
          <div className="interview-response-body">
            <p className="interview-answer">{renderInline(el.text)}</p>
            {paragraphs.map((p, pi) => {
              if (p.type === 'p') {
                return (
                  <p key={pi} className="interview-answer">
                    {renderInline(p.text)}
                  </p>
                );
              }
              if (p.type === 'interview-answer') {
                return (
                  <p key={pi} className="interview-answer">
                    {renderInline((p as { type: 'interview-answer'; speaker: string; text: string }).text)}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      );
      continue;
    }

    nodes.push(renderSingleElement(el, i));
    i++;
  }

  return nodes;
}

function renderSingleElement(el: ParsedElement, idx: number): React.ReactNode {
  switch (el.type) {
    case 'p': {
      const dropCap = el.isFirst;
      return (
        <p key={idx} className={`essay-p${dropCap ? ' essay-p--first' : ''}`}>
          {renderInline(el.text)}
        </p>
      );
    }

    case 'h2':
      return (
        <h2 key={idx} id={el.id} className="essay-h2">
          {renderInline(el.text)}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={idx} id={el.id} className="essay-h3">
          {renderInline(el.text)}
        </h3>
      );

    case 'blockquote':
      return (
        <blockquote key={idx} className="essay-blockquote">
          {el.lines.map((line, li) => (
            <span key={li}>
              {renderInline(line)}
              {li < el.lines.length - 1 && <br />}
            </span>
          ))}
        </blockquote>
      );

    case 'list':
      return (
        <ul key={idx} className="essay-list">
          {el.items.map((item, ii) => (
            <li key={ii} className="essay-list-item">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );

    case 'rule':
      return <div key={idx} className="essay-rule" />;

    case 'image': {
      const variantClass = el.variant === 'opening'
        ? 'essay-figure--opening'
        : el.variant === 'closing'
          ? 'essay-figure--closing'
          : el.variant === 'sequel'
            ? 'essay-figure--sequel'
            : 'essay-figure';
      return (
        <figure key={idx} className={variantClass}>
          <img src={el.src} alt={el.alt} loading="lazy" />
          {el.caption && <figcaption className="essay-caption">{el.caption}</figcaption>}
        </figure>
      );
    }

    case 'note':
      return (
        <p key={idx} className="essay-note">
          {renderInline(el.text)}
        </p>
      );

    case 'credit':
      return (
        <p key={idx} className="essay-credit">
          {el.text}
        </p>
      );

    default:
      return null;
  }
}

function renderElements(elements: ParsedElement[], isInterview?: boolean): React.ReactNode[] {
  if (isInterview) {
    const interviewElements = elements.map((el) => {
      if (el.type === 'p' && isBoldOnlyLine(el.text)) {
        return { type: 'interview-question' as const, text: el.text.slice(2, -2).trim() };
      }
      if (el.type === 'h3' && el.text.startsWith('**') && el.text.endsWith('**')) {
        return { type: 'interview-question' as const, text: el.text.slice(2, -2).trim() };
      }
      return el;
    });
    return groupInterviewTurns(interviewElements);
  }

  return elements.map((el, idx) => renderSingleElement(el, idx));
}

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [metadata, setMetadata] = useState<PostMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [readProgress, setReadProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const { data: dbPosts, error } = await supabase.rpc('get_post_by_slug', { p_slug: slug });
        const dbPost = dbPosts?.[0] ?? null;

        if (!error && dbPost) {
          const meta: PostMetadata = {
            title: dbPost.title,
            subtitle: dbPost.subtitle || '',
            date: dbPost.date || '',
            category: dbPost.category || 'Escrita',
            tags: Array.isArray(dbPost.tags) ? dbPost.tags : [],
            readTime: dbPost.read_time || calculateReadTime(dbPost.content),
            origem: dbPost.origem || '',
            credit: dbPost.credit || '',
          };
          setMetadata(meta);
          setContent(dbPost.content);
          setHeadings(extractHeadings(dbPost.content));
          setLoading(false);
          return;
        }

        const response = await fetch(`/posts/${slug}.md`);
        if (!response.ok) throw new Error('Not found');
        const text = await response.text();

        const fmMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (fmMatch) {
          const fmText = fmMatch[1];
          const bodyText = fmMatch[2];
          const meta: any = {};

          fmText.split('\n').forEach(line => {
            const m = line.match(/^(\w+):\s*(.+)$/);
            if (m) {
              const key = m[1];
              let val = m[2].trim().replace(/^["']|["']$/g, '');
              if (key === 'tags') {
                meta[key] = val
                  .replace(/^\[|\]$/g, '')
                  .split(',')
                  .map((t: string) => t.trim().replace(/^["']|["']$/g, ''))
                  .filter(Boolean);
              } else {
                meta[key] = val;
              }
            }
          });

          if (!meta.readTime) meta.readTime = calculateReadTime(bodyText);
          if (!Array.isArray(meta.tags)) meta.tags = [];

          setMetadata(meta as PostMetadata);
          setContent(bodyText);
          setHeadings(extractHeadings(bodyText));
        }
      } catch {
        // silently handled; loading false triggers not-found UI
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  useEffect(() => {
    function handleScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const scrollTop = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setReadProgress(Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="post-page">
        <div className="post-loading">
          <span>Carregando</span>
        </div>
      </div>
    );
  }

  if (!metadata) {
    return (
      <div className="post-page">
        <div className="post-not-found">Texto não encontrado.</div>
      </div>
    );
  }

  const parsed = classifyImageVariants(parseContent(content));
  const showTOC = headings.length >= 3;
  const isInterview = metadata.category?.toLowerCase() === 'entrevista' ||
    parsed.some(el => el.type === 'interview-question' || el.type === 'interview-answer');

  const creditLine = metadata.credit || metadata.origem || '';
  const sourceUrl = metadata.source_url || '';

  return (
    <div className="post-page">
      <div className="read-progress" style={{ width: `${readProgress}%` }} aria-hidden="true" />

      <header className="post-nav">
        <div className="container">
          <Link to="/escrita" className="post-back">← Escrita</Link>
        </div>
      </header>

      <article className={`essay${isInterview ? ' essay--interview' : ''}`} ref={articleRef}>

        <div className="essay-header-wrap">
          <div className="essay-header-inner">
            <div className="essay-eyebrow">
              <span className="essay-category">{metadata.category}</span>
              {metadata.date && (
                <>
                  <span className="essay-eyebrow-sep" aria-hidden="true" />
                  <span className="essay-date">{formatDate(metadata.date)}</span>
                </>
              )}
            </div>

            <h1 className="essay-title">{metadata.title}</h1>

            {metadata.subtitle && (
              <p className="essay-subtitle">{metadata.subtitle}</p>
            )}

            <div className="essay-meta">
              {creditLine && (
                <>
                  <span className="essay-author">{creditLine}</span>
                  <span className="essay-eyebrow-sep" aria-hidden="true" />
                </>
              )}
              <span className="essay-time">{metadata.readTime} de leitura</span>
            </div>
          </div>
        </div>

        <div className="essay-header-divider">
          <div className="essay-header-divider-line" />
        </div>

        {showTOC && (
          <nav className="essay-toc" aria-label="Sumário">
            <div className="essay-toc-inner">
              <p className="essay-toc-label">Sumário</p>
              <ol className="essay-toc-list">
                {headings.map((h) => (
                  <li key={h.id} className={`essay-toc-item level-${h.level}`}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}

        <section className="essay-body">
          {renderElements(parsed, isInterview)}

          {sourceUrl && (
            <p className="essay-source-link">
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                Texto original
              </a>
            </p>
          )}
        </section>

        <footer className="essay-footer">
          {metadata.tags && metadata.tags.length > 0 && (
            <div className="essay-tags">
              {metadata.tags.map((tag, i) => (
                <span key={i} className="essay-tag">{tag}</span>
              ))}
            </div>
          )}
          <Link to="/escrita" className="essay-back-link">← Voltar para Escrita</Link>
        </footer>

      </article>
    </div>
  );
}

function extractHeadings(text: string): Heading[] {
  const result: Heading[] = [];
  text.split('\n').forEach(line => {
    if (line.startsWith('## ')) {
      const t = line.slice(3).trim();
      result.push({ id: slugify(t), text: t, level: 2 });
    } else if (line.startsWith('### ')) {
      const t = line.slice(4).trim();
      result.push({ id: slugify(t), text: t, level: 3 });
    }
  });
  return result;
}
