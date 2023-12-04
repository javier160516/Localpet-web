//Realizar apartado para el control de salud de la mascota registrada por el usuario 
//Realizar la modificación a la base de datos para poder agregar estas caracteristicas y luego realizar los querys pertinentes
//Utilizar la API para importar los elementro que se van a extraer de la base de datos.
import React, { useState } from 'react'
import logo from "../../assets/img/modelo.jpeg";
import useAuth from '../../hooks/useAuth';

const CarnetControl = () => {
  const { auth, setAuth } = useAuth();
  const { animal, setAnimal } = useState([])
  const { name, setName } = useState({ value: '', error: '' })
  const { sex, setSex } = useState({ value: '', error: '' })
  const { specie, setSpecie } = useState({ value: '', error: '' })
  const { race, setRace } = useState({ value: '', error: '' })
  const { color, setColor } = useState({ value: '', error: '' })
  const { born, setBorn } = useState({ value: '', error: '' })
  const { nacionality, setNacionality } = useState({ value: '', error: '' })
  const { id, setId } = useState({ value: '', error: '' })
  const { user, setUser } = useState({ value: '', error: '' })

  const dataAnimal = async () => {
    try {
      const response = await clienteAxios.get('/panel/pet');
      if (response.data.status == 200) {
        console.log(response.data); //Borrar para no mostrar datos en la consola
        setAnimal([response.data.animal]);
        setName({ value: response.data.animal.nombre, error: '' });
        setSex({ value: response.data.animal.sexo, error: '' });
        setSpecie({ value: response.data.animal.especie, error: '' });
        setRace({ value: response.data.animal.raza, error: '' });
        setColor({ value: response.data.animal.color, error: '' });
        setBorn({ value: response.data.animal.fecha_nac, error: '' });
        setNacionality({ value: response.data.animal.nacionalidad, error: '' });
        setId({ value: response.data.animal.id, error: '' });
        setUser({ value: response.data.animal.id, error: '' });
      }
    } catch (error) {
      console.log(error);
    }

  }
  const [showModal, setShowModal] = React.useState(false);
  return (

    <div className='px-4  py-2'>
      <h1 className='mb-3 text-center text-orange-500 font-bold text-3xl uppercase'>Mis mascotas</h1>
      <div className='flex justify-end'>
        <button
          className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Registrar nueva mascota
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Registrar tu nueva mascota
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form class="w-full max-w-lg">
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nombre
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Bonny"/>
                            {/* <p class="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            FECHA DE NACIMIENTO
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date"/>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            RAZA
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Ejemplo: Maltés"/>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            TIPO DE ANIMAL
                          </label>
                          <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option>AVE</option>
                              <option>GATO</option>
                              <option>PERRO</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                          </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            COLOR
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder='Ejemplo: Blanco'/>
                        </div>
                      </div>
                      <h3 className='text-3xl font-semibold'>INFORMACIÓN DEL PROPIETARIO</h3>
                        <div class="w-full md:FULL px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            NOMBRE COMPLETO
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="EJEMPLO: JOAQUIN RODRIGUEZ J."/>
                        </div>
                        <div class="w-full md:FULL px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            TELEFONO
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="9988204492"/>
                        </div>
                        <div class="w-full md:FULL px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            DIRECCIÓN
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Smz 107 Mz 32 L 5"/>
                        </div>
                        <div class="w-full md:FULL px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            CORREO
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="l18530441@cancun.tecnm.mx"/>
                        </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      REGISTRAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      {/* COMIENZO DE LA CREACIÓN DEL CARNET*/}
      <div className="bg-naranjita w-4/5 h-2/4 rounded-lg border-2 border-gray-500">
        <h2 className="bg-orange-300 py-2 text-center text-black font-bold text-xl uppercase">CARNET DE IDENTIFICACIÓN DE MI MASCOTA</h2>
        <div className="grid grid-rows-2  px-3 grid-flow-col gap-4">
          <div className="row-span-3 ...">
            {/*APARTADO DE LA IMAGEN DE LA MASCOTA A GENERAR CARNET*/}
            <div className="mx-auto w-8/12 py-4">
              <div className="border-4  border-orange-500">
                <img className="w-max" src={logo} alt="logo-locatpet" />
              </div>
            </div>
          </div>
          <div className="row-span-2 ...">
            {/*APARTADO DE LA INFORMACIÓN DE LA MASCOTA A GENERAR CARNET*/}
            <h1 className='py-2 text-start text-black font-bold text-xl uppercase'>Nombre</h1>
            <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.name</p>
            <div className='flex flex-col my-2 md:my-4 justify-end md:flex-row gap-4 text-center'>
              <div className='grid grid-cols-2 gap-4'>
                <label className='font-bold'>SEXO</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.sex</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <label className='font-bold'>ESPECIE</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.specie</p>
              </div>
            </div>
            <div className='flex flex-col my-2 md:my-4 justify-end md:flex-row gap-4 text-center'>
              <div className='grid grid-cols-2 gap-4'>
                <label className='font-bold'>RAZA</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.race</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <label className='font-bold'>COLOR</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.color</p>
              </div>
            </div>
            <div className='flex flex-col my-2 md:my-4 justify-end md:flex-row gap-4 text-center'>
              <div className='flex-1 '>
                <label className='font-bold text-sm'>FECHA DE NACIMIENTO</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.born</p>
              </div>
              <div className='flex-1 '>
                <label className='font-bold text-sm'>NACIONALDAD</label>
                <p className='bg-orange-200 rounded-md py-1 px-2'>auth.user.pet.nacionality</p>
              </div>
            </div>
          </div>
        </div>
        {/*APARTADO DE LA ID Y DEL DUEÑO DE LA MASCOTA A GENERAR CARNET*/}
        <div className='flex justify-center flex-col px-3 mb-2 pb-1 md:flex-row'>
          <div className='bg-orange-200 text-center'>
            <p className='bg-orange-200 rounded-md text-center'></p>
            <div className='font-bold'></div>
          </div>
          {auth.user?.id ? (
            <div className='grid grid-cols-2 pb-1 gap-2'>
              <label className='font-bold'>PERSONA RESPONSABLE</label>
              <p className='bg-orange-200 rounded-md text-center font-bold'>auth.user.name auth.user.last_name</p>
              <p className='bg-orange-200 rounded-md text-center'></p>
            </div>
          ) : (<div></div>)}
        </div>
      </div>

    </div>
  );


}
export default CarnetControl;