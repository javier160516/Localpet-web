import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/localpet-favicon.svg";
import letras from "../../assets/localpet-letras.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import Avatar from 'react-avatar';
import clienteAxios from "../../config/axios";

const Navigation = () => {
  const [nav, setNav] = useState(true)
  const { signOff } = useAuth();
  const [styles, setStyles] = useState('fixed left-[-150%]');
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      const token = localStorage.getItem('localtoken');
      if (token !== null) {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const response = await clienteAxios.get('/home', config);
          if(response.data.status == 200){
            setAuth(response.data.user);
          }
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }else{
        setAuth({});
      }
    }
    obtenerDatos();
  }, []);

  const handleNav = () => {
    setNav(!nav)
    if(nav){
      setStyles('uppercase fixed left-0 top-0 w-[50%] h-full bg-orange-500 ease-in-out duration-500 md:hidden z-50');
    }else{
      setStyles('fixed left-[-150%]')
    }
  }

  const closeSesion = () => {
    signOff();
    setAuth({})
  }

  return (
    <div className="flex justify-between bg-[#E5E9F2] ">
      <Link to="/" className="ml-6">
        <div className="flex items-center py-2">
          <img src={logo} alt="logo-locatpet" width={80}/>
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
                <Link to="/" className="hover:text-orange-400 font-medium transition-all duration-200 text-center">
                  Buscar veterinaria
                </Link>
              </li>
              <li className="flex">
                <Link to="/sobre-nosotros" className="hover:text-orange-500 font-medium transition-all duration-200 text-center">
                  Sobre Nosotros
                </Link>
              </li>
              {Object.keys(auth).length > 0 ? (
                <div className="">
                  <div className="dropdown inline-block relative">
                    <button className="transition-all duration-200 hover:text-orange-500 mx-3 rounded-full md:ml-0 md:mr-0 inline-flex items-center">
                      <div>
                        <span className="ml-2 font-semibold uppercase">Javier Delgado</span>
                      </div>
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden shadow-lg bg-orange-500 rounded-md w-full">
                      <li className=""><a className="transition-all duration-300 rounded-t-md hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                      <li className=""><a className="transition-all duration-300 rounded-t hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                      <li className="">
                        <button className="w-full transition-all duration-300 rounded-b-md hover:bg-orange-400 text-white py-2 px-4 block whitespace-no-wrap" type="button" onClick={() => closeSesion()}>
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
                    <Link to="/registarse" className="text-white">
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
                <Link to={'/'} className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Inicio</Link>
              </li>
              <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to={'/'} className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">Encontar veterinaria</Link>
              </li>
              <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                <Link to={'/'} className="hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2">About Us</Link>
              </li>
              {Object.keys(auth).length > 0 ? (
                <div>
                  <li className='text-white hover:bg-white hover:cursor-pointer transition-all duration-200'>
                    <button className="uppercase hover:text-orange-600 block p-4 transition-all duration-300 hover:transform hover:translate-x-2" onClick={() => closeSesion()}>Cerrar Sesión</button>
                  </li>
                </div>
              ): (
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