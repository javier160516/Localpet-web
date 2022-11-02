import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import registro from '../assets/registro.png'
import clienteAxios from '../config/axios';
import Loader from '../helpers/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

/** FRONTEND **/
// Función principal de la vista "Registro"
const Register = () => {
  /** DATOS DE ENTRADA **/
  // Se crean los states de de cada campo a enviar hacia el backend
  // Estado que contiene variable y funcion que contienen un valor y error del nombre
  const [name, setName] = useState({ value: '', error: '' });
    // Estado que contiene variable y funcion que contienen un valor y error del apellido
  const [lastName, setLastName] = useState({ value: '', error: '' });
    // Estado que contiene variable y funcion que contienen un valor y error del email
  const [email, setEmail] = useState({ value: '', error: '' });
    // Estado que contiene variable y funcion que contienen un valor y error de la contraseña
  const [password, setPassword] = useState({ value: '', error: '' });
    // Estado que contiene variable y funcion que contienen un valor y error del repetir contraseña
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

  /** Estados para hacer interacción con el usuario **/
  //cuando se envia el formulario este estado hace que un loader se active para que el 
  //usuario sepa que se está procesando la información
  const [loading, setLoading] = useState(false);
  //Estado donde si se le da click a un icono que está en la vista se puede visualizar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  //Estado donde si se le da click a un icono que está en la vista se puede visualizar la contraseña confirmada
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Al enviar el formulario se ejecuta esta funcion asincrona
  const handleSubmit = async () => {
    // Se evita que la página se recargue
    event.preventDefault();
    // Se cambia el estado del loader
    setLoading(true);
    try {
      // Se hace una petición post para mandar los datos introducidos 
      // y asi el backend los recibe
      const response = await clienteAxios.post('/register', {
        name: name.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        confirm_password: confirmPassword.value
      });
      setLoading(false);
      // Si la petición sale correcta (201) se muestra una alerta de que todo salió correctamente 
      if (response.data.status == 201) {
        // Notificación en forma de modal donde se le pasan los parámetros de titulo, un texto extra y el icono
        Swal.fire({
          title: response.data.msg,
          text: 'Hemos enviado un email con las instrucciones',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#EA580C',
        }).then((result) => {
          //Cuando se le dá "OK" a la notificación, el formulario se vacia
          if (result.isConfirmed) {
            voidFomr()
          }
        })
      }
    } catch (error) {
      // Si hay algún error se válida que tipo de error es
      // dependiendo del tipo de error es la acción que se hará
      setLoading(false);
      if (error.response.status == 400) {
        // Si el nombre está vacio la el backend manda un mensaje y se le pone a la vista del usuario
        setName({ ...name, error: error.response.data.errors.name });
        // Si el apellido está vacio la el backend manda un mensaje y se le pone a la vista del usuario
        setLastName({ ...lastName, error: error.response.data.errors.last_name });
        // Si el email está vacio la el backend manda un mensaje y se le pone a la vista del usuario
        setEmail({ ...email, error: error.response.data.errors.email });
        // Si la contraseña está vacia la el backend manda un mensaje y se le pone a la vista del usuario
        setPassword({ ...password, error: error.response.data.errors.password });
        // Si la confirmación de la contraseña está vacio la el backend manda un mensaje y se le 
        // pone a la vista del usuario
        setConfirmPassword({ ...confirmPassword, error: error.response.data.errors.confirm_password });
        // Si el error que arroja el backend es 403 (Forbidden) 
      } else if (error.response.data.status == 403) {
        // Se manda una notificación diciendo que el usuario ya está registrado
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
          <div className='mt-2'>
            <Link className='hover:text-orange-500  transition-all duration-300 text-xs block text-center mt-4' to="/iniciar-sesion">
              ¿Ya tienes cuenta?, Inicia Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register