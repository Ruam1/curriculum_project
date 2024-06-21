import React from "react";
import styled from "styled-components";
import Header from "../Header/index";
import Home from "../Start/index";
import About from "../About/index";
import Project from "../Project/index";
import Contact from "../Contact/index";
import "./style.js";

const BodyDiv = styled.div`
  width: auto;
  height: 870px;
  overflow: hidden;
  margin: 20px;
  z-index: 1;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Body = () => {
  return (
    <>
      <BodyDiv>
        <Header />
        <Home />
      </BodyDiv>
    </>
  );
};

export default Body;
