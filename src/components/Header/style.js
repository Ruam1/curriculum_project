import styled from "styled-components";

export const StyledBody = styled.div`
  .header-links a:hover {
    transition: all 0.2s 0s ease-in-out;
    color: #f0f8ff;
    border-bottom: 4px solid #f0f8ff;
  }
  .row {
    display: flex;
    justify-content: space-between;
    height: 100px;
  }

  .header_containerLp {
    margin: 15px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: ${({ open }) => (open ? "all 0.1s linear" : "all 1s linear")};
  }
`;

export const StyledBurguer = styled.div`
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

export const StyledMenu = styled.div`
  .buttonSegmentosLp {
    display: none;
  }

  .only_desktopLp {
    display: inline;
  }

  .header-name {
    margin: auto 10vw auto 3vw;
    h1 {
      color: #f0f8ff;
    }
  }

  .divNav {
    flex-grow: 1;
    padding: 20px;
    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }

    li {
      list-style: none;
      color: #fff;
      cursor: pointer;
    }

    li:hover {
      transition: all 0.2s 0s ease-in-out;
      color: #f0f8ff;
      border-bottom: 4px solid #f0f8ff;
    }
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

/* @media only screen and (max-width: 1515px) and (min-width: 1381px) {
}

@media only screen and (max-width: 1380px) and (min-width: 801px) {
}

@media only screen and (max-width: 1080px) and (min-width: 801px) {
}

@media only screen and (max-width: 800px) and (min-width: 436px) {
}

@media only screen and (max-width: 435px) and (min-width: 385px) {
}

@media only screen and (max-width: 384px) {
} */
