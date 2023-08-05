import { useRef } from 'react';
import TodoItem from './TodoItem';
import { sendData } from '../../lib/api/api';
import { Section, Button, Input } from '../../styles/mainStyle';
import { TodoContainer } from '../../styles/todoStyle';
import { removeToken } from '../../lib/utils/token';
import { useNavigate } from 'react-router-dom';

export default function TodoMain({ todos, getNewTodos }: TodoMainProps) {
  const todoInputRef = useRef<HTMLInputElement | null>(null);
  const navigate=useNavigate();

  const createTodoHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (todoInputRef.current) {
      const data = { todo: todoInputRef.current.value };
      sendData('todos', 'post', data)
        .then(() => {
          if (todoInputRef.current) todoInputRef.current.value = '';
          getNewTodos();
        })
        .catch(() => console.log('failed to post todo'));
    }
  };

  const logoutHandler=()=>{
    removeToken();
    navigate('/');
  }

  return (
    <Section>
      <div className='section-title'>
        <h1>MY TODOS</h1>
        <button onClick={logoutHandler}>LOG OUT</button>
      </div>
      <div className='content-wrapper'>
        <form>
          <label htmlFor='new-todo-input'>새로운 Todo</label>
          <Input
            data-testid='new-todo-input'
            id='new-todo-input'
            ref={todoInputRef}
          />
          <Button
            data-testid='new-todo-add-button'
            onClick={createTodoHandler}>
            추가
          </Button>
        </form>
        <TodoContainer>
          <ul>
            {todos.map((todoObj) => (
              <TodoItem
                todoObj={todoObj}
                key={todoObj.id}
                getNewTodos={getNewTodos}
              />
            ))}
          </ul>
        </TodoContainer>
      </div>
    </Section>
  );
}
