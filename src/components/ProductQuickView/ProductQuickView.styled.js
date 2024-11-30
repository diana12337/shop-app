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
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  article {
    flex: 1;
    min-width: 200px;
    display: flex;

    gap: 1rem;
  }
  img {
    width: 100%;
    height: 250px;
  }
  div {
    gap: 10px;
    justify-content: center;
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button {
    margin-left: 1rem;
  }
`;

export default StyledQuickView;
