import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import success from '../assets/success.png';
import danger from '../assets/danger.png';
import clienteAxios from '../config/axios';
import Loader from '../helpers/Loader';

const ConfirmAccount = () => {
    const [token, setToken] = useState(window.location.pathname.split('/')[2]);
    const [message, setMessage] = useState('');
    const [icon, setIcon] = useState('');
    const [viewStatus, setViewStatus] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('localtoken');
        if (token) {
          return navigate('/');
        }
      }, [])
      
    useEffect(() => {
        const sendToken = async () => {
            try {
                const response = await clienteAxios.get(`/confirm/${token}`);
                if (response.data.status == 200) {
                    setViewStatus(true);
                    setMessage(response.data.msg);
                    setIcon(success);
                }
            } catch (error) {
                setViewStatus(true);
                if (error.response.data.status == 400) {
                    setMessage(error.response.data.msg);
                    setIcon(danger);
                }
            }
        }
        sendToken();
    }, [])

    return (
        <div className='h-screen py-5 bg-slate-300 flex justify-center items-center'>
            <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 bg-white shadow border rounded-xl'>
                {viewStatus ? (
                    <div>
                        <div className='flex justify-center py-4 rounded-md mx-4'>
                            <img src={icon} loading="lazy" width={100} height={100} />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-center mb-6'>{message ? message : null}</h1>
                        </div>
                        <div className='mx-5 mb-4'>
                            <button type='button' className='text-sm border rounded-md px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 font-semibold' onClick={() => navigate('/login')}>Ir a iniciar Sesión...</button>
                        </div>

                    </div>
                ) : (
                    <div className='my-5'>
                        <Loader />
                        <h1 className='text-xl font-bold text-center mb-6 mt-4'>Confirmando cuenta...</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ConfirmAccount