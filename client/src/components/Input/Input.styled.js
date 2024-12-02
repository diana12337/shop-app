import styled from 'styled-components';

const InputStyled = styled.div`
  width: 100%;

  div {
    position: relative;
    margin: 15px;
  }
  input {
    display: block;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 7px;

    font-size: 16px;
    border: none;

    border-bottom: 1px solid black;
    outline: none;

    background-color: transparent;
  }

  label {
    position: absolute;
    top: -10px;
    left: 0;
    font-size: 12px;

    pointer-events: none;
    transition: all 0.3s ease;
  }

  p {
    position: absolute;
    top: 0;
    right: -40px;
  }

  img {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 600px) {
    p {
      right: 0;
    }
  }
`;

export default InputStyled;

/* border-bottom: 2px solid #ccc; */
