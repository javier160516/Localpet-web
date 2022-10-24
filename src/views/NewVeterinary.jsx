import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/templates/footer';
import Header from '../components/templates/Header'
import clienteAxios from '../config/axios';
import Loader from '../helpers/Loader';

const NewVeterinary = () => {
    const [veterinaries, setVeterinaries] = useState([]);
    const [selectVet, setSelecVet] = useState('');
    const [clee, setClee] = useState({ value: '', error: '' });
    const [name, setName] = useState({ value: '', error: '' });
    const [businessName, setBusinessName] = useState({ value: '', error: '' });
    const [classActivity, setClassActivity] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [street, setStreet] = useState({ value: '', error: '' });
    const [extNumber, setExtNumber] = useState({ value: '', error: '' });
    const [intNumber, setIntNumber] = useState({ value: '', error: '' });
    const [colony, setColony] = useState({ value: '', error: '' });
    const [postalCode, setPostalCode] = useState({ value: '', error: '' });
    const [location, setLocation] = useState({ value: '', error: '' });
    const [telephone, setTelephone] = useState({ value: '', error: '' });
    const [website, setWebsite] = useState({ value: '', error: '' });
    const [longitude, setLongitude] = useState({ value: '', error: '' });
    const [latitude, setLatitude] = useState({ value: '', error: '' });
    const [storeNumber, setStoreNumber] = useState({ value: '', error: '' });
    const [imgUrl, setImgUrl] = useState({ value: '', error: '' });

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getVeterinaries(); 
    }, []);

    const getVeterinaries = async () => {
        try {
            const response = await clienteAxios.get('https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/Veterinaria/23/1/1000/dcd3720b-ed53-44d8-9630-da796b73fe3f');

            if (response.status == 200) {
                setVeterinaries([response.data]);
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        if (selectVet) {
            const veterinaria = veterinaries[0].find(vet => selectVet == vet.CLEE ? vet : null);

            const { CLEE, Nombre, Razon_social, Clase_actividad, CP, Ubicacion, Colonia, Calle, Num_Exterior, Telefono, Correo_e, Sitio_internet, Longitud, Latitud, numero_local } = veterinaria;

            setClee({ value: CLEE, error: '' });
            setName({ value: Nombre, error: '' });
            setBusinessName({ value: Razon_social, error: '' });
            setClassActivity({ value: Clase_actividad, error: '' });
            setEmail({ value: Correo_e, error: '' });
            setStreet({ value: Calle, error: '' });
            setExtNumber({ value: Num_Exterior, error: '' });
            setIntNumber({ value: Num_Exterior, error: '' });
            setColony({ value: Colonia, error: '' });
            setPostalCode({ value: CP, error: '' });
            setLocation({ value: Ubicacion, error: '' });
            setTelephone({ value: Telefono, error: '' });
            setWebsite({ value: Sitio_internet, error: '' });
            setLongitude({ value: Longitud, error: '' });
            setLatitude({ value: Latitud, error: '' });
            setStoreNumber({ value: numero_local, error: '' });
        }
    }, [selectVet])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        const data = new FormData();
        data.append('clee', clee.value)
        data.append('name', name.value);
        data.append('business_name', businessName.value);
        data.append('class_activity', classActivity.value);
        data.append('email', email.value);
        data.append('street', street.value);
        data.append('no_ext', extNumber.value);
        data.append('no_int', intNumber.value);
        data.append('colony', colony.value);
        data.append('code_postal', postalCode.value);
        data.append('location', location.value);
        data.append('phone_number', telephone.value);
        data.append('website', website.value);
        data.append('longitude', longitude.value);
        data.append('latitude', latitude.value);
        data.append('store_number', storeNumber.value);
        data.append('imgUrl', imgUrl.value);

        const token = localStorage.getItem('localtoken');
        if (!token) {
            setLoading(false);
            return;
        }
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }

        try {
            const response = await clienteAxios.post('/veterinary/create', data, config);
            if (response.status == 201) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Veterinaria Creada Correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                voidForm(); 
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
            if (error.response.status == 400) {
                setClee({ ...clee, error: error.response.data.errors.clee });
                setName({ ...name, error: error.response.data.errors.name });
                setEmail({ ...email, error: error.response.data.errors.email });
                setStreet({ ...street, error: error.response.data.errors.street });
                setColony({ ...colony, error: error.response.data.errors.colony });
                setPostalCode({ ...postalCode, error: error.response.data.errors.code_postal });
                setLocation({ ...location, error: error.response.data.errors.location });
                setTelephone({ ...telephone, error: error.response.data.errors.phone_number });
                setLongitude({ ...longitude, error: error.response.data.errors.longitude });
                setLatitude({ ...latitude, error: error.response.data.errors.latitude });
            } else if (error.response.status == 403) {
                Swal.fire({
                    title: '¡Veterinaria Existente!',
                    text: 'Por favor, verifica que la veterinaria sea la correcta',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        voidForm();
                    }
                })
            } else if (error.response.status == 401) {
                Swal.fire({
                    title: '¡Error!',
                    text: 'Lo sentimos, no tienes permitido acceder a esta pestaña',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                })
            }
        }
    }

    const voidForm = () => {
        setSelecVet('');
        setClee({ value: '', error: '' });
        setName({ value: '', error: '' });
        setBusinessName({ value: '', error: '' });
        setClassActivity({ value: '', error: '' });
        setEmail({ value: '', error: '' });
        setStreet({ value: '', error: '' });
        setExtNumber({ value: '', error: '' });
        setIntNumber({ value: '', error: '' });
        setColony({ value: '', error: '' });
        setPostalCode({ value: '', error: '' });
        setLocation({ value: '', error: '' });
        setTelephone({ value: '', error: '' });
        setWebsite({ value: '', error: '' });
        setLongitude({ value: '', error: '' });
        setLatitude({ value: '', error: '' });
        setStoreNumber({ value: '', error: '' });
        setImgUrl({ value: '', error: '' });
    }

    return (
        <div className=' bg-slate-200 overflow-hidden'>
            <div className=''>
                <Header />
                <div className='flex justify-center items-center '>
                    <div className='w-9/12 sm:w-9/12 md:w-9/12 lg:w-6/12 bg-white shadow-lg border rounded-lg px-4 py-5 my-5'>
                        <h1 className='text-center text-xl font-bold text-orange-500'>AGREGA TU VETERINARIA</h1>
                        <form className='py-5 grid  grid-cols-1 md:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2'>
                                <label className='flex-1 font-bold block ml-2 mb-1 text-sm'>Seleccione el nombre de la veterinaria</label>

                                <select
                                    className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                    value={selectVet}
                                    onChange={(e) => setSelecVet(e.target.value)}
                                >
                                    <option value="" disabled >Seleccione una veterinaria</option>
                                    {veterinaries.length === 0 ? (
                                        <option disabled >no hay resultados</option>
                                    ) : (
                                        veterinaries[0].map(veterinaria => (
                                            <option key={veterinaria.CLEE} value={veterinaria.CLEE}>{veterinaria.Nombre}</option>
                                        )))}
                                </select>
                                {/* INICIO NOMBRE */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 my-4'>
                                    <label className=' flex-1 font-bold block mb-1 ml-2  text-sm'>Nombre de la veterianria</label>
                                    <input
                                        disabled
                                        placeholder='Nombre veterinaria'
                                        id="name"
                                        type="text"
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={name.value}
                                        onChange={(e) => setName({ value: e.target.value, error: '' })}
                                    />

                                    {name.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{name.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN NOMBRE */}
                                {/* INICIO CODIGO POSTAL */}
                                <div className='flex flex-col justify-center mb-4'>
                                    <label className='flex-1 font-bold block mb-1 ml-2 text-sm'>Código postal</label>
                                    <input
                                        disabled
                                        placeholder='Ej: 77500'
                                        id="postalCode"
                                        type="text"
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={postalCode.value}
                                        onChange={(e) => setPostalCode({ value: e.target.value, error: '' })}
                                    />
                                    {postalCode.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{postalCode.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN CODIGO POSTAL */}
                                {/* INICIO LOCATION */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block mb-1 ml-2 text-sm '>Ubicación</label>
                                    <input
                                        disabled
                                        id='location'
                                        placeholder='Sm 1 Mz 1 Lote 1'
                                        type="text"
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={location.value}
                                        onChange={(e) => setLocation({ value: e.target.value, error: '' })}
                                    />
                                    {location.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{location.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN LOCATION */}
                                {/* INICIO COLONIA */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm '>Región o Colonia</label>
                                    <input
                                        disabled
                                        id='colony'
                                        placeholder='Región 1'
                                        type="text"
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={colony.value}
                                        onChange={(e) => setColony({ value: e.target.value, error: '' })}
                                    />
                                    {colony.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{colony.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN COLONIA */}
                                {/* INICIO CALLE */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm'>Calle</label>
                                    <input
                                        // id='calle'
                                        disabled
                                        placeholder='Calle 1'
                                        type="text"
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={street.value}
                                        onChange={(e) => setStreet({ value: e.target.value, error: '' })}
                                    />
                                    {street.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{street.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN CALLE */}
                                {/* INICIO NUMERO EXTERIOR */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm'>Número Exterior</label>
                                    <input
                                        disabled
                                        placeholder='Num Ext 1'
                                        type="text" className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={extNumber.value}
                                        onChange={(e) => setExtNumber({ value: e.target.value, error: '' })}
                                    />
                                    {extNumber.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{extNumber.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN NUMERO EXTERIOR */}
                                {/* INICIO TELEFONO */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm'>Teléfono</label>
                                    <input
                                        placeholder='998 339 4030'
                                        className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={telephone.value}
                                        onChange={(e) => setTelephone({ value: e.target.value, error: '' })}
                                    />
                                    {telephone.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{telephone.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN TELEFONO */}
                                {/* INICIO EMAIL */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm'>Correo</label>
                                    <input

                                        placeholder='correo@correo.com'
                                        type="email" className='focus:outline-none border-solid border border-gray-300 rounded-lg py-1 px-2 w-full'
                                        value={email.value}
                                        onChange={(e) => setEmail({ value: e.target.value, error: '' })}
                                    />
                                    {email.error ? (
                                        <p className='ml-2 text-xs text-red-500 mt-2'>{email.error}</p>
                                    ) : null}
                                </div>
                                {/* FIN EMAIL */}
                                {/* INICIO IMAGEN */}
                                <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3 mb-4'>
                                    <label className='font-bold block ml-2 mb-1 text-sm'>Sube la foto de tu Veterinaria</label>
                                    <input
                                        type="file"
                                        accept='image/png, image/jpeg, image/jpg'
                                        className='focus:outline-none px-2 py-1 w-full cursor-pointer'
                                        onChange={(e) => setImgUrl({ value: e.target.files[0], error: '' })}
                                    />
                                </div>
                                {/* FIN IMAGEN */}
                                {loader ? (
                                    <div className='flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-2 my-2'>
                                        <Loader />
                                    </div>
                                ) : null}
                                <div className='flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-2'>
                                    <button
                                        type='submit'
                                        className='focus:outline-none hover:bg-orange-700 transition-all duration-300 bg-orange-500  px-8 py-3 rounded-xl w-7/12  md:w-5/12 lg:w-6/12 xl:w-5/12  text-white font-bold'>Agregar Veterinaria</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default NewVeterinary