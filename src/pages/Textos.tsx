import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Textos.css';

const textosPt = [
  {
    slug: 'mekas-brakhage',
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    description: 'Tradução de ensaio de Jonas Mekas publicado em Film Culture Reader, organizado por P. Adams Sitney.',
  },
  {
    slug: 'bressane-godard',
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    description: 'Transcrição de ensaio oral proferido por Júlio Bressane em outubro de 2022, após o falecimento de Jean-Luc Godard, na Cinemateca do MAM Rio.',
  },
  {
    slug: 'cinema-processual',
    title: 'Cinema Processual',
    category: 'Manifesto',
    description: 'Texto de apresentação do projeto Cinema Processual: entrevistas, ensaios, críticas e produção de escrita e expressão cinematográfica.',
  },
];

const textosEn = [
  {
    slug: 'mekas-brakhage',
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    description: 'Translation of an essay by Jonas Mekas published in Film Culture Reader, organized by P. Adams Sitney.',
  },
  {
    slug: 'bressane-godard',
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    description: 'Transcription of an oral essay given by Julio Bressane in October 2022, following the death of Jean-Luc Godard, at the Cinemateca do MAM Rio.',
  },
  {
    slug: 'cinema-processual',
    title: 'Cinema Processual',
    category: 'Manifesto',
    description: 'Presentation text of the Cinema Processual project: interviews, essays, criticism and production of cinematic writing and expression.',
  },
];

export function Textos() {
  const { language, t } = useLanguage();
  const textos = language === 'en' ? textosEn : textosPt;

  return (
    <div className="textos-page">
      <header className="page-header">
        <div className="page-header-inner">
          <h1 className="page-title">{t.textos.pageLabel}</h1>
          <p className="page-intro">{t.textos.pageIntro}</p>
        </div>
      </header>

      <section className="textos-list">
        <div className="container">
          {textos.map((texto, idx) => (
            <article key={texto.slug} className="textos-entry">
              <div className="textos-entry-number">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="textos-entry-body">
                <span className="textos-entry-category">{texto.category}</span>
                <h2 className="textos-entry-title">
                  <Link to={`/texto/${texto.slug}`}>{texto.title}</Link>
                </h2>
                <p className="textos-entry-desc">{texto.description}</p>
              </div>
              <div className="textos-entry-cta">
                <Link to={`/texto/${texto.slug}`} className="textos-entry-link">
                  {t.textos.readButton}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
