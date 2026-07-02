import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './TextoDetail.css';

const textosContentPt: Record<string, {
  title: string;
  category: string;
  archiveCode: string;
  source?: string;
  content: React.ReactNode;
  isPaper?: boolean;
}> = {
  'julio-bressane-sobre-jean-luc-godard': {
    title: 'Júlio Bressane sobre Jean-Luc Godard',
    category: 'Transcrição',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, outubro de 2022',
    isPaper: true,
    content: (
      <>
        <p className="godard-credit">
          Transcrição de ensaio oral proferido por Júlio Bressane na Cinemateca do MAM Rio, em outubro de 2022,
          após o falecimento de Jean-Luc Godard. O texto preserva o ritmo, as pausas e o pensamento em movimento
          característico de Bressane.
        </p>

        <p>
          Eu estava num táxi, num uber, vindo pra cá, aí eu olhei pro céu. Era <span className="highlight-red">nuvens</span>.
          Aí eu vi uma nuvem, como se fosse... como se fosse um <span className="highlight-red">filme</span> do Godard.
          Eu faleo, <span className="highlight-blue">Olha!</span>. E aí depois passou, a nuvem passou, eu falei: <span className="highlight-blue">Já passou o filme do Godard.</span>
          E aí fiquei pensando. Eu vou chegar lá, e vou ter que falar de <span className="highlight-red">cinema</span>. Vou ter que falar.
          O que é falar de cinema? Falar de <span className="highlight-red">cinema</span> é fazer <span className="highlight-red">cinema</span>.
          A gente sabe. Falar, eu sempre vi, pra mim o cinema se formou, se formou muito através da <span className="highlight-red">fala</span>,
          do <span className="highlight-red">som</span> e da <span className="highlight-red">imagem</span>. A trindade. Pai, filho e espírito santo:
          <span className="highlight-red"> som</span>, <span className="highlight-red">fala</span> e <span className="highlight-red">imagem</span>.
        </p>

        <p>
          E aí, me veio à memória um filme que eu queria muito ter feito, que é uma coisa que eu faço nos meus filmes.
          Eu faço muito isso. Eu nunca vi ninguém fazer. Claro que pode ter sido feito, o cinema é uma <span className="highlight-red">invenção</span> de todos.
          Mas eu faço. Eu faço assim. Eu tinha um ator, e eu dizia pra ele o seguinte: <span className="highlight-blue">Fulano de tal, fala.</span>
          Ele falava, <span className="highlight-blue">Fala mais.</span> Aí ele falava mais. <span className="highlight-blue">Fala mais.</span> E aí eu falava:
          <span className="highlight-blue"> Deixa eu ver... Eu sigo</span>. Aí eu seguia. Aí eu fazia um <span className="highlight-red">plano sequência</span> em volta dele
          enquanto ele falava. Foi até um dos meus filmes, <span className="highlight-red">A Era do Rádio</span>, tem um momento assim que é um momento antológico.
          É o <span className="highlight-red">Stênio Garcia</span> que fala. E ali eu me desafiei a fazer uma coisa. Um <span className="highlight-red">plano sequência</span>
          em que a <span className="highlight-red">câmera</span> não para, mas não é uma <span className="highlight-red">câmera na mão</span>. É uma <span className="highlight-red">câmera</span> que
          se move sem parar, quase como se fosse um <span className="highlight-red">travelling</span> em <span className="highlight-red">círculo</span> em volta do ator,
          em que a <span className="highlight-red">câmera</span> vai captando a <span className="highlight-red">fala</span> dele. E a <span className="highlight-red">fala</span>
          vai se formando, vai se transformando, e o ator se transforma no que está falando.
        </p>

        <p>
          Não é um filme de <span className="highlight-red">teatro</span>. É um <span className="highlight-red">cinema</span> puramente de <span className="highlight-red">fala</span>,
          de <span className="highlight-red">som</span> e de <span className="highlight-red">ação</span>. E esse <span className="highlight-red">plano</span>...
          eu me lembro, eu falei: <span className="highlight-blue">Nossa, esse é um plano que talvez só eu faço.</span> Porque eu tenho uma relação com a
          <span className="highlight-red"> fala</span> muito forte. Eu já fiz filmes silenciosos, eu fiz filmes sem <span className="highlight-red">fala</span>. Eu fiz filmes
          só com imagens, filmes de <span className="highlight-red">dança</span>. Todos os tipos de cinema que eu fiz, o cinema onde a <span className="highlight-red">fala</span>
          é fundamental é um <span className="highlight-red">cinema</span> que eu amo muito e que acho que tem muito a ver com <span className="highlight-red">Godard</span>.
        </p>

        <p>
          Fui ver os filmes do <span className="highlight-red">Godard</span>. Tem um filme, por exemplo, não sei se vocês tão lembrando, que é um filme dos anos 60,
          em que ele tem um <span className="highlight-red">plano sequência</span> num <span className="highlight-red">corredor</span>. Um corredor de luz.
          Um corredor de <span className="highlight-red">luz</span>. É lindo. A <span className="highlight-red">câmera</span> passeia pelo corredor. O que está falando?
          <span className="highlight-blue"> Nada.</span> Não está falando nada. O que está falando é o <span className="highlight-red">corredor</span>. O que está falando
          é a <span className="highlight-red">luz</span>. O que está falando é o <span className="highlight-red">movimento</span>. Esse é o <span className="highlight-red">cinema</span>
          que o Godard fazia. Um <span className="highlight-red">cinema</span> em que a <span className="highlight-red">imagem</span> fala. A <span className="highlight-red">imagem</span>
          diz alguma coisa. A <span className="highlight-red">imagem</span> não ilustra. A <span className="highlight-red">imagem</span> não descreve.
        </p>

        <p>
          <span className="highlight-red">Godard</span>... eu sempre digo assim: <span className="highlight-blue">Godard foi o cara que inventou o cinema moderno.</span>
          E o que é o <span className="highlight-red">cinema moderno</span>? O <span className="highlight-red">cinema moderno</span> não é só uma questão de
          <span className="highlight-red"> linguagem</span>. Não é só uma questão de <span className="highlight-red">forma</span>. É uma questão de
          <span className="highlight-red"> pensamento</span>. O <span className="highlight-red">Godard</span> colocou o <span className="highlight-red">pensamento</span>
          na <span className="highlight-red">imagem</span>. Fez a <span className="highlight-red">imagem</span> pensar. E essa é uma coisa muito forte.
        </p>

        <p>
          Aí eu fiquei pensando no <span className="highlight-red">Godard</span> dos anos 60. O <span className="highlight-red">Godard</span> francês, o
          <span className="highlight-red"> Godard</span> da Nouvelle Vague. Nasceu uma coisa lá nos anos 50, 60, na França. Gente perguntando:
          <span className="highlight-blue"> O que é o cinema?</span> <span className="highlight-blue">O que é fazer cinema?</span> E o <span className="highlight-red">Godard</span>
          foi o cara que respondeu de um jeito... não respondeu respondendo. Respondeu <span className="highlight-red">fazendo</span>. Ele respondia fazendo filmes.
          Cada filme do <span className="highlight-red">Godard</span> é uma resposta. Cada filme do <span className="highlight-red">Godard</span> é uma pergunta também.
        </p>

        <p>
          Eu me lembro de <span className="highlight-red">Acossado</span>. Vocês viram? <span className="highlight-red">À Bout de Souffle</span>.
          <span className="highlight-red">Acossado</span>. O <span className="highlight-red">Belmondo</span>. O <span className="highlight-red">Belmondo</span> passando,
          passando,passando... A <span className="highlight-red">câmera na mão</span>. O <span className="highlight-red">salto</span>. A <span className="highlight-red">menina</span>
          vendendo o jornal. O <span className="highlight-red">cartaz</span>. Tudo. É como se fosse... é como se eu estivesse vendo tudo agora.
          É <span className="highlight-red">1960</span>. Estamos em <span className="highlight-red">1960</span>. Eu tô vendo um filme de <span className="highlight-red">1960</span>.
        </p>

        <p>
          E esse filme é um <span className="highlight-red">hino</span>. Um <span className="highlight-red">hino</span> ao <span className="highlight-red">cinema</span>.
          Um <span className="highlight-red">hino</span> à <span className="highlight-red">liberdade</span>. <span className="highlight-blue">O que é liberdade no cinema?</span>
          Você pega uma <span className="highlight-red">câmera</span> e sai filmando. Não tem <span className="highlight-red">roteiro</span>. Não tem <span className="highlight-red">nada</span>.
          Só a <span className="highlight-red">câmera</span> e o <span className="highlight-red">corpo</span>. A <span className="highlight-red">câmera</span> e o
          <span className="highlight-red"> actor</span>. O <span className="highlight-red">ator</span>. O <span className="highlight-red">ator</span> em movimento.
        </p>

        <p>
          E tem uma coisa que eu sempre me lembro. Tem uma frase do <span className="highlight-red">Godard</span> que eu gosto muito. Ele disse:
          <span className="highlight-blue"> O cinema é a verdade 24 vezes por segundo.</span> Gosto dessa frase. Mas o que é a <span className="highlight-red">verdade</span>?
          A <span className="highlight-red">verdade</span> no cinema não é a <span className="highlight-red">realidade</span>. A <span className="highlight-red">verdade</span>
          no cinema é o que você <span className="highlight-red">vê</span>. É o que a <span className="highlight-red">câmera</span> vê.
          A <span className="highlight-red">câmera</span> vê a <span className="highlight-red">verdade</span> do <span className="highlight-red">cinema</span>.
        </p>

        <p>
          Aí depois tem o <span className="highlight-red">Godard</span> político. O <span className="highlight-red">Godard</span> dos anos 70. Um <span className="highlight-red">Godard</span>
          que eu também gosto muito. Um <span className="highlight-red">Godard</span> que faz um cinema de <span className="highlight-red">briga</span>. Um cinema de
          <span className="highlight-red"> luta</span>. Ele pára de fazer cinema pra cinema. Ele faz cinema pra... pra <span className="highlight-red">revolução</span>?
          Pra <span className="highlight-red">política</span>? Pra <span className="highlight-red">debate</span>. Ele faz filmes... filmes coletivos.
          Filmes com grupos. O <span className="highlight-red">Grupo Dziga Vertov</span>. Eu gosto muito dessa fase.
        </p>

        <p>
          Depois tem o <span className="highlight-red">Godard</span> que volta. O <span className="highlight-red">Godard</span> dos anos 80. O <span className="highlight-red">Godard</span>
          que faz <span className="highlight-red">Paixão</span>. <span className="highlight-red">Prénom Carmen</span>. <span className="highlight-red">Je vous salue, Marie</span>.
          São filmes lindos. São filmes em que a <span className="highlight-red">imagem</span> de novo se liberta. A <span className="highlight-red">imagem</span> fica mais
          <span className="highlight-red"> solta</span>. Mais <span className="highlight-red">poética</span>. Mais <span className="highlight-red">pintura</span>. O
          <span className="highlight-red"> Godard</span> da pintura. O <span className="highlight-red">Godard</span> da música. O <span className="highlight-red">Godard</span>
          de todas as <span className="highlight-red">artes</span>.
        </p>

        <p>
          Eu sempre me pergunto: <span className="highlight-blue">Como é que um cineasta consegue atravessar tantas fases?</span> O <span className="highlight-red">Godard</span>
          atravessou todas as fases. A fase da <span className="highlight-red">Nouvelle Vague</span>. A fase da <span className="highlight-red">política</span>.
          A fase do <span className="highlight-red">retorno</span>. A fase do <span className="highlight-red">vídeo</span>. A fase final. A fase dos
          <span className="highlight-red"> ensaios</span>. <span className="highlight-red">Histoire(s) du Cinéma</span>. Uma obra gigantesca. Uma obra que é uma
          <span className="highlight-red"> reflexão</span> sobre toda a <span className="highlight-red">história do cinema</span>.
        </p>

        <p>
          E aí chega <span className="highlight-red">Adeus à Linguagem</span>. <span className="highlight-red">Adieu au Langage</span>. Eu vi em
          <span className="highlight-red"> 3D</span>. <span className="highlight-blue">Deus do céu!</span> Eu disse: <span className="highlight-blue">Esse é o Godard.</span>
          Um cara de 80 e tantos anos, fazendo <span className="highlight-red">3D</span>. Mas não um <span className="highlight-red">3D</span> como o Hollywood faz.
          Um <span className="highlight-red">3D</span> inventado. Um <span className="highlight-red">3D</span> pensado. A gente olha e fala:
          <span className="highlight-red"> Isso é cinema</span>. O <span className="highlight-red">3D</span> a serviço do <span className="highlight-red">pensamento</span>.
        </p>

        <p>
          E tem o último. <span className="highlight-red">O Livro de Imagem</span>. <span className="highlight-red">Le Livre d'Image</span>. Uma <span className="highlight-red">colagem</span>.
          Uma <span className="highlight-red">montagem</span>. O <span className="highlight-red">cinema</span> como <span className="highlight-red">colagem</span>.
          Acho que é isso. <span className="highlight-red">Godard</span> sempre fez <span className="highlight-red">colagem</span>. Desde o início.
          Ele colava <span className="highlight-red">imagens</span>. Colava <span className="highlight-red">sons</span>. Colava <span className="highlight-red">textos</span>.
          Colava <span className="highlight-red">pensamentos</span>.
        </p>

        <p>
          <span className="highlight-blue">Falei muito.</span> Eu sempre falo muito. Mas o <span className="highlight-red">Godard</span> me faz falar.
          O <span className="highlight-red">cinema</span> me faz falar. Falar de <span className="highlight-red">Godard</span> é falar de
          <span className="highlight-red"> cinema</span>. É falar da <span className="highlight-red">invenção</span>. É falar da
          <span className="highlight-red">liberdade</span>. É falar da <span className="highlight-red">imagem</span>.
        </p>

        <p>
          Eu acho que o <span className="highlight-red">Godard</span> vai ficar. O <span className="highlight-red">corpo</span> dele foi embora.
          Mas o <span className="highlight-red">Godard</span> filmmaker, o <span className="highlight-red">Godard</span> pensador,
          o <span className="highlight-red">Godard</span> inventor... ele fica. Ele fica na <span className="highlight-red">imagem</span>.
          Ele fica no <span className="highlight-red">som</span>. Fica na <span className="highlight-red">fala</span>. Fica nos filmes.
          E acho que é isso.
        </p>

        <p>
          Vocês viram que hoje o <span className="highlight-red">Godard</span> foi <span className="highlight-red">suicídio assistido</span>? Ele foi...
          ele optou. Ele quis. Ele teve uma vida que ele quis ter. Ele fez os filmes que ele quis fazer.
          Ele morreu do jeito que ele quis morrer. <span className="highlight-blue">Isso é Godard.</span> Até o fim. Até o último momento.
          Um <span className="highlight-red">cineasta</span> que dirige a própria <span className="highlight-red">morte</span>.
          Dirige a <span className="highlight-red">saida</span>. Isso é forte. Isso é muito <span className="highlight-red">bonito</span>.
        </p>

        <p className="godard-credit">
          Cinemateca do MAM Rio, 14 de outubro de 2022. Transcrição: Cinema Processual, 2024.
        </p>
      </>
    ),
  },
  'mekas-brakhage': {
    title: 'Jonas Mekas e Stan Brakhage',
    category: 'Tradução',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader',
    content: `Jonas Mekas escreveu sobre Stan Brakhage em momentos distintos. Este texto, originalmente publicado no Film Culture Reader, organizado por P. Adams Sitney, apresenta uma reflexão sobre a obra do cineasta americano.

Stan Brakhage (1933–2003) foi um dos principais realizadores do cinema experimental americano. Sua obra, que compreende mais de quatrocentos filmes, explora as possibilidades do cinematic através da manipulação direta do filme, da colagem, da pintura sobre a emulsão, e de uma constante pesquisa sobre a imagem em movimento.

A tradução deste ensaio busca aproximar o leitor brasileiro do pensamento de Mekas sobre Brakhage, incluindo suas reflexões sobre a materialidade do filme, a relação entre o cineasta e a paisagem americana, e a dimensão mística que atravessa sua obra.

O texto completo será publicado em breve.`,
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
  content: React.ReactNode;
  isPaper?: boolean;
}> = {
  'julio-bressane-sobre-jean-luc-godard': {
    title: 'Julio Bressane on Jean-Luc Godard',
    category: 'Transcription',
    archiveCode: 'CP-002',
    source: 'Cinemateca do MAM Rio, October 2022',
    isPaper: true,
    content: (
      <p className="godard-credit">
        English version coming soon.
      </p>
    ),
  },
  'mekas-brakhage': {
    title: 'Jonas Mekas and Stan Brakhage',
    category: 'Translation',
    archiveCode: 'CP-003',
    source: 'Film Culture Reader',
    content: `Jonas Mekas wrote about Stan Brakhage at different moments. This text, originally published in Film Culture Reader, organized by P. Adams Sitney, presents a reflection on the work of the American filmmaker.

Stan Brakhage (1933–2003) was one of the leading figures of American experimental cinema. His body of work, comprising over four hundred films, explores the possibilities of the cinematic through direct manipulation of the film, collage, painting on emulsion, and a constant research on the moving image.

This translation aims to bring Brazilian readers closer to Mekas's thinking about Brakhage, including his reflections on the materiality of film, the relationship between the filmmaker and the American landscape, and the mystical dimension that runs through his work.

The full text will be published soon.`,
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

const allSlugs = ['julio-bressane-sobre-jean-luc-godard', 'mekas-brakhage', 'cinema-processual'];

export function TextoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
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
          <p>Texto não encontrado.</p>
          <Link to="/textos" className="texto-back-link">Voltar ao arquivo</Link>
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
          <Link to="/textos" className="texto-back-link">← Voltar ao arquivo</Link>
          <span className="texto-header-code">{texto.archiveCode}</span>
        </div>
      </header>

      {/* Article */}
      <article className={`texto-article${texto.isPaper ? ' texto-article--paper' : ''}`} ref={articleRef}>
        {texto.isPaper && <div className="godard-paper-fold" aria-hidden="true" />}
        <div className="texto-article-inner">
          <div className="texto-article-meta">
            <span className="texto-article-category">{texto.category}</span>
            {texto.source && (
              <span className="texto-article-source">{texto.source}</span>
            )}
          </div>

          <h1 className="texto-article-title">{texto.title}</h1>

          <div className="texto-article-content">
            {texto.content}
          </div>
        </div>
      </article>

      {/* Other texts */}
      {otherTexts.length > 0 && (
        <section className="texto-other">
          <div className="texto-other-inner">
            <span className="texto-other-label">Continuar lendo</span>
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
        <Link to="/textos" className="texto-footer-link">← Voltar ao arquivo</Link>
      </footer>
    </div>
  );
}
