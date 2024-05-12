
import React from 'react'
import dining from '../../public/download.webp'
import Image from 'next/image';
import wheel from '../../public/wheel.svg'
import plane from '../../public/plane.svg'
import heart from '../../public/heart.svg'
import tshirt from '../../public/shirt.svg'
import bed from '../../public/bed (1).svg'
import bag from '../../public/bag.svg'
import car from '../../public/car.svg'
import utensils from '../../public/utensils.svg'
import basket from '../../public/basket.svg'
import lamp from '../../public/lamp.svg'
import drink from '../../public/drink.svg'
import comb from '../../public/comb.svg'

const MainSection = () => {
  return (
   <section className='card-mainsection'>
     <div className='card-subsection-m'>
       <div className='main-container1 order-2 '>
         <h1 className='main-text pt-16 md:pt-28 '>Rewards as dynamic as you.</h1>
         <div className='main-subContainer'>
           <h3 className='main-subText  '>Atlas Rewards</h3>
           <p className='main-paragraph '>
           A card that always gets you the maximum possible points without any effort on your part? That&apos;s Atlas dynamic rewards. Redeem points for luxury hotel stays or statement credits at incredible redemption rates.
           </p>
       </div>
       </div>

       <div className='main-container2 pb-12 md:pb-20 flex flex-col gap-7 justify-center items-center  order-1 '>
        <div className='flex flex-wrap px-4 w-full md:w-[60vw] justify-center items-center mx-auto gap-4 md:gap-7'>
            <div className='reward-box'>
            <Image className='' src={wheel} alt='wheel'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={plane} alt='plane'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={heart} alt='heart'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={tshirt} alt='tshirt'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={bag} alt='bag'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={bed} alt='bed'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={car} alt='car'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={utensils} alt='utensils'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={basket} alt='basket'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={lamp} alt='lamp'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={drink} alt='drink'/>
            </div>
            <div className='reward-box'>
            <Image className='' src={comb} alt='comb'/>
            </div>
        </div>
       </div>

       <div className='main-container3  order-4  '>
         <div className='main-subContainer3 '>
         <div className='h-[1px]  w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>5x Points on BLADE Flights</h2>
               <h2 className='dining-subText'>Book a helicopter or private jet charter with BLADE using your Atlas card and get 5x points for your trip.</h2>
           </div>

           <div className='h-[1px] w-full bg-[#272727]'></div>
           <div className='dining-main'>
               <h2 className='dining-text'>3x Points on Your Top Category Every Month</h2>
               <h2 className='dining-subText'>Whether you spend the most on hotels one month, or flights the next, you automatically get 3x points for that category every month. It&apos;s that simple.
               </h2>
           </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>3x Points on Atlas Hotels</h2>
                <h2 className='dining-subText'> Atlas Hotels is the best way to book your next luxury hotel stay—made even better with 3x points for every dollar spent on hotel bookings inside the app. 
               </h2>
            </div>

            <div className='h-[1px] w-full bg-[#272727]'></div>
            <div className='dining-main'>
                <h2 className='dining-text'>1x Points on Everything Else</h2>
                <h2 className='dining-subText'>  You&apos;re always rewarded with Atlas—every purchase you make earns at least a minimum of 1x points, and the bonus points just keep adding up from there.
               </h2>
            </div>
            <div className='h-[1px] w-full bg-[#272727]'></div>

          </div>
        </div>

        <div className='main-container4  relative order-3 '>
            <Image className= 'h-[70vh] md:h-[92vh] object-cover w-[85vw] md:w-[60%] rounded-3xl bg-gradient-to-r from-[#373c59] to-[#9c97b8] ' src={dining} alt='Atlas Dining' />
           
        </div>
        
</div>
   </section>
  )
}

export default MainSection