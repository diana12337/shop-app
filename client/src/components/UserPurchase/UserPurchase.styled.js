import styled from 'styled-components';

const StyledUserPurchase = styled.div`
  img {
    width: 60px;
    height: 70px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    gap: 10px;
  }
  li:hover {
    border: none;
    cursor: auto;
  }
  div {
    background: white;
    padding: 10px;
    width: 60%;
    margin-top: 20px;
  }
  h4 {
    font-size: 13px;
    font-weight: 500;
  }
`;

export default StyledUserPurchase;
