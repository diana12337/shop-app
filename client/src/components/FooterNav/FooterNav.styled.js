import styled from 'styled-components';

const FooterNav = styled.nav`
  border-top: 1px solid grey;
  background-color: white;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
  h1 {
    font-size: 17px;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  li {
    font-size: 14px;
    list-style-type: none;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 650px) {
    gap: 1rem;
  }
`;

export default FooterNav;
