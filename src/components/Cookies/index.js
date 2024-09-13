import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { LuCookie } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const Div = styled.div`
  background-color: #1b1c2b;
  width: 450px;
  height: 250px;
  color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  color: #fff;
  text-align: center;
  z-index: 1000;
  margin-bottom: 20px;
  margin-right: 20px;

  .header {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2%;
    align-items: center;
    .cookie {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin: 2% 0% 0 10%;
      width: 82%;
    }
    .close {
      margin-bottom: 30px;
      :hover {
        cursor: pointer;
      }
    }
  }

  .accepted {
    text-align: center;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 80%;
    height: 25px;
    cursor: pointer;
    margin: 20px auto 0 auto;
  }

  .accepted:hover {
    background-color: #fff;
    color: #000;
  }

  p {
    text-align: left;
    margin: 2% 10% 0 10%;
    font-size: 15px;
  }
  h3 {
    margin-left: 10px;
  }
`;

const Cookies = () => {
  const [data, setData] = useState(() => {
    const savedCookie = localStorage.getItem("cookie");
    return savedCookie ? JSON.parse(savedCookie) : null;
  });

  const [isVisible, setIsVisible] = useState(!data);
  const handleCookie = () => {
    const result = "accepted";
    setData(result);
    localStorage.setItem("cookie", JSON.stringify(result));
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <>
      <Div>
        <div className="header">
          <div className="cookie">
            <LuCookie size={50} />
            <h3>Esse site usa cookies</h3>
          </div>
          <div className="close" onClick={handleClose}>
            <IoMdClose size={25} />
          </div>
        </div>
        <p>
          Nós usamos cookies para melhorar sua experiência no nosso site. Ao
          continuar navegando, você concorda com a nossa política de cookies.
          Saiba mais sobre como utilizamos cookies e como você pode controlar
          suas preferências <a href="/politica-de-cookies">clicando aqui</a>.
        </p>
        <div className="accepted" onClick={handleCookie}>
          Aceito
        </div>
      </Div>
    </>
  );
};

export default Cookies;
