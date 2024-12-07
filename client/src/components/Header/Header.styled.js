import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 18px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    margin: 0;
  }
  div {
    width: 66%;
    display: flex;
    align-items: center;
    gap: 20px;
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
    border-radius: 50%;
    padding: 6px 3px 0 4px;
    font-size: 12px;
    background: black;
    text-align: center;
    color: white;
    left: 15px;
    bottom: 20px;
  }
`;

export default StyledHeader;
