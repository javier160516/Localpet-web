import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
        <h1>desde Registro</h1>
        <Link to="/login">
            ¿Ya tienes cuenta?, Inicia Sesión    
        </Link>
        <Link to="/forgot-password">
            ¿Olvidaste tu contraseña?, Recuperala    
        </Link>
    </div>
  )
}

export default Register