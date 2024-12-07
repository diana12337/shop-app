import styled from 'styled-components';

const StyledCheckout = styled.div`
  background: #f8f8f8;
  padding-bottom: 3rem;
  text-align: center;
  font-weight: 200;
  flex-basis: 100%;

  div {
    flex: 1;
  }
  section {
    display: flex;

    margin-inline: auto;
    justify-content: space-between;
  }
  h1 {
    padding: 30px;
    margin: 0;
  }
`;

export default StyledCheckout;
