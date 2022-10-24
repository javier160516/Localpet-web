import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import Veterinary from '../../components/veterinaries/Veterinary';
import clienteAxios from '../../config/axios'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Adsense from 'react-adsense';

const Veterinaries = () => {
  document.title = 'Localpet | Mis Veterinarias'
  const [veterinaries, setVeterinaries] = useState([])
  useEffect(() => {
    getVeterinaries();
  }, []);

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

  const getVeterinaries = async () => {
    try {
      const response = await clienteAxios.get(`/panel/veterinaries`, config);
      if (response.data.status == 200) {
        setVeterinaries(response.data.veterinaries)
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  const deleteVeterinary = (id) => {
    Swal.fire({
      title: '¿Deseas eliminar esta veterinaria?',
      text: "Si eliminas esta veterinaria no se podrá recuperar",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await clienteAxios.delete(`/veterinary/${id}`, config);
          if (response.status == 200) {
            Swal.fire('Veterinaria eliminada correctamente', '', 'success');
            setVeterinaries(veterinaries.filter(vet => vet.id !== id ? vet : null));
          }
        } catch (error) {
          Swal.fire(`${error.response.data.msg}`, '', 'error');
        }
      }
    })
  }
  return (
    <div className='h-full overflow-y-auto'>
      <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Mis Veterinarias</h1>
      {veterinaries.length > 0 ? (
        veterinaries.map(vet => (
          <Veterinary
            key={vet.id}
            vet={vet}
            deleteVeterinary={deleteVeterinary}
          />
        ))
      ) : (
        <div className='h-5/6 flex justify-center items-center flex-col flex-1'>
          <FontAwesomeIcon icon={faFaceFrownOpen} className="text-6xl text-gray-500 mb-4"/>
          <h2 className='text-gray-500 font-bold text-3xl uppercase'>No hay veterinarias registradas</h2>
        </div>
      )}

    </div>
  )
}

export default Veterinaries