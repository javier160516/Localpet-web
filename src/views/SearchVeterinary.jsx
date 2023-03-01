import React, { useState, useEffect } from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import imgVet from '../assets/imagen-veterinaria.png';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SearchVeterinary = () => {
  document.title = 'Localpet | Buscar Veterinaria'
  const [position, setPosition] = useState([21.1616414, -86.8517275])
  const [countPosition, setCountPosition] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setPosition([pos.coords.latitude, pos.coords.longitude])
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
                <Marker position={position} >
                  <Popup>
                    <img src={imgVet} />
                    <p className='font-bold text-[10px]'>CANCUN DOGH GROOMING</p>
                  </Popup>
                </Marker>
              ) : null}
            </MapContainer>
          </div>
          <div className='w-10/12 mx-auto mt-5'>
            <h2 className='text-xl text-center font-bold text-orange-500 uppercase'>Descripción de la veterinaria</h2>
            <div className='w-full h-full bg-white shadow-lg p-4 rounded-md mt-4 flex flex-col md:flex-row'>
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
                <div className='w-full h-full flex flex-col justify-between'>
                  <div>
                    {/* HORARIOS */}
                    <div className="my-3">

                      <Accordion>
                        <AccordionItem>
                          <AccordionHeader className='w-full flex justify-between items-center border-b  pb-3'>
                            <h3 className='accordion-title font-bold uppercase text-orange-500 text-center text-lg leading-3'>Horarios</h3>
                            <FontAwesomeIcon icon={faPlus} size={'1x'} className='text-orange-500 text-xl mr-2' />
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="accordion-body">
                              <ul className='w-full overflow-y-auto'>
                                <li className='my-2'>
                                  <span className='font-bold'>Lunes:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Marter:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Miércoles:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Jueves:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Viernes:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Sábado:</span> 9:00 am - 9:00 pm
                                </li>
                                <li className='my-2'>
                                  <span className='font-bold'>Domingo:</span> Descanso
                                </li>
                              </ul>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    {/* SERVICIOS */}
                    <div className="my-3">
                      <Accordion>
                        <AccordionItem>
                          <AccordionHeader className='w-full flex justify-between items-center border-b  pb-3'>
                            <h3 className='accordion-title font-bold uppercase text-orange-500 text-center text-lg leading-3'>Servicios</h3>
                            <FontAwesomeIcon icon={faPlus} size={'1x'} className='text-orange-500 text-xl mr-2' />
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="accordion-body">
                              <ul className='w-full overflow-y-auto pl-5'>
                                <li className='list-disc my-2 '>Medicina preventiva</li>
                                <li className='list-disc my-2'>Análisis en Laboratorio</li>
                                <li className='list-disc my-2'>Radiología Digital</li>
                                <li className='list-disc my-2'>Ecografía</li>
                                <li className='list-disc my-2'>Peluquería</li>
                                <li className='list-disc my-2'>Guardería Canina y Felina</li>
                                <li className='list-disc my-2'>Análisis de Triquina</li>
                                <li className='list-disc my-2'>Obstetricia y Reproducción</li>
                                <li className='list-disc my-2'>Vacunaciones</li>
                              </ul>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                  {/* COMENTARIOS */}
                  <div className='hover:ml-3 transition-all duration-300 hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faChevronRight} size={'xl'} className='text-orange-500 text-xl mr-2' />
                    <NavLink 
                      to={`/buscar-veterinaria/32`} 
                      className='font-bold text-orange-500 hover:text-orange-600'
                      >Ver Comentarios</NavLink>

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