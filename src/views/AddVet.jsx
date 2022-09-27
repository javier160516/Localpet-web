import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import {useForm} from "react-hook-form";
import Header from '../components/templates/Header';
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';




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

   
    const [selectVet, setSelecVet] = useState(false);
    const [msgError, setMsgError] = useState('');
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    // const{register, formState:{errors} , handleSubmit} = useForm();
    //const onSubmit = data => console.log(data);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log('hola');
        if(selectVet === false){
            Swal.fire('¡Error', 'Por favor, seleccione una veterinaria', 'error')
            // window.alert('seleccione una veterinaria');
           
        }else{
            console.log(selectVet.value)
        }
        
        // try{
        //     const {data} = await clienteAxios.post('/addvet',{
        //         name: name,
        //         postalCode: postalCode
        //     });
        //     if(data.status === 200){
        //         setAuth(data);
        //         navigate('/');
        //         window.alert('hola');
        //     }
        // } catch(error){
        //     if(error.response.data.status == 400){
        //         setName(error.response.data.errors.name);
        //         setPostalCode(error.response.data.errors.postalCode);
        //     }else if(error.response.data.status == 404){
        //         setMsgError(error.response.data.msg);
        //         setTimeout( () =>{
        //             setMsgError('');
        //         }, 3000);
        //     }
        // }

         try {
             const {data} = await clienteAxios.post('/veterinary/create', {
                clee: clee,
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
             if(data.status == 201){
                setAuth(data);
                navigate('/');
                console.log('jaskdhas');
             }
             
         } catch (error) {
             if(error.response.data.status == 400){
                 setPostalCode({...postalCode, error: error.response.data.error.postalCode})
             }else if(error.response.data.status == 403){
                setMsgError(error.response.data.msg);
                setTimeout(()=>{
                    setMsgError('');
                },3000);
             }
         }
    }

    
    return(
        <div className='py-5 bg-slate-300 h-screen'>
            <Header/>
            <div className='flex justify-center items-center'>

                <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 bg-white shadow border rounded-xl px-4 py-2'>

                    <h1 className='text-center text-2xl font-bold text-orange-500'>AGREGA TU VETERINARIA</h1>
                    {/* {errors.vetNombre?.type === 'required' && <p className='text-center text-2xl uppercase font-bold text-red-600'>Favor de Seleccionar una veterinaria</p>} */}

                    {msgError ? (<p className='w-full py-2 px-3 bg-red-600 text-white text-center'>{msgError}</p>) : null}
                   

                    <form  className='py-5 grid  grid-cols-1 md:grid-cols-2 gap-4' method='post' onSubmit={handleSubmit}>
                        
                            <div className='flex flex-col justify-center'>
                               
                                <label className='flex-1 font-bold block ml-2  text-sm'>Seleccione el nombre de la veterinaria</label>
                                

                                <select 
                                    // {...register('vetNombre',{
                                    //     required: true 
                                    // })} type="text" 
                                    className='focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
                                    value={selectVet.value}
                                    onChange={(e) => setSelecVet({value: e.target.value})}
                                >
                                
                                    <option value="" disabled selected className='text-center'>elija una veterinaria</option>
                                    <option value="Veterinaria 1" className='text-center'>Veterinaria 1</option>
                                    <option value="Veterinaria 2" className='text-center'>Veterinaria 2</option>
                                    <option value="Veterinaria 3" className='text-center'>Veterinaria 3</option>
                                </select>
                                
                                
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='flex-1 font-bold block ml-2  text-sm'>Nombre de la veterianria</label>
                                <input
                                    placeholder='Ej: veterinaria morales' 
                                    id="name"
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
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
                                    placeholder='Ej: 1111'
                                    id="postalCode" 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
                                    value={postalCode.value}
                                    onChange={(e) => setPostalCode({value: e.target.value, error: ''})}    
                                />
                                {postalCode.error ? (
                                    <p className='ml-2 text-xs text-red-500 mt-2'>{postalCode.error}</p>
                                ): null}
                                {/* <input {...register('cp')}type="text" className='text-center border-2 border-black'></input> */}
                            </div>

                            <div className='flex flex-col justify-center'>
                                <label className='font-bold block ml-2 mb-1 text-sm '>Ubicación</label>
                                <input
                                    id='location'
                                    placeholder='Ej: Sm 1 Mz 1 Lote 1' 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
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
                                    id='colony'
                                    placeholder='Ej: Región 100' 
                                    type="text"
                                    className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
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
                                    placeholder='Ej: Calle 1' 
                                    type="text" 
                                    className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
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
                                    placeholder='Ej: Num Ext 1' 
                                    type="text" className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full'
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
                                    placeholder='Ej: 111 1111 111' 
                                    type="text" className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full' 
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
                                    placeholder='Ej: correo@correo.com'
                                    type="text" className='text-center focus:outline-none border-solid border border-gray-500 rounded-3xl p-1 w-full' 
                                    value={email.value}
                                    onChange={(e) => setEmail({value: e.target.value, error:''})}
                                />
                                {email.error ? (
                                    <p>{email.error}</p>
                                ): null}
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                            <button type='submit' className='focus:outline-none hover:bg-orange-700 transition-all duration-300 bg-orange-500  px-8 py-2 rounded-xl w-5/6 text-white font-bold '>Agregar Veterinaria</button>
                        </div>
                    </form>
                
                </div>
            </div>
   
        </div>
    );
}

export default AddVet;