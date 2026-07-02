import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './TextoDetail.css';

const textosContentPt: Record<string, { title: string; category: string; content: string }> = {
  'mekas-brakhage': {
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    content: `
 Jonas Mekas escreveu sobre Stan Brakhage em momentoss distintos. Este texto, originalmente publicado no Film Culture Reader, organizado por P. Adams Sitney, apresenta uma reflexão sobre a obra do cineasta americano.

Stan Brakhage (1933–2003) foi um dos principais realizadores do cinema experimental americano. Sua obra, que compreende mais de quatrocentos filmes, explora as possibilidades do cinematic através da manipulação direta do filme, da colagem, da pintura sobre a emulsão, e de uma constante pesquisa sobre a imagem em movimento.

A tradução deste ensaio busca aproximar o leitor brasileiro do pensamento de Mekas sobre Brakhage, incluindo suas reflexões sobre a materialidade do filme, a relação entre o cineasta e a paisagem americana, e a dimensão mística que atravessa sua obra.

_O texto completo será publicado em breve._
    `.trim(),
  },
  'bressane-godard': {
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    content: `
Em outubro de 2022, após o falecimento de Jean-Luc Godard, Júlio Bressane proferiu um ensaio oral na Cinemateca do MAM Rio. Esta transcrição procura preservar o ritmo, as pausas e o pensamento em movimento característico de Bressane.

Godard foi, durante seis décadas, uma presença constante no cinema brasileiro e mundial. Sua obra, marcada pela invenção formal, pela crítica e pela reflexão sobre a imagem, atravessou gerações de cineastas.

Bressane fala de Godard não como crítico ou historiador, mas como cineasta que dialogou com sua obra, que encontrou nela pontos de partida e de retorno, que a conhece de dentro — da montagem, da encenação, do som.

_A transcrição completa será publicada em breve._
    `.trim(),
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    content: `
Cinema Processual e um projeto de escrita e expressao cinematografica. Entrevistas, ensaios, criticas e producao de textos sobre cinema como processo, gesto, memoria e forma.

O cinema pensado por dentro: na sala de montagem, no set, na negociacao com o tempo e com o dinheiro, na escuta do realizador, na atencao ao que se revela entre o planejado e o inesperado.

Este projeto nasce da convivencia com o cinema brasileiro contemporâneo e de um percurso que passa pela traducao, pela pos-producao, pela montagem e pela escuta dos processos de criacao.

Escrita que acompanha o filme, que se faz ao lado, que nao antecipa nem explica, mas que busca permanecer na vizinhanca do que se faz.

Cinema Processual quer ser um espaco de ateno ao que se revela no fazer cinematografico: o que se descobre entre um take e outro, o que se encontra na sala de edicao, o que se escuta quando o filme esta sendo pensado.

_O texto completo será publicado em breve._
    `.trim(),
  },
};

const textosContentEn: Record<string, { title: string; category: string; content: string }> = {
  'mekas-brakhage': {
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    content: `
Jonas Mekas wrote about Stan Brakhage at different moments. This text, originally published in Film Culture Reader, organized by P. Adams Sitney, presents a reflection on the work of the American filmmaker.

Stan Brakhage (1933–2003) was one of the leading figures of American experimental cinema. His body of work, comprising over four hundred films, explores the possibilities of the cinematic through direct manipulation of the film, collage, painting on emulsion, and a constant research on the moving image.

This translation aims to bring Brazilian readers closer to Mekas's thinking about Brakhage, including his reflections on the materiality of film, the relationship between the filmmaker and the American landscape, and the mystical dimension that runs through his work.

_The full text will be published soon._
    `.trim(),
  },
  'bressane-godard': {
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    content: `
In October 2022, following the death of Jean-Luc Godard, Julio Bressane gave an oral essay at the Cinemateca do MAM Rio. This transcription seeks to preserve the rhythm, the pauses and the characteristic thinking-in-motion of Bressane.

Godard was, for six decades, a constant presence in Brazilian and world cinema. His body of work, marked by formal invention, criticism and reflection on the image, crossed generations of filmmakers.

Bressane speaks of Godard not as a critic or historian, but as a filmmaker who dialogued with his work, who found in it points of departure and return, who knows it from within — from editing, directing, sound.

_The complete transcription will be published soon._
    `.trim(),
  },
  'cinema-processual': {
    title: 'Cinema Processual',
    category: 'Manifesto',
    content: `
Cinema Processual is a project of cinematic writing and expression. Interviews, essays, criticism and production of texts on cinema as process, gesture, memory and form.

Cinema thought from within: in the editing room, on set, in the negotiation with time and money, in listening to the filmmaker, in attention to what reveals itself between the planned and the unexpected.

This project is born from the experience with contemporary Brazilian cinema and from a trajectory that moves through translation, post-production, editing and listening to the processes of creation.

Writing that accompanies the film, that is made alongside, that does not anticipate or explain, but seeks to remain in the neighborhood of what is being made.

Cinema Processual wants to be a space of attention to what reveals itself in cinematic making: what is discovered between one take and another, what is found in the editing room, what is heard when the film is being thought.

_The full text will be published soon._
    `.trim(),
  },
};

export function TextoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [texto, setTexto] = useState<{ title: string; category: string; content: string } | null>(null);

  useEffect(() => {
    const content = language === 'en' ? textosContentEn : textosContentPt;
    if (slug && content[slug]) {
      setTexto(content[slug]);
    } else {
      setTexto(null);
    }
  }, [slug, language]);

  if (!texto) {
    return (
      <div className="texto-detail-loading">
        <div className="container">
          <p>{t.filmography.notFound}</p>
          <Link to="/textos" className="texto-back">← Textos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="texto-detail">
      <header className="texto-detail-header">
        <div className="container">
          <Link to="/textos" className="texto-back">← {t.textos.pageLabel}</Link>
        </div>
      </header>

      <article className="texto-article">
        <div className="texto-article-inner">
          <div className="texto-meta">
            <span className="texto-category">{texto.category}</span>
          </div>
          <h1 className="texto-title">{texto.title}</h1>
          <div className="texto-content">
            {texto.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <footer className="texto-footer">
        <Link to="/textos" className="texto-footer-link">← {t.textos.pageLabel}</Link>
      </footer>
    </div>
  );
}
