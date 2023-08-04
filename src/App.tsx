import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignupPage></SignupPage>} />
      <Route path='/signin' element={<SigninPage></SigninPage>} />
      <Route path='/todo' element={<TodoPage></TodoPage>} />
    </Routes>
  );
}

export default App;
