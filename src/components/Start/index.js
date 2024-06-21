import React from "react";
import styled from "styled-components";
import ReactImg from "../../images/react.png";
import NodeImg from "../../images/Node.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Div = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  margin: 20px;
  .one {
    height: 70vh;
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    aling-items: center;
    text-align: left;

    .desc {
      margin: 0 20%;
    }
    h2 {
      color: #fff;
      font-size: 30px;
    }
    h3 {
      margin-top: -25px;
      font-size: 55px;
      color: #fff;
      letter-spacing: 15px;
    }
    .buttons {
      height: 12%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin: 0 25% 0 20%;
    }
  }
  .two {
    height: 70vh;
    width: 50%;
    display: flex;
    flex-flow: row rap;
    justify-content: center;
    .img {
      width: 60%;
      height: 60%;
      margin: auto;
      .img_react {
      }
      .img_angular {
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ImageLink = styled.img`
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ButtonGit = styled.button`
  width: 48%;
  height: 100%;
  border: 3px solid #9b2c95;
  border-radius: 15px;
  background-color: #11111d;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;
const ButtonInk = styled.button`
  width: 48%;
  height: 100%;
  border: 3px solid #7d6ef3;
  border-radius: 15px;
  background-color: #11111d;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const Home = () => {
  return (
    <>
      <Div>
        <div className="one">
          <div className="desc">
            <h2>Olá, sou um desenvolvedor </h2>
            <h3>Frontend!</h3>
          </div>
          <div className="buttons">
            <ButtonGit>
              <FaGithub className="icon" size={30} />
              <h4>GitHub</h4>
            </ButtonGit>
            <ButtonInk>
              <FaLinkedin className="icon" size={30} />
              <h4>&nbsp;Linkedin</h4>
            </ButtonInk>
          </div>
        </div>
        <div className="two">
          <div className="img">
            <Image src={ReactImg} alt="ReactImg" />
            <hr />
            <Image src={NodeImg} alt="NodeImg" />
          </div>
        </div>
      </Div>
    </>
  );
};

export default Home;
