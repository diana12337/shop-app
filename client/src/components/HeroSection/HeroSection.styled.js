import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  background: linear-gradient(90deg, rgba(238,190,174,1) 19%, rgba(148,233,224,0.876715652081145) 100%);
  );

  text-align: center;
  padding: 0 20px;
  header {
    max-width: 800px;
  }
  h1 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.5em;
    margin-bottom: 30px;
  }
  div {
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
  }
`;

export default StyledHeroSection;
