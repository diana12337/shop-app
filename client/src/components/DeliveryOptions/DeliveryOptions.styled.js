import styled from 'styled-components';

const StyledDeliveryOptions = styled.div`
  background: white;
  text-align: center;
  padding: 20px;

  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    margin-top: 25px;
    border-bottom: 1px solid black;
  }
  div {
    display: flex;
    gap: 15px;

    flex-direction: column;
  }

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    border: 1px solid lightgrey;
    width: 0;
  }

  label {
    display: flex;
    background: #f8f8f8;
    font-family: sans-serif, Arial;
    font-size: 14px;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 3px 7px 3px 7px;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    border: 2px solid black;
    opacity: 1;
    font-weight: 700;
  }

  label:hover {
    opacity: 0.7;
  }
`;

export default StyledDeliveryOptions;
/* input[type='radio']:focus + label {
  border: 2px solid black;
} */
