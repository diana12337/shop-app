import React from 'react';
import StyledProductCounter from './ProductCounter.styled.js';
import Button from '../Button/Button.js';

function ProductCounter() {
  return (
    <StyledProductCounter>
      <Button text="-" />
      <p>1</p>
      <Button text="+" />
    </StyledProductCounter>
  );
}

export default ProductCounter;
