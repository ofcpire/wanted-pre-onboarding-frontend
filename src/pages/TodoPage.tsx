import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../lib/utils/token';
import TodoMain from '../components/todo/TodoMain';
import { getData } from '../lib/api/api';
import { Main } from '../styles/mainStyle';

export default function TodoPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoObj[]>([]);

  useEffect(() => {
    if (getToken()) getNewTodos(loginErrorCallback);
    else navigate('/signin');
  }, []);

  const getNewTodos = (callback?: () => void) => {
    getData('todos')
      .then((data) => setTodos(data))
      .catch(() => {
        if (callback) callback();
      });
  };

  const loginErrorCallback=()=>{
    removeToken();
    alert('세션이 유효하지 않습니다. 다시 로그인해주세요.');
    navigate('/');
    window.location.reload();
  }

  return (
  <Main>
    <TodoMain todos={todos} getNewTodos={getNewTodos} />
  </Main>
  )
}
