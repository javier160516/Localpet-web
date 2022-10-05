import React from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';

const SearchVeterinary = () => {
  const position = [21.138872, -86.834190];
  return (
    <div className='h-screen overflow-hidden'>
      <Header />
      <div className='bg-[#E5E9F2] py-5'>
        <h1 className='text-center text-orange-500 font-bold text-3xl uppercase'>Buscar Veterinaria</h1>
        <div className='w-10/12 my-5 mx-auto shadow-lg'>
          <MapContainer style={{height: 450}} center={position} zoom={12} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                este es un popover
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchVeterinary