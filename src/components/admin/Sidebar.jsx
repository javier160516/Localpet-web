import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/localpet-favicon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faHome, faUsers, faHouseMedical, faHistory, faTable, faBookOpen, faBookMedical, faPaw, faCircleUser, faFolderOpen, faFolderBlank, faFolderTree, faSyringe, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ showSidebar, styles, setStyles }) => {
  const { signOff } = useAuth();
  const [auth, setAuth] = useState({});

  const navigate = useNavigate()

  const closeSesion = () => {
    signOff();
    setAuth({});
    navigate('/');
  }

  return (
    <div className={styles}>
      <div className='flex flex-col justify-between h-screen'>
        <div>
          <div className='border-b border-b-white w-full'>
            <div className='px-3 w-1/2 mx-auto my-4'>
              <img src={logo} alt="logo-localpet" className='' />
            </div>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              to={'/panel/registrar-veterinaria'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faHome} className='mr-2' />
              Añadir veterinaria
            </Link>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              to={'mis-veterinarias/registrar-veterinaria'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faHouseMedical} className='mr-2' />
              Mis veterinarias
            </Link>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              to={'historial'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faPaw} className='mr-2' />
              Mis mascotas
            </Link>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              // to={'users'} esta será la ruta cuando users este en funcionamiento
              to={'/panel'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faUsers} className='mr-2' />
              Usuarios
            </Link>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              to={'vacunas'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faSyringe} className='mr-2' />
              Vacunas
            </Link>
          </div>
          <div className='text-white transition-all duration-200'>
            <Link
              to={'Nuevos_eventos'}
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
              Eventos
            </Link>
          </div>
        </div>
        <div>
        <div className='border-b border-b-white w-full'>
            <div className='px-3 w-1/2 mx-auto my-4'>
            </div>
          </div>
          <div className='text-white transition-all duration-200'>
            <NavLink
              to='/'
              className='block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              Ir al inicio
              <FontAwesomeIcon icon={faHome} className='ml-2' />
            </NavLink>
          </div>
          <div className='text-white transition-all duration-200 mb-4'>
            <button
              onClick={() => {
                closeSesion()
              }}
              className='text-left block w-full py-3 px-3 hover:font-bold hover:pl-5 hover:bg-slate-100 hover:text-orange-500 transition-all duration-300'>
              Cerrar Sesión
              <FontAwesomeIcon icon={faRightFromBracket} className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar