
import React from 'react'
import dining from '../../public/CardInHand.webp'
import Image from 'next/image';


const MainSection = () => {
  return (
   <section className='card-mainsection'>
     <div className='card-subsection-m'>
       <div className='main-container1 order-2 '>
         <h1 className='main-text pt-16 '>An app designed to outperform.</h1>
         <div className='main-subContainer'>
           <h3 className='main-subText  '>Atlas App</h3>
           <p className='main-paragraph '>
           Take refuge from a world of clunky, disorganized, booking websites and card apps. Find your next adventure, book in seconds, and manage your spend—all inside one powerful, yet intuitive experience.
           </p>
       </div>
       </div>

       <div className='main-container2 pb-16 md:pb-28 flex justify-center order-1 overflow-x-hidden '>
         <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='md:h-[100vh] max-w-[25rem]  md:w-full md:max-w-[80%] object-contain'>
            <source  src="https://atlascard.com/assets/videos/AppHero.mp4" type="video/mp4"/>    
        </video>  
       </div>

       <div className='main-container3  order-4 mt-0  '>
         <div className='main-subContainer3 '>
         <div className='h-[1px]  w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Unlimited Virtual Cards</h2>
               <h2 className='dining-subText'>Create as many virtual cards as you (or your assistants, or family) need for travel, business, and more—organizing your spending couldn’t be simpler.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Purchases Made Beautiful</h2>
               <h2 className='dining-subText'>Atlas app makes it easy to find any of your purchases by beautifully rendering purchase details, such as location info and important booking information.

               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>Buttery-Smooth Performance</h2>
                <h2 className='dining-subText'>Atlas app is designed and engineered to outperform the sea of slow, laggy, travel, dining, and card apps out there—finally here’s an app that’s a joy to use.</h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </div>
        </div>

        <div className='main-container4  relative order-3 '>
            <Image className= 'main-image2 bg-gradient-to-r from-[#373c59] to-[#9c97b8] ' src={dining} alt='Atlas Dining' />
           
        </div>
        
</div>
   </section>
  )
}

export default MainSection