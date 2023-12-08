import React from 'react'
import Header from '../../components/templates/Header';
import Footer from '../../components/templates/Footer';
import Photos from '../../helpers/CarouselAdop';
import { Link } from 'react-router-dom';
import points from '../../assets/points.svg'

const Adoption = () => {
    return (
        <div className="bg-[#FAFAFA] w-full">
            <Header />
            <div className='flex justify-center mb-20 PhotosPet'>
                <div className='text-black flex flex-1 justify-center'>
                <Photos />
                    <ul className='flex px-12 mb-4 gap-6 flex-col justify-center text-black'>
                        <p className='w-full text-center text-2xl font-bold'>¿Te interesa alguna de las opciones?</p>
                        <a href='https://www.instagram.com/cachorrilandia/?hl=es-la' target="_blank" relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2 font-bold'>NALA - Cachorrilandia</p>
                        </a>
                        <a href='https://www.facebook.com/SantuarioAnimalAve/' target="_blank" relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2 font-bold'>MAYA- Santuario Animal AVE</p>
                        </a>
                        <a href='https://www.facebook.com/ProyectoERAasociacion/' target="_blank" relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2 font-bold'>KIRA- Proyecto ERA</p>
                        </a>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Adoption
