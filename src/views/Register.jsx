import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import registro from '../assets/registro.png'
import clienteAxios from '../config/axios';
import Loader from '../helpers/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ value: '', error: '' });
  const [lastName, setLastName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await clienteAxios.post('/register', {
        name: name.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        confirm_password: confirmPassword.value
      });
      setLoading(false);
      if (response.data.status == 201) {
        Swal.fire({
          title: response.data.msg,
          text: 'Hemos enviado un email con las instrucciones',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            voidFomr()
          }
        })
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status == 400) {
        setName({ ...name, error: error.response.data.errors.name });
        setLastName({ ...lastName, error: error.response.data.errors.last_name });
        setEmail({ ...email, error: error.response.data.errors.email });
        setPassword({ ...password, error: error.response.data.errors.password });
        setConfirmPassword({ ...confirmPassword, error: error.response.data.errors.confirm_password });
      } else if (error.response.data.status == 403) {
        Swal.fire('¡Error!', error.response.data.msg, 'error');
      }
    }
  }

  const voidFomr = () => {
    setName({ value: '', error: '' });
    setLastName({ value: '', error: '' })
    setEmail({ value: '', error: '' })
    setPassword({ value: '', error: '' })
    setConfirmPassword({ value: '', error: '' })
    setShowPassword(false);
    setShowConfirmPassword(false);
  }
  return (
    <div className='py-5 bg-slate-300 flex justify-center items-center h-screen'>
      <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl px-10 py-5' >
        <div className='flex justify-center'>
          <img src={registro} alt="" width={100} />
        </div>
        <form id='form' action="" method="post" className='py-5' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name" className='block ml-2 mb-2 text-sm font-semibold'>Nombre</label>
            <div>
              <input
                className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                type='text'
                id="name"
                name="name"
                placeholder='Escribe tu nombre...'
                value={name.value}
                onChange={(e) => setName({ value: e.target.value, error: '' })}
              />
              {name.error ? (
                <p className='text-red-500 text-xs ml-2 mt-1'>{name.error}</p>
              ) : null}
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="last_name" className='block ml-2 mb-2 text-sm font-semibold'>Apellido</label>
            <div>
              <input
                className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                type='text'
                id="last_name"
                name="last_name"
                placeholder='Escribe tu apellido...'
                value={lastName.value}
                onChange={(e) => setLastName({ value: e.target.value, error: '' })}
              />
              {lastName.error ? (
                <p className='text-red-500 text-xs ml-2 mt-1'>{lastName.error}</p>
              ) : null}
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='block ml-2 mb-2 text-sm font-semibold'>Correo Electronico</label>
            <div>
              <input
                className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                type='email'
                id="email"
                name="email"
                placeholder='Escribe tu Email...'
                value={email.value}
                onChange={(e) => setEmail({ value: e.target.value, error: '' })}
              />
              {email.error ? (
                <p className='text-red-500 text-xs ml-2 mt-1'>{email.error}</p>
              ) : null}
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='block ml-2 mb-2 text-sm font-semibold'>Contraseña</label>
            <div>

              <div className='relative'>
                <input
                  className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder='Escribe tu contraseña...'
                  value={password.value}
                  onChange={(e) => setPassword({ value: e.target.value, error: '' })}
                />
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-2 outline-none'>
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />

                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </button>
              </div>
              {password.error ? (
                <p className='text-red-500 text-xs ml-2 mt-1'>{password.error}</p>
              ) : null}
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="confirm_password" className='block ml-2 mb-2 text-sm font-semibold'>Confirmar Contraseña</label>
            <div>
              <div className='relative'>
                <input
                  className='w-full focus:border-orange-500 focus:outline-none p-2 border-solid border border-gray-300 rounded-3xl text-sm'
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirm_password"
                  name="confirm_password"
                  placeholder='Repete tu contraseña...'
                  value={confirmPassword.value}
                  onChange={e => setConfirmPassword({ value: e.target.value, error: '' })}
                />
                <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-3 top-2 outline-none'>
                  {showConfirmPassword ? (
                    <FontAwesomeIcon icon={faEye} />

                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </button>
              </div>
              {confirmPassword.error ? (
                <p className='text-red-500 text-xs ml-2 mt-1'>{confirmPassword.error}</p>
              ) : null}
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : null}
          <div className='flex justify-center mt-8'>
            <button type='submit' className='hover:bg-orange-700 transition-all duration-300 bg-orange-500 px-8 py-1 rounded-xl text-white font-bold '>Registrar</button>
          </div>
         
          <div>
          <Link className='hover:text-blue-600  transition-all duration-300 text-xs block text-center mt-4' to="/login">
            ¿Ya tienes cuenta?, Inicia Sesión    
        </Link>
        <Link to="/addvet">Agregar Veterinaria</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register