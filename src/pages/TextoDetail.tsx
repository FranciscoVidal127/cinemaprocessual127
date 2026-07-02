import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './TextoDetail.css';

const textosContentPt: Record<string, {
  title: string;
  category: string;
  archiveCode: string;
  source?: string;
  content: string;
}> = {
  'mekas-brakhage': {
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    archiveCode: 'CP-002',
    source: 'Film Culture Reader',
    content: `Jonas Mekas escreveu sobre Stan Brakhage em momentos distintos. Este texto, originalmente publicado no Film Culture Reader, organizado por P. Adams Sitney, apresenta uma reflexão sobre a obra do cineasta americano.

Stan Brakhage (1933–2003) foi um dos principais realizadores do cinema experimental americano. Sua obra, que compreende mais de quatrocentos filmes, explora as possibilidades do cinematic através da manipulação direta do filme, da colagem, da pintura sobre a emulsão, e de uma constante pesquisa sobre a imagem em movimento.

A tradução deste ensaio busca aproximar o leitor brasileiro do pensamento de Mekas sobre Brakhage, incluindo suas reflexões sobre a materialidade do filme, a relação entre o cineasta e a paisagem americana, e a dimensão mística que atravessa sua obra.

O texto completo será publicado em breve.`,
  },
  'bressane-godard': {
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    archiveCode: 'CP-001',
    source: 'Cinemateca do MAM Rio, outubro de 2022',
    content: `Em outubro de 2022, após o falecimento de Jean-Luc Godard, Júlio Bressane proferiu um ensaio oral na Cinemateca do MAM Rio. Esta transcrição procura preservar o ritmo, as pausas e o pensamento em movimento característico de Bressane.

Godard foi, durante seis décadas, uma presença constante no cinema brasileiro e mundial. Sua obra, marcada pela invenção formal, pela crítica e pela reflexão sobre a imagem, atravessou gerações de cineastas.

Bressane fala de Godard não como crítico ou historiador, mas como cineasta que dialogou com sua obra, que encontrou nela pontos de partida e de retorno, que a conhece de dentro — da montagem, da encenação, do som.

A transcrição completa será publicada em breve.`,
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    archiveCode: 'CP-000',
    content: `Cinema Processual é um projeto de escrita e expressão cinematográfica. Entrevistas, ensaios, críticas e produção de textos sobre cinema como processo, gesto, memória e forma.

O cinema pensado por dentro: na sala de montagem, no set, na negociação com o tempo e com o dinheiro, na escuta do realizador, na atenção ao que se revela entre o planejado e o inesperado.

Este projeto nasce da convivência com o cinema brasileiro contemporâneo e de um percurso que passa pela tradução, pela pós-produção, pela montagem e pela escuta dos processos de criação.

Escrita que acompanha o filme, que se faz ao lado, que não antecipa nem explica, mas que busca permanecer na vizinhança do que se faz.

Cinema Processual quer ser um espaço de atenção ao que se revela no fazer cinematográfico: o que se descobre entre um take e outro, o que se encontra na sala de edição, o que se escuta quando o filme está sendo pensado.

Texto em preparação.`,
  },
};

const textosContentEn: Record<string, {
  title: string;
  category: string;
  archiveCode: string;
  source?: string;
  content: string;
}> = {
  'mekas-brakhage': {
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    archiveCode: 'CP-002',
    source: 'Film Culture Reader',
    content: `Jonas Mekas wrote about Stan Brakhage at different moments. This text, originally published in Film Culture Reader, organized by P. Adams Sitney, presents a reflection on the work of the American filmmaker.

Stan Brakhage (1933–2003) was one of the leading figures of American experimental cinema. His body of work, comprising over four hundred films, explores the possibilities of the cinematic through direct manipulation of the film, collage, painting on emulsion, and a constant research on the moving image.

This translation aims to bring Brazilian readers closer to Mekas's thinking about Brakhage, including his reflections on the materiality of film, the relationship between the filmmaker and the American landscape, and the mystical dimension that runs through his work.

The full text will be published soon.`,
  },
  'bressane-godard': {
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    archiveCode: 'CP-001',
    source: 'Cinemateca do MAM Rio, October 2022',
    content: `In October 2022, following the death of Jean-Luc Godard, Julio Bressane gave an oral essay at the Cinemateca do MAM Rio. This transcription seeks to preserve the rhythm, the pauses and the characteristic thinking-in-motion of Bressane.

Godard was, for six decades, a constant presence in Brazilian and world cinema. His body of work, marked by formal invention, criticism and reflection on the image, crossed generations of filmmakers.

Bressane speaks of Godard not as a critic or historian, but as a filmmaker who dialogued with his work, who found in it points of departure and return, who knows it from within — from editing, directing, sound.

The complete transcription will be published soon.`,
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    archiveCode: 'CP-000',
    content: `Cinema Processual is a project of cinematic writing and expression. Interviews, essays, criticism and production of texts on cinema as process, gesture, memory and form.

Cinema thought from within: in the editing room, on set, in the negotiation with time and money, in listening to the filmmaker, in attention to what reveals itself between the planned and the unexpected.

This project is born from the experience with contemporary Brazilian cinema and from a trajectory that moves through translation, post-production, editing and listening to the processes of creation.

Writing that accompanies the film, that is made alongside, that does not anticipate or explain, but seeks to remain in the neighborhood of what is being made.

Cinema Processual wants to be a space of attention to what reveals itself in cinematic making: what is discovered between one take and another, what is found in the editing room, what is heard when the film is being thought.

Text in preparation.`,
  },
};

const allSlugs = ['bressane-godard', 'mekas-brakhage', 'cinema-processual'];

export function TextoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [readProgress, setReadProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  const content = language === 'en' ? textosContentEn : textosContentPt;
  const texto = slug ? content[slug] : null;

  const otherTexts = slug
    ? allSlugs.filter(s => s !== slug).map(s => content[s]).filter(Boolean)
    : [];

  useEffect(() => {
    function handleScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const scrollTop = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setReadProgress(100);
        return;
      }
      setReadProgress(Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!texto) {
    return (
      <div className="texto-detail-page">
        <div className="texto-detail-grain" aria-hidden="true" />
        <div className="texto-not-found">
          <p>{t.filmography.notFound}</p>
          <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="texto-detail-page">
      <div className="texto-detail-grain" aria-hidden="true" />

      {/* Reading progress */}
      <div className="texto-progress" style={{ width: `${readProgress}%` }} />

      {/* Header */}
      <header className="texto-detail-header">
        <div className="texto-detail-header-inner">
          <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
          <span className="texto-header-code">{texto.archiveCode}</span>
        </div>
      </header>

      {/* Article */}
      <article className="texto-article" ref={articleRef}>
        <div className="texto-article-inner">
          <div className="texto-article-meta">
            <span className="texto-article-category">{texto.category}</span>
            {texto.source && (
              <span className="texto-article-source">{texto.source}</span>
            )}
          </div>

          <h1 className="texto-article-title">{texto.title}</h1>

          <div className="texto-article-content">
            {texto.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Other texts */}
      {otherTexts.length > 0 && (
        <section className="texto-other">
          <div className="texto-other-inner">
            <span className="texto-other-label">{t.textos.continueReading}</span>
            <div className="texto-other-list">
              {otherTexts.map(other => (
                <Link
                  key={other.archiveCode}
                  to={`/texto/${allSlugs.find(s => content[s]?.title === other.title)}`}
                  className="texto-other-item"
                >
                  <span className="texto-other-code">{other.archiveCode}</span>
                  <span className="texto-other-title">{other.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="texto-detail-footer">
        <Link to="/textos" className="texto-footer-link">{t.textos.backToArchive}</Link>
      </footer>
    </div>
  );
}
