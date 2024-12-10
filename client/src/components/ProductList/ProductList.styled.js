import styled from 'styled-components';

const StyledProductList = styled.article`
  display: block;
overflow-x: auto
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
padding:5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   gap:9px;
  }
  button {
    margin: 0;
    padding: 0;
  }
  section {
    width: 60px;
    gap: 10px;
    padding: 5px;
    font-size: 14px;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export default StyledProductList;
