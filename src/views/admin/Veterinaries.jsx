import React from 'react'
import Swal from 'sweetalert2';
import Veterinary from '../../components/veterinaries/Veterinary';

const Veterinaries = () => {
  document.title = 'Localpet | Mis Veterinarias'
  
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
        <Veterinary 
          deleteVeterinary={deleteVeterinary}
        />
    </div>
  )
}

export default Veterinaries