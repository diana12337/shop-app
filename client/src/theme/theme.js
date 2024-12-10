import { css } from 'styled-components';

export const theme = {
  button: {
    buttonDelete: `
         cursor: pointer;
         background: black;
         padding: 7px;
         color: white;
         border: none;
         border-radius: 5px;
         border: none;
         min-width: 50px;
         &:hover {
        background-color: red;
    
        background-size: 27%;
        background-repeat: no-repeat;
        background-position: center;
    }
         &:hover span {
        color: transparent;
       
    }
`,
    defaultButton: css`
      cursor: pointer;
      padding: 10px;
      color: whitesmoke;
      background-color: #1f1f1f;
      font-weight: 600;
      border: none;
      width: 80%;
      &:hover {
        opacity: 0.9;
      }
    `,
    headerButton: css`
      cursor: pointer;
      background: transparent;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      width: 25px;
      height: 25px;

      border: none;
    `,
    buttonQuickView: css`
      cursor: pointer;
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: center;
      padding: 7px;
      font-weight: 700;
      background-color: white;
      width: 30px;
      color: white;
      border: 1px solid black;
      &:hover {
        opacity: 0.9;
      }
    `,
    buttonReturn: css`
      cursor: pointer;
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: center;
      padding: 15px;
      font-weight: 700;
      background-color: transparent;
      width: 35px;
      color: white;
      border: none;
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;

      &:hover {
        opacity: 1;
      }
    `,
    toggleCart: css`
      cursor: pointer;

      padding: 15px;
      font-weight: 700;
      background: white;
      width: 35px;
      color: black;
      border: 1px solid black;

      &:hover {
        opacity: 0.8;
      }
    `,
    buttonRemove: css`
      cursor: pointer;
      border: none;
      font-size: 12px;
      border-bottom: 1px solid black;
      padding: 0;
      margin: 0;
      background-color: transparent;

      opacity: 0.6;
      text-align: center;
      &:hover {
        opacity: 1;
        color: red;
        border-bottom: 1px solid red;
      }
    `,
  },
};
