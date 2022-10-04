import React, {useEffect} from "react";
import Header from '../components/templates/Header';
import Footer from '../components/templates/footer';
import First from "../components/home/First";
import Second from "../components/home/Second";
import Third from "../components/home/Third";
import Fourth from "../components/home/Fourth";

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