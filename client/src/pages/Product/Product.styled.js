import styled from 'styled-components';

const StyledProduct = styled.section`
  background: #f8f8f8;
  min-height: 600px;
  main {
    padding-top: 3rem;
    display: flex;
    gap: 1rem;
    width: 70%;
    margin-inline: auto;
    justify-content: center;
  }
  article,
  header {
    flex: 1;
  }
  h1 {
    font-size: 30px;
    font-weight: 200;
    margin: 0;
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
    gap: 5px;
  }
  div:first-child {
    width: 60px;
  }
  button {
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;

    gap: 20px;
  }

  section div {
    width: 80%;
    margin-inline: auto;
    font-size: 14px;
  }

  @media (max-width: 750px) {
    padding-bottom: 2rem;
    main {
      flex-direction: column;
    }
  }
  @media (max-width: 350px) {
    padding-bottom: 2rem;
    main {
      width: 100%;
    }
  }
`;

export default StyledProduct;
