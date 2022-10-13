import React, { useState, useEffect } from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import imgVet from '../assets/imagen-veterinaria.png';

const SearchVeterinary = () => {
  document.title = 'Localpet | Buscar Veterinaria'
  const [position, setPosition] = useState([21.1616414, -86.8517275])
  const [countPosition, setCountPosition] = useState(0)
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
  // const position = [21.138872, -86.834190];
  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-screen overflow-y-auto'>
        <Header />
        <div className='bg-[#E5E9F2] py-5 overflow-y-auto'>
          <h1 className='text-center text-orange-500 font-bold text-3xl uppercase'>Buscar Veterinaria</h1>
          <div className='w-10/12 my-5 mx-auto shadow-lg'>
            <MapContainer style={{ height: 450 }} center={position} zoom={18} >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            {countPosition ? (
                <Marker position={position}>
                  <Popup>
                    este es un popover
                  </Popup>
                </Marker>
            ) : null}
            </MapContainer>
          </div>
          <div className='w-10/12 mx-auto mt-5'>
            <h2 className='text-xl text-center font-bold text-orange-500 uppercase'>Descripción de la veterinaria</h2>
            <div className='w-full bg-white shadow-lg p-4 rounded-md mt-4 flex flex-col md:flex-row'>
              <div className='w-2/3 sm:w-5/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-2 md:mt-0 my-5 lg:my-0'>
                {/* FOTO */}
                <img src={imgVet} alt="Imagen Veterinaria" />
              </div>
              <div className='flex gap-4 flex-col sm:flex-row mx-auto w-full'>
                <div className='lg:pr-3 w-full'>
                  {/* Detalles sucursal */}
                  <h3 className='font-bold uppercase text-orange-500 text-center'>Datos Generales</h3>
                  <h4 className='font-bold text-center my-2'>CANCUN DOGH GROOMING VETERINARIA</h4>
                  <p className='text-center font-semibold'>Email: veterinaria@gmail.com</p>
                  <p className='text-center font-semibold'>Tel: 9983394030</p>
                </div>
                <div className='w-full'>
                  {/* Servicios de la veterinaria */}
                  <h3 className='font-bold uppercase text-orange-500 text-center'>Servicios</h3>
                  <div className='flex flex-col items-center w-full h-52 overflow-y-auto'>
                    <span>1.- ejemplo</span>
                    <span>2.- ejemplo</span>
                    <span>3.- ejemplo</span>
                    <span>4.- ejemplo</span>
                    <span>5.- ejemplo</span>
                    <span>6.- ejemplo</span>
                    <span>7.- ejemplo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SearchVeterinary