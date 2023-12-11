import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";
import { getConfig } from "../../utils/utils";
import { useEffect } from "react";

const AddEventModal = ({ showModal, setShowModal, getInfoEvents, eventDetails }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [dateEvent, setDateEvent] = useState({ value: "", error: "" });
  const [hourEvent, setHourEvent] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [edit, setEdit] = useState(false);  

  useEffect(() => {
    setName({value: eventDetails.nombre, error: ''});
    setDateEvent({value: eventDetails.fecha, error: ''});
    setHourEvent({value: eventDetails.hora, error: ''});
    setDescription({value: eventDetails.descripcion, error: ''});
  }, [eventDetails]);

  const handleSubmit = async () => {
    event.preventDefault();

    try {
        const data = {
            nombre: name.value,
            fecha: dateEvent.value,
            hora: hourEvent.value,
            descripcion: description.value
        };

        let response = null;
        
        if(eventDetails && eventDetails.id){
            response = await clienteAxios.put(`/events/edit/${eventDetails.id}`, data, getConfig());
        }else{
            response = await clienteAxios.post('/events/create', data, getConfig());
        }
        

        JSON.stringify(response.data);

        let text = '';

        if(eventDetails){
            text = 'Evento editado correctamente'
        }else{
            text = 'Evento agregado correctamente'
        }

        Swal.fire('¡Éxito!', text, 'success').then(async result => {
            if(result.isConfirmed || result.isDismissed){
                setShowModal(false);
                await getInfoEvents();

            }
        });

    } catch (error) {
        if(error.response.status == 400){
            setName({...name, error: error.response.data.errors.nombre});
            setDateEvent({...dateEvent, error: error.response.data.errors.fecha});
            setHourEvent({...hourEvent, error: error.response.data.errors.hora});
            setDescription({...description, error: error.response.data.errors.descripcion});
        }else{
            Swal.fire('¡Error!', 'Hubo un error, por favor, inténtelo más tarde', 'error');
        }
    }
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-1/3">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between items-center p-5 border-b border-solid border-blueGray-200 rounded-t gap-3">
              <h3 className="text-xl font-semibold m-0">Registrar evento</h3>
              <div
                className="hover:cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full">
                <div className="flex justify-center -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="name"
                      type="text"
                      placeholder="Ejemplo: Jornada de vacunación"
                      value={name.value}
                      onChange={(e) => setName({value: e.target.value, error: ''})}
                    />
                    {name.error && (
                      <p className="text-red-500 text-xs italic">
                        Este campo es obligatorio.
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="dateEvent"
                    >
                      Fecha del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="dateEvent"
                      type="date"
                      value={dateEvent.value}
                      onChange={(e) => setDateEvent({value: e.target.value, error: ''})}
                    />
                    {dateEvent.error && (
                      <p className="text-red-500 text-xs italic">
                        Este campo es obligatorio.
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="hourEvent"
                    >
                      Hora del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="hourEvent"
                      type="time"
                      value={hourEvent.value}
                      onChange={(e) => setHourEvent({value: e.target.value, error: ''})}
                    />
                    {hourEvent.error && (
                      <p className="text-red-500 text-xs italic">
                        Este campo es obligatorio.
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Descripción del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="description"
                      type="text"
                      placeholder="Ejemplo: dirección, adicionales, etc"
                      value={description.value}
                      onChange={(e) => setDescription({value: e.target.value, error: ''})}
                    />
                    {description.error && (
                      <p className="text-red-500 text-xs italic">
                        Este campo es obligatorio.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 -mx-3 mb-6">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => handleSubmit()}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddEventModal;
