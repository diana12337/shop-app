import styled from 'styled-components';

const StyledPurchaseTerms = styled.section`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  align-items: center;
  gap: 1rem;

  h1,
  h3 {
    text-align: center;
    font-size: 18px;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }
  p,
  li {
    line-height: 25px;
    font-size: 15px;
    font-weight: 200;
  }
  ul {
    padding-left: 0;
  }
  li {
    margin-top: 2rem;
    list-style-type: none;
    display: flex;
    flex-basis: 100%;
    flex-direction: center;
  }
  div {
    font-weight: 500;
    text-align: center;
  }
  article {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 60%;
  }
`;

export default StyledPurchaseTerms;
