import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import Veterinary from '../../components/veterinaries/Veterinary';
import clienteAxios from '../../config/axios'

const Veterinaries = () => {
  document.title = 'My Happy Pet | Mis Veterinarias'
  const [veterinaries, setVeterinaries] = useState([])
  useEffect(() => {
    getVeterinaries();
  }, [])

  const getVeterinaries = async () => {
    try {
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
      const response = await clienteAxios.get(`/panel/veterinaries`, config);
      if(response.data.status == 200){
        setVeterinaries(response.data.veterinaries)
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  const deleteVeterinary = () => {
    Swal.fire({
      title: '¿Deseas eliminar esta veterinaria?',
      text: "Si eliminas esta veterinaria no se podrá recuperar",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div className='h-full overflow-y-auto'>
      <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Mis Veterinarias</h1>
      {veterinaries.map(vet => (
        <Veterinary
          key={vet.id}
          vet={vet}
          deleteVeterinary={deleteVeterinary}
        />
      ))}
    </div>
  )
}

export default Veterinaries