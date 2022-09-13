import React from 'react'
import { Link } from 'react-router-dom';
import registro from '../assets/registro.png'
const Register = () => {
  return (
    <div className='py-5 bg-slate-300 flex justify-center items-center'>
      <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl px-10 py-5' >
        <div className='flex justify-center'>
        <img src={registro} alt="" width={100}/>
        </div>
        <form action="" method="post" className='py-5'>
          <div className='mb-3'>
            <label for="name" className='block ml-2 mb-1 text-sm '>Nombre</label>
            <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
          </div>
          <div className='mb-3'>
            <label for="name" className='block ml-2 mb-1 text-sm '>Apellido</label>
            <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
          </div>
          <div className='mb-3'>
            <label for="name" className='block ml-2 mb-1 text-sm '>Correo Electronico</label>
            <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
          </div>
          <div className='mb-3'>
            <label for="name" className='block ml-2 mb-1 text-sm '>Contraseña</label>
            <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
          </div>
          <div className='mb-3'>
            <label for="name" className='block ml-2 mb-1 text-sm '>Confirmar Contraseña</label>
            <input className='p-1 w-full focus:border-orange-500 focus:outline-none px-2 border-solid border border-gray-300 rounded-3xl' type='text' id="name" name="name"></input>
          </div>
          <div className='flex justify-center mt-10'>
            <button type='submit' className='hover:bg-orange-700 transition-all duration-300 bg-orange-500 px-8 py-1 rounded-xl text-white font-bold '>Registrar</button>
          </div>
          <div>
          <Link className='hover:text-blue-600  transition-all duration-300 text-xs block text-center mt-4' to="/login">
            ¿Ya tienes cuenta?, Inicia Sesión    
        </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register