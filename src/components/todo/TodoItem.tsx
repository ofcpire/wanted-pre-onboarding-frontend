import { useState, useEffect, useRef } from "react";
import { sendData, deleteData } from "../../lib/api/api";
import { Button, Input } from "../../styles/mainStyle";
import { CheckboxInput } from "../../styles/todoStyle";

export default function TodoItem({ todoObj, getNewTodos }: TodoItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(todoObj.isCompleted);
  const todoInputRef = useRef<HTMLInputElement | null>(null);

  const editTodoHandler = () => {
    if (isEdit && todoInputRef.current) {
      todoInputRef.current.value = todoObj.todo;
    }
    setIsEdit(!isEdit);
  };

  const updateTodoHandler = () => {
    if (todoInputRef.current) {
      sendData(`todos/${todoObj.id}`, "put", {
        todo: todoInputRef.current.value,
        isCompleted: isChecked,
      }).then(() => {
        getNewTodos();
        setIsEdit(false);
      });
    }
  };

  const checkTodoHandler = () => {
    sendData(`todos/${todoObj.id}`, "put", {
      todo: todoObj.todo,
      isCompleted: !todoObj.isCompleted,
    }).then(() => {
      getNewTodos();
      setIsChecked(!isChecked);
    });
  };

  const deleteTodoHandler = () => {
    deleteData(`todos/${todoObj.id}`)
      .then(() => getNewTodos())
      .catch(() => console.log("deleteTodo Fail"));
  };

  return (
    <li>
      <label>
        <CheckboxInput
          type="checkbox"
          id="todo-checkbox"
          defaultChecked={isChecked}
          onClick={checkTodoHandler}
        />
        {isEdit ? <Input
            ref={todoInputRef}
            data-testid="modify-input"
            defaultValue={todoObj.todo}
          /> : <span className="todo-title">{todoObj.todo}</span>}
      </label>
      <div className='todo-button-container'>
      {isEdit ? (
        <>
          <Button data-testid="submit-button" onClick={updateTodoHandler}>
            제출
          </Button>
          <Button data-testid="cancel-button" onClick={editTodoHandler}>
            취소
          </Button>
        </>
      ) : (
        <>
          <Button data-testid="modify-button" onClick={editTodoHandler}>
            수정
          </Button>
          <Button data-testid="delete-button" onClick={deleteTodoHandler}>
            삭제
          </Button>
        </>
      )}
      </div>
    </li>
  );
}
