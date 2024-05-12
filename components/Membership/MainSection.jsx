
import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import Link from 'next/link';

const MainSection = () => {
  return (
   <section className='card-mainsection'>
     <div className='card-subsection-m'>
       <div className='main-container1 order-2 '>
         <h1 className='main-text pt-12 md:pt-20 lg:pt-28 '>Begin your adventure with Atlas.</h1>
         <div className='main-subContainer'>
           <h3 className='main-subText  '>Atlas Membership</h3>
           <p className='main-paragraph '>
           Take your next step towards a world of access—with tables at the hottest restaurants, stays at decorated hotels, and exclusive entry to sold-out events—made easy with exceptional concierge service and an extraordinary product experience.
           </p>

           <div className='flex flex-col pt-28 justify-center items-center'>
            <Link href='/request-invite' className='' >
              <h2 className='wf font-rale text-[18px] xs:text-[22px] md:text-[26px] bg-secondary text-white flex gap-3 items-center justify-center px-6 py-3 rounded-full transition-all hover:bg-gradient-to-l from-indigo-700 to-transparent '>
                Become a Member <HiArrowRight className=' text-[20px]'/>
               </h2>
            </Link>
            <p className='text-neutral text-[27px] font-[300] w-[45%]  text-center py-4 font-rale'>$1000/yr.</p>
        </div>
       </div>
       </div>

       <div className='main-container2 pb-16 md:pb-20 lg:pb-28 flex justify-center order-1 overflow-x-hidden '>
         <video autoPlay muted  playsInline disablePictureInPicture controls={false}  className='max-w-[60rem] lg:h-[100%] lg:w-full object-cover'>
            <source  src="https://atlascard.com/assets/videos/WorldAwaits.mp4" type="video/mp4"/>    
        </video>  
       </div>

        
</div>
   </section>
  )
}

export default MainSection