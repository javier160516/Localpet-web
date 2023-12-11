import React, { useEffect, useState } from "react";
import AddEventModal from "../../components/events/AddEventModal";
import clienteAxios from "../../config/axios";
import { getConfig } from "../../utils/utils";
import noAvailable from "../../assets/imagen-no-disponible.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const NewEvent = () => {
  const {auth, setAuth} = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [infoEvents, setInfoEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    getInfoEvents();
  }, []);

  const getInfoEvents = async () => {
    try {
      const response = await clienteAxios("/events", getConfig());

      JSON.stringify(response.data);

      setInfoEvents(response.data.events);
    } catch (error) {
      setInfoEvents([]);
    }
  };

  const editEvent = async (id) => {
    try {
        const response = await clienteAxios.get(`/events/${id}`, getConfig());

        JSON.stringify(response.data);

        setEventDetails(response.data.event);
        setShowModal(true);
    } catch (error) {
        Swal.fire('¡Error!', 'Hubo un error al obtener el evento', 'error');
    }
  }

  const deleteEvent = async (id) => {
    event.preventDefault();

    try {
        Swal.fire({
            icon: 'question',
            title: '¿Deseas eliminar este evento?',
            text: 'Una vez eliminado no se podrá recuperar',
            confirmButtonColor: 'rgb(249 115 22)',
            cancelButtonColor: 'rgb(239 68 68)',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            reverseButtons: true,
        }).then(async result => {
            if(result.isConfirmed) {
                const response = await clienteAxios.delete(`/events/delete/${id}`, getConfig());

                JSON.stringify(response.data);

                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'El evento fue eliminado correctamente',
                }).then(async result2 => {
                    if(result2.isConfirmed || result2.isDismissed){
                        await getInfoEvents();
                    }
                })
            }
        });
    } catch (error) {
        Swal.fire('¡Error!', 'Hubo un error al obtener el evento', 'error').then(async result => {
            if(result.isConfirmed || result.isDismissed){
                await getInfoEvents();
            }
        })
    }
  }

  return (
    <div className="">
      <div className="flex justify-between items-center px-7 mt-5">
        <h1 className="text-2xl my-4 text-center text-gray-800 font-bold uppercase">
          Próximos eventos
        </h1>
        <div className="flex justify-end">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2"/>
            Registrar evento
          </button>
        </div>
      </div>
      {/* CONTENEDOR EVENTOS */}
      <div className="px-7 mt-5">
        {infoEvents.map((event, key) => (
          <div
            className="w-full bg-white shadow-lg p-4 rounded-md mt-4 flex flex-col md:flex-row"
            key={key}
          >
            <div className="w-2/3 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-2 md:mt-0 my-5 lg:my-0">
              <img src={noAvailable} alt="Imagen Veterinaria" />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row mx-auto w-full">
              <div className="lg:pr-3 w-full">
                {/* Detalles sucursal */}
                <h3 className="font-bold uppercase text-orange-500 pl-3 text-left">
                  {event.nombre}
                </h3>
                <p className="pl-3 text-left font-semibold">
                  Fecha: <span className="font-normal">{event.fecha}</span>
                </p>
                <p className="pl-3 text-left font-semibold">
                  Hora: <span className="font-normal">{event.hora}</span>
                </p>
                <div>
                    <h5 className="pl-3 font-semibold mt-2">Descripción: </h5>
                    <p className="pl-3 text-left">{event.descripcion}</p>
                </div>
              </div>
            </div>
            {auth.user.id && (
                <div className="flex gap-3 flex-col mt-6 md:mt-0">
                    <button className="bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded transition-all duration-300 flex items-center gap-2" 
                        onClick={async () => await editEvent(event.id)}
                    >
                        <FontAwesomeIcon icon={faPencil} />    
                        Editar
                    </button>
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-4 rounded transition-all duration-300 flex items-center gap-2"
                        onClick={async () => await deleteEvent(event.id)}
                    >
                        <FontAwesomeIcon icon={faTrash}/>    
                        Eliminar
                    </button>
                </div>
            )}
          </div>
        ))}

        {infoEvents.length == 0 && (
            <h3 className="font-bold text-gray-500 text-2xl text-center">No hay eventos disponibles</h3>
        )}
      </div>

      {showModal && (
        <AddEventModal showModal={showModal} setShowModal={setShowModal} getInfoEvents={getInfoEvents} eventDetails={eventDetails}/>
      )}
    </div>
  );
};

export default NewEvent;
