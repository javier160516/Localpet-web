import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

const AdminVeterinary = () => {
  document.title = 'Localpet | Inicio'
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faPersonDigging} className='h-72 text-gray-400' />
      <h1 className='text-gray-400 text-3xl font-bold uppercase mt-3'>Estamos trabajando en esta vista</h1>
    </div>
  )
}

export default AdminVeterinary