import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    padding-top: 5px;
    border-top: 2px solid black;
  }
`;

export default StyledNav;
