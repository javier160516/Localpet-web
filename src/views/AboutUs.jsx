import React from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'

const AboutUs = () => {
  return (
    <div className='bg-[#E5E9F2] w-full'>
      <Header />
      <div className="bg-[url('./assets/banner-about.jpg')] py-32 h-auto bg-cover bg-bottom bg-no-repeat bg-fixed w-full">
        <h1 className='w-full text-white text-center uppercase font-bold text-4xl py-5'>Sobre Nosotros</h1>
      </div>
      {/* Nosotros */}
      <div className='w-11/12 md:w-10/12 mx-auto shadow-md my-10 p-5 bg-gray-100'>
        <h2 className='text-center text-2xl font-AkayaKanadaka uppercase font-bold text-orange-600'>My Happy Pet</h2>
        <div className='my-5'>
          <p>
          MYSOFT TECHNOLOGY es una empresa dedicada al desarrollo de software multiplataforma y multilenguaje fundada en 2020 en la ciudad de <span className='font-bold'>Cancún Quintana Roo, México. </span>
          </p>
          <p className='mt-3'>
            <span className='font-bold text-orange-500'>My Happy Pet</span> surgió a través del problema de que la mascota de alguna persona se enferma o sufre un accidente a mitad de la noche. Gracias a esta problematica se planteó la pregunta de, ¿Porqué no hacer un sistema dondé una persona pueda registrarse y localizar su veterinaria más cercana usando geolocalización?
          </p>
        </div>
      </div>
      <div className='lg:flex gap-5 w-11/12 md:w-10/12 mx-auto mb-4'>
        {/* MISIÓN */}
        <div className='mx-auto shadow-md my-5 p-5 flex-1 bg-gray-100'>
          <h2 className='text-center text-2xl font-AkayaKanadaka uppercase font-bold text-orange-600'>Misión</h2>
          <p className='mt-4'>Nuestra misión es brindar a las clÍnicas veterinarias y usuarios un medio la cual buscar clínicas cercanas o promocionar sus servicios , de una manera mas eficiente y practica.</p>
        </div>
        {/* VISIÓN */}
        <div className='mx-auto shadow-md my-5 p-5 flex-1 bg-gray-100'>
          <h2 className='text-center text-2xl font-AkayaKanadaka uppercase font-bold text-orange-600'>Visión</h2>
          <p>Nuestra visión es ofrecer a nuestros clientes un sistemas de fácil interacción donde podrán encontrar las veterinarias mas cercanas a su alcance, nuestro sistema permite el registro de nuevas veterinarias con el mismo usuario</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs