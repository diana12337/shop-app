import React from 'react';
import StyledProductCounter from './ProductCounter.styled.js';
import Button from '../Button/Button.js';

function ProductCounter({ handleDesc, handleAsc, state }) {
  return (
    <StyledProductCounter>
      <Button text="-" onClick={handleDesc} />
      <p>{state}</p>
      <Button text="+" onClick={handleAsc} />
    </StyledProductCounter>
  );
}

export default ProductCounter;
