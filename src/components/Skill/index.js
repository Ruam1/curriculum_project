import React from "react";
import styled from "styled-components";

// skills icon
import ReactIcon from "../../images/React-icon.png";
import Trindade from "../../images/trindade.png";
import Sass from "../../images/sass.png";
import StyledComponents from "../../images/styled-components.png";
import Mysql from "../../images/mysql.png";

const Div = styled.div`
  width: auto;
  height: 270vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    padding-top: 2%;
  }

  .one {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
  }
  .description {
    width: 450px;
    margin-left: 5%;
    color: #fff;
    text-align: left;
    padding-bottom: 5%;

    h4 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
      margin-top: -3%;
    }
  }
`;

const Image = styled.img`
  max-width: 70%;
  height: auto;
`;

const Skill = () => {
  return (
    <>
      <Div>
        <h1>Habilidades</h1>
        <div className="one">
          <div className="img">
            <Image src={Trindade} alt="image" />
          </div>
          <div className="description">
            <h4>HTML, CSS e JavaScript</h4>
            <p>
              HTML, CSS e Javascript, também conhecidas como santíssima trindade
              da web, formam o principal conjunto de tecnologias para qualquer
              aplicação web. Já deu para ver que é de suma importância entender
              MUITO bem esses caras.
            </p>
          </div>
        </div>
        <div className="one">
          <div className="img">
            <Image src={Sass} alt="image" />
          </div>
          <div className="description">
            <h4>Sass</h4>
            <p>
              Sass é uma linguagem de folhas de estilo concebida inicialmente
              por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois
              de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram
              a estender Sass com SassScript, uma simples linguagem de script
              usada em arquivos Sass.
            </p>
          </div>
        </div>
        <div className="one">
          <div className="img">
            <Image src={ReactIcon} alt="image" />
          </div>
          <div className="description">
            <h4>ReactJs</h4>
            <p>
              HTML, CSS e Javascript, também conhecidas como santíssima trindade
              da web, formam o principal conjunto de tecnologias para qualquer
              aplicação web. Já deu para ver que é de suma importância entender
              MUITO bem esses caras.
            </p>
          </div>
        </div>
        <div className="one">
          <div className="img">
            <Image src={StyledComponents} alt="image" />
          </div>
          <div className="description">
            <h4>Styled Components</h4>
            <p>
              O Styled Components é uma biblioteca (lib) do React e do React
              Native que nos permite criar componentes de estilo ao escrever
              códigos CSS dentro de um arquivo JavaScript. O modo de estilizar
              um componente utilizando a biblioteca Styled Components também é
              conhecido como CSS-in-JS (CSS dentro do JavaScript).
            </p>
          </div>
        </div>
        <div className="one">
          <div className="img">
            <Image src={Mysql} alt="image" />
          </div>
          <div className="description">
            <h4>Mysql</h4>
            <p>
              O MySQL é um sistema de gerenciamento de banco de dados, que
              utiliza a linguagem SQL como interface. É atualmente um dos
              sistemas de gerenciamento de bancos de dados mais populares da
              Oracle Corporation, com mais de 10 milhões de instalações pelo
              mundo.
            </p>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Skill;
