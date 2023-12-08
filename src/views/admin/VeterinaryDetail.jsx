import React from 'react'
import imgVet from '../../assets/imagen-veterinaria.png';
import { useEffect } from 'react';
import { useState } from 'react';
import clienteAxios from '../../config/axios';
import { getConfig } from '../../utils/utils';
import noAvailable from '../../assets/imagen-no-disponible.jpg'


const VeterinaryDetail = () => {
  const [veterinaries, setVeterinaries] = useState([]);

  useEffect(() => {
    getVeterinaries();
  }, [])

  const getVeterinaries = async () => {
    try {
      const veterinaries = await clienteAxios.get('/veterinary', getConfig());
      console.log(veterinaries.data)
      JSON.stringify(veterinaries.data);

      setVeterinaries(veterinaries.data.veterinaries);
    } catch (error) {
      setVeterinaries([]);
    }
  }


  return (
    <div className='overflow-y-auto h-full'>
      {veterinaries.map((veterinary, key) => (
      <div className='w-8/12 bg-white shadow-md rounded-md mx-auto my-10 p-3 overflow-y-auto' key={key}>
      <h1 className='text-xl font-bold text-center my-4 uppercase'>Mi veterinaria #{key+1}</h1>
      <div className='flex justify-center w-10/12 mx-auto h-40'>
        {veterinary.imgUrl ? (
          <img src={veterinary.imgUrl} alt="veterinaria" className='max-w-none h-auto' />
        ) : (
          <img src={noAvailable} alt="veterinaria" className='max-w-none h-auto'/>
        )}
      </div>
      <div>
        <form className='w-10/12 mx-auto'>
          <div className='my-5 text-center'>
            <label className='font-bold'>Nombre</label>
            <p className='bg-gray-100 rounded-md py-1'>{veterinary.name}</p>
          </div>
          <div className='text-center'>
            <label className='font-bold'>Clase de Actividad</label>
            <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.class_activity}</p>
          </div>
          <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
            <div className='flex-1'>
              <label className='font-bold'>Correo Electrónico</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.email}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>Teléfono</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.phone_number}</p>
            </div>
          </div>
          <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
            <div className='flex-1'>
              <label className='font-bold'>No Ext</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.no_ext ? veterinary.no_ext: 'S/N'}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>No Int</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.no_int ? veterinary.no_int : 'S/N'}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>Código Postal</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.code_postal}</p>
            </div>
          </div>
          <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
            <div className='flex-1'>
              <label className='font-bold'>Colonia</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.colony}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>Calle</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.street}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>Ubicación</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.ubitation}</p>
            </div>
          </div>
          <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
            <div className='flex-1'>
              <label className='font-bold'>Página Web</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.website ? veterinary.website : 'Sin página web'}</p>
            </div>
            <div className='flex-1'>
              <label className='font-bold'>Número de Local</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>S/N</p>
            </div>
          </div>
        </form>
      </div>
    </div>
      ))}

      {veterinaries.length == 0 && (
        <h4 className="text-gray-500 font-bold">No hay veterinarias disponibles</h4>
      )}
    </div>
  )
}

export default VeterinaryDetail