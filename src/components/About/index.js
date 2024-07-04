import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: auto;
  color: #fff;
  padding: 1% 0 3% 0;
  p {
    text-align: center;
    margin: 2% 15% 0 15%;
    font-size: 20px;
  }
`;

const About = () => {
  return (
    <>
      <Div>
        <h1>Sobre Mim</h1>
        <p>
          Estudante de Análise e Desenvolvimento de Sistemas com dois anos de
          experiência como estagiário em desenvolvimento frontend. Sempre
          aprimorando minhas capacidades na criação de interfaces de usuário
          eficientes e responsivas, focado em aprender e aplicar novas
          tecnologias para resolver problemas e melhorar a experiência do
          usuário. Minhas especialidades incluem React, Angular, HTML, CSS,
          JavaScript (ES6) e Bootstrap.
        </p>
      </Div>
    </>
  );
};

export default About;
