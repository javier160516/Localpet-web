import React, { useState } from 'react'
import Loader from '../../helpers/Loader';

const ModalRol = () => {
    const [nameRol, setNameRol] = useState({value: '', error: ''});
    const [typeRol, setTypeRol] = useState({value: '', error: ''});
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        console.log('enviandoo...');
    }

    return (
        <div>
            <div className='flex justify-end w-10/12 mx-auto my-5'>
                <button type="button" className="inline-block px-6 py-3 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#addRol">
                    Agregar Rol
                </button>

            </div>
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black bg-opacity-60 " id="addRol" tabIndex="-1" aria-labelledby="addRolTitle" aria-modal="true" role="dialog">
                <div className='flex justify-center items-center h-full'>
                    <div className="modal-dialog modal-dialog-centered relative pointer-events-none w-4/12 mx-auto">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-body relative p-4">
                                <div>
                                    <h5 className="uppercase text-center text-xl font-bold leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                        Agregar Rol
                                    </h5>
                                    <button type="button"
                                        className="btn-close absolute right-5 top-4 box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close">X</button>

                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className='my-3'>
                                        <label htmlFor="nameRol" className='block font-semibold px-2'>Nombre Rol</label>
                                        <input
                                            id='nameRol'
                                            name='nameRol'
                                            type="text"
                                            placeholder='Escribe el Rol...'
                                            className='w-full border py-1 px-2 rounded-md outline-none'
                                            value={nameRol.value}
                                            onChange={(e) => setNameRol({value: e.target.value, error: ''})}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="nameRol" className='block font-semibold px-2'>Tipo de Rol</label>
                                        <select name="" id="" 
                                            className='w-full border py-2 px-2 rounded-md outline-none' 
                                            value={typeRol.value} 
                                            onChange={(e) => setTypeRol({value: e.target.value, error: ''})}
                                        >
                                            <option value="" className='py-2' disabled>Elige un rol</option>
                                            <option value="" className='py-2'>Admin</option>
                                        </select>
                                    </div>
                                    {loader ? <Loader /> : null}
                                    <div className='flex justify-end py-3'>
                                        <button type="button" className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                            Cancelar
                                        </button>
                                        <button type="submit" className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                            Agregar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRol