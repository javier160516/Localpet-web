import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/templates/Header';
import Footer from '../components/templates/footer';

const Home = () => {
  
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