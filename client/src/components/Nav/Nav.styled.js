import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;

  ul {
    padding: 0;
    margin: 25px 0 2rem 0;

    display: flex;
    justify-content: center;
    flex-direction: row;
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
  button {
    z-index: 1000;
  }
  @media (max-width: 649px) {
    display: none;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;
  background-image: url(${(props) => props.background});
  border: none;
  font-size: 24px;
  cursor: pointer;

  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 13px;
  font-weight: 700;
  background-color: white;
  @media (max-width: 649px) {
    display: block;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;

export const BurgerMenu = styled.nav`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 2rem;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  h1 {
    text-align: center;
    font-size: 20px;
    padding: 10px;
  }
  ul {
    list-style-type: none;

    margin: 0;
    padding: 0 20px;
    li {
      margin: 20px 0;
      border-bottom: 1px solid grey;
    }

    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: grey;
      }
    }
  }

  @media (min-width: 650px) {
    display: none;
  }
`;
