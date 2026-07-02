import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Textos.css';

const textosDataPt = [
  {
    slug: 'julio-bressane-sobre-jean-luc-godard',
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    description: 'Transcrição de ensaio oral proferido por Júlio Bressane em outubro de 2022, após o falecimento de Jean-Luc Godard, na Cinemateca do MAM Rio.',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, outubro de 2022',
    readTime: '5 min',
    featured: true,
  },
  {
    slug: 'jonas-mekas-stan-brakhage',
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    description: 'Tradução de um ensaio de Mekas publicado na coletânea Film Culture Reader (1970), organizada por P. Adams Sitney.',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader (1970)',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'cinema-processual',
    title: 'Cinema Processual',
    category: 'Manifesto',
    description: 'Texto de apresentação do projeto Cinema Processual: entrevistas, ensaios, críticas e produção de escrita e expressão cinematográfica.',
    archiveCode: 'CP-000',
    featured: false,
  },
];

const textosDataEn = [
  {
    slug: 'julio-bressane-sobre-jean-luc-godard',
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    description: 'Transcription of an oral essay given by Julio Bressane in October 2022, following the death of Jean-Luc Godard, at the Cinemateca do MAM Rio.',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, October 2022',
    readTime: '5 min',
    featured: true,
  },
  {
    slug: 'jonas-mekas-stan-brakhage',
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    description: 'Translation of an essay by Jonas Mekas published in Film Culture Reader (1970), organized by P. Adams Sitney.',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader (1970)',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'cinema-processual',
    title: 'Cinema Processual',
    category: 'Manifesto',
    description: 'Presentation text of the Cinema Processual project.',
    archiveCode: 'CP-000',
    featured: false,
  },
];

const categoriesPt = ['Todos', 'Transcrição', 'Tradução', 'Manifesto', 'Ensaio', 'Entrevista'];
const categoriesEn = ['All', 'Transcription', 'Translation', 'Manifesto', 'Essay', 'Interview'];

export function Textos() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState(language === 'en' ? 'All' : 'Todos');

  const textos = language === 'en' ? textosDataEn : textosDataPt;
  const categories = language === 'en' ? categoriesEn : categoriesPt;

  const filteredTextos = filter === 'Todos' || filter === 'All'
    ? textos
    : textos.filter(texto => texto.category === filter);

  const [featured, ...rest] = filteredTextos;

  return (
    <div className="textos-page">
      <div className="textos-page-grain" aria-hidden="true" />

      <header className="textos-hero">
        <div className="textos-hero-inner">
          <span className="textos-hero-eyebrow">{t.textos.pageEyebrow}</span>
          <h1 className="textos-hero-title">{t.textos.pageLabel}</h1>
          <p className="textos-hero-intro">{t.textos.pageIntro}</p>
        </div>
      </header>

      <nav className="textos-filters" aria-label="Filtrar por categoria">
        <div className="textos-filters-inner">
          {categories.map(cat => (
            <button
              key={cat}
              className={`textos-filter-btn${filter === cat ? ' textos-filter-btn--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="textos-archive">
        <div className="textos-archive-inner">
          {featured && (
            <article className="textos-entry textos-entry--featured">
              <div className="textos-entry-left">
                <span className="textos-entry-code">{featured.archiveCode}</span>
                <span className="textos-entry-category">{featured.category}</span>
              </div>
              <div className="textos-entry-body">
                <h2 className="textos-entry-title">
                  <Link to={`/texto/${featured.slug}`}>{featured.title}</Link>
                </h2>
                {featured.source && <span className="textos-entry-source">{featured.source}</span>}
                <p className="textos-entry-desc">{featured.description}</p>
                {'readTime' in featured && featured.readTime && (
                  <span className="textos-entry-time">{featured.archiveCode} · 2022 · {featured.readTime}</span>
                )}
              </div>
              <div className="textos-entry-cta">
                <Link to={`/texto/${featured.slug}`} className="textos-entry-link">
                  {t.textos.readButton}
                  <span className="textos-entry-arrow" aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          )}

          {rest.length > 0 && (
            <div className="textos-list">
              {rest.map((texto) => (
                <article key={texto.slug} className="textos-entry">
                  <div className="textos-entry-left">
                    <span className="textos-entry-code">{texto.archiveCode}</span>
                    <span className="textos-entry-category">{texto.category}</span>
                  </div>
                  <div className="textos-entry-body">
                    <h2 className="textos-entry-title">
                      <Link to={`/texto/${texto.slug}`}>{texto.title}</Link>
                    </h2>
                    {texto.source && <span className="textos-entry-source">{texto.source}</span>}
                    <p className="textos-entry-desc">{texto.description}</p>
                  </div>
                  <div className="textos-entry-cta">
                    <Link to={`/texto/${texto.slug}`} className="textos-entry-link">
                      {t.textos.readButton}
                      <span className="textos-entry-arrow" aria-hidden="true"> →</span>
                    </Link>
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
