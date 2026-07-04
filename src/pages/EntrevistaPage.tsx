import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { entrevistaMetadata, entrevistaTurns } from '../content/entrevistas/arqueologia-parte-1-data';
import './Entrevista.css';

function renderText(text: string): JSX.Element[] {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    const parts: (string | JSX.Element)[] = [];
    const regex = /\*([^*]+)\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(para)) !== null) {
      if (match.index > lastIndex) {
        parts.push(para.slice(lastIndex, match.index));
      }
      parts.push(<em key={`${i}-${match.index}`}>{match[1]}</em>);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < para.length) {
      parts.push(para.slice(lastIndex));
    }
    return <p key={i}>{parts}</p>;
  });
}

export function EntrevistaPage() {
  const { language } = useLanguage();
  const [readProgress, setReadProgress] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = entrevistaMetadata.seoTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', entrevistaMetadata.seoDescription);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', entrevistaMetadata.seoTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', entrevistaMetadata.seoDescription);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'article');

    return () => {
      document.title = 'Francisco Vidal';
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!bodyRef.current) return;
      const el = bodyRef.current;
      const scrollTop = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) { setReadProgress(100); return; }
      setReadProgress(Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (language === 'en') {
    return (
      <div className="entrevista-page">
        <div className="entrevista-back">
          <Link to="/textos">&larr; Back to archive</Link>
        </div>
        <div className="entrevista-header">
          <div className="entrevista-header-inner">
            <h1 className="entrevista-title">{entrevistaMetadata.title}</h1>
            <p className="entrevista-subtitle">{entrevistaMetadata.subtitle}</p>
          </div>
        </div>
        <div className="entrevista-en-notice">
          <p>This interview is available in Portuguese only.</p>
          <Link to="/textos">&larr; Back to archive</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="entrevista-page">
      <div className="entrevista-progress" style={{ width: `${readProgress}%` }} />

      <div className="entrevista-back">
        <Link to="/textos">&larr; Voltar ao arquivo</Link>
      </div>

      <header className="entrevista-header">
        <div className="entrevista-header-inner">
          <h1 className="entrevista-title">{entrevistaMetadata.title}</h1>
          <p className="entrevista-subtitle">{entrevistaMetadata.subtitle}</p>
          <span className="entrevista-credits">{entrevistaMetadata.creditsLine}</span>
        </div>
      </header>

      <div className="entrevista-body" ref={bodyRef}>
        <div className="entrevista-column">
          {entrevistaTurns.map((turn, index) => (
            <div key={index}>
              <div className="entrevista-turn">
                <div className="entrevista-turn-text">
                  <p>
                    <span className={`entrevista-speaker ${turn.speaker === 'Francisco' ? 'entrevista-speaker--francisco' : 'entrevista-speaker--guest'}`}>
                      {turn.speaker}:
                    </span>
                    {' '}
                    {renderText(turn.text.split('\n\n')[0])[0]?.props.children}
                  </p>
                  {turn.text.split('\n\n').length > 1 && (
                    renderText(turn.text.split('\n\n').slice(1).join('\n\n'))
                  )}
                </div>
              </div>

              {index === entrevistaMetadata.pullQuoteInsertAfterTurn && (
                <aside className="entrevista-pullquote">
                  <p>{entrevistaMetadata.pullQuote}</p>
                </aside>
              )}
            </div>
          ))}

          <div className="entrevista-continua">
            <p>Continua na Parte II.</p>
          </div>

          <section className="entrevista-about">
            <span className="entrevista-about-label">Sobre os entrevistados</span>
            <p className="entrevista-about-text">{entrevistaMetadata.aboutBlock}</p>
          </section>

          <nav className="entrevista-nav">
            <span className="entrevista-nav-disabled">Parte II &mdash; em breve</span>
          </nav>
        </div>
      </div>
    </div>
  );
}
