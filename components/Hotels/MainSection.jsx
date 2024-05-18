
"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'
import Image from 'next/image';
import hotel from '../../public/hotels.webp'
import PopoverButton from './popoverButton.jsx';
import ModalSection from './ModalSection';
import {Fade} from 'react-awesome-reveal'

const MainSection = () => {
  return (
   <section className='mainsection'>
     <div className='subsection-m'>
       <div className='main-container1 '>
         <h1 className='main-text'>The fastest way to your paradise.</h1>

         <div className='main-subContainer'>
           <h2 className='main-subText '>Atlas Hotels</h2>
           <p className='main-paragraph'>
           Experience the best way to book stays at the world&apos;s finest hotels. Browse a curated selection in app, 
           find your paradise, then book with points or preferred rates, for better deals than anywhere else.
           </p>
       </div>
       </div>

       <ParallaxBanner className='' style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer className='w-[100vw]' image='https://atlascard.com/assets/images/hotels.webp' speed={-30} />
        <div className="absolute  mx-auto inset-0 flex flex-col items-center justify-center">
        <PopoverButton/>
      </div>
     </ParallaxBanner>

       <div className='main-container3'>
         <Fade direction='up' className='main-subContainer3 '>
         <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Curated Luxury Hotels</h2>
               <h2 className='dining-subText'>Choose from a unique collection of the
                most decorated hotels in the world, with selections located in the
                top luxury travel destinations globally.
              </h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Book With Points</h2>
               <h2 className='dining-subText'>Use points you&apos;ve earned with Atlas to book stays at 
               incredible redemption rates, and get 3x points for every dollar spent on hotel bookings
               inside the app.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>Find a Room in Seconds</h2>
                <h2 className='dining-subText'>
                Booking with Atlas is a breeze—discover the destination, hotel, and room tha&apos;s just
                right for you inside Atlas app, and book your stay in (literal) seconds.
                </h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </Fade>
        </div>

        <div className='main-container4'>
            <Image className='main-image2 ' src={hotel} alt='Atlas Hotel' />
             
             <ModalSection/>
        </div>
</div>
   </section>
  )
}

export default MainSection