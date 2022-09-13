import React from 'react';
import localpet from '../assets/localpet.png'

const ForgotPassword = () => {
    return (
      <div className='h-screen py-5 bg-slate-300 flex justify-center items-center'>
        <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl px-10 py-5' >
          <div className='flex justify-center'>
          <img src={localpet} alt="" width={100}/>
          </div>
          <div className='flex justify-center font antialiased font-bold text-xl mt-10'>
            <h1>Restablece tu contraseña</h1>
          </div>
          <form action="" method="post" className='py-5'>
            <div className='mb-3'>
              <label for="name" className='block ml-2 mb-1 text-sm '>Correo Electronico</label>
              <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
            </div>
            <div className='flex justify-center mt-2'>
            <button type='submit' className='hover:bg-orange-700 transition-all duration-300 bg-orange-500 px-8 py-1 rounded-xl text-white font-bold '>Enviar</button>
          </div>
          </form>
        </div>
      </div>
    )
  }
  
export default ForgotPassword