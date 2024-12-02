import styled from 'styled-components';

const StyledDeliveryOptions = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  li {
    list-style-type: none;
  }
  label {
    padding: 20px;
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: flex-end;
    border: 1px solid black;
  }
  label::checked {
    border: 2px solid green;
  }
  span {
    display: flex;
    gap: 10px;
    right: 0;
  }
`;

export default StyledDeliveryOptions;
