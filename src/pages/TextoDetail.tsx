import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './TextoDetail.css';

interface TextoEntry {
  title: string;
  category: string;
  archiveCode: string;
  source?: string;
  author?: string;
  context?: string;
  readTime?: string;
  description?: string;
  content: React.ReactNode;
  isGodardPaper?: boolean;
}

const textosContentPt: Record<string, TextoEntry> = {
  'julio-bressane-sobre-jean-luc-godard': {
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, outubro de 2022',
    author: 'Júlio Bressane',
    context: 'Cinemateca do MAM Rio · Paixão (Passion, 1982)',
    readTime: '5 min de leitura',
    description: 'Transcrição de ensaio oral proferido por Júlio Bressane em outubro de 2022, após o falecimento de Jean-Luc Godard, na Cinemateca do MAM Rio, depois da exibição de Paixão (Passion, 1982).',
    isGodardPaper: true,
    content: (
      <>
        <p>Jean-Luc Godard conheceu a <span className="highlight-blue">água</span>.</p>

        <p>A água parada de um lago, a água que corre em um riacho, a água que nasce borbulhante em uma fonte, a água que sobe ao céu, numa nuvem em campolas.</p>

        <p>Conheceu todo o movimento da água, um poeta hidráulico, como disse um filósofo do século XIX.</p>

        <p>Poeta que se põe em risco. Que se põe em perigo.</p>

        <p>Brilho de uma onda revolta: nos fotogramas de seus filmes se abre um mistério, uma coisa extraordinária.</p>

        <p>Como um corpo tão reprimido, tão tomado pela civilização, pode, ainda assim, ser arrebatado, passado de banda a banda, sem defesa, por uma <span className="highlight-red">força aborígine?</span></p>

        <p>Uma força sobrevivente de longa duração, remota, antiga, resistente como nunca. Muito bem definida pelo filósofo Ralph Waldo Emerson.</p>

        <p>Que encarna com vontade seus artefatos, tanto que vira <span className="highlight-red">potência do corpo.</span></p>

        <p><span className="highlight-blue">A novidade é sempre Godard?</span> O novo que permanece novo, o clássico.</p>

        <p>O estilo vem por uma matéria desconhecida nessa força contraditória, irresistível, ancestral, que agarra e atrai os seus fotogramas.</p>

        <p>Para mim, o que mais me impressiona, e que impulsiona, o que mais sinto em seu espírito, é a sua arcaica, prístina, <span className="highlight-red">força pré-histórica.</span></p>

        <p>Algo longínquo que, em seu extenso percurso, chega até nós.</p>

        <p>Isso também é a ideia da <span className="highlight-blue">imagem dialética.</span></p>

        <p>Alguma coisa que está muito distante... uma imagem muito distante... e essa imagem, esse signo, vem e vem se transformando até chegar aqui.</p>

        <p>De lá até aqui.</p>

        <p>Através de tempos heterogêneos.</p>

        <p>Tempos diversos.</p>

        <p>E com isso aí você tem uma ideia inteira do objeto.</p>

        <p>Uma visão que atravessa todo esse tempo.</p>

        <p>É como se fosse uma constelação: se você olhar, você consegue ver a nebulosa inteira.</p>

        <p>Essa que é a ideia da imagem dialética.</p>

        <p>E é o que Godard se presta, no cinema dele, a atravessar, a aventurar.</p>

        <p>Colocar um pé na pré-história, um pé que é feito por uma força cega. Uma força que vem e que se impõe naquilo ali.</p>

        <p>Godard se deixou atravessar por uma <span className="highlight-red">força aborígine.</span></p>

        <p>Toda a diferença do Godard é a entrada dessa força aborígine, dessa força incontrolável, que está presente no cinema dele.</p>

        <p>E permite... por isso é que, inclusive, os enquadramentos, a maneira como ele narra as sequências, são todas estranhas ao cinema. Por essa força aborígine que bota em movimento tudo isso.</p>

        <p>Nesse sentido, a "normalidade" do Godard é essa propriedade artística de se colocar em contato com essa <span className="highlight-blue">artéria invisível</span>, que estila a patologia de seu cinema.</p>

        <p>Há uma velha definição, e isso é uma visão apenas, entre o <span className="highlight-blue">talento</span> e o <span className="highlight-red">gênio</span>.</p>

        <p>O <span className="highlight-blue">talento</span> é uma força que você domina e que você controla. O <span className="highlight-red">gênio</span> é uma coisa que domina você.</p>

        <p>Essa é a <span className="highlight-red">força aborígine.</span> Ela é uma força que passa por dentro da coisa. E nessa travessia vem a coisa criativa, necessária, o <span className="highlight-red">ímpeto em que a consciência chega ao seu ponto extremo.</span></p>

        <p>Quando ela chega ao ponto extremo... aí começa essa coisa, <span className="highlight-blue">e a consciência precisa passar por esse ponto extremo.</span></p>

        <p>A força é uma coisa que você cria e que, em algum momento, você controla e domina. Se você fizer um passo, a força passa para trás.</p>

        <p>Uma força sobrevivente, que tem uma longa duração — <span className="highlight-red">a duração de Henri Bergson.</span> Essa duração do pensamento.</p>

        <p><span className="highlight-red">A duração que é o fio condutor do pensamento.</span></p>

        <p>Enfim, agradeço a paciência de vocês.</p>

        <p>Muito obrigado.</p>

        <p className="godard-signature">Júlio Bressane</p>

        <p className="godard-signature">2022.</p>
      </>
    ),
  },
  'mekas-brakhage': {
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader',
    content: (
      <>
        <p>Jonas Mekas escreveu sobre Stan Brakhage em momentos distintos. Este texto, originalmente publicado no Film Culture Reader, organizado por P. Adams Sitney, apresenta uma reflexão sobre a obra do cineasta americano.</p>
        <p>O texto completo será publicado em breve.</p>
      </>
    ),
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    archiveCode: 'CP-000',
    content: (
      <>
        <p>Cinema Processual é um projeto de escrita e expressão cinematográfica. Entrevistas, ensaios, críticas e produção de textos sobre cinema como processo, gesto, memória e forma.</p>
        <p>Texto em preparação.</p>
      </>
    ),
  },
};

const textosContentEn: Record<string, TextoEntry> = {
  'julio-bressane-sobre-jean-luc-godard': {
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, October 2022',
    author: 'Julio Bressane',
    context: 'Cinemateca do MAM Rio · Paixão (Passion, 1982)',
    readTime: '5 min read',
    description: 'Transcription of an oral essay given by Julio Bressane in October 2022, following the death of Jean-Luc Godard, at the Cinemateca do MAM Rio.',
    isGodardPaper: true,
    content: (
      <p className="godard-coming-soon">English version coming soon.</p>
    ),
  },
  'mekas-brakhage': {
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader',
    content: (
      <>
        <p>Jonas Mekas wrote about Stan Brakhage at different moments. This text, originally published in Film Culture Reader, presents a reflection on the work of the American filmmaker.</p>
        <p>The full text will be published soon.</p>
      </>
    ),
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    archiveCode: 'CP-000',
    content: (
      <>
        <p>Cinema Processual is a project of cinematic writing and expression.</p>
        <p>Text in preparation.</p>
      </>
    ),
  },
};

const allSlugs = ['julio-bressane-sobre-jean-luc-godard', 'mekas-brakhage', 'cinema-processual'];

export function TextoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [readProgress, setReadProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  const content = language === 'en' ? textosContentEn : textosContentPt;
  const texto = slug ? content[slug] : null;

  const otherTexts = slug
    ? allSlugs.filter(s => s !== slug).map(s => ({ slug: s, ...content[s] })).filter(Boolean)
    : [];

  useEffect(() => {
    function handleScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const scrollTop = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) { setReadProgress(100); return; }
      setReadProgress(Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!texto) {
    return (
      <div className="texto-detail-page">
        <div className="texto-not-found">
          <p>{t.filmography.notFound}</p>
          <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
        </div>
      </div>
    );
  }

  if (texto.isGodardPaper) {
    return (
      <div className="godard-transcript-page">
        <div className="texto-progress" style={{ width: `${readProgress}%` }} />

        <header className="texto-detail-header">
          <div className="texto-detail-header-inner">
            <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
            <span className="texto-header-code">{texto.archiveCode}</span>
          </div>
        </header>

        <div className="godard-article-shell" ref={articleRef as React.RefObject<HTMLDivElement>}>
          <div className="godard-hero">
            <span className="godard-hero-code">{texto.archiveCode} · {texto.category.toUpperCase()} · 2022</span>
            <h1 className="godard-hero-title">{texto.title}</h1>
            {texto.description && <p className="godard-hero-desc">{texto.description}</p>}
            <div className="godard-hero-meta">
              {texto.author && <span className="godard-hero-author">{texto.author}</span>}
              {texto.context && <span className="godard-hero-context">{texto.context}</span>}
              {texto.readTime && <span className="godard-hero-time">{texto.readTime}</span>}
            </div>
          </div>

          <article className="godard-paper">
            <div className="godard-prose">
              {texto.content}
            </div>
          </article>

          <footer className="godard-footer">
            <span className="godard-footer-credit">Cinema Processual · Transcrição, 2024</span>
          </footer>
        </div>

        {otherTexts.length > 0 && (
          <section className="texto-other">
            <div className="texto-other-inner">
              <span className="texto-other-label">{t.textos.continueReading}</span>
              <div className="texto-other-list">
                {otherTexts.map(other => (
                  <Link key={other.slug} to={`/texto/${other.slug}`} className="texto-other-item">
                    <span className="texto-other-code">{other.archiveCode}</span>
                    <span className="texto-other-title">{other.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="texto-detail-page">
      <div className="texto-detail-grain" aria-hidden="true" />
      <div className="texto-progress" style={{ width: `${readProgress}%` }} />

      <header className="texto-detail-header">
        <div className="texto-detail-header-inner">
          <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
          <span className="texto-header-code">{texto.archiveCode}</span>
        </div>
      </header>

      <article className="texto-article" ref={articleRef}>
        <div className="texto-article-inner">
          <div className="texto-article-meta">
            <span className="texto-article-category">{texto.category}</span>
            {texto.source && <span className="texto-article-source">{texto.source}</span>}
          </div>
          <h1 className="texto-article-title">{texto.title}</h1>
          <div className="texto-article-content">
            {texto.content}
          </div>
        </div>
      </article>

      {otherTexts.length > 0 && (
        <section className="texto-other">
          <div className="texto-other-inner">
            <span className="texto-other-label">{t.textos.continueReading}</span>
            <div className="texto-other-list">
              {otherTexts.map(other => (
                <Link key={other.slug} to={`/texto/${other.slug}`} className="texto-other-item">
                  <span className="texto-other-code">{other.archiveCode}</span>
                  <span className="texto-other-title">{other.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
