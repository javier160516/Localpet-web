import React from 'react'

const PetVacum = () => {
    return (
        <div className="max-w-lg my-6 mx-20 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <form className="w-full">
                <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Registrar vacuna</h1>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre de la mascota
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            {/* <p className="text-gray-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre de la vacuna
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Vacuna x" />
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre de la vacuna
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" />
                            {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <button className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PetVacum
