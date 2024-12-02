import styled from 'styled-components';

const StyledProductList = styled.article`
  display: block;

  h2 {
    font-size: 26px;
    font-weight: 400;
  }
  table {
    border-collapse: collapse;

    width: 100%;
    border-spacing: 0;

    align-items: center;
  }

  th,
  td {
    padding: 8px;
    white-space: nowrap;
    margin: 0;
  }
  td {
    border-bottom: 2px solid #ccc;
  }
  td {
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    vertical-align: middle;
  }
`;

export default StyledProductList;
