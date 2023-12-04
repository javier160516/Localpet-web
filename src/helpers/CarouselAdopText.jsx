import React from 'react'
import banner from "../assets/adoptions/perro1.jpeg";
import banner2 from "../assets/adoptions/perro2.jpg";
import banner3 from "../assets/adoptions/perro3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselAdopText = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='flex items-center max-w-sm md:max-w-lg lg:w-full mb-5 lg:mb-0 h-96'>
            <Slider {...settings} className='w-full mt-8'>
                <div className='flex justify-center'>
                    <div class="my-6 mb-6 max-w-lg rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">CACHORRILANDIA</div>
                            <div class="font-bold text-xl mb-2">Nombre: NALA🐶</div>
                            <p class="text-gray-700 text-base">
                                Para más información visita la Página oficial de <a href='https://www.instagram.com/cachorrilandia/?hl=es-la'>Instagram. <i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </p>
                            <li>🐾2 meses aproximadamente</li>
                            <li>🐾Raza Pit bull ( quedó muy pequeñita)</li>
                            <li>🐾Busca hogar responsable</li>
                            <li>🐾Se realizarán filtros de adopción</li>
                            Inf al 9982657830
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div class="my-6 mb-6 max-w-lg rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">SANTUARIO ANIMAL AVE</div>
                            <div class="font-bold text-xl mb-2">Nombre: MAYA🐶</div>
                            <p class="text-gray-700 text-base">
                                Para más información visita la Página oficial de <a href='https://www.facebook.com/SantuarioAnimalAve/'>Facebook <i class="fa fa-facebook-official" aria-hidden="true"></i>.</a>
                            </p>
                            <li>🐾Talla mediana</li>
                            <li>🐾Esterilizada</li>
                            <li>🐾Vacunada</li>
                            <li>🐾Tiene 6 meses</li>
                            <li>🐾Se realiza filtro de adopción</li>
                            Inf al 9841776184
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div class="my-6 mb-6 max-w-lg rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PROYECTO ERA</div>
                            <div class="font-bold text-xl mb-2">Nombre: KIRA🐶</div>
                            <p class="text-gray-700 text-base">
                                Para más información visita la Página oficial de <a href='https://www.facebook.com/ProyectoERAasociacion/'>Facebook <i class="fa fa-facebook-official" aria-hidden="true"></i>.</a>
                            </p>
                            Inf al 99821831664
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselAdopText