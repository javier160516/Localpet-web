import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/localpet.png';

const Sidebar = ({ showSidebar, styles, setStyles }) => {


  return (
    <div className={styles}>
      <div>
        <div className='border-b border-b-orange-400 w-full'>
          <div className='px-3 w-1/2 mx-auto my-4'>
            <img src={logo} alt="logo-localpet" className='' />
          </div>
        </div>
        <div>
          <Link to={'/panel/veterinary'}> Inicio </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar