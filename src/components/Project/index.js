import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import chevron from "../../images/chevron.png";

const Div = styled.div`
  width: auto;
  height: 130vh;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
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
    min-width: 300px;
    height: 500px;
    margin: 20px;
    border: 1px solid #fff;
    border-radius: 15px;
    background-color: #ddd9ce;
    .img {
      background-color: green;
      width: 80%;
      margin: 20px auto;
      height: 250px;
    }
    .info {
      display: flex;
      flex-flow: column nowrap;
      text-align: left;
      margin: 5px 28px;
    }
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
      cursor: pointer;
    }
  }
  .right {
    transform: rotate(180deg);
  }
`;

const Img = styled.img`
  max-width: 13%;
  height: auto;
`;

const Project = () => {
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
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto1</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto2</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto3</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto4</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto5</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto5</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
          </div>
          <div className="projetos">
            <div className="img">teste</div>
            <div className="info">
              <span className="name">Projeto5</span>
              <span className="data">20/10/2024</span>
              <span className="description">
                Lorem ipsum dolor sit amet. Eos autem dolor eos fuga illum At
                impedit debitis aut fuga iusto! Qui rerum consequatur cum
                repellendus omnis est reprehenderit obcaecati.
              </span>
            </div>
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
