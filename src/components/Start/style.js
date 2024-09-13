import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 5% 20px;

  .one {
    height: 70vh;
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: left;

    .desc {
      margin: 0 20%;
    }

    h2 {
      color: #fff;
      font-size: 30px;
    }

    h3 {
      margin-top: -25px;
      font-size: 55px;
      color: #fff;
      letter-spacing: 15px;
    }

    .buttons {
      height: 12%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin: 0 25% 0 20%;
    }
  }

  .two {
    height: 70vh;
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .img {
      width: 60%;
      height: 60%;
      margin: auto;

      .img_react {
      }

      .img_angular {
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const ButtonGit = styled.button`
  width: 170px;
  height: 100%;
  border: 3px solid #9b2c95;
  border-radius: 15px;
  background-color: #11111d;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 30px;
  font-size: 15px;
  .icon {
    padding: 0 10px 0 10px;
  }
`;

export const ButtonInk = styled.button`
  width: 170px;
  height: 100%;
  border: 3px solid #7d6ef3;
  border-radius: 15px;
  background-color: #11111d;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 25px;
  font-size: 15px;
  margin-left: 50px;
  .icon {
    padding: 0 10px 0 10px;
  }
`;
