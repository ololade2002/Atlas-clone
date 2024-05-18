"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../public/atlas-logo.png';
import atlaslogo from '../public/Atlas+Logo.png'
import { HiArrowRight,  HiArrowDownTray  } from "react-icons/hi2";
import alex_loader from '../public/alex_loader (3).webp'
import { CiCircleRemove } from "react-icons/ci";
import Link from 'next/link';



function PopoverButton() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <div onClick={togglePopover} className="download-logo z-30 ">
      <Image className='w-[55px] h-[55px] object-contain' src={logo} alt='Atlas logo'/>

        {isPopoverVisible && (
          <div className="popover-card  flex flex-col items-center justify-center ">
            <div className='py-1'>
              <Image className=' w-[150px] object-contain' src={atlaslogo} alt='Atlas logo'/>
            </div>

           <div className='pt-10 pb-8'>
            <Image src={alex_loader} className='h-[20vh] object-contain' alt='Atlas runner'/>
            <div className='bg-[rgba(0,0,0,0.09)] -mt-1 w-full h-[2px]'></div>
           </div>
         
           <div className='flex flex-col gap-4 justify-center items-center px-6'>
            <Link href='/request-invite' className='bg-secondary px-4 py-4 rounded-full transition-all hover:bg-gradient-to-l from-indigo-700 to-transparent' >
                <h2 className='font-mono uppercase text-white text-[14px] sm:text-[16px] flex flex-row gap-[4px] sm:gap-2 items-center justify-center  '>Become a founding member <HiArrowRight className=' text-[20px]'/> </h2>
            </Link>
            <Link href='/download' className='border-2 border-solid border-secondary px-4 py-4 rounded-full transition-all hover:text-white hover:bg-gradient-to-l from-indigo-400 to-transparent'>
                <h2 className='font-mono uppercase text-secondary text-[14px] sm:text-[16px] flex flex-row gap-[4px] sm:gap-2 items-center justify-center   '>Download on the app store <HiArrowDownTray className='text-[20px]'/> </h2>
            </Link>
           </div>

             <button className='pt-7 py-7' onClick={togglePopover}>
                <CiCircleRemove className='text-[40px] text-neutral hover:text-secondary'/>
             </button>
          </div>
         )}
    </div>
  );
}

export default PopoverButton;
