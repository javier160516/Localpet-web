import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div>
            <h1>Desde Olvidé mi contraseña</h1>
            <Link to="/login">
                ¿Ya tienes una cuenta? Inicia Sesión
            </Link>
            <Link to="/register">
                ¿No tienes una cuenta? Registrate
            </Link>
        </div>
    )
}

export default ForgotPassword