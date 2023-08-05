import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TodoPage from './pages/TodoPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/signin' element={<SigninPage/>} />
      <Route path='/todo' element={<TodoPage/>} />
    </Routes>
  );
}

export default App;
