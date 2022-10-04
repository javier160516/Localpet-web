import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Sidebar from '../components/admin/Sidebar'
import NavSuperior from '../components/admin/NavSuperior'

const RouteProtected = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [styles, setStyles] = useState('left-0 top-0 w-0 hidden md:inline-block md:w-1/3 lg:w-1/5 xl:w-1/4 h-full bg-orange-500 ease-in-out duration-500');
  const { auth, setAuth, loading } = useAuth();

  if (loading) return 'Cargando...';
  return (
    <>
      {auth.user ? (
        <div className='h-screen overflow-y-hidden overflow-x-hidden bg-slate-100 flex'>
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            styles={styles}
            setStyles={setStyles}
          />
          <div className='flex flex-col w-full'>
            <NavSuperior
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              styles={styles}
              setStyles={setStyles}
            />
            <main className='h-full pb-16'>
              <Outlet />
            </main>
          </div>
        </div>
      ) : <Navigate to='/' />}
    </>
  )
}

export default RouteProtected