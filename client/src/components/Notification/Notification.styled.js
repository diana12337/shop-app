import styled from 'styled-components';

const StyledNotification = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  border-radius: 5px;
  z-index: 1000;

  p {
    background-color: black;
    color: white;
    padding: 10px 20px;
  }
`;

export default StyledNotification;
