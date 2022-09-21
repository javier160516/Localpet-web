import React, {useState}from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/localpet-favicon.svg";
import letras from "../../assets/localpet-letras.svg";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faBars} from '@fortawesome/free-solid-svg-icons';
import{faXmark} from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }


  return (
    <div className="flex justify-between bg-[#E5E9F2]
  ">
      <Link to="/" className="ml-6">
        <img src={logo} alt="logo-locatpet" />

      </Link>
      <div className=" w-full flex justify-end p-4 items-center">
        <nav>
          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}          
          </div>
                   
          <div> 
            <ul className="hidden md:flex gap-5 items-center uppercase">
              <li>
                <Link to="/" className="hover:text-orange-400 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-400 font-medium">
                  Encontar veterinaria
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-orange-500 font-medium">
                  Sing in
                </Link>
              </li>
              <li className="bg-orange-400 shadow-inner rounded-lg p-2 hover:bg-orange-300 transition-all duration-300">
                <Link to="/register" className="text-white">
                  Sing Up
                </Link>
              </li>
            </ul>
          </div>
          
        </nav>

        <div>
            <nav className={!nav ? 'uppercase fixed left-0 top-0 w-[50%] h-full border-r border-r-orange-400 bg-[#D1D7E3] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <Link to="/" className="ml-6">
                    <img src={logo} alt="logo-locatpet" />
                </Link>
                <ul className='pt-5'>
                    <li className='p-4 border-b border-orange-400'><Link to={'/'}>Home</Link></li>
                    <li className='p-4 border-b border-orange-400'><Link to={'/'}>Encontar veterinaria</Link></li>
                    <li className='p-4 border-b border-orange-400'><Link to={'/'}>About Us</Link></li>
                    <li className='p-4 border-b border-orange-400'><Link to={'/'}>Sing in</Link></li>
                    <li className='p-4 border-b border-orange-400'><Link to={'/'}>Sign Up</Link></li>
                </ul>
            </nav>
        </div>

      </div>
    </div>
  );
};

export default Navigation;