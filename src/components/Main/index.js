import React from "react";
import styled from "styled-components";
import Background from "../../images/background.jpg";

const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Main = () => {
  return (
    <>
      <StyledImage src={Background} alt="background" />
    </>
  );
};

export default Main;
