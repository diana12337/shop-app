import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid grey;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
  }
`;

export default StyledHeader;
