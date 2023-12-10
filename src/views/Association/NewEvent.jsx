import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import clienteAxios from '../../config/axios';

const NewEvent = () => {
    const [name, setName] = useState({value: '', error: ''});
    const [date, setDate] = useState({value: '', error: ''});
    const [time, setTime] = useState({value: '', error: ''});
    const [description, setDescription] = useState({value: '', error: ''});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        
        try {
            // Se evita que la página se recargue
            event.preventDefault();
            // Se cambia el estado del loader
            setLoading(true);
            
            const response = await clienteAxios.post('/panel/events/create', {
                nombre: name.value,
                fecha: date.value,
                hora: time.value
            },getConfig());

            JSON.stringify(response.data);

            setLoading(false);
            Swal.fire({
                title: '¡Éxito!',
                text: 'Se agregó correctamente la vacuna a tu mascota',
                icon: 'success'
            }).then(result => {
                if(result.isConfirmed || result.isDismissed){
                    setDate({value: '', error: ''});
                    setNombre({value: '', error: ''});
                    setTime({value: '', error: ''});
                }
            })

        } catch (error) {
            setLoading(false);
            if(error.response.status == 400){
                setDate({...date, error: error.response.data.errors.date});
                setNombre({...nombre, error: error.response.data.errors.name});
                setTime({...time, error: error.response.data.errors.time});
            }else{
                Swal.fire('¡Error!', 'Ha ocurrido un error, inténtelo más tarde', 'error');
            }
        }
    }

    return (
    <div className=''>
      <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Notificaciones de Eventos Veterinarios</h1>
      <form className="w-full">
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre del evento
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="nombre" type="text" placeholder="Ejemplo: Jornada de vacunación" 
                            value={name.value}
                                onChange={(e) => setName({value: e.target.value, error: ''})}/>
                            {/* <p className="text-gray-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Fecha del evento
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="fecha" type="date" placeholder="Vacuna x" 
                            value={date.value}
                                onChange={(e) => setDate({value: e.target.value, error: ''})}/>
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Hora del evento
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="hora" type="time" 
                            value={time.value}
                                onChange={(e) => setTime({value: e.target.value, error: ''})}/>
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Descripción del evento
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="descripcion
                            " type="text" placeholder='Ejemplo: dirección, adicionales, etc'
                            value={description.value}
                                onChange={(e) => setDescription({value: e.target.value, error: ''})}/>
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <button className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleSubmit()}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default NewEvent
