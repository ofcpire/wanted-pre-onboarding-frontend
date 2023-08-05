import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #4d8bb8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  box-shadow: 5px -5px 0px 0px #72baed, -5px 5px 0px 0px #ffecc4;
  color: #0261a6;
  border: 5px solid white;
  border-radius: 5px;
  background-color: white;
  max-width: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .section-title {
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    border-bottom: 2px solid white;
    background-color: #72baed;
    color: white;
    button {
      border: 1px solid #0261a6;
      width: auto;
      padding: 5px;
      height: 25px;
      background-color: white;
      color: #0261a6;
      border-radius: 5px;
      &:hover {
        background-color: #ffecc4;
      }
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
  }
`;

export const Button = styled.button`
  border: 1px solid #0261a6;
  color: #0261a6;
  border-radius: 5px;
  min-width: max-content;
  margin: 5px;
  padding: 5px;
  height: 30px;
  background-color: white;
  &:hover {
    color: white;
    background-color: #ffecc4;
  }
  &:disabled {
    color: black;
    border: 1px solid grey;
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  height: 30px;
  box-sizing: border-box;
  padding: 5px;
  color: #0261a6;
  border-radius: 5px;
  margin: 5px;
  border: 1px solid #0261a6;
  &:focus {
    box-shadow: 0px 0px 0px 1px #0261a6;
  }
`;
