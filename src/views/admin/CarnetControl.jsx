//Realizar apartado para el control de salud de la mascota registrada por el usuario 
//Realizar la modificación a la base de datos para poder agregar estas caracteristicas y luego realizar los querys pertinentes
//Utilizar la API para importar los elementro que se van a extraer de la base de datos.
import React, { useEffect, useState } from 'react'
import logo from "../../assets/img/modelo.jpeg";
import useAuth from '../../hooks/useAuth';
import clienteAxios from '../../config/axios';
import { getConfig } from '../../utils/utils';

const CarnetControl = () => {
  const { auth, setAuth } = useAuth();
  const [animal, setAnimal] = useState([])
  const [name, setName] = useState({ value: '', error: '' })
  const [sex, setSex] = useState({ value: '', error: '' })
  const [specie, setSpecie] = useState({ value: '', error: '' })
  const [race, setRace] = useState({ value: '', error: '' })
  const [color, setColor] = useState({ value: '', error: '' })
  const [born, setBorn] = useState({ value: '', error: '' })
  const [nacionality, setNacionality] = useState({ value: '', error: '' })
  const [id, setId] = useState({ value: '', error: '' })
  const [user, setUser] = useState({ value: '', error: '' })

  useEffect(() => {
    dataAnimal();
  }, [])


  const handleSubmit = async () => {
    // Se evita que la página se recargue
    event.preventDefault();
    // Se cambia el estado del loader
    setLoading(true);
    try {
      // Se hace una petición post para mandar los datos introducidos 
      // y asi el backend los recibe
      const response = await clienteAxios.post('/animals/create', {
        name: name.value,
        animal: animal.value,
        sex: sex.value,
        specie: specie.value,
        race: race.value,
        color: color.value,
        born: born.value,
        nacionality: nacionality.value,
      });
      setLoading(false);
      // Si la petición sale correcta (201) se muestra una alerta de que todo salió correctamente 
      if (response.data.status == 201) {
        // Notificación en forma de modal donde se le pasan los parámetros de titulo, un texto extra y el icono
        Swal.fire({
          title: response.data.msg,
          text: 'Hemos guardado tu mascota',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          //Cuando se le dá "OK" a la notificación, el formulario se vacia
          if (result.isConfirmed) {
            voidFomr()
          }
        })
      }
    } catch (error) {
      // Si hay algún error se válida que tipo de error es
      // dependiendo del tipo de error es la acción que se hará
      setLoading(false);
      if (error.response.status == 400) {
        setName({ ...name, error: error.response.data.errors.name });
        setAnimal({ ...animal, error: error.response.data.errors.animal });
        setSex({ ...sex, error: error.response.data.errors.sex });
        setSpecie({ ...specie, error: error.response.data.errors.specie });
        setRace({ ...race, error: error.response.data.errors.race });
        setColor({ ...color, error: error.response.data.errors.color });
        setBorn({ ...born, error: error.response.data.errors.born });
        setNacionality({ ...nacionality, error: error.response.data.errors.nacionality });
        // Si el error que arroja el backend es 403 (Forbidden) 
      } else if (error.response.data.status == 403) {
        // Se manda una notificación diciendo que el usuario ya está registrado
        Swal.fire('¡Error!', error.response.data.msg, 'error');
      }
    }

  }
  const dataAnimal = async () => {
    try {
      const response = await clienteAxios.get(`/panel/animals`, getConfig());
      console.log(response);
      if (response.data.status == 200) {
        console.log(response.data); //Borrar para no mostrar datos en la consola
        setAnimal(response.data.animals);
        setName({ value: response.data.animals.nombre, error: '' });
        setSex({ value: response.data.animals.sexo, error: '' });
        setSpecie({ value: response.data.animals.especie, error: '' });
        setRace({ value: response.data.animals.raza, error: '' });
        setColor({ value: response.data.animals.color, error: '' });
        setBorn({ value: response.data.animals.fecha_nac, error: '' });
        setNacionality({ value: response.data.animals.nacionalidad, error: '' });
        setId({ value: response.data.animals.id, error: '' });
        setUser({ value: response.data.animals.id, error: '' });

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
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nombre
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Bonny" />
                          {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            FECHA DE NACIMIENTO
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            RAZA
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Ejemplo: Maltés" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            TIPO DE ANIMAL
                          </label>
                          <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option>AVE</option>
                              <option>GATO</option>
                              <option>PERRO</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            COLOR
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder='Ejemplo: Blanco' />
                        </div>
                        <div class="w-full md:FULL py-2 px-3">
                          <label
                            for="formFile"
                            class="py-2 mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                          >Selecciona la foto de tu mascota</label
                          >
                          <input
                            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"
                            id="formFile" />
                        </div>
                      </div>
                      <h3 className='text-3xl font-semibold'>INFORMACIÓN DEL PROPIETARIO</h3>
                      {auth.user?.id ? (
                      <div className="w-full md:FULL px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          NOMBRE COMPLETO
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
                        />
                      </div>
                      ) : (<div></div>)}
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
                      type="submit"
                      onClick={() => handleSubmit()}
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
      {animal.map(animal_tmp => (
        <div className=" bg-naranjita w-3/6 h-2/4 rounded-lg border-2 border-gray-500" key={animal_tmp.id}>
          <h2 className="bg-orange-300 py-2 text-center text-black font-bold text-xl uppercase">CARNET DE IDENTIFICACIÓN DE MI MASCOTA</h2>
          <div className="grid grid-rows-2  px-3 grid-flow-col gap-4">
            <div className="row-span-3 ...">
              {/*APARTADO DE LA IMAGEN DE LA MASCOTA A GENERAR CARNET*/}
              <div className="mx-auto w-8/12 py-20">
                <div className="border-4  border-orange-500">
                  <img className="w-max" src={animal_tmp.img_url} alt="img-animal" />
                </div>
              </div>
            </div>
            <div className="row-span-2 ...">
              {/*APARTADO DE LA INFORMACIÓN DE LA MASCOTA A GENERAR CARNET*/}
              <h1 className='py-2 text-start text-black font-bold text-xl uppercase'>Nombre</h1>
              <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.nombre}</p>
              <div className='flex flex-col my-2 md:my-4 justify-start md:flex-row gap-4 text-center'>
                <div className='grid grid-cols-2 gap-4'>
                  <label className='font-bold'>SEXO</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.sexo}</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <label className='font-bold'>TIPO</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.especie}</p>
                </div>
              </div>
              <div className='flex flex-col my-2 md:my-4 justify-start md:flex-row gap-4 text-center'>
                <div className='grid grid-cols-2 gap-4'>
                  <label className='font-bold'>RAZA</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.raza}</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <label className='font-bold'>COLOR</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.color}</p>
                </div>
              </div>
              <div className='flex flex-col my-2 md:my-4 justify-end md:flex-row gap-4 text-center'>
                <div className='flex-1 '>
                  <label className='font-bold text-sm'>FECHA DE NACIMIENTO</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.fecha_nac}</p>
                </div>
                <div className='flex-1 '>
                  <label className='font-bold text-sm'>NACIONALDAD</label>
                  <p className='text-center bg-orange-200 rounded-md py-1 px-2'>{animal_tmp.nacionalidad}</p>
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
                    <p className='bg-orange-200 rounded-md text-center font-bold'>{auth.user.name} {auth.user.last_name}</p>
                    <p className='bg-orange-200 rounded-md text-center'></p>
                  </div>
                ) : (<div></div>)}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );


}
export default CarnetControl;