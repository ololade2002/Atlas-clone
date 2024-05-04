
import React from 'react'
import dining from '../../public/dining.webp'
import benefit from '../../public/benefits.webp'
import Image from 'next/image';
import PopoverButton from './PopoverButton';
import { LuPlus } from "react-icons/lu";

const MainSection = () => {
  return (
   <section className='mainsection'>
     <div className='subsection-m'>
       <div className='main-container1'>
         <h1 className='main-text'>Benefits to keep you moving.</h1>

         <div className='main-subContainer'>
           <h3 className='main-subText'>Atlas Benefits</h3>
           <p className='main-paragraph'>
           Hassle-free travel, health and well-being, plus a whole range of other
           unique benefits, made for a faster and smoother life on the go—all part of Atlas membership.
           </p>
       </div>
       </div>

       <div className='main-container2'>
         <Image className='main-image1' src={benefit} alt='Atlas Benefit'/>
         <PopoverButton/>
       </div>

       <div className='main-container3'>
         <div className='main-subContainer3'>
         <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>Atlas Flex Pass</h2>
               <h2 className='dining-subText'>Plans can change last-minute—that&apos;s why we created FlexPass—so you can change or
                cancel any flight booked with your Atlas card, and get reimbursed for any fees you incur up to $600 a year.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>BLADE Helicopter Rides</h2>
               <h2 className='dining-subText'>Get 5x points, and 7.5% off, plus meet & greet for airport 
               transfers. Spend more than $20,000 per month with Atlas, and you’ll also receive a BLADE 
               Airport Pass, which gets you $100 off every airport flight, a companion pass, and flights starting at $95 with your pass discount.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>BLADE Private Jets</h2>
                <h2 className='dining-subText'>Get 5x points, and 7.5% off, plus priority availability and waived card
                 processing fees when you use Atlas to book a private jet charter with BLADE.</h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </div>
        </div>

        <div className='main-container4'>
            <Image className='main-image2' src={dining} alt='Atlas Dining' />

            <button className='main-btn'>
                <h2 className='main-btnText'>Learn More About Atlas Benefits</h2>
               <div className='main-btnDiv'>
                 <LuPlus className='main-btnIcon '/>
              </div> 
            </button>
        </div>
</div>
   </section>
  )
}

export default MainSection