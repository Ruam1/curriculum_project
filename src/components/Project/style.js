import styled from "styled-components";

export const Div = styled.div`
  width: auto !import;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
  }

  .carousel {
    width: 1365px;
    margin: 0px 20px;
    height: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
  }
  .carousel::-webkit-scrollbar {
    display: none;
  }

  .projetos {
    min-width: 400px;
    height: 450px;
    margin: 20px 25px;
    border: 1px solid #fff;
    border-radius: 15px;
    background-color: #ddd9ce;

    .img {
      background-color: green;
      width: 80%;
      margin: 20px auto;
      height: 250px;
    }

    .imgProducao {
      background-color: green;
      width: 90%;
      margin: 20px auto;
      height: 250px;
      display: flex;
    }

    .producao {
      width: 400px;
      height: 20px;
      background-color: #fff;
      border: 1px solid #000;
      margin: auto;
    }

    .info {
      display: flex;
      flex-flow: column nowrap;
      text-align: left;
      margin: 5px 28px;
    }
  }

  .transicao {
    margin-right: 45px;
    display: flex;
    flex-flow: column nowrap;
    transition: ${({ showProjeto_1 }) =>
      showProjeto_1 ? "transform 0.3s ease-in-out" : "background-color 0.3s"};
    transform: ${({ showProjeto_1 }) =>
      showProjeto_1 ? "translateX(25px)" : "translateX(0px)"};
  }

  .stack {
    height: 10%;
    font-size: 20px;
    display: flex;
    justify-content: end;
    margin: 5px 0px 0px 0px;
  }

  .projetosHover {
    height: 370px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    span {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .progressao {
    height: 5%;
    width: 200px;
    font-size: 20px;
    display: flex;
    justify-content: start;
    margin: 0px;
  }

  .buttons {
    width: 400px;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;

    button {
      background-color: transparent;
      border: none;
    }
  }

  .right {
    transform: rotate(180deg);
  }
`;

export const Img = styled.img`
  max-width: 13%;
  height: auto;
  cursor: pointer;
`;
