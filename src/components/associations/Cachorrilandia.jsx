import React from 'react'
import logo from '../../assets/asociaciones/cachorrilandia.jpg'
import points from '../../assets/points.svg';


const Cachorrilandia = () => {
  const handleSubmit = ()=>{
    window.open('https://www.cachorrilandia.com/', '_blank')
    }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-10/12 bg-slate-50 shadow-md rounded-md py-5 px-3 grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='flex flex-col justify-center items-center w-10/12'>
          <h2 className='w-full text-center uppercase text-2xl font-bold text-orange-400 mb-5'>Cachorrilandia</h2>
          <p className='w-full text-1xl text-justify '>Un Refugio dirigido a<strong> perritas callejeras</strong> lactantes y cachorros. </p>
          <ul className='w-full py-3 px-5 mt-4 mb-4 lg:mb-0 list-none'>
            <li className='flex hover:ml-3 transition-all duration-300'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Son un refugio de los pequeños de cuatro patas</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Tel: 55 8037 2671</p>
            </li>
            <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Puedes apoyar a cachorrilandia comprando un bonito fondo de pantalla</p>
              </li>
              <li className='flex hover:ml-3 transition-all duration-300 mt-2'>
              <img src={points} loading='lazy' width={15} />
              <p className='ml-2'>Puedes donar directamente en las cuentas de Cachorrilandia</p>
              </li>
          </ul>
          <button onClick={handleSubmit} className='mx-auto transition-all duration-300 text-center mt-5 text-lg bg-gray-400 text-white py-1 px-4 hover:bg-orange-300 font-bold rounded-full mb-3'>Más información</button>
        </div>
        <div className='w-12/12 flex justify-end'>
          <img className='w-[500px]' src={logo} alt="gato" />
        </div>
      </div>
    </div>
  )
}

export default Cachorrilandia