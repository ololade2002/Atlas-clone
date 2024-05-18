"use client"
import React from 'react';
import PopoverButton from './PopoverButton';
import { Fade } from "react-awesome-reveal";


const HeroSection = () => {
  return (
    <div>
       <video autoPlay muted loop playsInline disablePictureInPicture controls={false}  className=' relative z-0 w-[100%] h-[84vh] sm:h-[89vh]  object-cover rounded-b-3xl '>
         <source src="https://atlascard.com/assets/videos/HeroVideo.mp4" type="video/mp4"/>    
      </video> 
 
      <PopoverButton/>

      <div className='flex flex-col items-center justify-center  py-6'>
      
        <Fade delay={0.1} cascade damping={0.1} className='font-mono text-center text-[13px] text-neutral'>ACCESS COVETED DINING, HOTELS, AND EVENTS.</Fade>
        
       
      </div>

    </div>
  )
}

export default HeroSection