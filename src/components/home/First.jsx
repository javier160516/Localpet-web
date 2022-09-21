import React from 'react'; 
import banner from "../../assets/banner.png";

const First = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center justify-items-center gap-5 py-5' >
            <div className=''>
                 <img src={banner} alt="banner veterinaria localpet" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='w-full text-center text-1xl '>¡Encontrar una veterinaria nunca había sido tan fácil!</p>
                <h1 className='w-full text-center text-4xl font-bold md:text-5xl text-orange-400'>Encuentra una veterinaria cerca de ti</h1>
                <button className=' text-center mt-5 text-lg bg-orange-400 text-white py-1 px-4 hover:bg-orange-300 font-bold rounded-full'>Encontrar ahora</button>
            </div>
            
        </div>
    )
}

export default First;