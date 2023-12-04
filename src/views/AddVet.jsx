import React, {useState, useEffect, Component} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../components/templates/Header';
import Footer  from '../components/templates/Footer';
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';
import Loader from '../helpers/Loader';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const AddVet =()=>{
    const [name, setName] = useState({value: '', error: ''});
    const [postalCode, setPostalCode] = useState({value: '', error: ''});
    const [colony, setColony] = useState({value: '', error: ''});
    const [street, setStreet] = useState({value: '', error: ''});
    const [externalNumber, setExtNumber] = useState({value: '', error:''});
    const [internalNumber, setIntNumber] = useState({value: '', error:''});
    const [activityClass, setActClass] = useState({value: '', error: ''});
    const [location, setLocation] = useState({value: '', error: ''});
    const [telephone, setTelephone] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});
    const [website, setWebSite] = useState({value: '', error: ''});
    const [storeNumber, setStoreNumber] = useState({value: '', error: ''});
    const [longitude, setLongitude] = useState({value: '', error: ''});
    const [latitude, setLatitude] = useState({value: '', error: ''});
    const [businessName, setBusinessName] = useState({value:'', error:''});
    const [clee,setClee] = useState({value:'', error:''});
    const [veterinaries, setVeterinaries] = useState([]);
    const [image, setImage] = useState('');
    const [loader, setLoader] = useState(false);
    const [selectVet, setSelecVet] = useState('');
    const [msgError, setMsgError] = useState('');

    const { setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect( () =>{
        getVeterinaries()
    },[])

    const emptyForm = () =>{
        setName({value:'', error:''});
        setLocation({value:'', error:''});
        setPostalCode({value:'', error:''});
        setColony({value:'', error:''});
        setStreet({value:'', error:''});
        setExtNumber({value:'', error:''});
        setTelephone({value:'', error:''});
        setEmail({value:'', error:''});
    }

    const getVeterinaries = async () =>{
        try{
            const response = await clienteAxios.get("https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/Veterinaria/23/1/1000/dcd3720b-ed53-44d8-9630-da796b73fe3f"); 

            if(response.status == 200){ 
                
                setVeterinaries([response.data])
                
            }
        }catch(error){
           
        }
    }
    
    useEffect(() => {
        if(selectVet){
            const veterinaria = veterinaries[0].find(vet => selectVet == vet.CLEE ? vet : null)
            setName({value: veterinaria.Nombre, error: ''})
            setPostalCode({value: veterinaria.CP, error: ''})
            setLocation({value: veterinaria.Ubicacion, error: ''})
            setColony({value: veterinaria.Colonia, error: ''})
            setStreet({value: veterinaria.Calle, error:''})
            setExtNumber({value: veterinaria.Num_Exterior, error: ''})
            setTelephone({value: veterinaria.Telefono, error:''})
            setEmail({value: veterinaria.Correo_e, error: ''})

        }
    }, [selectVet])
            
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoader(true);
            try {
                 if(selectVet == false){
                     Swal.fire('¡Error!', 'Por favor, seleccione una veterinaria', 'error')
                     setLoader(false);
                 }
                //  else{
                //      Swal.fire('¡Registrado!', 'Veterinaria registrada exitosamente', 'success')
                //      setLoader(false);
                //  }
                 const { data } = await clienteAxios.post('/veterinary/create', {
                    clee: clee.value,
                    selectVet: selectVet.value,
                    name: name.value,
                    business_name: businessName.value,
                    class_activity: activityClass.value,
                    email: email.value,
                    street: street.value,
                    no_ext: externalNumber.value,
                    no_int: internalNumber.value,
                    colony: colony.value,
                    code_postal: postalCode.value,
                    ubication: location.value,
                    phone_number: telephone.value,
                    website: website.value,
                    longitude: longitude.value,
                    latitude: latitude.value,
                    store_number: storeNumber.value
                    
                    
                 });
                 setLoader(false);
                 if(data.status == 201){            
                     setAuth(data);
                     navigate('/');
                     Swal.fire({
                        title: 'Veterinaria Registrada Exitosamente',
                        icon: 'success',
    
                    }).then(result =>{
                        if(result.isConfirmed){
                            Swal.fire('¡Registrado!', 'Veterinaria registrada exitosamente', 'success');
                            emptyForm()
                        }
                    })
                     
                 }
                 
             } catch (error) {
                console.log(error.response);
                setLoader(false);  
                 if(error.response.data.status === 400){
                     setClee({...clee, error: error.response.data.errors.clee});
                     setName({...name, error: error.response.data.errors.name});
                     setBusinessName({...businessName, error: error.response.data.errors.businessName});
                     setActClass({...activityClass, error: error.response.data.errors.activityClass});
                     setPostalCode({...postalCode, error: error.response.data.errors.postalCode});
                     setLocation({...location, error: error.response.data.errors.location});
                     setColony({...colony, error: error.response.data.errors.colony});
                     setStreet({...street, error: error.response.data.errors.street});
                     setExtNumber({...externalNumber, error: error.response.data.errors.externalNumber});
                     setIntNumber({...internalNumber, error: error.response.data.errors.internalNumber});
                     setTelephone({...telephone, error: error.response.data.errors.telephone});
                     setEmail({...email, error: error.response.data.errors.email});
                     setWebSite({...website, error: error.response.data.errors.website});
                     setLatitude({...latitude, error: error.response.data.errors.latitude});
                     setLongitude({...longitude, error: error.response.data.errors.longitude});
                     setStoreNumber({...storeNumber, error: error.response.data.errors.storeNumber});
                 }else if(error.response.data.status === 403){
                    setMsgError(error.response.data.msg);
                    setTimeout(()=>{
                        setMsgError('');
                    },3000);
                 }else{
                    Swal.fire('Hubo un error','Por favor intente mas tarde', 'warning');
                 }
             }
    }
    
  

    return(
        <div className=' bg-slate-300 overflow-hidden'>
            <div className=''>
            <div className='flex justify-center items-center '>

                <div className='w-9/12 sm:w-9/12 md:w-9/12 lg:w-6/12 bg-white shadow border rounded-xl px-4 py-5 my-5'>

                    <h1 className='text-center text-2xl font-bold text-orange-500'>AGREGA TU VETERINARIA</h1>

                    {msgError ? (<p className='w-full py-2 px-3 bg-red-600 text-white text-center'>{msgError}</p>) : null}
                   

                    <form  className='py-5 grid  grid-cols-1 md:grid-cols-2 gap-4' method='post' onSubmit={handleSubmit}>
                        
                            <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2'>
                               
                                <label className='flex-1 font-bold block ml-2  text-sm'>Seleccione el nombre de la veterinaria</label>
                            
                                <select 
                                    className='focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={selectVet}
                                    onChange={(e) => setSelecVet(e.target.value)}
                                >
                                
                                    <option value="" disabled className='text-center'>Seleccione una veterinaria</option>
                                    {/* <option value="1">alskjdklalsd</option> */}
                                    {veterinaries.length === 0 ? (
                                    <option >no hay resultados</option>
                                    ): (
                                        veterinaries[0].map(veterinaria => (
                                        <option  key={veterinaria.CLEE} value={veterinaria.CLEE} className='text-center'>{veterinaria.Nombre}</option>
                                    )))}
                                   
                                   
                                </select>
                                
                                
                            </div>

                            <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2'>
                                <label className=' flex-1 font-bold block  ml-2  text-sm'>Nombre de la veterianria</label>
                                <input
                                    disabled
                                    placeholder='Nombre veterinaria' 
                                    id="name"
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={name.value}
                                    onChange={(e) => setName({value: e.target.value, error: ''})}
                                />
                                
                                {name.error ? (
                                    <p>{name.error}</p>
                                ): null}    
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='flex-1 font-bold block ml-2  text-sm'>Código postal</label>
                                <input
                                    disabled
                                    placeholder='1111'
                                    id="postalCode" 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={postalCode.value}
                                    onChange={(e) => setPostalCode({value: e.target.value, error: ''})}    
                                />
                                {postalCode.error ? (
                                    <p className='ml-2 text-xs text-red-500 mt-2'>{postalCode.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center col-span-1 md:col-span-2 lg:col-span-2 row-start-3'>
                                <label className='font-bold block ml-2 mb-1 text-sm '>Ubicación</label>
                                <input
                                    disabled
                                    id='location'
                                    placeholder='Sm 1 Mz 1 Lote 1' 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={location.value}
                                    onChange={(e) => setLocation({value: e.target.value, error: ''})}
                                />
                                {location.error ? (
                                    <p>{location.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm '>Región o Colonia</label>
                                <input
                                    disabled
                                    id='colony'
                                    placeholder='Región 1' 
                                    type="text"
                                    className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={colony.value}
                                    onChange={(e) => setColony({value: e.target.value, error: ''})}
                                />
                                {colony.error ? (
                                    <p>{colony.error}</p>
                                ): null}    
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm'>Calle</label>
                                <input
                                    // id='calle'
                                    disabled
                                    placeholder='Calle 1' 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={street.value}
                                    onChange={(e)=> setStreet({value: e.target.value, error: ''})}
                                />
                                {street.error ? (
                                    <p>{street.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm'>Número Exterior</label>
                                <input
                                    disabled
                                    placeholder='Num Ext 1' 
                                    type="text" className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full'
                                    value={externalNumber.value}
                                    onChange={(e)=> setExtNumber({value: e.target.value, error: ''})}
                                />
                                {externalNumber.error ? (
                                    <p>{externalNumber.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm'>Teléfono</label>
                                <input
                                    pattern='[0-9]{0,10}'
                                    placeholder='111 1111 111' 
                                    type="tel" className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full' 
                                    value={telephone.value}
                                    onChange={(e) => setTelephone({value: e.target.value, error:''})}
                                />
                                {telephone.error ? (
                                    <p>{telephone.error}</p>
                                ): null}
                            </div>
                            
                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm'>Correo</label>
                                <input
                                    
                                    placeholder='correo@correo.com'
                                    type="text" className='text-center focus:outline-none border-solid border border-gray-300 rounded-3xl p-1 w-full' 
                                    value={email.value}
                                    onChange={(e) => setEmail({value: e.target.value, error:''})}
                                />
                                {email.error ? (
                                    <p>{email.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm'>Imagen</label>
                                <input 
                                    type="file"
                                    accept='image/png, image/jpg, image/jpeg'
                                />
                                
                            </div>

                            {loader ? (
                                <div className='flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-2 my-2'>
                                    <Loader/>
                                </div>
                            ) :  null}
                            <div className='flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-2'>
                            <button  
                                type='submit' 
                                className='focus:outline-none hover:bg-orange-700 transition-all duration-300 bg-orange-500  px-8 py-3 rounded-xl w-7/12  md:w-5/12 lg:w-6/12 xl:w-5/12  text-white font-bold'>Agregar Veterinaria</button>
                            </div>  

                        
                    </form>                    
                </div>
            </div>
                                
            <Footer/>      
            </div>                      
        </div>
    );
}

export default AddVet;