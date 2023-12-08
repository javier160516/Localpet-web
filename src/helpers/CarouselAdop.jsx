import React from 'react'
import banner from "../assets/adoptions/perro1.png";
import banner2 from "../assets/adoptions/perro2.png";
import banner3 from "../assets/adoptions/perro3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselAdop = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='flex items-center max-w-sm md:max-w-lg lg:w-full mb-5 lg:mb-0'>
            <Slider {...settings} className='w-full mt-8'>
            <div>
                    <img src={banner} alt="adopciones my happy pet" />
                </div>
                <div>
                    <img src={banner2} alt="adopciones my happy pet" />
                </div>
                <div>
                    <img src={banner3} alt="adopciones my happy pet" />
                </div>
            </Slider>
        </div>
    )
}

export default CarouselAdop