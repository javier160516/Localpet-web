import React from 'react';
import Carousel from '../../helpers/Carousel';
import { Link } from 'react-router-dom';


const First = () => {
    return (
        <div className='flex flex-col justify-between h-[92vh]'>
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-items-center gap-7 mt-6'>
                <div className='flex flex-col justify-center items-center flex-1'>
                    <p className='w-full text-center text-2xl font-bold'>¡No lo olvides! </p>
                    <h1 className='w-full text-center text-4xl font-bold md:text-4xl text-orange-400'>Un ser vivo, conlleva una gran responsabilidad</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-3 items-center flex-1'>
                <Carousel />
                <Link to="/informacion">
                    <button className='transition-all duration-300 text-center mt-5 text-lg bg-gray-400 text-white py-1 px-4 hover:bg-gray-500 font-bold rounded-full mb-3'>Más información</button>
                </Link>
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