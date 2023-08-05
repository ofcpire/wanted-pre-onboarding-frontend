import styled from 'styled-components';

export const TodoContainer = styled.div`
  max-height: 250px;
  height: 250px;
  overflow: auto;
  border-radius: 5px;
  padding: 0px 5px;
  border: 1px solid #0261a6;
  margin-top: 5px;
  color: #0261a6;
  .todo-title {
    padding-left: 5px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  ul {
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      label {
        display: flex;
        align-items: center;
        /* max-width: 250px; */
        word-break: break-all;
      }
      .todo-button-container {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
  border: 1px solid #0261a6;
  padding: 8px;
  color: #0261a6;
  border-radius: 50%;
  position: relative;
  &:checked {
    background-color: #0261a6;
    &::before {
      color:white;
      content: '✓';
      position: absolute;
      top: 0;
      left: 0.15rem;
    }
  }
`;
