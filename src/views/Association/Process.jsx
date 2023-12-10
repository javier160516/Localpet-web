import React from 'react'
import Header from '../../components/associations/SecondNav';
import Footer from '../../components/templates/Footer';
const process = () => {
    return (
        <div className="">
            <Header />
            <div className='flex justify-center'>
            <div className="my-6 mb-6 max-w-lg rounded overflow-hidden shadow-lg">
                    <ul className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Proceso de Adopción</div>
                        <p className="text-gray-700 text-base">
                        Adoptar un perro es una decisión importante. A continuación, se detalla el proceso de adopción para garantizar que encuentres el compañero peludo perfecto y que ambos tengan una vida feliz juntos.
                        </p>
                        <li>Visita el refugio o centro de adopción de tu elección.</li>
                <li>Conoce a los perros disponibles y consulta con el personal para obtener información sobre sus necesidades y personalidades.</li>
                <li>Llena un formulario de solicitud de adopción proporcionado por el refugio. Deberás proporcionar detalles sobre tu hogar y estilo de vida.</li>
                <li>El personal del refugio revisará tu solicitud y puede realizar una entrevista para asegurarse de que cumples con los requisitos necesarios.</li>
                <li>Si tu solicitud es aprobada, podrás elegir a tu nuevo amigo peludo y llevarlo a su nuevo hogar.</li>
                <li>Además de una tarifa de adopción, es importante tener en cuenta los costos continuos de cuidado y atención del perro, como alimentación, atención veterinaria y más.</li>
                    </ul>
            </div>
            </div>
            <h1 className='mb-3 text-center text-orange-500 font-bold text-3xl uppercase'>Recuerda que adoptar un perro es un compromiso a largo plazo. Asegúrate de estar preparado para brindarle amor y cuidado a tu nuevo amigo.</h1>
            <Footer />
        </div>
    )
}

export default process
