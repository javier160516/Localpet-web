import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowLeft, faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth';

const NavSuperior = ({ showSidebar, setShowSidebar, styles, setStyles }) => {
    const {auth, setAuth} = useAuth();
   
    const hideSidebar = () => {
        setShowSidebar(!showSidebar)
        if (showSidebar) {
            setStyles('left-0 top-0 w-0 hidden md:inline-block md:w-1/3 lg:w-1/5 xl:w-1/4 h-full bg-orange-500 ease-in-out duration-500');
           
        } else {
            setStyles('left-[-150%] hidden')
        }
    }
    useEffect(() => {
        // console.log(auth, ' desde navSuperior');
        const width = window.innerWidth;
        if(width <= 768){
            setShowSidebar(false);
            setStyles('left-[-150%] hidden')
            
        }
    }, [])
    return (
        <div className='w-full bg-gray-100 p-3 shadow-md transition-all duration-300 flex justify-between'>
            <div className='flex items-center'>
                <button type='button' onClick={() => hideSidebar()} className='block hover:cursor-pointer h-6 outline-none'>
                    <FontAwesomeIcon icon={faBars} className='h-full' /> 
                </button>
            </div>
            <div className='flex items-center'>
                <div className='bg-orange-500 rounded-full w-9 h-9 bg-[url("./assets/prueba-face.jpg")] bg-cover bg-center hover:cursor-pointer'>
                </div>
                <p className='ml-3'>{auth.user.name} {auth.user.last_name}</p>
            </div>
        </div>
    )
}

export default NavSuperior