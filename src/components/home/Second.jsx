import React from 'react'
import gato from '../../assets/gato.png'


const Second = () => {
  return (
    <div className='flex flex-col  items-center'>
        <div className='w-11/12 bg-slate-50 py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='w-full text-left text-2xl font-bold text-orange-400 '>¿Necesitas un veterinario para tu mascota?</h2>
                <p className='w-full text-1xl text-justify '>Olvidate de las largas busquedas, <strong> nuestro sistema te permitira encontrar las veterinarias más cercanas a tu ubicación</strong> de manera gratuita, y no solo eso, si no que también podrás saber:
                <ul className='list-decimal py-3 px-5'>
                  <li >Sus horarios de atención</li>
                  <li>Sus precios</li>
                  <li>Los servicios que ofrecen</li>
                </ul></p>
            </div>
            <div className='mx-auto'>
                 <img className='w-[500px]' src={gato} alt="gato" />
            </div>
            
            
        </div>
    </div>
  )
}

export default Second