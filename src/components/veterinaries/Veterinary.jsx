import React from 'react'
import { Link } from 'react-router-dom';
import imgVet from '../../assets/imagen-veterinaria.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

const Veterinary = ({deleteVeterinary}) => {

  return (
    <div className='w-9/12 flex items-center justify-center flex-col md:flex-row gap-4 mx-auto p-3 my-5 rounded-md shadow-md bg-white '>
            <div className='w-2/3 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-2 md:mt-0 '>
              <img src={imgVet} alt="nombre de la veterinaria"/>
            </div>
            <div className='w-11/12 mx-auto mt-3 md:mt-0 flex-1'>
              <div>
                <h2 className='font-bold text-lg text-center md:text-left'>CANCUN DOGH GROOMING VETERINARIA</h2>
                <p className='text-sm'>Servicios veterinarios para mascotas prestados por el sector privado</p>
              </div>
              <div className='mt-4 lg:pr-4 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div>
                  <p><span className='font-semibold'>Colonia:</span> SANTA FÉ</p>
                  <p><span className='font-semibold'>CP:</span> 77534</p>
                  <p><span className='font-semibold'>Email:</span> veterinaria@correo.com</p>
                  <p><span className='font-semibold'>Teléfono: </span> 9984320101</p>
                </div>
                <div className='mt-4 lg:mt-0 flex lg:flex-col justify-evenly'>
                <Link to='2'  className='flex flex-col lg:flex-row items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg transition-all duration-300 lg:mb-2'>
                    <FontAwesomeIcon icon={faEye}  className='lg:mr-2'/>
                    Ver
                  </Link>
                  <Link to='2/edit' type='button' className='flex flex-col lg:flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded-lg transition-all duration-300 lg:mb-2'>
                    <FontAwesomeIcon icon={faPencil}  className='lg:mr-2'/>
                    Editar
                  </Link>
                  <button type='button' className='flex flex-col lg:flex-row items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg transition-all duration-300' onClick={deleteVeterinary}>
                    <FontAwesomeIcon icon={faTrash}  className='lg:mr-2'/>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Veterinary