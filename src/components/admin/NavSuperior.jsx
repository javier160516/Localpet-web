import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavSuperior = ({ showSidebar, setShowSidebar, styles, setStyles }) => {

    const hideSidebar = (show) => {
        setShowSidebar(!show)
        if (show) {
            setStyles('uppercase left-0 top-0 w-0 md:w-3/12 xl:w-2/12 h-full bg-orange-500 ease-in-out duration-500');
        } else if(show) {
            setStyles('left-[-150%] hidden')
        }
    }
    useEffect(() => {
        const width = window.innerWidth;
        if(width <= 768){
            setShowSidebar(false);
            setStyles('left-[-150%] hidden')

        }
    }, [])
    return (
        <div className='w-full bg-gray-100 p-3 shadow-md transition-all duration-300 flex justify-between'>
            <div className='flex items-center'>
                <button type='button' onClick={() => hideSidebar(!showSidebar)} className='block hover:cursor-pointer h-6'>
                    <FontAwesomeIcon icon={faBars} className='h-full' /> 
                </button>
            </div>
            <div>
                aqui va la foto de perfil
            </div>
        </div>
    )
}

export default NavSuperior