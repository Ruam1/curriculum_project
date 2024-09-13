import React, { useState } from "react";
import styled from "styled-components";
import { StyledBody, StyledBurguer, StyledMenu } from "./style.js";

const Header = () => {
  // Open defini se o menu mobile será aberto ou fechado
  const [open, setOpen] = useState(false);
  const [openSegmentos, setOpenSegmentos] = useState(false);
  const [openBurguer, setOpenBurguer] = useState(false);
  const [openBurguerTwo, setOpenBurguerTwo] = useState(false);
  function closeSegmentosLp() {
    setOpenBurguer(false);
    setOpen(false);
    setOpenSegmentos(false);
  }

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledBody open={open} openBurguerTwo={openBurguerTwo}>
      <span id="topo"></span>
      <div className="header_containerLp">
        <header className="containerHomeLp">
          <StyledBurguer
            open={open}
            openSegmentos={openSegmentos}
            openBurguer={openBurguer}
            openBurguerTwo={openBurguerTwo}
            onClick={() => {
              setOpenBurguer(!openBurguer);
              setOpenBurguerTwo(!openBurguerTwo);
              setOpen(!open);
              if (openBurguer) {
                setOpenBurguer(false);
                setOpen(false);
                setOpenSegmentos(false);
              }
            }}
          >
            <div className="burguer " />
            <div className="burguer " />
            <div className="burguer " />
          </StyledBurguer>

          <StyledMenu open={open}>
            <div className="row">
              <div className="header-name">
                <h1>Ruam R. Ramos</h1>
              </div>
              <nav className="divNav">
                <ul>
                  <li onClick={() => handleScroll("about")}>Sobre</li>
                  <li onClick={() => handleScroll("skill")}>Habilidades</li>
                  <li onClick={() => handleScroll("project")}>Projetos</li>
                  <li onClick={() => handleScroll("contact")}>Contato</li>
                </ul>
              </nav>
            </div>
          </StyledMenu>
        </header>
      </div>
    </StyledBody>
  );
};

export default Header;
