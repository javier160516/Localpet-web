import React from 'react'
import gato from '../../assets/gato.png'
import points from '../../assets/points.svg';

const Second = () => {
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-10/12 bg-slate-50 shadow-md rounded-md py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='flex flex-col justify-center items-center w-10/12'>
          <h2 className='w-full text-center uppercase text-2xl font-bold text-orange-400 mb-5'>¿Necesitas un veterinario para tu mascota?</h2>
          <p className='w-full text-1xl text-justify '>Olvidate de las largas busquedas, <strong> nuestro sistema te permitira encontrar las veterinarias más cercanas a tu ubicación</strong> de manera gratuita, y no solo eso, si no que también podrás saber: </p>
          <ul className='w-full py-3 px-5 mt-4 mb-4 lg:mb-0 list-none'>
            <li className='flex hover:ml-3 transition-all duration-300'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Sus horarios de atención</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Sus precios</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Los servicios que ofrecen</p>
              </li>
          </ul>
        </div>
        <div className='w-12/12 flex justify-end'>
          <img className='w-[500px]' src={gato} alt="gato" />
        </div>
      </div>
    </div>
  )
}

export default Second