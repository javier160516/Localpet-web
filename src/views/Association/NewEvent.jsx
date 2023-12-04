import React from 'react'

const NewEvent = () => {
  return (
    <div className=''>
      <h1 className='text-2xl my-4 text-center text-gray-800 font-bold uppercase'>Notificaciones de Eventos Veterinarios</h1>
      <form class="w-full">
                    <div class="flex justify-center -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre del evento
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ejemplo: Jornada de vacunación" />
                            {/* <p class="text-gray-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div class="flex justify-center -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Fecha del evento
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Vacuna x" />
                            {/* <p class="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div class="flex justify-center -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Hora del evento
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="time" />
                            {/* <p class="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    <div class="flex justify-center -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Descripción del evento
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='Ejemplo: dirección, adicionales, etc'/>
                            {/* <p class="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                    </div>
                    
                    <div class="flex justify-center -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <button class="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default NewEvent
