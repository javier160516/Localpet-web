import React, { useEffect, useState } from 'react'
import Loader from '../../helpers/Loader'
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

const VeterinaryInfo = ({veterinary, setVeterinary, email, setEmail, telephone, setTelephone}) => {
    const [loader, setLoader] = useState(false);
    const [noExt, setNoExt] = useState({ value: '', error: '' });
    const [website, setWebsite] = useState({ value: '', error: '' });
    const [storeNumber, setStoreNumer] = useState({ value: '', error: '' });

    const handleEdit = async (e) => {
        e.preventDefault();
        setLoader(true);
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
        const data = {
            email: email.value,
            phone_number: telephone.value,
            no_ext: noExt.value,
            website: website.value,
            store_number: storeNumber.value
        }
        try {
            const response = await clienteAxios.put(`veterinary/edit/${id}`, data, config);
            console.log(response);
            if (response.status == 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Veterinaria Actualizada Correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoader(false)
            }
        } catch (error) {
            setLoader(false)
            if (error.response.status == 400) {
                setEmail({ ...email, error: error.response.data.errors.email });
                setTelephone({ ...telephone, error: error.response.data.errors.phone_number });
                setNoExt({ ...noExt, error: error.response.data.errors.no_ext });
                setWebsite({ ...website, error: error.response.data.errors.website });
            } else if (error.response.status == 403 || error.response.data.status == 404) {
                Swal.fire({
                    title: 'Lo sentimos',
                    text: `${error.response.data.msg}`,
                    icon: 'error',
                    confirmButtonColor: '#D33',
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.history.go(-2);
                    }
                })
            }
        }
    }

    return (
        <form className='w-10/12 mx-auto' onSubmit={handleEdit}>
            <div className='mt-5 text-center'>
                <label className='font-bold'>Clase de Actividad</label>
                <p className='bg-gray-100 rounded-md py-1'>{veterinary.class_activity}</p>
            </div>
            <div className='flex flex-col mt-2 md:mt-4 md:pt-3 justify-between md:flex-row gap-4 text-center'>
                <div className='flex-1'>
                    <label className='font-bold'>Correo Electrónico</label>
                    <div className='relative pb-6'>
                        <input
                            className='bg-gray-100 rounded-md py-1 px-2 w-full text-center'
                            placeholder='Escribe el email'
                            value={email.value}
                            onChange={(e) => setEmail({ value: e.target.value, error: '' })}
                        />
                        {email.error ? (
                            <p className='text-red-500 text-sm absolute bottom-0 left-0'>{email.error}</p>
                        ) : null}
                    </div>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>Teléfono</label>
                    <div className='relative pb-6'>
                        <input
                            className='bg-gray-100 rounded-md py-1 px-2 w-full text-center'
                            placeholder='Número teléfonico...'
                            value={telephone.value}
                            onChange={(e) => setTelephone({ value: e.target.value, error: '' })}
                        />
                        {telephone.error ? (
                            <p className='text-red-500 text-sm absolute bottom-0 left-0'>{telephone.error}</p>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:pt-3 justify-between md:flex-row gap-4 text-center'>
                <div className='flex-1'>
                    <label className='font-bold'>No Ext</label>
                    <div className='relative pb-6'>

                        <input
                            className='bg-gray-100 rounded-md py-1 px-2 w-full text-center'
                            placeholder='Ej: 5'
                            value={noExt.value}
                            onChange={(e) => setNoExt({ value: e.target.value, error: '' })}
                        />
                        {noExt.error ? (
                            <p className='text-red-500 text-sm absolute bottom-0 left-0'>{noExt.error}</p>
                        ) : null}
                    </div>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>No Int</label>
                    <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.no_int || 'S/N'}</p>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>Código Postal</label>
                    <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.code_postal}</p>
                </div>
            </div>
            <div className='flex flex-col md:py-3 justify-between md:flex-row gap-4 text-center'>
                <div className='flex-1'>
                    <label className='font-bold'>Colony</label>
                    <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.colony}</p>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>Calle</label>
                    <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.street}</p>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>Ubicación</label>
                    <p className='bg-gray-100 rounded-md py-1 px-2'>{veterinary.ubication}</p>
                </div>
            </div>
            <div className='flex flex-col md:py-3 justify-between md:flex-row gap-4 text-center'>
                <div className='flex-1'>
                    <label className='font-bold'>Página Web</label>
                    <div className='relative pb-6'>
                        <input
                            className='bg-gray-100 rounded-md py-1 px-2 w-full text-center'
                            placeholder='Página web'
                            value={website.value}
                            onChange={(e) => setWebsite({ value: e.target.value, error: '' })}
                        />
                        {website.error ? (
                            <p className='text-red-500 text-sm absolute bottom-0 left-0'>{website.error}</p>
                        ) : null}
                    </div>
                </div>
                <div className='flex-1'>
                    <label className='font-bold'>Número de Local</label>
                    <input
                        className='bg-gray-100 rounded-md py-1 px-2 w-full text-center'
                        placeholder='Número de local'
                        value={storeNumber.value}
                        onChange={(e) => setStoreNumer({ value: e.target.value, error: '' })}
                    />
                </div>
            </div>
            {loader ? (
                <div className='my-4'>
                    <Loader />
                </div>
            ) : null}
            <div className='w-full flex justify-end'>
                <button type='submit' className='border px-7 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg mb-2 transition-all duration-200'>Guardar</button>
            </div>
        </form>
    )
}

export default VeterinaryInfo