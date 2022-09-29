import React, { useState } from 'react'
import NavSuperior from '../components/admin/NavSuperior'
import Sidebar from '../components/admin/Sidebar'

const AdminVeterinary = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [styles, setStyles] = useState('uppercase left-0 top-0 w-0 md:w-3/12 xl:w-2/12 h-full bg-orange-500 ease-in-out duration-500');

  return (
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
        <h2>hola x2</h2>
      </div>
    </div>
  )
}

export default AdminVeterinary