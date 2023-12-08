import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import clienteAxios from '../../config/axios';
import { getConfig } from '../../utils/utils';
import Loader from '../../helpers/Loader';
import Swal from 'sweetalert2';

const PetVacum = () => {
    const [pets, setPets] = useState([]);
    const [vacunas, setVacunas] = useState([]);

    const [idVacuna, setIdVacuna] = useState({value: '', error: ''});
    const [idAnimal, setIdAnimal] = useState({value: '', error: ''});
    const [fechaVacuna, setFechaVacuna] = useState({value: '', error: ''});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPets();
        getVacunas();
    }, []);

    const getPets = async () => {
        try {
            const response = await clienteAxios.get(`/panel/animals`, getConfig());
            if(response.status == 200){
                setPets(response.data.animals);
                console.log(response.data)
            }
        } catch (error) {
            setPets([]);
        }
    }

    const getVacunas = async () => {
        try {
            const response = await clienteAxios.get(`/panel/vacunas`, getConfig());
            console.log(response.data);
            if(response.status == 200){
                setVacunas(response.data);
            }
        } catch (error) {
            setVacunas([]);
        }
    }

    const handleSubmit = async () => {
        
        try {
            // Se evita que la página se recargue
            event.preventDefault();
            // Se cambia el estado del loader
            setLoading(true);
            
            const response = await clienteAxios.post('/panel/vacunas/animal', {
                id_vacuna: idVacuna.value,
                id_animal: idAnimal.value,
                date_vacuna: fechaVacuna.value
            },getConfig());

            JSON.stringify(response.data);

            setLoading(false);
            Swal.fire({
                title: '¡Éxito!',
                text: 'Se agregó correctamente la vacuna a tu mascota',
                icon: 'success'
            }).then(result => {
                if(result.isConfirmed || result.isDismissed){
                    setIdAnimal({value: '', error: ''});
                    setIdVacuna({value: '', error: ''});
                    setFechaVacuna({value: '', error: ''});
                }
            })

        } catch (error) {
            setLoading(false);
            if(error.response.status == 400){
                setIdAnimal({...idAnimal, error: error.response.data.errors.id_animal});
                setIdVacuna({...idVacuna, error: error.response.data.errors.id_vacuna});
                setFechaVacuna({...fechaVacuna, error: error.response.data.errors.date_vacuna});
            }else{
                Swal.fire('¡Error!', 'Ha ocurrido un error, inténtelo más tarde', 'error');
            }
        }
    }

    return (
        <div className="max-w-lg my-6 mx-20 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <form className="w-full">
                <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Registrar vacuna</h1>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="id_animal">
                                Nombre de la mascota
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="id_animal"
                                    name='id_animal'
                                    value={idAnimal.value}
                                    onChange={(e) =>
                                    setIdAnimal({ value: e.target.value, error: "" })
                                    }
                                >
                                    <option value="">-- Selecciona --</option>
                                    {pets.map((pet, key) => (
                                        <option value={pet.id} key={key}>{pet.nombre}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {idAnimal.error ? (
                                    <p className='ml-2 text-xs text-red-500 mt-2'>{idAnimal.error}</p>
                                ): null}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="id_vacuna">
                                Nombre de la vacuna
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="id_vacuna"
                                    name='id_vacuna'
                                    value={idVacuna.value}
                                    onChange={(e) =>
                                    setIdVacuna({ value: e.target.value, error: "" })
                                    }
                                >
                                    <option value="">-- Selecciona --</option>
                                    {vacunas.map((vacuna, key) => (
                                        <option value={vacuna.id} key={key}>{vacuna.nombre}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {idVacuna.error ? (
                                    <p className='ml-2 text-xs text-red-500 mt-2'>{idVacuna.error}</p>
                                ): null}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date_vacuna">
                                Fecha de aplicación
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                id="date_vacuna" 
                                name='date_vacuna'
                                type="date"
                                value={fechaVacuna.value}
                                onChange={(e) => setFechaVacuna({value: e.target.value, error: ''})}
                            />
                                {fechaVacuna.error ? (
                                    <p className='ml-2 text-xs text-red-500 mt-2'>{fechaVacuna.error}</p>
                                ): null}
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    {loading && (
                        <div className='my-5'>
                            <Loader />
                        </div>
                    )}
                    <div className="flex justify-center -mx-3 mb-6">
                        <button className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit()}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PetVacum
