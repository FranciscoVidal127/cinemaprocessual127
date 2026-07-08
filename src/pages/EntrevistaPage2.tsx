import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { entrevista2Metadata } from '../content/entrevistas/arqueologia-parte-2-data';
import './Entrevista2.css';

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

function renderLeadIn(text: string): JSX.Element {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*([^*]+)\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<em key={match.index}>{match[1]}</em>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return <p className="entrevista2-leadin">{parts}</p>;
}

export function EntrevistaPage2() {
  const { language } = useLanguage();
  const [readProgress, setReadProgress] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = entrevista2Metadata.seoTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', entrevista2Metadata.seoDescription);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', entrevista2Metadata.seoTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', entrevista2Metadata.seoDescription);

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
      <div className="entrevista2-page">
        <div className="entrevista2-back">
          <Link to="/textos">&larr; Back to archive</Link>
        </div>
        <div className="entrevista2-hero">
          <h1 className="entrevista2-title">{entrevista2Metadata.title}</h1>
          <p className="entrevista2-subtitle">{entrevista2Metadata.subtitle}</p>
        </div>
        <div className="entrevista2-en-notice">
          <p>This interview is available in Portuguese only.</p>
          <Link to="/textos">&larr; Back to archive</Link>
        </div>
      </div>
    );
  }

  const { sections } = entrevista2Metadata;

  return (
    <div className="entrevista2-page">
      <div className="entrevista2-progress" style={{ width: `${readProgress}%` }} />

      <div className="entrevista2-back">
        <Link to="/textos">&larr; Voltar ao arquivo</Link>
      </div>

      <header className="entrevista2-hero">
        <span className="entrevista2-eyebrow">{entrevista2Metadata.eyebrow}</span>
        <h1 className="entrevista2-title">{entrevista2Metadata.title}</h1>
        <p className="entrevista2-subtitle">{entrevista2Metadata.subtitle}</p>
        {renderLeadIn(entrevista2Metadata.leadIn)}
        <span className="entrevista2-credits">{entrevista2Metadata.creditsLine}</span>
      </header>

      <nav className="entrevista2-index">
        <div className="entrevista2-index-inner">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="entrevista2-index-link"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="entrevista2-body" ref={bodyRef}>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="entrevista2-section">
            <div className="entrevista2-section-separator">
              <h2 className="entrevista2-section-title">{section.title}</h2>
            </div>

            {section.turns.map((turn, turnIndex) => (
              <div key={turnIndex}>
                <div className={`entrevista2-turn${turn.speaker === 'Francisco' ? ' entrevista2-turn--francisco' : ''}`}>
                  <div className="entrevista2-turn-text">
                    <p>
                      <span className={`entrevista2-speaker ${turn.speaker === 'Francisco' ? 'entrevista2-speaker--francisco' : 'entrevista2-speaker--guest'}`}>
                        {turn.speaker === 'Francisco' ? 'Francisco Vidal' : turn.speaker === 'Priscyla' ? 'Priscyla Bettim' : 'Renato Coelho'}:
                      </span>
                      {' '}
                      {renderText(turn.text.split('\n\n')[0])[0]?.props.children}
                    </p>
                    {turn.text.split('\n\n').length > 1 && (
                      renderText(turn.text.split('\n\n').slice(1).join('\n\n'))
                    )}
                  </div>
                </div>

                {section.pullQuoteAfterTurn === turnIndex && section.pullQuoteText && (
                  <aside className="entrevista2-pullquote">
                    <p>{section.pullQuoteText}</p>
                  </aside>
                )}
              </div>
            ))}
          </section>
        ))}

        <div className="entrevista2-closing">
          <p className="entrevista2-closing-note">{entrevista2Metadata.closingNote}</p>
          <nav className="entrevista2-footer-nav">
            <Link to="/textos/arqueologia-de-criacao-parte-1" className="entrevista2-footer-link">
              &larr; Ler Parte 1
            </Link>
            <Link to="/textos" className="entrevista2-footer-link">
              Voltar para Textos
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
