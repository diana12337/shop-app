import React from 'react';
import StyledButton from './Button.styled.js';
function Button(props) {
  const { text } = props;

  return <StyledButton {...props}> {text} </StyledButton>;
}

export default Button;
