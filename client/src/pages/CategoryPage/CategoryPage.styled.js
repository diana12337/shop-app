import styled from 'styled-components';

const StyledCategoryPage = styled.div`
  background: #f8f8f8;
  padding-bottom: 2rem;
  padding-top: 2rem;

  select {
    margin-left: 3rem;

    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    line-height: 1.3;
  }
  option:hover {
    background-color: black;
    color: white;
  }
  select:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
  }
  section {
    margin-top: 3rem;
    display: flex;
    flex-basis: 100%;
    line-height: 18px;
    gap: 3rem;
    flex-wrap: wrap;

    justify-content: center;
    text-align: center;
  }
`;

export default StyledCategoryPage;
