import React from 'react'; 
import veterinario from "../../assets/veterinario.png";

const Third = () => {
    return (
        <div className='flex flex-col items-center py-5'>
        <div className='w-10/12 bg-slate-50 shadow-md rounded-md py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
            <div className='mx-auto'>
                 <img className='w-[500px]' src={veterinario} alt="veterinario" />
            </div>
            <div className='flex flex-col justify-center items-center w-10/12'>
                <h3 className='w-full text-center uppercase text-2xl font-bold text-orange-400 mb-5'>¿Tienes una veterinaria?</h3>
                <p className='w-full text-1xl text-justify '>Si necesitas potenciar tu clínica veterinaria, somos la mejor opción, pon tu clinica al alcance de todos con nuestro sistema y <strong>agrega la información necesaria para que los clientes te encuentren de manera sencilla</strong> </p>
                <div className='w-full flex justify-end my-3'>
                    {/* <button className='text-center mt-4 text-lg bg-orange-400 text-white py-2 px-6 hover:bg-orange-500 transition-all duration-200 rounded-md'>Más sobre LocalPet </button> */}
                    <button className='text-center mt-4 text-lg border-orange-500 border-2 text-orange-500 py-1 px-6 hover:bg-orange-500 hover:text-white transition-all duration-400 rounded-xl'>Más sobre LocalPet </button>
                </div>
            </div>           
        </div>
    </div>
    )
}

export default Third;