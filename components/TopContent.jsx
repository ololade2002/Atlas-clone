
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const TopContent = () => {
  return (
    <section id='topContent' className='w-full flex justify-center  '>
      <div className='py-32 w-[55%] flex flex-col gap-44'>
        <div className=''>
            <h2 className='text-gradient text-[27px] leading-[1.3] font-[400] font-rale text-center'>With Atlas, you can finally get tables at the hardest-to-book restaurants, find the perfect 
                suite at the world&apos;s best hotels, sit front row at sold-out concerts and sporting events—and
                 much more. All seamlessly brought to you inside a card and app that&apos;s as intuitive, as it is powerful.</h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <Link href='/request-invite' className='' >
              <h2 className='wf font-rale text-[26px] bg-secondary text-white flex gap-3 items-center justify-center px-6 py-3 rounded-full transition-all hover:bg-gradient-to-l from-indigo-700 to-transparent '>
                Become a Member <HiArrowRight className=' text-[20px]'/>
               </h2>
            </Link>
            <p className='text-neutral opacity-70 w-[45%] text-center py-4 font-rale'>Atlas membership is invite-only. Join the waitlist and we&apos;ll contact you if it&apos;s a fit.</p>
        </div>


      </div> 
    </section>
  )
}

export default TopContent