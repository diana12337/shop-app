import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid grey;

  div {
    width: 50%;
    display: flex;
    align-items: center;

    justify-content: space-between;
  }
  section {
    position: relative;
  }
  span {
    position: absolute;
    border-radius: 50%;
    padding: 5px;
    width: 10px;
    font-size: 12px;
    background: black;
    text-align: center;
    color: white;
    left: 15px;
    bottom: 20px;
  }
`;

export default StyledHeader;
