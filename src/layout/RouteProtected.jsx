import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RouteProtected = () => {
    const {auth, setAuth, loading} = useAuth();

    if(loading) return 'Cargando...';
  return (
    <>
        {auth.user?.id ? (
            <main>
            <Outlet /> 
            </main>
        ): <Navigate to='/' />}
    </>
  )
}

export default RouteProtected