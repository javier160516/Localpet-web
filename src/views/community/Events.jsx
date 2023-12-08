import React, { useEffect, useState } from 'react'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import clienteAxios from '../../config/axios'
import { getConfig } from '../../utils/utils'

const Events = () => {
  const [event, setEvent] = useState([])
  const [name, setName] = useState({ value: '', error: '' })
  const [date, setDate] = useState({ value: '', error: '' })
  const [time, setTime] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })

  useEffect(() => {
    dataEvents();
  }, [])

  const dataEvents = async () => {
    try {
      const response = await clienteAxios.get(`/panel/events`, getConfig());
      console.log(response);
      if (response.data.status == 200) {
        console.log(response.data); //Borrar para no mostrar datos en la consola
        setEvent(response.data.events);
        setName({ value: response.data.events.Nombre, error: '' });
        setDate({ value: response.data.events.Fecha, error: '' });
        setTime({ value: response.data.events.Hora, error: '' });
        setDescription({ value: response.data.events.Descripcion, error: '' });

      }
    } catch (error) {
    }

  }

  return (
    <div>
      <Header />
      {event.length}
      {event.map(event_tmp => (
      <div className='flex flex-wrap py-6'>

      </div>
      ))}
      <Footer />
    </div>

  )

}

export default Events
