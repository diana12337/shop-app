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
    text-align: center;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;

    background-color: transparent;
  }

  input::placeholder {
    font-size: 12px;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: ${(props) =>
      props.error === `Field valid` ? 'green' : 'red'};
    transition: all 0.3s ease;
  }

  p {
    position: absolute;
    top: 0;
    left: 120px;
    width: 70px;
    color: rgba(204, 204, 204, 0);
    pointer-events: none;
    transition: all 0.3s ease;
    top: -10px;
    font-size: 12px;
    color: ${(props) => (props.error === `Field valid` ? 'green' : 'red')};
  }
  input:focus + p + span {
    width: 100%;
  }

  @media (max-width: 600px) {
    p {
      right: 0;
    }
  }
`;

export default InputStyled;

/* label {
  padding-left: 40px;
}
    img {
    width: 15px;
    height: 15px;
  }

 */

/* import styled from 'styled-components';

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

export default InputStyled; */

/* border-bottom: 2px solid #ccc; */
