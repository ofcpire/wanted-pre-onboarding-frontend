import { useRef } from "react";
import TodoItem from "./TodoItem";
import { sendData } from "../../lib/api/api";

export default function TodoMain({ todos, getNewTodos }: TodoMainProps) {
  const todoInputRef = useRef<HTMLInputElement | null>(null);

  const createTodoHandler = async () => {
    if (todoInputRef.current) {
      const data = { todo: todoInputRef.current.value };
      sendData("todos", "post", data)
        .then(() => {
          if (todoInputRef.current) todoInputRef.current.value = "";
          getNewTodos();
        })
        .catch(() => console.log("failed to post todo"));
    }
  };

  return (
    <main>
      <div>
        <input data-testid="new-todo-input" ref={todoInputRef} />
        <button
          data-testid="new-todo-add-button"
          onClick={createTodoHandler}>
          추가
        </button>
      </div>
      <ul>
        {todos.map((todoObj) => (
          <TodoItem
            todoObj={todoObj}
            key={todoObj.id}
            getNewTodos={getNewTodos}
          />
        ))}
      </ul>
    </main>
  );
}
