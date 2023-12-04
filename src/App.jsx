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
import AdminVeterinary from './views/AdminVeterinary';
import RouteProtected from './layout/RouteProtected';
import Veterinaries from './views/admin/Veterinaries';
import Roles from './views/admin/Roles';
import VeterinaryDetail from './views/admin/VeterinaryDetail';
import SearchVeterinary from './views/SearchVeterinary';
import AddVet from './views/AddVet';
import ProductList from './components/ShoppingCart/ProducList';
import CarnetControl from './views/admin/CarnetControl';
import Voluntary from './views/community/Voluntary';
import Events from './views/community/Events';
import Association from './views/Association/HomeAdop';
import AssocAdoptions from './views/Association/Adoption';
import AssocProcess from './views/Association/Process';
import AssocSuccess from './views/Association/Success';
import Vacum from './views/admin/PetVacum';
import CreateEvent from './views/Association/NewEvent';
import Information from './views/community/Information';

function App() {
  return (
    <BrowserRouter>
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
            <Route path='carrito' element={<ProductList/>}/>
            <Route path='voluntario' element={<Voluntary/>}/>
            <Route path='servicios' element={<Events/>}/>
            <Route path='asociaciones-civiles' element={<Association/>}/>
            <Route path='asociaciones-adopciones' element={<AssocAdoptions/>}/>
            <Route path='asociaciones-procesos' element={<AssocProcess/>}/>
            <Route path='asociaciones-exitos' element={<AssocSuccess/>}/>
            <Route path='informacion' element={<Information/>}/>
          </Route>
          {/* Rutas Privadas */}
          <Route path='/panel' element={<RouteProtected />}>
            <Route index element={<AdminVeterinary />}/>
            <Route path='mis-veterinarias' element={<Veterinaries />}/>
            <Route path='mis-veterinarias/:id' element={<VeterinaryDetail />}/>
            <Route path='mis-veterinarias/:id/edit' element={<VeterinaryDetail />}/>
            <Route path='historial' element={<CarnetControl />}/>
            <Route path='roles' element={<Roles />}/>
            <Route path='registrar-veterinaria' element={<AddVet/>}/>
            <Route path='vacunas' element={<Vacum/>}/>
            <Route path='Nuevos_eventos' element={<CreateEvent/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
