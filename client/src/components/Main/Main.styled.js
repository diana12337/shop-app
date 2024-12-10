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
    background: white;
    border: 1px solid black;
    margin-top: 3rem;
    cursor: pointer;
    width: 180px;
    font-weight: 600;
  }
  section button:hover {
    background: black;
    color: white;
  }
`;

export default StyledMain;
