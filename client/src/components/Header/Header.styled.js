import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 18px;
  border-bottom: 1px solid black;
  display: flex;
  margin-top: 15px;
  position: relative;
  min-height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    margin: 0;
    position: absolute;
    top: 22px;

    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    display: flex;
    align-items: center;

    justify-content: flex-end;
    margin-right: 2rem;
  }
  section {
    position: relative;
  }
  span {
    position: absolute;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px 3px 0 4px;
    font-size: 12px;
    background: black;
    text-align: center;
    color: white;
    left: 15px;
    bottom: 17px;
  }
  p {
    cursor: pointer;
    padding-left: 20px;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export default StyledHeader;
