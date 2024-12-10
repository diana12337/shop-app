import styled from 'styled-components';

const StyledPaymentOptions = styled.section`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
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
    max-width: 300px;
  }
  div {
    background: white;

    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-weight: 500;
    width: 80%;
    margin-bottom: 0;
    border-bottom: 1px solid black;
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

  article {
    padding: 0;
  }
`;

export default StyledPaymentOptions;
