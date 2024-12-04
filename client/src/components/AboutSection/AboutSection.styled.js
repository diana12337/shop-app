import styled from 'styled-components';

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 1rem;
  margin-inline: auto;

  margin-top: 3rem;
  h1,
  h2,
  h3 {
    text-align: center;
    font-size: 20px;
  }
  p,
  li {
    line-height: 25px;
    font-size: 15px;
    font-weight: 200;
  }
  ul {
    padding-left: 0;
  }
  li {
    margin-top: 4rem;
    list-style-type: none;
    display: flex;
    flex-basis: 100%;
    flex-direction: center;
  }

  img {
    width: 120px;
    height: 120px;
    flex: 1;
  }
  div {
    text-align: center;
  }
  div,
  p {
    flex: 1;
  }
`;

export default StyledAboutSection;
