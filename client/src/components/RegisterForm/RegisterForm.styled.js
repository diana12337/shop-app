import styled from 'styled-components';

const StyledRegisterForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
  }
  form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: white;

    align-items: center;
    width: 60%;
  }
  input {
    padding-top: 5px;
    padding-bottom: 5px;

    font-size: 16px;

    background-color: transparent;
  }
  span {
    color: red;
  }
  button {
    width: 70%;
  }
`;

export default StyledRegisterForm;
