import { Link } from 'react-router-dom'
import points from '../../assets/points.svg'
import logoMySoft from '../../assets/logo-mysoft.png';
const Footer = () => {
  return (
    <div className='bg-orange-500 py-4'>
      <div className='md:flex md:justify-center md:flex-wrap gap-6 w-10/12 mx-auto mb-4'>
        <div className='flex justify-start py-4 flex-1 text-white'>
          <p className='ml-2'>MYSOFT <br></br>Av. Las Torres MZ 4 LT 17 <br></br>CP 77500,<br></br>Cancún Quintana Roo.
            <Link to={'sobre-nosotros'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Políticas de privacidad</p>
            </Link>
            <Link to={'sobre-nosotros'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Términos y condiciones</p>
            </Link>
          </p>
        </div>

        <div className='flex justify-center flex-1'>
          <img src={logoMySoft} alt="logo mysoft" className='w-5/12' />
        </div>

        <div className='text-white flex flex-1 justify-start'>
          <ul className='flex px-12 flex-col justify-center text-white'>
        <p className='ml-2'>Mapa del sitio</p>
            <Link to={'/'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Inicio</p>
            </Link>
            <Link to={'sobre-nosotros'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Sobre de nosotros</p>
            </Link>

            <Link to={'../buscar-veterinaria'} relative="path" className='flex justify-center lg:justify-start hover:ml-3 transition-all duration-300 my-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Buscar Veterinaria</p>
            </Link>
          </ul>
        </div>


      </div>
      <div className='w-10/12 mx-auto flex justify-center'>
        <p className='text-white text-xs uppercase font-semibold text-center'>Derechos reservados My Happy Pet &copy;{new Date().getFullYear()}</p>
      </div>
      <p className='text-white text-xs uppercase font-semibold text-center'>Powered with ☕ and ❤️ by MySoft</p>
    </div>
  )
}

export default Footer