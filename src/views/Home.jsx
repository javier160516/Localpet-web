import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/templates/Header';
import Footer from '../components/templates/footer';
import clienteAxios from '../config/axios';

const Home = () => {
  

  useEffect(() => {
    const obtenerDatos = async () => {
      const token = localStorage.getItem('localtoken');
      if (token !== null) {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const response = await clienteAxios.get('/home', config)
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
    obtenerDatos();
  }, []);
  return (
    <div>
      <Header />
      <h1 className='text-xl font-bold uppercase xs:text-blue-800 '>Desde Home</h1>
      <Link to='/login'>
        Ir a Login
      </Link>
      <Footer />
    </div>
  )
}

export default Home