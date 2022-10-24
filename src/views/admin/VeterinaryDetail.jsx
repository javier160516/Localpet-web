import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import imgVet from '../../assets/imagen-veterinaria.png';
import TabsVeterinary from '../../components/veterinaries/TabsVeterinary';
import VeterinaryInfo from '../../components/veterinaries/VeterinaryInfo';
import clienteAxios from '../../config/axios';
import Loader from '../../helpers/Loader';

const VeterinaryDetail = () => {
  const url = location.href.split('/')
  const id = url[url.length - 1]

  const [veterinary, setVeterinary] = useState({});
  const [email, setEmail] = useState({ value: '', error: '' });
  const [telephone, setTelephone] = useState({ value: '', error: '' });

  useEffect(() => {
    getVeterinary();
  }, [])


  const getVeterinary = async () => {
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
    try {
      const response = await clienteAxios.get(`veterinary/edit/${id}`, config);
      if (response.status === 200) {
        setVeterinary(response.data.veterinary)
        setEmail({ value: response.data.veterinary.email, error: '' });
        setTelephone({ value: response.data.veterinary.phone_number, error: '' });
      }
    } catch (error) {
      if (error.response.data.status == 400) {
        Swal.fire({
          title: '¡ERROR!',
          text: `${error.response.data.msg}`,
          icon: 'error',
          confirmButtonColor: '#D33',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            window.history.go(-2);
          }
        })
      } else if (error.response.data.status == 404) {
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
    <div className='overflow-y-auto h-full'>
      <div className='w-8/12 bg-white shadow-md rounded-md mx-auto my-10 p-3 overflow-y-auto'>
        <h1 className='text-xl font-bold text-center my-4 uppercase'>{veterinary.name}</h1>
        <div className='flex justify-center w-10/12 mx-auto h-40'>
          <img src={imgVet} alt="veterinaria" className='max-w-none h-auto' />
        </div>
        <div>
          <TabsVeterinary 
            veterinary={veterinary}
            setVeterinary={setVeterinary}
            email={email}
            setEmail={setEmail}
            telephone={telephone}
            setTelephone={setTelephone}
          />
        </div>
      </div>
    </div>
  )
}

export default VeterinaryDetail