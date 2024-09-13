import styled from "styled-components";

export const Div = styled.div`
  height: 600px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: ${({ cursor }) => (cursor ? "wait" : "default")};

  .container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-flow: row nowrap;
  }

  .formDiv {
    width: 50%;
  }

  h1 {
    color: #fff;
  }

  .form {
    display: flex;
    flex-flow: column nowrap;
  }

  .input {
    width: 95%;
    margin: 20px 0px;
    height: 25px;
    color: #fff;
    background-color: #1b1c2b;
    padding: 5px 15px;
    border: 1px groove #fff;
    border-radius: 5px;

    &:hover {
      background-color: #282a3f;
      border-color: #e0e0e0;
    }
  }

  .textarea {
    width: 95% !important;
    height: 150px !important;
    margin: 20px 0px;
    color: #fff;
    background-color: #1b1c2b;
    padding: 5px 15px;
    resize: none;
    border: 1px groove #fff;
    border-radius: 5px;

    &:hover {
      background-color: #282a3f;
      border-color: #e0e0e0;
    }
  }

  input::placeholder {
    color: #fff;
    opacity: 0.5;
  }

  .contato {
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
  }

  .email {
    color: #fff;
    margin-left: 30px;
    margin-bottom: 30px;
    font-size: 20px;

    h2 {
      margin-bottom: 5px;
    }
  }

  .redes {
    color: #fff;
    margin-left: 30px;
  }

  .rede {
    margin-bottom: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 20px;
  }

  .icon {
    margin-right: 15px;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #0077b5; /* Cor ao passar o mouse */
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  color: #fff;
  border: 1px groove #fff;
  border-radius: 5px;
  background-color: #1b1c2b;
  font-size: 15px;

  &:hover {
    background-color: #282a3f;
    border-color: #e0e0e0;
    cursor: ${({ cursor }) => (cursor ? "wait" : "pointer")};
  }
`;
