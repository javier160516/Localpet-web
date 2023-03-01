import React from 'react'
import image404 from '../assets/error404.png';

const Error404 = () => {
    return (
        <div className='bg-gray-100 h-screen overflow-hidden'>
            <div className="h-full flex justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-6xl font-semibold text-gray-700'>¡Oh no!, Error 404</h1>
                    <div className='-mt-12'>
                        <img src={image404} alt="Perrito dudoso" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error404