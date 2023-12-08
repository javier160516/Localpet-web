//Realizar un apartado para ofertar voluntariado para servicios de veterinaria
import React from 'react'
import Header from '../../components/templates/Header';
import Footer from '../../components/templates/Footer';
import img from '../../assets/img/img.png';

const Voluntary = () => {
  return (
    <div>
      <Header/>
      <img src={img} alt="logo-locatpet"/>
      <a href="www.mascotas.cancun.gob.mx">Ingresa aquí</a>
      <Footer/>
    </div>
  )
}

export default Voluntary;