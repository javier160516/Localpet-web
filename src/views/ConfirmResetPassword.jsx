import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';
import localpet from '../assets/localpet.png'
import Loader from '../helpers/Loader';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ConfirmResetPassword = () => {
  const [token, setToken] = useState(window.location.pathname.split('/')[2]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('localtoken');
    if (token) {
      return navigate('/');
    }
  }, [])

  useEffect(() => {
    const sendToken = async () => {
      try {
        const response = await clienteAxios.get(`/forgot-password/${token}`);
        if (response.data.status == 200) {
          setMessage(response.data.msg);
          setErrorMessage(false);
          setButtonVisible(true);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        if (error.response.data.status == 400) {
          setErrorMessage(true)
          setMessage(error.response.data.msg);
        }
      }
    }
    sendToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading2(true);
    try {
      const response = await clienteAxios.post(`/forgot-password/${token}`, {
        password: password
      });
      if(response.data.status == 200){
        setLoading2(false);
        Swal.fire({
          title: '¡La contraseña ha sido cambiada correctamente!',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iniciar Sesión',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login')
          }
        })
      }
    } catch (error) {
      setLoading2(false);
      if(error.response.data.status == 400){
        setPasswordError(error.response.data.errors.password);
      }
      if(error.response.data.status == 403){
        Swal.fire({
          title: '¡Token no válido!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login')
          }
        })
      }
    }
  }

  return (
    <div className='h-screen py-5 bg-slate-300 flex justify-center items-center'>
      <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl'>
        <div className='py-4 rounded-md mx-4'>
          <div className='flex justify-center'>
            <img src={localpet} alt="" width={100} />
          </div>
          <h1 className={`font-bold text-xl ${loading ? 'text-center mb-4' : 'text-center'}  `}>Olvidé mi contraseña</h1>
          {message ? (
            <p className={`w-full py-2 px-3 ${errorMessage ? 'bg-red-600' : 'bg-green-600'} text-white text-center rounded-md my-4`}>{message}</p>
          ) : null}
          {buttonVisible ? (
            <div className='w-full flex justify-center my-5'>
              <button type='button' onClick={() => {
                setButtonVisible(false)
                setFormVisible(!formVisible)
              }} className='text-center border px-4 rounded-md bg-orange-500 hover:bg-orange-600 text-white py-2'>Cambiar Contraseña</button>
            </div>
          ) : null}

          {formVisible ? (
            <form method='POST' className='mx-7 mt-5' onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label htmlFor="password" className='block ml-2 mb-1 text-sm font-semibold'>Nueva Contraseña</label>
                <div className='relative'>
                  <input
                    className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm font-normal'
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder='Escribe tu nueva contraseña...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1 outline-none'>
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEye} />

                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>
                </div>
                {passwordError ? (<p className='ml-2 text-xs text-red-500 mt-2'>{passwordError}</p>) : null}
              </div>
              {loading2 ? (
                <Loader />
              ) : null}
              <div className='flex justify-end'>
                <button type='submit' className='bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-3 py-2 rounded-md text-sm '>Cambiar Contraseña</button>
              </div>
            </form>
          ) : null}
          {loading ? (
            <Loader />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ConfirmResetPassword