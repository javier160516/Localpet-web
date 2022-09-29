import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
import ConfirmAccount from './views/ConfirmAccount';
import ForgotPassword from './views/ForgotPassword';
import ConfirmResetPassword from './views/ConfirmResetPassword';
import { AuthProvider } from './context/AuthProvider';
import AboutUs from './views/AboutUs';
import AdminVeterinary from './views/adminVeterinary';
import RouteProtected from './layout/RouteProtected';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<AuthLayout />} >
            <Route index element={<Home />} />
            <Route path='sobre-nosotros' element={<AboutUs />} />
            <Route path='iniciar-sesion' element={<Login />} />
            <Route path='registrarse' element={<Register />} />
            <Route path='confirm/:token' element={<ConfirmAccount />}/>
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='forgot-password/:token' element={<ConfirmResetPassword />}/>
          </Route>
          <Route path='/admin' element={<RouteProtected />}>
            <Route index element={<AdminVeterinary />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
