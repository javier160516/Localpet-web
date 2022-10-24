import React from 'react';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
import ConfirmAccount from './views/ConfirmAccount';
import ForgotPassword from './views/ForgotPassword';
import ConfirmResetPassword from './views/ConfirmResetPassword';
import { AuthProvider } from './context/AuthProvider';
import AboutUs from './views/AboutUs';
import AdminVeterinary from './views/AdminVeterinary';
import RouteProtected from './layout/RouteProtected';
import Veterinaries from './views/admin/Veterinaries';
import Roles from './views/admin/Roles';
import VeterinaryDetail from './views/admin/VeterinaryDetail';
import SearchVeterinary from './views/SearchVeterinary';
import AddVet from './views/AddVet';
import NewVeterinary from './views/NewVeterinary';
import VeterinaryComments from './views/admin/VeterinaryComments';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<AuthLayout />} >
            <Route index element={<Home />} />
            <Route path='buscar-veterinaria' element={<SearchVeterinary />} />
            <Route path='sobre-nosotros' element={<AboutUs />} />
            <Route path='iniciar-sesion' element={<Login />} />
            <Route path='registrarse' element={<Register />} />
            <Route path='confirm/:token' element={<ConfirmAccount />}/>
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='forgot-password/:token' element={<ConfirmResetPassword />}/>
            <Route path='registrar-veterinaria' element={<NewVeterinary/>}/>
          </Route>
          {/* Rutas Privadas */}
          <Route path='/panel' element={<RouteProtected />}>
            <Route index element={<AdminVeterinary />}/>
            <Route path='mis-veterinarias' element={<Veterinaries />}/>
            <Route path='mis-veterinarias/:id' element={<VeterinaryDetail />}/>
            <Route path='mis-veterinarias/edit/:id' element={<VeterinaryDetail />}/>
            <Route path='mis-veterinarias/comentarios' element={<VeterinaryComments />}/>
            <Route path='roles' element={<Roles />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
