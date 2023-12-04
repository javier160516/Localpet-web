import React from 'react'
import gato from '../../assets/gato.png'
import points from '../../assets/points.svg';
import CarouselAssoc from '../../helpers/CarouselAssoc';

const Five = () => {
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-10/12 bg-slate-50 shadow-md rounded-md py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='flex flex-col justify-center items-center w-10/12'>
          <h2 className='w-full text-center uppercase text-2xl font-bold text-orange-400 mb-5'>¿Deseas conocer asociaciones civiles?</h2>
          <p className='w-full text-1xl text-justify '>Olvidate de las asocianes que te generan desconfianza, <strong> nuestro sistema te permitira encontrar las más cercanas a tu ubicación</strong> y escoger la de tú interés social: </p>
          <ul className='w-full py-3 px-5 mt-4 mb-4 lg:mb-0 list-none'>
            <li className='flex hover:ml-3 transition-all duration-300'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Jornadas de esterilización y vacunación</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Rescate animal</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Diferentes servicios que ofrecen</p>
              </li>
          </ul>
        </div>
        <div className='w-full flex justify-center my-3'>
          <CarouselAssoc/>
        </div>
      </div>
    </div>
  )
}

export default Five