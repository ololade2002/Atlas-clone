"use client"

import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { FaLocationDot } from "react-icons/fa6";

const Carousel = () => {
  return (
    <div>
      <ParallaxBanner style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer  image="https://atlascard.com/assets/images/carousel-1.webp" speed={-20} />
        <div className="absolute w-[95%] md:w-[70%] lg:w-[35%] mx-auto inset-0 flex flex-col items-center justify-center">
        <h1 className=" text-white font-rale leading-[1.4] text-[23px] sm:text-[27px] text-center font-[400]">Reserve exclusive tables at the world&apos;s hottest restaurants.</h1>
        <p className='flex items-center gap-2 text-[13px] font-[400] font-mono mt-3'> <FaLocationDot/> SARTIANO&apos;S, NYC </p>
      </div>
     </ParallaxBanner>

     <ParallaxBanner style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer image="https://atlascard.com/assets/images/carousel-2.webp" speed={-20} />
        <div className="absolute  w-[95%] md:w-[70%] lg:w-[35%] mx-auto inset-0 flex flex-col items-center justify-center">
        <h1 className=" text-white font-rale leading-[1.4] text-[23px] sm:text-[27px] text-center font-[400]">Book stays from a selection ofthe world&apos;s finest hotels.</h1>
        <p className='flex items-center gap-2 text-[13px] font-[400] font-mono mt-3 uppercase'> <FaLocationDot/> Aman Tokyo, Japan </p>
      </div>
     </ParallaxBanner>

     <ParallaxBanner style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer image="https://atlascard.com/assets/images/carousel-3.webp" speed={-20} />
        <div className="absolute  w-[95%] md:w-[70%] lg:w-[35%] mx-auto inset-0 flex flex-col items-center justify-center">
        <h1 className=" text-white font-rale leading-[1.4] text-[23px] sm:text-[27px] text-center font-[400]">Attend today&apos;s most exhilarating events with front-row access.</h1>
        <p className='flex items-center gap-2 text-[13px] font-[400] font-mono mt-3 uppercase'> <FaLocationDot/>F1 Paddock Club</p>
      </div>
     </ParallaxBanner>

    </div>
  )
}

export default Carousel