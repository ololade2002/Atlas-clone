
"use client"
import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";


function PopoverButton() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <div onClick={togglePopover} className="text-image z-40 ">
     <h2 className='location location1 uppercase flex items-center justify-center font-rale  gap-2 hover:bg-[rgba(255,255,255,0.3)]'><FaLocationDot/>coachella access pass, indio </h2>

        {isPopoverVisible && (
          <div className="popover-dining-card  flex flex-col  py-6 px-6 ">

            <div className='flex flex-col justify-start items-start '>
              <h2 className='font-rale text-[30px] text-white'>Coachella Artist Pass</h2>
              <p className='flex flex-row gap-1 items-center justify-center font-rale -mt-1 text-[13px] font-[300] text-white uppercase'><FaLocationDot className='text-[13px]'/>Indio, California</p>
            </div>

            <div className='pt-12 flex flex-col gap-5 font-rale font-[300] text-white'>
              <p>Get the exclusive Coachella Artist Pass and experience the largest music festival in the US with premium access.
                 Move more freely within the festival grounds—with closer access to performances and more comfortable amenities.
              </p>

              <p>
              The Artist Pass offers the highest level of credentials available allowing access to all of the VIP areas, private 
              viewing sections, exclusive entrances/exits, and golf carts behind the stages. Book this and more exclusive experiences with Atlas.
              </p>
            </div>
            
             <button className='pt-6 flex justify-center items-center' onClick={togglePopover}>
                <CiCircleRemove className='text-[40px] text-white hover:opacity-80 '/>
             </button>
          </div>
         )}
    </div>
  );
}

export default PopoverButton;
