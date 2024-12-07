import styled from 'styled-components';

const StyledPaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  form {
    background: white;
    padding: 20px;
    text-align: center;
  }

  form button {
    margin-top: 20px;
  }
  section {
    display: flex;

    gap: 20px;
    margin-top: 20px;
  }
  div {
    background: white;
    padding: 10px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-weight: 500;
    border-bottom: 1px solid black;
    padding: 20px;
  }
  p {
    text-align: center;
  }
  div button {
    padding: 10px;
    background: black;
    border: none;
    color: white;
  }
`;

export default StyledPaymentOptions;
