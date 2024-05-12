"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'
import dining from '../../public/experiences.webp'
import Image from 'next/image';
import PopoverButton from './PopoverButton';


const MainSection = () => {
  return (
   <section className='mainsection'>
     <div className='subsection-m'>
       <div className='main-container1'>
         <h1 className='main-text'>Experience the action up close.</h1>

         <div className='main-subContainer'>
           <h3 className='main-subText '>Atlas Experiences</h3>
           <p className='main-paragraph'>
           Get unique access to exclusive experiences, from backstage passes at sold-out concerts,
           to front-row seats at the biggest sporting events, all through one text to your Atlas concierge.
           </p>
       </div>
       </div>

       <ParallaxBanner className='' style={{ aspectRatio: '2 / 1',height:'110vh' }}>
        <ParallaxBannerLayer className='w-[100vw]' image='https://atlascard.com/assets/images/experiences.webp' speed={-30} />
        <div className="absolute  mx-auto inset-0 flex flex-col items-center justify-center">
        <PopoverButton/>
      </div>
     </ParallaxBanner>

       <div className='main-container3'>
         <div className='main-subContainer3 '>
         <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Just One Text Away</h2>
               <h2 className='dining-subText'>From securing event passes, to ensuring you have the best 
               seats in the house, your Atlas concierge is just a text away to take care of it all for you.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Your Favorite Sporting Events</h2>
               <h2 className='dining-subText'>Courtside at the US Open Tennis Championships, or the Paddock
                Club at a Formula 1 Grand Prix, name your event and Atlas can get you in.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>Tickets to Sold-Out Concerts</h2>
                <h2 className='dining-subText'>From Coachella to sold-out concerts,
                 get yourself into events that aren’t accessible to everyone—Atlas is there for you, so you can witness magic.</h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </div>
        </div>

        <div className='main-container4'>
            <Image className='main-image2' src={dining} alt='Atlas Dining' />

        </div>
</div>
   </section>
  )
}

export default MainSection