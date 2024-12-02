import styled from 'styled-components';

const StyledButton = styled.button`
  ${(props) => props.theme.button[props.buttonStyle]};
  background-image: url(${(props) => props.background});
`;

export default StyledButton;
