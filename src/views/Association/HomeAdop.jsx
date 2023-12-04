import React from 'react'
import Header from '../../components/associations/SecondNav';
import Footer from '../../components/templates/Footer';
import points from '../../assets/points.svg'
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div className='flex flex-col gap-1 justify-between h-[92vh]'>
            <Header />
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-items-center gap-7 mt-6'>
                <div className='text-black flex flex-1 justify-start'>
                    <ul className='flex px-12 flex-col justify-center text-black'>
                    <p className='w-full text-center text-2xl font-bold'>Te ofrecemos las siguientes opciones</p>
                        <Link to={'/asociaciones-procesos'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2'>Proceso de adopcion</p>
                        </Link>
                        <Link to={'/asociaciones-adopciones'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2'>Mascotas en adopcion</p>
                        </Link>

                        <Link to={'/asociaciones-exitos'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
                            <img src={points} loading='lazy' width={15} />
                            <p className='ml-2'>Historias de exito</p>
                        </Link>
                    </ul>
                <div className='flex flex-col gap-3 justify-center items-center flex-1'>
                    <p className='w-full text-center text-2xl font-bold'>Bienvenido nuestra pagina de ayuda en adopciones de perros.</p>
                    <h1 className='w-full text-center text-4xl font-bold md:text-4xl text-orange-400'>Encontrarás asociaciones que estan dando perritos en adopcion, el proceso de adopción y emocionantes historias de éxito.</h1>
                    <img className='flex items-center max-w-sm md:max-w-lg lg:w-full mb-5 lg:mb-0 h-96' src='https://liho.com.ar/wp-content/uploads/2023/07/love-of-dog-quotes-72a9a3f95f124ebba639ee8e11b1c024.jpg'></img>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home
