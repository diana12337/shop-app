import styled from 'styled-components';

const StyledProduct = styled.section`
  display: flex;
  gap: 1rem;

  justify-content: center;

  section {
    flex: 1;
  }
  h1 {
    font-size: 40px;
    font-weight: 200;
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    width: 80%;
  }

  div {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  div:first-child {
    width: 60px;
  }
  button {
    width: 100%;
  }
`;

export default StyledProduct;
