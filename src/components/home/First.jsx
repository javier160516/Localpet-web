import React from 'react';
import Carousel from '../../helpers/Carousel';


const First = () => {
    return (
        <div className='flex flex-col gap-32 justify-between h-[92vh]'>
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-items-center gap-7 mt-6'>
                <Carousel />
                <div className='flex flex-col justify-center items-center flex-1'>
                    <p className='w-full text-center text-1xl font-bold'>¡Encontrar una veterinaria nunca había sido tan fácil! </p>
                    <h1 className='w-full text-center text-4xl font-bold md:text-6xl text-orange-400'>Encuentra una veterinaria cerca de ti</h1>
                    <button className='transition-all duration-300 text-center mt-5 text-lg bg-orange-400 text-white py-1 px-4 hover:bg-orange-500 font-bold rounded-full mb-3'>Buscar ahora</button>
                </div>
            </div>
            <div className='h-36 overflow-hidden'>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-full w-full'>
                    <path d="M0.00,49.99 C142.43,199.82 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" className='stroke-transparent fill-orange-500'></path>
                </svg>
            </div>
        </div>
    )
}

export default First;