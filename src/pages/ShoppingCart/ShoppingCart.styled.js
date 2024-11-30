import styled from 'styled-components';

const StyledShoppingCart = styled.div`
  border: 1px solid blue;
  text-align: center;
  font-weight: 200;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  article {
    font-size: 14px;
    padding: 3rem;
    background: white;
  }
`;

export default StyledShoppingCart;
