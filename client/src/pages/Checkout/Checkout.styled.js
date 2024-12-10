import styled from 'styled-components';

const StyledCheckout = styled.div`
  background: #f8f8f8;
  padding-bottom: 3rem;
  text-align: left;
  font-weight: 200;
  flex-basis: 100%;
  min-height: 680px;
  div {
    flex: 1;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    margin-inline: auto;
    justify-content: space-between;
  }
  h1 {
    padding: 30px;
    margin: 0;
    text-align: center;
    font-size: 20px;
  }
  form {
    padding: 20px;
    min-width: 280px;
  }

  article {
    text-align: center;
    margin-inline: auto;
  }
  p {
    width: 70%;

    margin-inline: auto;
  }
`;

export default StyledCheckout;
