import styled from 'styled-components';

const StyledProductList = styled.article`
  display: block;

  width: 60%;

  table {
    border-collapse: collapse;

    width: 100%;
    border-spacing: 0;

    align-items: center;
  }
  th {
    font-size: 16px;
    font-weight: 600;

    border-bottom: 1px solid black;
  }
  th,
  td {
    padding: 8px;
    white-space: nowrap;
    margin: 0;
  }
  td {
    border-bottom: 1px solid #ccc;
  }
  td {
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    vertical-align: middle;
  }
  img {
    width: 20%;
    height: 70px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div {
    display: flex;
    gap: 20px;

    justify-content: flex-start;
    align-items: center;
  }
  button {
    cursor: pointer;
    border: none;
    font-size: 12px;
    border-bottom: 1px solid black;
    padding: 0;
    margin: 0;
    background-color: transparent;

    opacity: 0.6;
    text-align: center;
    &:hover {
      opacity: 1;
      color: red;
      border-bottom: 1px solid red;
    }
  }
`;

export default StyledProductList;
