"use client"
import React from 'react';
import { HiArrowDown } from "react-icons/hi2";
import PopoverButton from './PopoverButton';



const HeroSection = () => {
  return (
    <div>
       <video autoPlay muted  playsInline disablePictureInPicture controls={false}  className=' relative z-0 w-[100%] h-[89vh]  object-cover rounded-b-3xl '>
         <source src="https://atlascard.com/assets/videos/HeroVideo.mp4" type="video/mp4"/>    
      </video> 
 
      <PopoverButton/>

      <div className='flex flex-col items-center justify-center  py-6'>
        <p className='font-mono text-center text-[13px] text-neutral'>ACCESS COVETED DINING, HOTELS, AND EVENTS.</p>
      
      </div>

    </div>
  )
}

export default HeroSection