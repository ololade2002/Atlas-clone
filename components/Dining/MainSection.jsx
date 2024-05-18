
"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'
import dining from '../../public/dining.webp'
import Image from 'next/image';
import PopoverButton from './PopoverButton';
import ModalSection from './ModalSection';
import {Fade} from 'react-awesome-reveal'

const MainSection = () => {
  return (
   <section className='mainsection'>
     <div className='subsection-m'>
       <div className='main-container1'>
         <h1 className='main-text'>Impossible reservations made easy.</h1>

         <div className='main-subContainer'>
           <h2 className='main-subText  '>Atlas Dining</h2>
           <p className='main-paragraph '>
              You want to eat at great restaurants. So does everyone else. The difference is—you&apos;ve got Atlas. 
              Discover the hottest restaurants around town with Atlas Dining, and reserve your tables during peak hours.
           </p>
       </div>
       </div>

       <ParallaxBanner className='' style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer className='w-[100vw]' image='https://atlascard.com/assets/images/dining.webp' speed={-30} />
        <div className="absolute  mx-auto inset-0 flex flex-col items-center justify-center">
        <PopoverButton/>
      </div>
     </ParallaxBanner>
   
       <div className='main-container3 '>
         <Fade direction='up'  className='main-subContainer3 '>
         <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Dedicated Atlas Reservations</h2>
               <h2 className='dining-subText'>Book a table at the very best restaurants in NYC, LA, SF, Miami,
                and worldwide—directly inside Atlas app or by texting your Atlas concierge.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Up-And-Coming Recommendations</h2>
               <h2 className='dining-subText'>Atlas is always on top of the hottest dining spots in your city—so 
                   you can get early access to up-and-coming new restaurants that are still under the radar.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>Reserve Primetime Tables</h2>
                <h2 className='dining-subText'>Get reservations at a time that is ideal for you, instead of times
                 that are too early or too late in the day, because that&apos;s all that was available.</h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </Fade>
        </div>

        <div className='main-container4 relative  '>
            <Image className= 'main-image2 ' src={dining} alt='Atlas Dining' />
            <ModalSection/>
        </div>
        
</div>
   </section>
  )
}

export default MainSection