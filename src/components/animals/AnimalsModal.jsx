import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import clienteAxios from "../../config/axios";
import { getConfig } from "../../utils/utils";
import Loader from "../../helpers/Loader";

const AnimalsModal = ({showModal, setShowModal, dataAnimal, animalDetails, setAnimalDetails}) => {
    const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ value: "", error: "" });
  const [sex, setSex] = useState({ value: "", error: "" });
  const [specie, setSpecie] = useState({ value: "", error: "" });
  const [race, setRace] = useState({ value: "", error: "" });
  const [color, setColor] = useState({ value: "", error: "" });
  const [born, setBorn] = useState({ value: "", error: "" });
  const [nacionality, setNacionality] = useState({ value: "", error: "" });
  const [message, setMessage] = useState({value: '', error: ''});

  useEffect(() => {
    setName({value: animalDetails.nombre, error: ''});
    setSex({value: animalDetails.sexo, error: ''});
    setSpecie({value: animalDetails.especie, error: ''});
    setRace({value: animalDetails.raza, error: ''});
    setColor({value: animalDetails.color, error: ''});
    setBorn({value: animalDetails.fecha_nac, error: ''});
    setNacionality({value: animalDetails.nacionalidad, error: ''});

  }, [animalDetails])

  const handleSubmit = async () => {
    // Se evita que la página se recargue
    event.preventDefault();
    // Se cambia el estado del loader
    setLoading(true);
    try {
      // Se hace una petición post para mandar los datos introducidos
      // y asi el backend los recibe
      let response = null;
      if(animalDetails && animalDetails.id){
        response = await clienteAxios.put(
            `/panel/animals/edit/${animalDetails.id}`,
            {
              nombre: name.value,
              genero: sex.value,
              especie: specie.value,
              raza: race.value,
              color: color.value,
              fecha_nac: born.value,
              nacionalidad: nacionality.value,
            },
            getConfig()
          );
      }else{
        response = await clienteAxios.post(
            "/panel/animals/create",
            {
              nombre: name.value,
              genero: sex.value,
              especie: specie.value,
              raza: race.value,
              color: color.value,
              fecha_nac: born.value,
              nacionalidad: nacionality.value,
            },
            getConfig()
          );
      }
      setLoading(false);
      setAnimalDetails({});
      // Si la petición sale correcta (201) se muestra una alerta de que todo salió correctamente
      if (response.data.status == 201 || response.data.status == 200) {
        // Notificación en forma de modal donde se le pasan los parámetros de titulo, un texto extra y el icono
        Swal.fire({
          title: response.data.msg,
          text: "Tu mascota se ha guardado correctamente",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          //Cuando se le dá "OK" a la notificación, el formulario se vacia
          if (result.isConfirmed || result.isDismissed) {
            setShowModal(false);
            dataAnimal();
          }
        });
      }
    } catch (error) {
        console.log(error)
      // Si hay algún error se válida que tipo de error es
      // dependiendo del tipo de error es la acción que se hará
      setLoading(false);
      if (error.response.status == 400) {
        setName({ ...name, error: error.response.data.errors.nombre });
        setSex({ ...sex, error: error.response.data.errors.sexo });
        setSpecie({ ...specie, error: error.response.data.errors.especie });
        setRace({ ...race, error: error.response.data.errors.raza });
        setColor({ ...color, error: error.response.data.errors.color });
        setBorn({ ...born, error: error.response.data.errors.fecha_nac });
        setNacionality({
          ...nacionality,
          error: error.response.data.errors.nacionalidad,
        });

        setMessage({value: '', error: 'Todos los campos son obligatorios'});
        setTimeout(() => {
          setMessage({value: '', error: ''});
          
        }, 3000);
        // Si el error que arroja el backend es 403 (Forbidden)
      } else if (error.response.data.status == 403) {
        // Se manda una notificación diciendo que el usuario ya está registrado
        Swal.fire("¡Error!", error.response.data.msg, "error");
      }
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Nombre
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Bonny"
                      value={name.value}
                      onChange={(e) =>
                        setName({ value: e.target.value, error: "" })
                      }
                    />
                    {/* <p className="text-red-500 text-xs italic">Este campo es obligatorio.</p> */}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      FECHA DE NACIMIENTO
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="date"
                      value={born.value}
                      onChange={(e) =>
                        setBorn({ value: e.target.value, error: "" })
                      }
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      GÉNERO
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        value={sex.value}
                        onChange={(e) =>
                          setSex({ value: e.target.value, error: "" })
                        }
                      >
                        <option value="">-- Selecciona --</option>
                        <option value="Hembra">Hembra</option>
                        <option value="Macho">Macho</option>
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
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      RAZA
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder="Ejemplo: Maltés"
                      value={race.value}
                      onChange={(e) =>
                        setRace({ value: e.target.value, error: "" })
                      }
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      TIPO DE MASCOTA
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        value={specie.value}
                        onChange={(e) =>
                          setSpecie({ value: e.target.value, error: "" })
                        }
                      >
                        <option value="">-- Selecciona --</option>
                        <option value="Ave">Ave</option>
                        <option value="Gato">Gato</option>
                        <option value="Perro">Perro</option>
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
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      COLOR
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Ejemplo: Blanco"
                      value={color.value}
                      onChange={(e) =>
                        setColor({ value: e.target.value, error: "" })
                      }
                    />
                  </div>
                  {/* <div className="w-full md:FULL py-2 px-3">
                  <label
                    for="formFile"
                    className="py-2 mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                  >
                    Selecciona la foto de tu mascota
                  </label>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFile"
                    value={nacionality.value}
                    onChange={(e) =>
                      setNacionality({ value: e.target.value, error: "" })
                    }
                  />
                </div> */}
                </div>
                <h3 className="text-3xl font-semibold mt-5">
                  INFORMACIÓN DEL PROPIETARIO
                </h3>
                {auth.user?.id ? (
                  <div className="w-full mt-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      NOMBRE COMPLETO
                    </label>
                    <input
                      disabled
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      value={auth.user.name + " " + auth.user.last_name}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
            </div>
            {message.error ? (
              <p className='ml-2 text-xs text-red-500 mt-2'>{message.error}</p>
            ): null}
            {loading ? (
              <div className="mt-3 mb-6">
                <Loader />
              </div>
            ) : null}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {setShowModal(false); setAnimalDetails({})}}
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
  );
};

export default AnimalsModal;
