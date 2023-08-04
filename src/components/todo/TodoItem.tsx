import { useState, useEffect, useRef } from "react";
import { sendData, deleteData } from "../../lib/api/api";

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
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={checkTodoHandler}
        />
        {!isEdit && <span>{todoObj.todo}</span>}
      </label>
      {isEdit ? (
        <>
          <input
            ref={todoInputRef}
            data-testid="modify-input"
            defaultValue={todoObj.todo}
          />
          <button data-testid="submit-button" onClick={updateTodoHandler}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={editTodoHandler}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={editTodoHandler}>
            수정
          </button>
          <button data-testid="delete-button" onClick={deleteTodoHandler}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}
