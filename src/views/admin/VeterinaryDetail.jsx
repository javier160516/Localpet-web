import React from 'react'
import imgVet from '../../assets/imagen-veterinaria.png';

const VeterinaryDetail = () => {
  return (
    <div className='overflow-y-auto h-full'>
      <div className='w-8/12 bg-white shadow-md rounded-md mx-auto my-10 p-3 overflow-y-auto'>
        <h1 className='text-xl font-bold text-center my-4 uppercase'>Mi veterinaria</h1>
        <div className='flex justify-center w-10/12 mx-auto h-40'>
          <img src={imgVet} alt="veterinaria" className='max-w-none h-auto' />
        </div>
        <div>
          <form className='w-10/12 mx-auto'>
            <div className='my-5 text-center'>
              <label className='font-bold'>Nombre</label>
              <p className='bg-gray-100 rounded-md py-1'>Centro Animal Veterinario</p>
            </div>
            <div className='text-center'>
              <label className='font-bold'>Clase de Actividad</label>
              <p className='bg-gray-100 rounded-md py-1 px-2'>Veterinaria</p>
            </div>
            <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
              <div className='flex-1'>
                <label className='font-bold'>Correo Electrónico</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>veterinaria@gmail.com</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>Teléfono</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>9983394030</p>
              </div>
            </div>
            <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
              <div className='flex-1'>
                <label className='font-bold'>No Ext</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>7</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>No Int</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>6</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>Código Postal</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>77500</p>
              </div>
            </div>
            <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
              <div className='flex-1'>
                <label className='font-bold'>Colonia</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>Ejemplo colonia</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>Calle</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>Ejemplo calle</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>Ubicación</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>Quintana Roo</p>
              </div>
            </div>
            <div className='flex flex-col my-2 md:my-4 md:py-3 justify-between md:flex-row gap-4 text-center'>
              <div className='flex-1'>
                <label className='font-bold'>Página Web</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>www.veterinaria.com</p>
              </div>
              <div className='flex-1'>
                <label className='font-bold'>Número de Local</label>
                <p className='bg-gray-100 rounded-md py-1 px-2'>#4</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VeterinaryDetail