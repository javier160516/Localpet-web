import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import inciosesion from '../assets/iniciarsesion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';
import Loader from '../helpers/Loader';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [messageError, setMessageError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('localtoken');
    if (token) {
      return navigate('/');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await clienteAxios.post(`/login`,
        {
          email: email,
          password: password
        });
      if (data.status == 200) {
        localStorage.setItem('localtoken', data.token);
        setAuth(data)
        navigate('/');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response.data.status == 400) {
        setEmailError(error.response.data.errors.email);
        setPasswordError(error.response.data.errors.password);
      } else if (error.response.data.status == 404) {
        setMessageError(error.response.data.msg);
        setTimeout(() => {
          setMessageError('');
        }, 3000);
      } else if (error.response.data.status == 403) {
        setMessageError(error.response.data.msg);
        setTimeout(() => {
          setMessageError('');
        }, 3000);
      }
    }
  }

  return (
    <div className='h-screen py-5 bg-slate-300 flex justify-center items-center'>
      <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl px-10 py-5' >
        <div className='flex justify-center'>
          <img src={inciosesion} alt="Logo localpet" width={100} loading="lazy" />
        </div>
        {messageError ? (<p className='w-full py-2 px-3 bg-red-600 text-white text-center'>{messageError}</p>) : null}
        <form action="" method="post" className='py-5' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" className='block ml-2 mb-1 text-sm '>Correo Electrónico</label>
            <input
              className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
              type='email'
              id="email"
              name="email"
              placeholder='Email...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {emailError ? <p className='ml-2 text-xs text-red-500 mt-2'>{emailError}</p> : null}
          </div>
          <div className='mb-6'>
            <label htmlFor="password" className='block ml-2 mb-1 text-sm '>Contraseña</label>
            <div className='relative'>
              <input
                className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder='Contraseña...'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-2 outline-none'>
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />

                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>
            {passwordError ? (<p className='ml-2 text-xs text-red-500 mt-2'>{passwordError}</p>) : null}
          </div>
          {loading ? (
            <Loader />
          ) : null}
          <div className='flex justify-center mt-5'>
            <button type='submit' className='hover:bg-orange-700 transition-all duration-300 bg-orange-500 px-8 py-1 rounded-xl text-white font-bold'>Iniciar Sesión</button>
          </div>
          <div>
            <Link className='hover:text-blue-600 transition-all duration-300 text-xs block text-center mt-4' to="/register">
              ¿No tienes cuenta?, Registrate
            </Link>
            <Link className='hover:text-blue-600 transition-all duration-300 text-xs block text-center mt-1' to="/forgot-password">
              ¿Olvidaste tu contraseña?, Recuperala
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Login