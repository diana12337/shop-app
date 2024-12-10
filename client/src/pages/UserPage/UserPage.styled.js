import styled from 'styled-components';

const StyledUserPage = styled.div`
  background: #f8f8f8;
  padding-bottom: 3rem;
  min-height: 370px;
  padding-top: 3rem;

  width: 100%;
  display: flex;
  gap: 4rem;

  justify-content: space-between;

  nav {
    flex: 0 0 30%;
    margin-left: 2rem;
  }
  ul {
    margin-left: 2rem;
  }
  li {
    font-size: 14px;
    margin-bottom: 15px;
    list-style-type: none;
    width: 60%;
  }
  li:hover {
    cursor: pointer;
  }
  div {
    flex: 0 0 70%;
  }
  h1 {
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    ul {
      margin: 0;
      padding: 0;
    }

    nav,
    div {
      width: 100%;
    }
  }
`;

export default StyledUserPage;
