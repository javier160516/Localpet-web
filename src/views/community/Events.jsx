import React, { useEffect, useState } from 'react'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import clienteAxios from '../../config/axios'
import { getConfig } from '../../utils/utils'
import noAvailable from "../../assets/imagen-no-disponible.jpg";


const Events = () => {
  const [events, setEvents] = useState([])
  const [name, setName] = useState({ value: '', error: '' })
  const [date, setDate] = useState({ value: '', error: '' })
  const [time, setTime] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [imgurl, setImgurl] = useState({ value: '', error: '' })
  const [datosurl, setDatosurl] = useState({ value: '', error: '' })

  useEffect(() => {
    dataEvents();
  }, [])

  const dataEvents = async () => {
    try {
      const response = await clienteAxios.get('/events', getConfig());
      console.log(response);
      if (response.data.status == 200) {
        console.log(response.data); //Borrar para no mostrar datos en la consola
        setEvents(response.data.events);
        setName({ value: response.data.events.Nombre, error: '' });
        setDate({ value: response.data.events.Fecha, error: '' });
        setTime({ value: response.data.events.Hora, error: '' });
        setDescription({ value: response.data.events.Descripcion, error: '' });
        setImgurl({ value: response.data.events.Img_url, error: '' });
        setDatosurl({ value: response.data.events.Datosurl, error: '' });

      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <Header />
      <div className='px-7 mt-5'>
        <h4 className='text-3xl text-center font-semibold text-orange-500 '>Próximos eventos</h4>
      </div>
      {/* CONTENEDOR EVENTOS */}
      <div className="px-7 mt-5 mb-5">
        {events.map((event, key) => (
          <div
            className="w-full bg-white shadow-lg rounded-md mt-4 flex flex-col md:flex-row"
            key={key}
          >
            <div className="w-2/3 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-2 md:mt-0 my-5 lg:my-0">
              <img src={noAvailable} alt="Imagen Veterinaria" />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row mx-auto w-full pt-4">
              <div className="lg:pr-3 w-full">
                {/* Detalles sucursal */}
                <h3 className="text-lg font-bold uppercase text-orange-500 pl-3 text-left mb-4">
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
          </div>
        ))}

        {events.length == 0 && (
            <h3 className="font-bold text-gray-500 text-2xl text-center">No hay eventos disponibles</h3>
        )}
      </div>
      <Footer />
    </div>

  )

}

export default Events