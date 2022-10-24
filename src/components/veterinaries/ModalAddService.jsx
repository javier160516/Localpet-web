import React from 'react'
import { Dialog } from '@headlessui/react'

const ModalAddService = ({showModal, setShowModal}) => {
  return (
    <Dialog 
        open={showModal} 
        onClose={() => setShowModal(false)}
        className="relative z-50"
    >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true">
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md rounded bg-white p-5">
                    <Dialog.Title className='text-center text-gray-800 font-bold text-xl uppercase'>Agregar Servicio</Dialog.Title>
                    <form>
                        <div className='w-11/12 mx-auto mt-4 mb-2'>
                            <label htmlFor="service" className='block mb-1 font-semibold'>Servicio</label>
                            <div className='relative pb-3'>
                                <select name="service" id="service" className='text-sm w-full rounded-md py-1 border outline-none'>
                                    <option value="" selected disabled>-- Seleccione un servicio --</option>
                                </select>
                                <p className='text-red-600 text-xs absolute left-2'>El servicio es requerido</p>
                            </div>
                        </div>
                        <div className='w-11/12 mx-auto mt-4 mb-2'>
                            <label htmlFor="price" className='block mb-1 font-semibold'>Precio</label>
                            <div className='relative pb-3'>
                                <input 
                                    type="text" 
                                    placeholder='Escribe el precio' 
                                    className='w-full outline-none px-2 border rounded-md py-1 text-sm'
                                    
                                    />
                                <p className='text-red-600 text-xs absolute left-2'>El servicio es requerido</p>
                            </div>
                        </div>
                    </form>
                    <div className='mt-6 mb-2 w-11/12 mx-auto flex justify-center gap-4'>
                        <button 
                            type='button'
                            onClick={() => setShowModal(false)}
                            className='bg-red-700 text-white px-4 py-1 text-sm rounded-lg hover:bg-red-600 transition-all duration-300'    
                        >Cancelar</button>
                        <button 
                            type='submit'
                            className='bg-green-700 text-white px-4 py-1 text-sm rounded-lg hover:bg-green-600 transition-all duration-300'>
                                Agregar
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </div>
    </Dialog>
  )
}

export default ModalAddService