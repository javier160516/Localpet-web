import React from "react";
import Header from '../components/templates/Header';
import Footer from '../components/templates/footer';
import First from "../components/home/First";
import Second from "../components/home/Second";
import Third from "../components/home/Third";
import Fourth from "../components/home/Fourth";


const Home = () => {
  
  return (
    <div className='bg-[#E5E9F2] w-full '>

        <Header />
        {/* <Link to='/login'>
            Ir a Login
        </Link> */}
        <First />
        <Second />
        <Third />
        <Fourth />
        <Footer />
    </div>
  )
}

export default Home