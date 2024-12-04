import styled from 'styled-components';

const StyledCartView = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;

  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  h2 {
    font-size: 17px;
    font-weight: 500;
  }
  h1,
  span {
    text-align: center;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
    color: green;
    text-align: center;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;

    text-align: center;
  }
  section {
    background: white;
    padding: 10px;
    width: ${({ $expanded }) => ($expanded ? '350px' : '0')};
    height: 100%;
    position: fixed;
    right: 0;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: width 0.5s ease;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-height: 400px;
    overflow-y: auto;
    padding: 0;
  }
  article {
    position: relative;
    flex: 1;
    min-width: 100px;
    display: flex;
    text-align: left;
    gap: 1rem;
  }
  li {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  img {
    width: 40%;
    height: 60px;
  }
  p {
    font-size: 13px;
    font-weight: 500;
  }
  div {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default StyledCartView;
