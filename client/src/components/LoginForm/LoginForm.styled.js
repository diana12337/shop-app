import styled from 'styled-components';

const StyledLoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid black;
  }
  article {
    background: white;
    margin-top: 2rem;
    text-align: center;
    padding: 25px;
    border: 1px solid black;
  }
  form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 40%;
    align-items: center;
  }
  input {
    padding-top: 5px;
    padding-bottom: 5px;

    font-size: 16px;

    background-color: transparent;
  }
  button {
    width: 70%;
  }
  span {
    color: red;
  }
`;

export default StyledLoginForm;
