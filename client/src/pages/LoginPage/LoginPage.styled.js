import styled from 'styled-components';

const StyledLoginPage = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-basis: 100%;
  padding-top: 3rem;
  min-height: 600px;
  padding-bottom: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default StyledLoginPage;
