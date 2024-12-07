import styled from 'styled-components';

const StyledPurchaseConfirmation = styled.div`
  background: #f8f8f8;

  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  div {
    background: white;
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
  }
  h1 {
    font-weight: 500;
    font-size: 24px;

    text-align: center;
    border-bottom: 1px solid black;
  }
  p {
    width: 70%;
    text-align: center;
  }
`;

export default StyledPurchaseConfirmation;
