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
    margin-bottom: 10px;
  }
  li:hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
  div {
    flex: 0 0 70%;
  }
  h1 {
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

export default StyledUserPage;
