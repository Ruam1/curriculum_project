import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";

const StyledBody = styled.div`
.row{
  display:flex;
  justify-content: space-between;
}
.header_containerLp{
  margin: 15px;
  border-radius:10px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: ${({ open }) => (open ? "all 0.1s linear" : "all 1s linear")};
}
}`;

const StyledBurguer = styled.div`
  @media only screen and (max-width: 800px) {
    width: 2rem;
    height: 1.5rem;
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    cursor: pointer;

    div {
      width: 2.6rem;
      height: 0.25rem;
      background-color: ${({ openBurguer }) =>
        openBurguer ? "#d4d4d4" : "#404041"};
      border-radius: 10px;
      transform-origin: 6.5px;
      transition: all 0.5s linear;

      &:nth-child(1) {
        transform: ${({ openBurguer }) =>
          openBurguer ? "rotate(45deg)" : "rotate(0)"};
      }
      &:nth-child(2) {
        opacity: ${({ openBurguer }) => (openBurguer ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ openBurguer }) =>
          openBurguer ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;

const StyledMenu = styled.div`
  .buttonSegmentosLp {
    display: none;
  }
  .only_desktopLp {
    display: inline;
  }
  @media only screen and (max-width: 800px) and (min-width: 570px) {
    .logoHeaderLp {
      margin-left: auto;
    }
    .hrefSegmentosLp {
      display: none;
    }
    .buttonSegmentosLp {
      display: block;
    }
    .only_desktopLp {
      display: none;
    }
    .header-links {
      background: #fff;
      border: none;
      height: auto;
      width: 100%;
      flex-flow: column nowrap;
      padding: 10px;
      transition: all 0.5s linear;
      transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(-200%)"};
      opacity: ${({ open }) => (open ? 1 : 0.5)};
    }
  }
  @media only screen and (max-width: 569px) {
    .containerHomeLp .header-links {
      margin: 0px !important;
    }
    .only_desktopLp {
      display: none;
    }
    .hrefSegmentosLp {
      display: none;
    }
    .buttonSegmentosLp {
      display: block;
    }
    .header-links {
      background: #fff;
      border: none;
      height: auto;
      width: 100% !important;
      flex-flow: column nowrap;
      padding: 10px;
      transition: all 0.5s linear;
      transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(-200%)"};
      opacity: ${({ open }) => (open ? 1 : 0.5)};
    }
  }
`;

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
              <div className="col-sm-4 header-name">
                <h1>Ruam R. Ramos</h1>
              </div>
              <nav className="col-sm-8 header-links">
                <Link to="/Sobre">Início</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contato">Contato</Link>
              </nav>
            </div>
          </StyledMenu>
        </header>
      </div>
    </StyledBody>
  );
};

export default Header;
