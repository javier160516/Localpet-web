import React from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
const SearchVeterinary = () => {

  return (
    <div className='h-screen overflow-hidden'>
      <Header />
      <div className='bg-[#E5E9F2] py-5'>
        <h1 className='text-center text-orange-500 font-bold text-3xl uppercase'>Buscar Veterinaria</h1>
        <div className='w-6/12 h-1/2'>
          <MapContainer center={[21.138872, -86.834190]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[21.138872, -86.834190]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
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