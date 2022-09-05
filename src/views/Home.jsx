import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <h1>Desde Home</h1>
        <Link to='/login'>
            Ir a Login
        </Link>
    </div>
  )
}

export default Home