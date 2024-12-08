import styled from 'styled-components';

const StyledQuickView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    background: white;
    padding: 20px;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  article {
    flex: 1;
    width: 600px;
    display: flex;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 250px;
  }
  p {
    font-size: 13px;
    line-height: 20px;
  }
  div {
    gap: 10px;
    justify-content: center;
    margin: 10px;
    flex: 1;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  }
  span {
    display: flex;
    align-items: center;

    gap: 20px;
  }
`;

export default StyledQuickView;
