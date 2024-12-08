import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 3rem;
  position: relative;
  display: flex;
  flex-basis: 100%;
  line-height: 18px;
  gap: 3rem;
  flex-wrap: wrap;
  padding-bottom: 4rem;
  justify-content: center;
  text-align: center;

  section {
    position: absolute;
    bottom: 0;

    padding-bottom: 1rem;
  }
  section button {
    padding: 10px;
    background: black;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default StyledMain;
