import React from 'react'
import gato from '../../assets/asociaciones/tierra.jpg'
import points from '../../assets/points.svg';

const Tierra = () => {
    const handleSubmit = ()=>{
        window.open('https://www.tierradeanimales.org/', '_blank')
        }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-10/12 bg-slate-50 shadow-md rounded-md py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='flex flex-col justify-center items-center w-10/12'>
          <h2 className='w-full text-center uppercase text-2xl font-bold text-orange-400 mb-5'>Tierra de animales</h2>
          <p className='w-full text-1xl text-justify '>Somos un santuario que <strong>rescata, protege y cuida</strong> a animales en necesidad, puedes apoyar de las siguientes formas:</p>
          <ul className='w-full py-3 px-5 mt-4 mb-4 lg:mb-0 list-none'>
            <li className='flex hover:ml-3 transition-all duration-300'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Donaciones</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Voluntariados</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Adoptar</p>
              </li>
          </ul>
             <button onClick={handleSubmit} className='mx-auto transition-all duration-300 text-center mt-5 text-lg bg-gray-400 text-white py-1 px-4 hover:bg-orange-300 font-bold rounded-full mb-3'>Más información</button>
        </div>
        <div className='w-12/12 flex justify-end'>
          <img className='w-[500px]' src={gato} alt="gato" />
        </div>
      </div>
    </div>
  )
}

export default Tierra