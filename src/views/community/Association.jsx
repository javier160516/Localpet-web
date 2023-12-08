import React from 'react'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import Cachorrolandia from '../../components/associations/Cachorrilandia'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Tierra from '../../components/associations/Tierra';

const Association = () => {
  return (
    <div className='bg-[#FAFAFA] w-full'>

      <Header />
      {/* Asociasion1 */}
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__slideInRight" duration={1} className='mt-10'>
        <Tierra />
      </AnimationOnScroll>
      {/* Asociasion2 */}
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__slideInLeft" duration={1} className='mt-10'>
        <Cachorrolandia />
      </AnimationOnScroll>
      <Footer />
    </div>
  )
}

export default Association
