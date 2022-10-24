import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalAddService from './ModalAddService';

const VeterinaryServices = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='my-5'>
      <div className='w-10/12 mx-auto flex justify-between items-center'>
        <h2 className="text-xl text-orange-500 font-bold text-center ">Servicios</h2>
        <button className='bg-orange-500 border shadow-lg rounded-lg hover:bg-orange-600 transition-all duration-300 text-white px-3 py-2 text-sm' onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faPlus} /> { }
          Agregar
        </button>
      </div>
      <div className='w-10/12 mx-auto my-3'>
        <table className='w-full text-center'>
          <thead>
            <tr className='border-b'>
              <th className='p-2'>#</th>
              <th className='p-2'>Servicio</th>
              <th className='p-2'>Precio</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className='hover:bg-gray-200'>
              <td className='py-1'>1</td>
              <td className='py-1'>Baño de perros</td>
              <td className='py-1'>$200</td>
              <td className='py-1'>
                <button type='button' className='mx-3'>
                  <FontAwesomeIcon icon={faTrash} className='text-red-700 hover:text-red-600' />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalAddService 
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default VeterinaryServices