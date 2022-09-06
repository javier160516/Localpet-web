import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';

function App() {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route path='/' element={<AuthLayout />} >
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App
