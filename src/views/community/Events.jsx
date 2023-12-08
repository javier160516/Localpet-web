import React, { useEffect, useState } from 'react'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import clienteAxios from '../../config/axios'
import { getConfig } from '../../utils/utils'
import points from '../../assets/points.svg'

const Events = () => {
  const [event, setEvent] = useState([])
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
      const response = await clienteAxios.get(`events`, getConfig());
      console.log(response);
      if (response.data.status == 200) {
        console.log(response.data); //Borrar para no mostrar datos en la consola
        setEvent(response.data.events);
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
      <div class="grid grid-flow-col auto-cols-max gap-20 py-3 justify-center">
      {event.map(event_tmp => (
        <div class="justify-center max-w-sm bg-white border border-gray-200 mb-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={event_tmp.img_url} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event_tmp.nombre}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{event_tmp.descripcion}</p>
            <a relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2 font-bold'>Se llevará acabo el día {event_tmp.fecha} </p>
            </a>
            <a relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2 font-bold'>En punto de las {event_tmp.hora} hrs</p>
            </a>
            <a href={event_tmp.datos_url} target='about-blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Más información
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      ))}
      </div>
      <Footer />
    </div>

  )

}

export default Events
