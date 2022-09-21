import React from 'react'; 
import veterinario from "../../assets/veterinario.png";

const Third = () => {
    return (
        <div className='flex flex-col  items-center py-5'>
        <div className='w-11/12 bg-slate-50 py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5'>
            <div className='mx-auto'>
                 <img className='w-[500px]' src={veterinario} alt="veterinario" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='w-full text-left text-2xl font-bold text-orange-400'>¿Tienes una veterinaria?</h3>
                <p className='w-full text-1xl text-justify '>Si necesitas potenciar tu clínica veterinaria, somos la mejor opción, pon tu clinica al alcance de todos con nuestro sistema y <strong>agrega la información necesaria para que los clientes te encuentren de manera sencilla</strong> </p>
                <button className='  text-center mt-4 text-lg bg-orange-400 text-white py-1 px-4 hover:bg-orange-300 '>Más sobre LocalPet </button>
                
            </div>
            
            
            
        </div>
    </div>
    )
}

export default Third;