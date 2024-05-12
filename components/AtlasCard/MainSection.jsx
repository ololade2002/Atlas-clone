
import React from 'react'
import dining from '../../public/CardInHand.webp'
import Image from 'next/image';
import ModalSection from './ModalSection';

const MainSection = () => {
  return (
   <section className='card-mainsection'>
     <div className='card-subsection-m'>
       <div className='main-container1 order-2 '>
         <h1 className='main-text pt-28 '>A card that reflects who you are.</h1>
         <div className='main-subContainer'>
           <h3 className='main-subText  '>Atlas Card</h3>
           <p className='main-paragraph '>
           Twenty-one grams of mirror-finished steel. Heavy in the hand—the thing could damn near cut diamonds. Sleek, but also smart. And genuinely one-of-a-kind.
           </p>
       </div>
       </div>

       <div className='main-container2 pb-28 flex justify-center order-1 overflow-x-hidden '>
         <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='md:h-[100%] max-w-[40rem]  md:w-full md:max-w-[80%] object-contain'>
            <source  src="https://atlascard.com/assets/videos/atlas-woman.mp4" type="video/mp4"/>    
        </video>  
       </div>

       <div className='main-container3  order-4 mt-32  '>
         <div className='main-subContainer3 '>
         <div className='h-[1px]  w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>No Pre-set Spending Limits</h2>
               <h2 className='dining-subText'>The way you spend is unique to you—Atlas card has no pre-set limits and is designed to smartly adapt to your personal spending preferences.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Premium Purchase Protection</h2>
               <h2 className='dining-subText'>Life can be full of surprises—that&apos;s why Atlas card covers your purchases up to $50,000 a year toward any repairs, replacements, or reimbursements.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>Personalized For You</h2>
                <h2 className='dining-subText'>Customize your Atlas card with a personal icon next to your name—just one of the many thoughtful details that makes your Atlas card uniquely yours.
</h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </div>
        </div>

        <div className='main-container4  relative order-3 '>
            <Image className= 'main-image2 bg-gradient-to-r from-[#373c59] to-[#9c97b8] ' src={dining} alt='Atlas Dining' />
            <ModalSection/>
        </div>
        
</div>
   </section>
  )
}

export default MainSection