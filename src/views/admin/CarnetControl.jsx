//Realizar apartado para el control de salud de la mascota registrada por el usuario 
//Realizar la modificación a la base de datos para poder agregar estas caracteristicas y luego realizar los querys pertinentes
//Utilizar la API para importar los elementro que se van a extraer de la base de datos.
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import clienteAxios from '../../config/axios';
import { getConfig } from '../../utils/utils';
import AnimalsModal from '../../components/animals/AnimalsModal';
import dog from '../../assets/profiles_pets/dog-profile.webp';
import cat from '../../assets/profiles_pets/cat-profile.webp';
import bird from '../../assets/profiles_pets/bird-profile.png';
import OptionsCarnet from '../../components/dropdowns/OptionsCarnet';
import Swal from 'sweetalert2';


const CarnetControl = () => {
  const { auth, setAuth } = useAuth();
  const [animalDetails, setAnimalDetails] = useState({});
  const [animal, setAnimal] = useState([])
  const [id, setId] = useState({ value: '', error: '' })
  const [user, setUser] = useState({ value: '', error: '' })
  const [name, setName] = useState({ value: "", error: "" });
  const [sex, setSex] = useState({ value: "", error: "" });
  const [specie, setSpecie] = useState({ value: "", error: "" });
  const [race, setRace] = useState({ value: "", error: "" });
  const [color, setColor] = useState({ value: "", error: "" });
  const [born, setBorn] = useState({ value: "", error: "" });
  const [nacionality, setNacionality] = useState({ value: "", error: "" });

  useEffect(() => {
    dataAnimal();
  }, [])


  const dataAnimal = async () => {
    try {
      const response = await clienteAxios.get(`/panel/animals`, getConfig());
      if (response.data.status == 200) {
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
      setAnimal([]);
    }

  }

  const deleteAnimal = async (id_delete) => {
    try {

      Swal.fire({
        title: '¿Deseas eliminar esta mascota?',
        text: 'Una vez eliminado no se podrá recuperar',
        icon: 'question',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#991b1b',
        confirmButtonColor: '#166534'
      }).then(async result => {
        if(result.isConfirmed){
          const response = await clienteAxios.delete(`/panel/animals/${id_delete}`, getConfig());
          
          if(response.status == 200){
            Swal.fire({
              title: '¡Éxito!',
              text: 'La mascota se ha eliminado correctamente',
              icon: 'success'
            }).then(result => {
              if(result.isConfirmed || result.isDismissed){
                dataAnimal();
              }
            });
          }
        }
      });

    } catch (error) {
      Swal.fire({
        title: '¡Error!',
        text: 'Hubo un error, inténtelo más tarde',
        icon: 'error'
      }).then(result => {
        if(result.isConfirmed || result.isDismissed){
          dataAnimal();
        }
      })
    }
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="px-4  py-2">
      <h1 className="mb-3 text-center text-orange-500 font-bold text-3xl uppercase">
        Mis mascotas
      </h1>
      <div className="flex justify-end">
        <button
          className="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Registrar nueva mascota
        </button>
        {showModal ? (
          <AnimalsModal 
            showModal={showModal}
            setShowModal={setShowModal}
            dataAnimal={dataAnimal}
            animalDetails={animalDetails}
            setAnimalDetails={setAnimalDetails}
          />
          ) : null}
      </div>

      <div className='flex flex-wrap justify-center mt-5 gap-2'>
      {/* COMIENZO DE LA CREACIÓN DEL CARNET*/}
      {animal.map((animal_tmp) => (
        <div
          className="bg-naranjita w-full md:w-5/12 h-2/4 rounded-lg border-2 border-gray-500"
          key={animal_tmp.id}
        >
          <div className="relative">
            <h2 className="bg-orange-300 py-2 text-center text-black font-bold text-xl uppercase">
              CARNET DE IDENTIFICACIÓN DE MI MASCOTA
            </h2>
            <OptionsCarnet 
              id={animal_tmp.id}
              setShowModal={setShowModal}
              setAnimalDetails={setAnimalDetails}
              deleteAnimal={deleteAnimal}
              animal={animal}
              />
          </div>
          <div className="grid grid-rows-2  px-3 grid-flow-col gap-4">
            <div className="row-span-3 ...">
              {/*APARTADO DE LA IMAGEN DE LA MASCOTA A GENERAR CARNET*/}
              <div className="mx-auto w-8/12 py-20">
                <div className="border-4  border-orange-500">
                  {animal_tmp.especie == 'Perro' ? (
                    <img
                      className="w-max"
                      src={dog}
                      alt="img-animal"
                    />
                  ): animal_tmp.especie == 'Gato' ? (
                    <img
                      className="w-max"
                      src={cat}
                      alt="img-animal"
                    />
                  ) : (
                    <img
                      className="w-max"
                      src={bird}
                      alt="img-animal"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row-span-2 ...">
              {/*APARTADO DE LA INFORMACIÓN DE LA MASCOTA A GENERAR CARNET*/}
              <h1 className="py-2 text-start text-black font-bold text-xl uppercase">
                Nombre
              </h1>
              <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                {animal_tmp.nombre}
              </p>
              <div className="flex flex-col my-2 md:my-4 justify-start md:flex-row gap-4 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <label className="font-bold">SEXO</label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.sexo}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <label className="font-bold">TIPO</label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.especie}
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2 md:my-4 justify-start md:flex-row gap-4 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <label className="font-bold">RAZA</label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.raza}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <label className="font-bold">COLOR</label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.color}
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2 md:my-4 justify-end md:flex-row gap-4 text-center">
                <div className="flex-1 ">
                  <label className="font-bold text-sm">
                    FECHA DE NACIMIENTO
                  </label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.fecha_nac}
                  </p>
                </div>
                <div className="flex-1 ">
                  <label className="font-bold text-sm">NACIONALDAD</label>
                  <p className="text-center bg-orange-200 rounded-md py-1 px-2">
                    {animal_tmp.nacionalidad}
                  </p>
                </div>
              </div>
              {/*APARTADO DE LA ID Y DEL DUEÑO DE LA MASCOTA A GENERAR CARNET*/}
              <div className="flex justify-center flex-col px-3 mb-2 pb-1 md:flex-row">
                <div className="bg-orange-200 text-center">
                  <p className="bg-orange-200 rounded-md text-center"></p>
                  <div className="font-bold"></div>
                </div>
                {auth.user?.id ? (
                  <div className="grid grid-cols-2 pb-1 gap-2">
                    <label className="font-bold">PERSONA RESPONSABLE</label>
                    <p className="bg-orange-200 rounded-md text-center font-bold">
                      {auth.user.name} {auth.user.last_name}
                    </p>
                    <p className="bg-orange-200 rounded-md text-center"></p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );


}
export default CarnetControl;