import React from "react";
import styled from "styled-components";
import Header from "../Header/index";
import Home from "../Start/index";
import About from "../About/index";
import Skill from "../Skill/index";
import Project from "../Project/index";
import Contact from "../Contact/index";

const BodyDiv = styled.div`
  width: auto;
  height: 95vh;
  margin: 20px;
  z-index: 1;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const Body = () => {
  return (
    <>
      <BodyDiv>
        <Header />
        <Home />
        <About />
        <Skill />
        <Project />
      </BodyDiv>
    </>
  );
};

export default Body;
