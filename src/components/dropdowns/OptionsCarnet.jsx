import React from "react";
import { faEllipsisV, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getConfig } from "../../utils/utils";
import clienteAxios from "../../config/axios";
import Swal from "sweetalert2";
import { useState } from "react";

const OptionsCarnet = ({id, setAnimalDetails, setShowModal, deleteAnimal, animal}) => {
  const [vacunas, setVacunas] = useState([]);

    const getAnimalDetails = async () => {
        try {
            const response = await clienteAxios.get(`/panel/animals/${id}`, getConfig());
            console.log(response);
            if(response.status == 200){
                setAnimalDetails(response.data.animal);
                setShowModal(true);
            }
        } catch (error) {
            console.log(error)
            setAnimalDetails({});
            Swal.fire('¡Error!', 'Hubo un error al obtener la mascota', 'error');
        }
    }

    const getVacunas = async () => {
      try {
        const filter_vacunas = animal.find(animal_tmp => animal_tmp.id == id);
        console.log(filter_vacunas)
        let list_vacunas = '';
        filter_vacunas.vacunas.forEach(vacuna => {
          list_vacunas += `<li style="list-style: inside;"> ${vacuna.nombre} </li>`
        });

        Swal.fire({
          title: `Vacunas de tu mascota "${filter_vacunas.nombre}"`,
          html: `
            <ul>
              ${list_vacunas}
            </ul>
          `
        })

      } catch (error) {
        setVacunas([]);
      }
    }

  return (
    <div className="absolute top-2 right-0 text-right">
      <div className="dropdown inline-block relative">
        <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>
          <FontAwesomeIcon icon={faEllipsisV} />
          </span>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 -right-28 z-10 w-36">
        <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              onClick={() => getVacunas()}
            >
              <FontAwesomeIcon icon={faEye} className="text-blue-800" />
                <span className="ml-1">Ver vacunas</span>
            </a>
          </li>
          <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              onClick={() => getAnimalDetails()}
            >
              <FontAwesomeIcon icon={faPencil} className="text-green-500" />
                <span className="ml-1">Editar</span>
            </a>
          </li>
          <li className="">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              onClick={() => deleteAnimal(id)}
            >
              <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                <span className="ml-1">Eliminar</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OptionsCarnet;
