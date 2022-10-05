import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const AuthLayout = () => {
  const {auth, setAuth, loading} = useAuth();
  if(loading) return 'Cargando...';
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default AuthLayout