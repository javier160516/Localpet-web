import React, { useEffect, useState } from 'react'
import CommentsCard from '../../components/admin/CommentsCard'
import clienteAxios from '../../config/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons'

const VeterinaryComments = () => {
    document.title = 'Localpet | Comentarios'
    const [veterinaries, setVeterinaries] = useState([])

    useEffect(() => {
        getVeterinaries();
    }, [])

    const getVeterinaries = async () => {
        try {
            const token = localStorage.getItem('localtoken');
            if (!token) {
                setLoading(false);
                return;
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await clienteAxios.get(`/panel/veterinaries`, config);
            if (response.data.status == 200) {
                setVeterinaries(response.data.veterinaries)
            }
        } catch (error) {
            console.log(error.response);
        }
    }
    return (
        <div>
            {veterinaries.length !== 0 ? (
                <div className='w-11/12 mx-auto mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        veterinaries.map(vet => (
                            <CommentsCard
                                key={vet.id}
                                vet={vet}
                            />
                        ))
                    }
                </div>
            ) : (
                <div className='h-screen flex items-center justify-center flex-col'>
                    <FontAwesomeIcon icon={faFaceSadCry} className='text-9xl text-gray-400 mb-4' />
                    <p className='text-3xl font-bold text-gray-400 uppercase'>Lo sentimos, no hay registros</p>
                </div>
            )}
        </div>
    )
}

export default VeterinaryComments