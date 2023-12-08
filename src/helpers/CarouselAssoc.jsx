import React from 'react'
import banner from "../assets/asociaciones/tierra.jpg";
import banner2 from '../assets/asociaciones/cachorrilandia.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselAssoc = () => {
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
            <Slider {...settings} className='w-full mt-4 text-green'>
                <div>
                    <img src={banner} alt="banner veterinaria localpet" />
                </div>
                <div>
                    <img src={banner2} alt="banner veterinaria localpet" />
                </div>
            </Slider>
        </div>
    )
}

export default CarouselAssoc