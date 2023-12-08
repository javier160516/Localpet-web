import React from 'react'
import banner from "../assets/carousel/banner.png";
import banner2 from '../assets/carousel/banner2.png';
import banner3 from '../assets/carousel/banner3.png';
import banner4 from '../assets/carousel/banner4.png';
import banner5 from '../assets/carousel/banner5.png';
import banner6 from '../assets/carousel/banner6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='flex items-center max-w-sm md:max-w-lg lg:w-full mb-5 lg:mb-0 h-96'>
            <Slider {...settings} className='w-full mt-8'>
                <div>
                    <img src={banner} alt="banner veterinaria my happy pet" />
                </div>
                <div>
                    <img src={banner2} alt="banner veterinaria my happy pet" />
                </div>
                <div>
                    <img src={banner3} alt="banner veterinaria my happy pet" />
                </div>
                <div>
                    <img src={banner4} alt="banner veterinaria my happy pet" />
                </div>
                <div>
                    <img src={banner5} alt="banner veterinaria my happy pet" />
                </div>
                <div>
                    <img src={banner6} alt="banner veterinaria my happy pet" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel