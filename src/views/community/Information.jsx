import React from 'react'
import Header from '../../components/templates/Header';
import Footer from '../../components/templates/Footer';

const Information = () => {
    return (
        <div className='w-full'>
            <Header />
            <div className="grid grid-row justify-center grid-col">
                <div className="row-start-2 row-span-2 ...">
                    <div className="max-w-sm my-6 mx-6 rounded overflow-hidden shadow-lg">
                        <h1 className='mb-3 text-center text-black-500 font-semibold text-2xl py-2 uppercase'>¡Consejos sobre el cuidado de tu mascota!</h1>
                        <div className="px-6 py-4">
                            <p>Respeto y cariño</p>
                            <li>Las mascotas no son juguetes ni objetos. Son seres que sienten y sufren. Antes de  adquirir  una mascota piensa si puedes cuidarla durante toda su vida que es hasta 15 años.</li>
                            <img src='http://www.abogadosdelosanimales.org/wp-content/uploads/2016/02/RespetoYCari§o4-253x300.jpg' />
                        </div>
                    </div>
                </div>
                <div className="row-end-3 ...">
                    <div className="max-w-sm my-6 mx-6 rounded overflow-hidden shadow-lg">
                        <h1 className='mb-3 text-center text-black-500 font-semibold text-2xl py-2 uppercase'>¡Consejos sobre el cuidado de tu mascota!</h1>
                        <div className="px-6 py-4">
                            <p>Protección</p>
                            <li>Dale un lugar seguro donde resguardarse del frio y calor.</li>
                            <img src='http://www.abogadosdelosanimales.org/wp-content/uploads/2016/05/casa3-300x219.jpg' />
                        </div>
                    </div>
                </div>
                <div className="row-start-1 row-end-4 ...">
                    <div className="max-w-sm my-6 mx-6 rounded overflow-hidden shadow-lg">
                        <h1 className='mb-3 text-center text-black-500 font-semibold text-2xl py-2 uppercase'>¡Consejos sobre el cuidado de tu mascota!</h1>
                        <div className="px-6 justify-center py-4">
                            <p>Alimentación</p>
                            <li>Dale alimentación diaria, sana y balanceada (croquetas). Siempre debe tener agua fresca y limpia. Lava sus platos diariamente.</li>
                            <img className='' src='http://www.abogadosdelosanimales.org/wp-content/uploads/2016/05/caricomida-242x300.jpg' />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Information
