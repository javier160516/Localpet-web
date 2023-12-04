import React, { useState, useEffect } from 'react';
import localpet from '../assets/localpet-favicon.svg'
import Swal from 'sweetalert2';
import Loader from '../helpers/Loader';
import clienteAxios from '../config/axios';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('localtoken');
    if (token) {
      return navigate('/');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await clienteAxios.post('/forgot-password', {email: email});
      if(response.data.status == 200){
        setLoading(false);
        Swal.fire(response.data.title, response.data.msg, 'success');
        setEmail('');
      }
    }catch(error){
      setLoading(false);
      if(error.response.data.status == 400){
        setEmailError(error.response.data.errors.email);
      }else if(error.response.data.status == 404){
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
          <img src={localpet} alt="" width={100} />
        </div>
        <div className='flex justify-center items-center'>
          <p className="font-AkayaKanadaka ml-4 text-2xl text-orange-500 font-bold tracking-wider">My Happy Pet</p>
        </div>
        <div className='flex justify-center font antialiased font-bold text-xl mt-10 mb-3'>
          <h1>Restablece tu contraseña</h1>
        </div>
        {messageError ? (<p className='w-full py-2 px-3 bg-red-600 text-white text-center'>{messageError}</p>) : null}
        <form method="post" className='py-5' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label htmlFor="email" className='block ml-2 mb-1 text-sm font-semibold'>Correo Electrónico</label>
            <input
              className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
              type='email'
              id="email"
              name="email"
              placeholder='Escribe tu email...'
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                setEmailError('');
              }}
            />
            {emailError ? <p className='ml-2 text-xs text-red-500 mt-2'>{emailError}</p> : null}
          </div>
          {loading ? (
            <Loader />
          ) : null}
          <div className='flex justify-center mt-2'>
            <button type='submit' className='hover:bg-orange-700 transition-all duration-300 bg-orange-500 px-8 py-2 rounded-xl text-white font-bold '>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword