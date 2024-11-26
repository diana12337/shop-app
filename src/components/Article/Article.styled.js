import styled from 'styled-components';

const StyledArticle = styled.main`
  a {
    text-decoration: none;
    color: black;
  }
  div {
    display: flex;
    gap: 5px;
    justify-content: center;
  }

  article {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 250px;
  }
`;

export default StyledArticle;
