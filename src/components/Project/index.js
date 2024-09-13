import React from "react";
import { useRef, useState } from "react";
import { Div, Img } from "./style.js";
import chevron from "../../images/chevron.png";

const Project = () => {
  // hover dos projetos
  const [showProjeto_1, setshowProjeto_1] = useState(true);
  const [showProjeto_2, setshowProjeto_2] = useState(true);
  const [showProjeto_3, setshowProjeto_3] = useState(true);
  const [showProjeto_4, setshowProjeto_4] = useState(true);
  const [showProjeto_5, setshowProjeto_5] = useState(true);
  const [showProjeto_6, setshowProjeto_6] = useState(true);

  // elementos do carousel
  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <>
      <Div>
        <h1>Projetos</h1>
        <div className="carousel" ref={carousel}>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_1(false)}
            onMouseLeave={() => setshowProjeto_1(true)}
          >
            {showProjeto_1 ? (
              <>
                <div className="imgProducao"></div>
                <div className="info">
                  <span className="name">Projeto1</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">FullStack</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Concluído</div>
                </div>
              </>
            )}
          </div>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_2(false)}
            onMouseLeave={() => setshowProjeto_2(true)}
          >
            {showProjeto_2 ? (
              <>
                <div className="imgProducao">
                  <div className="producao"> Em Breve</div>
                </div>
                <div className="info">
                  <span className="name">Projeto2</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">Front-end</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Em Andamento</div>
                </div>
              </>
            )}
          </div>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_3(false)}
            onMouseLeave={() => setshowProjeto_3(true)}
          >
            {showProjeto_3 ? (
              <>
                <div className="imgProducao">
                  <div className="producao"> Em Breve</div>
                </div>
                <div className="info">
                  <span className="name">Projeto3</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">Back-end</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Em Andamento</div>
                </div>
              </>
            )}
          </div>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_4(false)}
            onMouseLeave={() => setshowProjeto_4(true)}
          >
            {showProjeto_4 ? (
              <>
                <div className="imgProducao">
                  <div className="producao"> Em Breve</div>
                </div>
                <div className="info">
                  <span className="name">Projeto4</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">FullStack</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Em Andamento</div>
                </div>
              </>
            )}
          </div>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_5(false)}
            onMouseLeave={() => setshowProjeto_5(true)}
          >
            {showProjeto_5 ? (
              <>
                <div className="imgProducao">
                  <div className="producao"> Em Breve</div>
                </div>
                <div className="info">
                  <span className="name">Projeto1</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">FullStack</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Em Andamento</div>
                </div>
              </>
            )}
          </div>
          <div
            className="projetos"
            onMouseEnter={() => setshowProjeto_6(false)}
            onMouseLeave={() => setshowProjeto_6(true)}
          >
            {showProjeto_6 ? (
              <>
                <div className="imgProducao">
                  <div className="producao"> Em Breve</div>
                </div>
                <div className="info">
                  <span className="name">Projeto6</span>
                  <span className="data">20/10/2024</span>
                  <span className="description">
                    Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum
                    At impedit debitis aut fuga iusto!
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="transicao">
                  <div className="stack">FullStack</div>
                  <div className="projetosHover">
                    <h2>Projetos</h2>
                    <span>Repositório</span>
                    <span>Aplicação no ar</span>
                  </div>
                  <div className="progressao">Em Andamento</div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <Img src={chevron} alt="Left" />
          </button>
          <button>
            <Img
              onClick={handleRightClick}
              className="right"
              src={chevron}
              alt="Right"
            />
          </button>
        </div>
      </Div>
    </>
  );
};

export default Project;
