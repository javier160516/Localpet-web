import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <h1>Desde Login</h1>
        <Link to='/register'>
            ¿No tienes cuenta?, Registrate
        </Link>
        <Link to="/forgot-password">
            ¿Olvidaste tu contraseña?, Recuperala
        </Link>
    </div>
  )
}

export default Login