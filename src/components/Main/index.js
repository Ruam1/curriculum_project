import React from "react";
import styled from "styled-components";
import Header from "../Header/index";
import Home from "../Start/index";
import About from "../About/index";
import Skill from "../Skill/index";
import Project from "../Project/index";
import Contact from "../Contact/index";
import Footer from "../Footer/index";
import Cookies from "../Cookies";

const Div = styled.div`
  width: auto;
  height: 95vh;
  margin: 20px;
  z-index: 1;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const Main = () => {
  return (
    <>
      <Div>
        <Cookies />
        <Header />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </Div>
    </>
  );
};

export default Main;
