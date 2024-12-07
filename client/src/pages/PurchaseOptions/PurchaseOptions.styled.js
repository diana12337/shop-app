import styled from 'styled-components';

const StyledPurchaseOptions = styled.div`
  background: #f8f8f8;
  min-height: 380px;

  padding: 2rem 6rem 2rem 6rem;
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  article {
    padding: 25px;
    background: white;
  }
  h2 {
    font-weight: 500;
    border-bottom: 1px solid black;
  }
  p {
    font-size: 14px;
  }
  span {
    font-weight: 700;
  }
`;

export default StyledPurchaseOptions;
