import styled from 'styled-components';

const StyledPagination = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  nav {
  }
  ul {
    display: flex;
  }
  ul li {
    list-style-type: none;
  }

  ul li a {
    padding: 10px;

    text-decoration: none;
    border: 1px solid grey;
  }

  ul li a:hover {
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default StyledPagination;
