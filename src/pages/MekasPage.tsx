import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './MekasDetail.css';

export function MekasPage() {
  const { language, t } = useLanguage();
  const [readProgress, setReadProgress] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!shellRef.current) return;
      const el = shellRef.current;
      const scrollTop = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) { setReadProgress(100); return; }
      setReadProgress(Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mekas-page">
      <div className="texto-progress" style={{ width: `${readProgress}%` }} />

      <header className="texto-detail-header">
        <div className="texto-detail-header-inner">
          <Link to="/textos" className="texto-back-link">{t.textos.backToArchive}</Link>
          <span className="texto-header-code">CP-003</span>
        </div>
      </header>

      <div className="mekas-shell" ref={shellRef}>
        <div className="mekas-hero">
          <span className="mekas-hero-code">CP-003 &middot; TRADU&Ccedil;&Atilde;O &middot; 1962</span>
          <h1 className="mekas-hero-title">Jonas Mekas e/com/sobre Stan Brakhage</h1>
          <p className="mekas-hero-subtitle">
            Tradu&ccedil;&atilde;o de um ensaio de Mekas publicado na colet&acirc;nea Film Culture Reader (1970), organizada por P. Adams Sitney.
          </p>
          <div className="mekas-hero-meta">
            <span>Jonas Mekas</span>
            <span>Film Culture Reader</span>
            <span>8 min de leitura</span>
          </div>
        </div>

        {language === 'en' ? (
          <div className="mekas-panel mekas-cover-panel">
            <p className="mekas-coming-soon">This text is currently available in Portuguese.</p>
          </div>
        ) : (
          <>
            {/* PAINEL 1 - CAPA */}
            <div className="mekas-panel mekas-cover-panel">
              <div className="mekas-cover-line1">JONAS MEKAS</div>
              <div className="mekas-cover-line2">e/com/sobre</div>
              <div className="mekas-cover-line3">STAN BRAKHAGE</div>
              <div className="mekas-cover-subtitle">
                Tradu&#231;&#227;o de um ensaio de Mekas publicado na colet&#226;nea Film Culture Reader (1970), organizada por P. Adams Sitney.
              </div>
            </div>

            {/* PAINEL 2 */}
            <div className="mekas-panel">
              <h2 className="mekas-title-red">Os Poetas Puros do Cinema</h2>
              <div className="mekas-prose">
                <p><span className="mekas-speaker">J.M:</span> Robert Breer, Stanley Brakhage e Marie Menken representam, tem&#225;tica e formalmente, o melhor da tradi&#231;&#227;o do cinema experimental e po&#233;tico no novo cinema americano.</p>
                <p>Livre e belamente, cantam o mundo f&#237;sico, suas texturas, suas cores, seus movimentos; ou falam em pequenas rajadas de mem&#243;rias, reflex&#245;es, medita&#231;&#245;es.</p>
                <p>Diferentemente dos primeiros filmes de vanguarda, esses filmes n&#227;o est&#227;o sobrecarregados pela mitologia e pelo simbolismo gregos ou freudianos; seu sentido &#233; mais imediato, mais visual e sugestivo.</p>
                <p>Estil&#237;stica e formalmente, suas obras representam a cria&#231;&#227;o mais elevada e mais pura j&#225; alcan&#231;ada no cinema po&#233;tico.</p>
              </div>
            </div>

            {/* PAINEL 3 */}
            <div className="mekas-panel">
              <div className="mekas-prose">
                <p>Foi um curta-metragem de Stanley Brakhage, <span className="mekas-red">Desistfilm (1954)</span> &#8212; ainda um dos filmes mais influentes de todo o cinema americano moderno &#8212; que iniciou a revolu&#231;&#227;o estil&#237;stica que agora chegou ao document&#225;rio e come&#231;a a se tornar percept&#237;vel no filme de fic&#231;&#227;o dram&#225;tico-comercial <em>(Truffaut chuta e sacode sua c&#226;mera em <span className="mekas-blue">Jules et Jim (1962)</span> para destruir os movimentos panor&#226;micos e verticais est&#225;ticos e &#8220;profissionais&#8221;.)</em></p>
                <p>Pouqu&#237;ssimos outros cineastas se preocuparam tanto com estilo e t&#233;cnica quanto Brakhage. Ironicamente, &#233; Brakhage quem costuma ser escolhido pelos cr&#237;ticos da velha guarda quando precisam de um exemplo de mau estilo e m&#225; t&#233;cnica.</p>
                <p>N&#227;o poderiam ter escolhido exemplo mais equivocado, pois Brakhage &#233;, de fato, um dos cineastas de maior virtuosismo do cinema moderno.</p>
              </div>
            </div>

            {/* PAINEL 4 */}
            <div className="mekas-panel">
              <div className="mekas-prose">
                <p>Algumas das atitudes de Brakhage em rela&#231;&#227;o ao estilo e &#224;s t&#233;cnicas cinematogr&#225;ficas podem ser mais bem ilustradas por meio de seus pr&#243;prios escritos, como fragmentos fortes de seu pensamento:</p>
              </div>
              <div className="mekas-sb-block">
                <p><span className="mekas-speaker">S.B:</span> Ent&#227;o os mercadores do dinheiro come&#231;aram tudo de novo. &#192;s catacumbas, pois, ou, melhor, plante esta semente mais fundo no subterr&#226;neo, para al&#233;m do falso alimento das &#225;guas de esgoto. Que ela se alimente de fontes ocultas e insurgentes, canalizadas pelos deuses...</p>
                <p>Esque&#231;a a ideologia, pois o cinema, tal como &#233;, ainda n&#227;o foi nascido, n&#227;o tem linguagem e fala como um abor&#237;gine &#8212; ret&#243;rica mon&#243;tona...</p>
                <p>Abandone a est&#233;tica... Negue as t&#233;cnicas, pois o cinema, como a Am&#233;rica, ainda n&#227;o foi descoberto, e a mecaniza&#231;&#227;o, no sentido mais profundo da palavra, aprisiona ambos para al&#233;m de qualquer c&#225;lculo, mesmo das probabilidades...</p>
                <p>Deixe o cinema ser. Ele &#233; uma coisa... em devir.</p>
              </div>
            </div>

            {/* PAINEL 5 */}
            <div className="mekas-panel">
              <div className="mekas-sb-block">
                <p>... em algum lugar, temos um olho capaz de qualquer imagina&#231;&#227;o.</p>
                <p>E ent&#227;o temos o olho da c&#226;mera, suas lentes polidas para alcan&#231;ar a perspectiva composicional ocidental do s&#233;culo XIX (tal como melhor exemplificada pelo amontoado arquitet&#244;nico oitocentista de detalhes da ru&#237;na &#8220;cl&#225;ssica&#8221;) ao curvar a luz e limitar o quadro da imagem exatamente assim, sua velocidade padr&#227;o de c&#226;mera e de projetor para o registro do movimento afinada &#224; sensa&#231;&#227;o da ideal e lenta valsa vienense, e at&#233; a cabe&#231;a de seu trip&#233;, sendo o pesco&#231;o sobre o qual a c&#226;mera gira, dotada de rolamentos de esferas para lhe permitir aquele movimento de Les Sylphides (ideal ao romance contemplativo) e praticamente restrita a movimentos horizontais e verticais (pilares e linhas do horizonte), uma diagonal exigindo um grande ajuste, suas lentes revestidas ou providas de filtros, seus fot&#244;metros calibrados, e seu filme colorido fabricado para produzir aquele efeito de cart&#227;o-postal (pintura de sal&#227;o) exemplificado por aqueles, ah, c&#233;us t&#227;o azuis e peles cor de p&#234;ssego.</p>
              </div>
            </div>

            {/* PAINEL 6 */}
            <div className="mekas-panel">
              <div className="mekas-sb-block">
                <p>Cuspindo deliberadamente na lente ou arruinando sua inten&#231;&#227;o focal, pode-se alcan&#231;ar os est&#225;gios iniciais do impressionismo. Pode-se tornar essa prima donna pesada na performance do movimento da imagem acelerando o motor, ou pode-se fragmentar o movimento, de um modo que se aproxima de uma inspira&#231;&#227;o mais direta na perceptibilidade do movimento pelo olho humano contempor&#226;neo, retardando a marcha enquanto se registra a imagem. Pode-se segurar a c&#226;mera nas m&#227;os e herdar mundos de espa&#231;o. Pode-se super ou subexpor o filme.</p>
                <p>Pode-se usar os filtros do mundo &#8212; n&#233;voa, aguaceiros, luzes desequilibradas, n&#233;ons com temperaturas de cor neur&#243;ticas, vidro que nunca foi projetado para uma c&#226;mera, ou mesmo vidro que o foi, mas que pode ser usado contra as especifica&#231;&#245;es &#8212;, ou pode-se fotografar uma hora ap&#243;s o nascer do sol ou uma hora antes do p&#244;r do sol, aquelas maravilhosas horas interditas em que os laborat&#243;rios de revela&#231;&#227;o n&#227;o garantem nada, ou pode-se adentrar a noite com um filme pr&#243;prio para a luz do dia, ou vice-versa.</p>
                <p>Pode-se vir a ser vice-versa, o trapaceiro supremo, com chap&#233;us cheios de todos os coelhos listados acima a se multiplicar loucamente. Pode-se, por uma coragem incr&#237;vel, vir a ser M&#233;li&#232;s, aquele homem maravilhoso que deu at&#233; mesmo &#224; &#8220;arte do cinema&#8221; o seu in&#237;cio na magia.</p>
              </div>
            </div>

            {/* PAINEL 7 */}
            <div className="mekas-panel">
              <div className="mekas-prose">
                <p><span className="mekas-speaker">J.M:</span> Em seu filme mais recente, <span className="mekas-black-bold">Prelude (1961)</span>, Brakhage alcan&#231;a uma s&#237;ntese de todas as suas t&#233;cnicas. Nesse filme de beleza primorosa, <span className="mekas-blue">as imagens tornam-se como palavras</span>; elas retornam, em pequenas rajadas, e desaparecem, e retornam de novo, como que em frases, <span className="mekas-black-bold">criando impress&#245;es visuais e mentais, experi&#234;ncias.</span></p>
                <p>Dentro do contexto abstrato, surgem os lampejos de mem&#243;rias de natureza mais pessoal e temporal, <span className="mekas-black-bold">sempre de um modo insinuante, obl&#237;quo, indireto</span> &#8212; as imagens de nuvens pressagas, mem&#243;rias da bomba at&#244;mica, espa&#231;os c&#243;smicos infinitos, sonhos e medos que constituem o subconsciente do homem moderno.</p>
                <p>Se a contemporaneidade dos outros cineastas aqui discutidos &#233; muito real, emocional, crua, e ainda faz parte de nossa experi&#234;ncia cotidiana &#8212; em <span className="mekas-black-bold">Prelude</span> (como na obra de <span className="mekas-red">Robert Breer e Marie Menken</span>), essa contemporaneidade &#233; abstra&#237;da, filtrada, torna-se um pensamento, <span className="mekas-blue">uma medita&#231;&#227;o que ocorre em um mundo pr&#243;prio, no mundo de uma obra de arte.</span></p>
              </div>
            </div>

            {/* PAINEL 8 */}
            <div className="mekas-panel">
              <div className="mekas-prose">
                <p>Aqui escreve Brakhage, em carta a um amigo <span className="mekas-black-bold">(1958)</span>, antes de come&#231;ar a trabalhar em <span className="mekas-black-bold">Prelude</span>:</p>
              </div>
              <div className="mekas-sb-block">
                <p><span className="mekas-speaker">S.B:</span> Considero agora um segundo longa-metragem, que se debru&#231;ar&#225; cinematograficamente sobre a bomba at&#244;mica.</p>
                <p>Mas, assim como Anticipation of the Night, &#233; uma obra de arte, e n&#227;o uma den&#250;ncia da civiliza&#231;&#227;o contempor&#226;nea em termos da crian&#231;a, tamb&#233;m o filme que pretendo fazer sonhar&#225; com a bomba.</p>
                <p>E a criar&#225;, tal como a concebo, a partir de um mundo quase spinozista de teoria matem&#225;tica; visualizar&#225; o florescer de sua forma em rela&#231;&#227;o tanto aos belos crescimentos quanto &#224;queles mais intelectualmente parasit&#225;rios; e, na esteira de sua fuma&#231;a, tratar&#225; da devasta&#231;&#227;o que ela deixa na mente humana mais do que da devasta&#231;&#227;o material, o pesadelo e tamb&#233;m o &#8220;ardentemente desej&#225;vel&#8221; que ela engendra, ergo, a religi&#227;o &#8212; o fim, a resolu&#231;&#227;o com a morte.</p>
              </div>
            </div>

            {/* PAINEL 9 */}
            <div className="mekas-panel">
              <div className="mekas-prose">
                <p><span className="mekas-speaker">J.M:</span> H&#225;, em atividade hoje, apenas um ou dois outros cineastas capazes de transformar a realidade em arte com tanto &#234;xito quanto <span className="mekas-black-bold">Brakhage, Robert Breer e Marie Menken.</span></p>
                <p>Uma paisagem, um rosto, uma mancha de luz &#8212; sob seus olhos, tudo se transfigura, tudo se faz outra coisa, ess&#234;ncia de si mesmo, a servi&#231;o de sua vis&#227;o pessoal. Assistir, em <span className="mekas-black-bold">Whiteye (1957)</span>, de Brakhage, uma paisagem de inverno que se transfigura &#8212; <span className="mekas-blue">pela magia do movimento, do temperamento e da luz</span> &#8212; em pura poesia da cor branca, &#233; uma experi&#234;ncia inesquec&#237;vel.</p>
              </div>
              <div className="mekas-signature">
                <p>Jonas Mekas.</p>
                <p>Escrito na Primavera de 1962.</p>
              </div>
            </div>

            {/* PAINEL 10 */}
            <div className="mekas-panel">
              <div className="mekas-sb-block">
                <p><span className="mekas-speaker">S.B:</span> Parece-me que toda a sociedade humana est&#225; empenhada em destruir aquilo que h&#225; de vivo em seus indiv&#237;duos &#8212; exemplificado, mais contemporaneamente, pelo artista &#8212; para que, presumivelmente, possa seguir adiante sem cessar, como a m&#225;quina que &#233;, &#224; custa dos seres humanos que a comp&#245;em. Senti isso tanto em mim mesmo quanto ao observar, de fora, as vidas de outros que se mant&#234;m vivos em suas lutas, e muito particularmente ao observar a morte do ser humano comum, exigida pela sociedade no momento mesmo de sua adolesc&#234;ncia.</p>
              </div>
            </div>
          </>
        )}

        <footer className="mekas-footer">
          <span className="mekas-footer-credit">Cinema Processual &middot; Tradu&#231;&#227;o, 2024</span>
        </footer>
      </div>
    </div>
  );
}
