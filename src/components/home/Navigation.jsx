import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/localpet-favicon.svg";
import letras from "../../assets/localpet-letras.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket, faXmark, faGear, faShop } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import clienteAxios from "../../config/axios";

const Navigation = () => {
  const [nav, setNav] = useState(true)
  const { signOff, auth, setAuth } = useAuth();
  const [styles, setStyles] = useState('fixed left-[-150%]');

  const handleNav = () => {
    setNav(!nav)
    if (nav) {
      setStyles('uppercase fixed left-0 top-0 w-[50%] h-full bg-orange-500 ease-in-out duration-500 md:hidden z-50');
    } else {
      setStyles('fixed left-[-150%]')
    }
  }

  const closeSesion = () => {
    setAuth({})
    signOff();
  }

  return (
    <div className="flex justify-between bg-[#E5E9F2] ">
      <Link to="/" className="ml-6">
        <div className="flex items-center py-2">
          <img src={logo} alt="logo-locatpet" width={80} />
          <p className="font-AkayaKanadaka ml-4 text-2xl text-orange-500 font-bold tracking-wider">Localpet</p>
        </div>
      </Link>
      <div className=" w-full flex justify-end px-4 items-center">
        <nav>
          <div onClick={handleNav} className='block md:hidden hover:cursor-pointer h-6'>
            {nav ? <FontAwesomeIcon icon={faBars} className='h-full' /> : <FontAwesomeIcon icon={faXmark} className='h-full' />}
          </div>

          <div>
            <ul className="hidden md:flex gap-5 items-center uppercase">
              <li className="flex">
                <Link to="/buscar-veterinaria" className="hover:text-orange-400 font-medium transition-all duration-200 text-center">
                  Buscar veterinaria
                </Link>
              </li>
              <li className="flex">
                <Link to="/sobre-nosotros" className="hover:text-orange-500 font-medium transition-all duration-200 text-center">
                  Sobre Nosotros
                </Link>
              </li>
              {auth?.user?.id ? (
                <div className="flex gap-4">
                  <li className="flex">
                      <Link to="/registrar-veterinaria" className="hover:text-orange-500 font-medium transition-all duration-200 text-center">
                        Registrar Veterinaria
                      </Link>
                    </li>
                  <div className="dropdown inline-block relative">
                    <button className="transition-all duration-200 hover:text-orange-500 mx-3 rounded-full md:ml-0 md:mr-0 inline-flex items-center">
                      <div>
                        <span className="ml-2 font-semibold uppercase">{auth.user.name} {auth.user.last_name}</span>
                      </div>
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden shadow-lg bg-orange-500 rounded-md w-44 capitalize right-0 z-[9999]">
                      <li className="">
                        <NavLink to='panel/mis-veterinarias' className='transition-all duration-300 rounded-t-md hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap'>
                          Mis Veterinarias
                          <FontAwesomeIcon icon={faShop} className='ml-2' />
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink className="transition-all duration-300 rounded-t-md hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap" to='/panel'>
                          Ajustes
                          <FontAwesomeIcon icon={faGear} className='ml-2' />
                        </NavLink>
                      </li>
                      <li className="">
                        <button className="w-full text-left transition-all duration-300 rounded-t-md hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap" type="button" onClick={() => closeSesion()}>
                          Cerrar Sesión
                          <FontAwesomeIcon icon={faRightFromBracket} className='ml-2' />
                        </button>
                      </li>
                    </ul>
                  </div>

                </div>
              ) : (
                <div className="flex items-center justify-center gap-5">
                  <li className="flex">
                    <Link to="/iniciar-sesion" className="hover:text-orange-500 font-medium transition-all duration-200 text-center">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li className="bg-orange-400 shadow-inner rounded-lg p-2 hover:bg-orange-500 transition-all duration-300">
                    <Link to="/registrarse" className="text-white">
                      Registrate
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </nav>

        <div>
          <nav className={styles}>
            <Link to="/" className="ml-6 flex mt-4 items-center justify-center">
              <img src={logo} alt="logo-locatpet" width={80} />
              <img src={letras} alt='localpet' width={90} />
            </Link>
            <ul className='pt-5'>
              <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to='/' className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Inicio</Link>
              </li>
              <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to='buscar-veterinaria' className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Buscar veterinaria</Link>
              </li>
              {Object.keys(auth).length > 0 && (
                <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to='registrar-veterinaria' className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Registrar Veterinaria</Link>
              </li>
              )}
              <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to='sobre-nosotros' className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Sobre Nosotros</Link>
              </li>
              {Object.keys(auth).length > 0 ? (
                <div>
                  <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                    <button className="uppercase hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2" onClick={() => closeSesion()}>Cerrar Sesión</button>
                  </li>
                </div>
              ) : (
                <div>
                  <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                    <Link to={'/iniciar-sesion'} className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Iniciar Sesión</Link>
                  </li>
                  <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                    <Link to={'/registrarse'} className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Registrarse</Link>
                  </li>
                </div>
              )
              }
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;