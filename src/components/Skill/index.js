import React from "react";
import { useState } from "react";
import { Div } from "./style.js";

const Skill = () => {
  const [description, setDescription] = useState(
    "/* Passe o mouse por cima das habilidades para ler a descrição */"
  );
  const handleDescription = (e) => {
    switch (e) {
      case "description":
        setDescription("/* Passe o mouse por cima das habilidades */");
        break;
      case "html":
        setDescription(
          "HTML é uma linguagem de marcação que permite aos desenvolvedores criar e estruturar seções, parágrafos e links em uma página da web. Diferente de outras linguagens de programação, HTML não é utilizado para criar lógica ou realizar cálculos, mas sim para definir a estrutura e o layout de um documento web."
        );
        break;
      case "css":
        setDescription(
          "CSS é uma linguagem de folhas de estilo usada para controlar a aparência e o layout dos elementos em uma página web. Ele permite separar o conteúdo da apresentação, facilitando a manutenção e a personalização do design da página."
        );
        break;
      case "js":
        setDescription(
          "JavaScript é uma linguagem de programação de alto nível, interpretada e baseada em eventos. É uma das três principais tecnologias da web, junto com HTML e CSS. Originalmente desenvolvido para adicionar comportamento às páginas web, JavaScript agora é usado em uma ampla gama de aplicações, incluindo desenvolvimento de servidores, aplicativos móveis e de desktop."
        );
        break;
      case "ts":
        setDescription(
          "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
        );
        break;
      case "sass":
        setDescription(
          "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass"
        );
        break;
      case "reactjs":
        setDescription(
          "O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”."
        );
        break;
      case "styleC":
        setDescription(
          "O Styled Components é uma biblioteca (lib) do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript. O modo de estilizar um componente utilizando a biblioteca Styled Components também é conhecido como CSS-in-JS (CSS dentro do JavaScript)."
        );
        break;
      case "next":
        setDescription(
          "Next.js é um framework React que oferece várias funcionalidades fora da caixa, como renderização do lado do servidor, geração de sites estáticos, suporte a APIs, roteamento simplificado, e muito mais. Ele é projetado para melhorar o desempenho e a experiência do desenvolvedor, permitindo criar aplicações complexas com menos configuração."
        );
        break;
      case "node":
        setDescription(
          "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
        );
        break;
      case "mysql":
        setDescription(
          "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo."
        );
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Div>
        <h1>Habilidades</h1>
        <div className="container">
          <div className="skill">
            <div className="divSkill">
              <div
                onMouseEnter={() => handleDescription("html")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                HTML
              </div>
              <div
                onMouseEnter={() => handleDescription("css")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                CSS
              </div>
              <div
                onMouseEnter={() => handleDescription("js")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                JavaScript
              </div>
              <div
                onMouseEnter={() => handleDescription("ts")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                TypeScript
              </div>
              <div
                onMouseEnter={() => handleDescription("sass")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                Sass
              </div>
              <div
                onMouseEnter={() => handleDescription("reactjs")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                ReactJs
              </div>
              <div
                onMouseEnter={() => handleDescription("styleC")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                Style Components
              </div>
              <div
                onMouseEnter={() => handleDescription("next")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                NextJs
              </div>
              <div
                onMouseEnter={() => handleDescription("node")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                Node JS
              </div>
              <div
                onMouseEnter={() => handleDescription("mysql")}
                onMouseLeave={() => handleDescription("description")}
                className="buttonSkill"
              >
                Mysql
              </div>
            </div>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        {/* <div className="one">
          <div className="icon"></div>
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
          <div className="icon"></div>
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
          <div className="icon"></div>
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
          <div className="icon"></div>
          <div className="description">
            <h4>Styled Components</h4>
            <p>
              O Styled Components é uma biblioteca (lib) do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript. O modo de estilizar um componente utilizando a biblioteca Styled Components também é conhecido como CSS-in-JS (CSS dentro do JavaScript).
            </p>
          </div>
        </div>
        <div className="one">
          <div className="icon"></div>
          <div className="description">
            <h4>Mysql</h4>
            <p>
              
            </p>
          </div>
        </div> */}
      </Div>
    </>
  );
};

export default Skill;
