import React, { useEffect, useState } from "react";
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import First from "../components/home/First";
import Second from "../components/home/Second";
import Third from "../components/home/Third";
import Fourth from "../components/home/Fourth";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Home = () => {

  return (
    <div className='bg-[#E5E9F2] w-full'>
      <div>
        <Header />
        <First />
      </div>
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__slideInLeft" duration={1} className='mt-10'>
        <Second />
      </AnimationOnScroll>
      <ins className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-5930574640955118"
        data-ad-slot="3925688283"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInRight" duration={1}>
        <Third />
      </AnimationOnScroll>
      <Fourth />
      <Footer />
    </div>
  )
}

export default Home