import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import points from '../../assets/points.svg'
import logoMySoft from '../../assets/logo-mysoft.png';
const Footer = () => {
  return (
    <div className='bg-orange-400 py-4'>
      <div className='md:flex md:justify-center md:flex-wrap gap-5 w-10/12 mx-auto mb-4'>
        <div className='flex justify-center flex-1'>
          <ul className='w-10/12 flex flex-col justify-center text-white'>
            <Link to={'/'} className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Inicio</p>
            </Link>
            <Link to={'sobre-nosotros'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Nosotros</p>
            </Link>
            <Link to={''} className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Buscar Veterinaria</p>
            </Link>
          </ul>
        </div>
        <div className='flex justify-end flex-1'>
          <img src={logoMySoft} alt="logo mysoft" className='w-3/12'/>
        </div>
      </div>
      <div className='w-10/12 mx-auto flex justify-center'>
        <p className='text-white uppercase font-semibold text-center'>Derechos reservados localpet {new Date().getFullYear()}&copy;</p>
      </div>
    </div>
  )
}

export default Footer