import styled from 'styled-components';

const StyledShoppingCart = styled.div`
  border: 1px solid blue;
  font-weight: 200;
  section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  article {
    font-size: 14px;
    padding: 3rem;
    background: white;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`;

export default StyledShoppingCart;
