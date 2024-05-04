
import React from 'react'
import Image from 'next/image'
import alex_loader from '../../public/alex_loader (3).webp'
import PopoverButton from '@/components/PopoverButton'

const download = () => {
  return (
   <section>
    <div className='download h-[90vh] relative '>
       <PopoverButton/>

      <div className='flex flex-col gap-6 py-28 justify-center items-center'>
         <h1 className='text-[85px] font-rale font-[500] text-white'>Download app.</h1>
         <p className='font-rale text-[28px] w-full lg:w-[50%] text-center text-[hsla(0,0%,100%,.6)]'>Scan the QR code or visit atlascard.com/download on your iPhone to download Atlas.</p>
      </div> 
    </div>

    <div className='circle  h-56 w-56 rounded-full bg-white'></div>

     <div className='h-[30vh] flex items-end pb-2 justify-center bg-[#373c59]'>
        <p className='font-mono uppercase text-[15px]'>Available on the <span className='underline'>app store</span></p>
     </div>

   </section>
  )
}

export default download