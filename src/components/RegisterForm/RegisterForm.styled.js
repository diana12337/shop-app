import styled from 'styled-components';

const StyledRegisterForm = styled.div`
  display: flex;

  form {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width: 50vw;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
  }
  input {
    width: 70%;
    padding-top: 5px;
    padding-bottom: 5px;

    font-size: 16px;

    background-color: transparent;
  }
`;

export default StyledRegisterForm;
