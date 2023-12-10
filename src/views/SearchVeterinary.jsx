import React, { useState, useEffect } from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { getConfig } from '../utils/utils';
import clienteAxios from '../config/axios';
import noAvailable from '../assets/imagen-no-disponible.jpg'

const SearchVeterinary = () => {
  document.title = 'My Happy Pet | Buscar Veterinaria'
  const [position, setPosition] = useState([21.1369628, -86.8757489])
  const [zoom, setZoom] = useState(13);
  const [countPosition, setCountPosition] = useState(0);
  const [veterinaries, setVeterinaries] = useState([]);
  const [veterinary, setVeterinary] = useState({});


  useEffect(() => {
    getVeterinaries();
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setPosition([pos.coords.latitude, pos.coords.longitude])
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
      }), function (error) {
        console.log('Ubicacion no activa');
      }
    }
    position.map(pos => {
      if (pos != '') {
        setCountPosition(countPosition + 1);
      }
    })
  }, [])

  const getVeterinaries = async () => {
    try {
      const veterinaries = await clienteAxios.get('/veterinary', getConfig());
      console.log(veterinaries.data)
      JSON.stringify(veterinaries.data);

      setVeterinaries(veterinaries.data.veterinaries);
    } catch (error) {
      setVeterinaries([]);
    }
  }

  const changePosition = async (coords) => {
    console.log(coords)
    veterinaries.forEach(veterinary => {
      if(veterinary.latitude.indexOf(coords.lat) >= 0 && veterinary.longitude.indexOf(coords.lng) >= 0){
        setVeterinary(veterinary);

        setPosition([veterinary.latitude, veterinary.longitude]);
        setZoom(16);
        
      }
    });

    console.log(veterinary);
  }

  // const position = [21.138872, -86.834190];
  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-screen overflow-y-auto'>
        <Header />
        <div className='bg-[#E5E9F2] py-5 overflow-y-auto'>
          <h1 className='text-center text-orange-500 font-bold text-3xl uppercase'>Buscar Veterinaria</h1>
          {/* Tab for search veterinaries with INEGI API */}
          {/* <div>
          <form className='w-10/12 my-5 mx-auto shadow-lg'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="flex justify-end relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CENTRO ANIMAL VETERINARIO" required/>
                <button type="submit" className="text-white absolute end-2.5 mx-6 bottom-2.5 bg-orange-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
          </form>
          </div> */}
          <div className='w-10/12 my-5 mx-auto shadow-lg'>
            <MapContainer style={{ height: 450 }} center={position} zoom={zoom} >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {countPosition ? (
                veterinaries.map((veterinary, key) => (
                  <Marker position={[veterinary.latitude, veterinary.longitude]} key={key} eventHandlers={{
                    click: (e) => {
                      changePosition(e.latlng);
                    }
                  }}>
                    <Popup >
                      este es un popover
                    </Popup>
                  </Marker>
                ))
               ) : null}
            </MapContainer>
          </div>

          {veterinary && veterinary.id ? (
              <div className='w-10/12 mx-auto mt-5'>
              <h2 className='text-xl text-center font-bold text-orange-500 uppercase'>Descripción de la veterinaria</h2>
              <div className='w-full bg-white shadow-lg p-4 rounded-md mt-4 flex flex-col md:flex-row'>
                <div className='w-2/3 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-2 md:mt-0 my-5 lg:my-0'>
                  {/* FOTO */}
                  {veterinary && veterinary.imgUrl ? (
                    <img src={veterinary.imgUrl} alt="Imagen Veterinaria" />
                  ) : (
                    <img src={noAvailable} alt="Imagen Veterinaria" />

                  )}
                </div>
                <div className='flex gap-4 flex-col sm:flex-row mx-auto w-full'>
                  <div className='lg:pr-3 w-full'>
                    {/* Detalles sucursal */}
                    <h3 className='font-bold uppercase text-orange-500 text-center'>{veterinary.name}</h3>
                    <h4 className='font-bold text-center my-2'>{veterinary.class_activity}</h4>
                    <p className='text-center font-semibold'>Email: {veterinary.email}</p>
                    <p className='text-center font-semibold'>Tel: {veterinary.phone_number}</p>
                  </div>
                  <div className='w-full'>
                    {/* Servicios de la veterinaria */}
                    <h3 className='font-bold uppercase text-orange-500 text-center'>Servicios</h3>
                    <div className='flex flex-col items-center w-full h-52 overflow-y-auto'>
                      <span>1.- Cirujano veterinario</span>
                      <span>2.- Cirujano veterinario</span>
                      <span>3.- Esterilizaciones</span>
                      <span>4.- Hospitalización</span>
                      <span>5.- Vacunas</span>
                      <span>6.- Veterinario de perros</span>
                      <span>7.- Veterinario de gatos</span>
                      <span>7.- Consulta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ): null}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SearchVeterinary