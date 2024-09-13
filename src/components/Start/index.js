import React from "react";
import styled from "styled-components";
import { Div, Image, ButtonGit, ButtonInk } from "./style.js";
import ReactImg from "../../images/react.png";
import NodeImg from "../../images/Node.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
              <FaGithub className="icon" size={35} />
              <h4>GitHub</h4>
            </ButtonGit>
            <ButtonInk>
              <FaLinkedin className="icon" size={35} />
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
