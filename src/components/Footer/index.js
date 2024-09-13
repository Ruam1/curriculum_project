import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #1b1c2b;
  width: 99.4%;
  color: #fff;
  padding: 5px;
  p {
    text-align: center;

    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <>
      <Div>
        <p>© 2024-2025 Ruam Ribeiro Ramos. Todos os direitos reservados.</p>
      </Div>
    </>
  );
};

export default Footer;
