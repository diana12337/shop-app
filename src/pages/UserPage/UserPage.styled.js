import styled from 'styled-components';

const StyledUserPage = styled.div`
  width: 60%;
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  nav {
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
  h1 {
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

export default StyledUserPage;
