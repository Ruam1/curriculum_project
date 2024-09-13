import styled from "styled-components";

export const Div = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h1 {
    color: #fff;
    padding-top: 2%;
  }

  span {
    color: #fff;
  }

  .container {
    width: 95%;
    display: flex;
    flex-flow: row nowrap;

    .skill {
      width: 50%;
      display: flex;
      justify-content: center;

      .divSkill {
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      }

      .buttonSkill {
        background-color: #1b1c2b;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #fff;
        width: 35%;
        height: 40px;
        margin: 15px;
        cursor: pointer;
        color: #fff;

        &:hover {
          background-color: #282a3f;
          border-color: #e0e0e0;
        }
      }
    }

    .description {
      width: 50%;
      color: #fff;
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        font-size: 30px;
      }

      p {
        font-size: 20px;
        margin-top: -3%;
      }
    }
  }
`;
