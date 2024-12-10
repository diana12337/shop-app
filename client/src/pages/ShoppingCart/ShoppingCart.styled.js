import styled from 'styled-components';

const StyledShoppingCart = styled.div`
  background: #f8f8f8;
  min-height: 350px;
  text-align: center;
  font-weight: 200;
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }
  h1 {
    padding: 30px;
    margin: 0;
  }
  h2 {
    font-size: 16px;
    font-weight: 600;

    border-bottom: 1px solid black;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  article {
    font-size: 14px;
    padding: 3rem;
    background: white;
    margin-bottom: 3rem;
  }
  span {
    font-size: 16px;
    font-weight: 600;
  }
  button {
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  main {
    display: flex;
    margin-inline: auto;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-top: 4rem;
  }
`;

export default StyledShoppingCart;
