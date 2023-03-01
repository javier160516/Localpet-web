import React, { useEffect, useState } from 'react';
import ModalRol from '../../components/roles/ModalRol';

import 'tw-elements';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
const Roles = () => {
  document.title = 'Localpet | Roles'
  const [roles, setRoles] = useState({});

  useEffect(() => {
    getRoles();
  }, [])

  const getRoles = async () => {
    const token = localStorage.getItem('localtoken');
    if (!token) {
      setLoading(false);
      return;
    }
    const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
      }
  }
    try {
      const response = await clienteAxios.get('/roles', config);
      if (response.status == 200) {
        setRoles(response.data.roles);
      }
    } catch (error) {
      Swal.fire('Lo sentimos', 'Hubo un error', 'error')
    }
  }
  return (
    <div>
      <ModalRol />
      <div className='w-10/12 mx-auto'>
        <table className='min-w-full border border-gray-300 text-center'>
          <thead className='border-b border-b-gray-300 bg-orange-500'>
            <tr>
              <th className="text-md font-bold text-white px-6 py-4 border-r">id</th>
              <th className="text-md font-bold text-white px-6 py-4 border-r">Nombre</th>
              <th className="text-md font-bold text-white px-6 py-4 border-r">Fecha Creación</th>
            </tr>
          </thead>
          <tbody>
            {roles ? Object.values(roles).map((rol, i) => (
              <tr className='border-b' key={i}>
                <td className='text-md font-bold text-gray-900 px-6 py-4 border-r'>{rol.id}</td>
                <td className='text-md text-gray-900 px-6 py-4 border-r'>{rol.name}</td>
                <td className='text-md text-gray-900 px-6 py-4 border-r'>{rol.createdAt.substring(0, 10)}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Roles