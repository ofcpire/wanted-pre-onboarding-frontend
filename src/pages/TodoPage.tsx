import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../lib/utils/token';
import TodoMain from '../components/todo/TodoMain';
import { getData } from '../lib/api/api';

export default function TodoPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoObj[]>([]);

  useEffect(() => {
    if (getToken()) getNewTodos();
    else navigate('/signin');
  }, []);

  const getNewTodos = (callback?: () => {}) => {
    getData('todos')
      .then((data) => setTodos(data))
      .catch(() => {
        if (callback) callback();
      });
  };

  return <TodoMain todos={todos} getNewTodos={getNewTodos} />;
}
