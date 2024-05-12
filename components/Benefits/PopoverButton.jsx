
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
     <h2 className='location location1 uppercase flex items-center justify-center font-rale  gap-2 hover:bg-[rgba(255,255,255,0.3)]'><FaLocationDot/>blade aiport, nyc </h2>

        {isPopoverVisible && (
          <div className="popover-dining-card  flex flex-col  py-6 px-6 ">

            <div className='flex flex-col justify-start items-start '>
              <h2 className='font-rale text-[30px] text-white'>BLADE Airport</h2>
              <p className='flex flex-row gap-1 items-center justify-center font-rale -mt-1 text-[13px] font-[300] text-white uppercase'><FaLocationDot className='text-[13px]'/>New York City</p>
            </div>

            <div className='pt-12 flex flex-col gap-5 font-rale font-[300] text-white'>
              <p>Skip the traffic and arrive in minutes. Getting from NYC to airports in the area
                 can take hours. Book a private BLADE helicopter to fly you from Manhattan to either JFK or EWR in 5 minutes.
              </p>

              <p>
              Atlas members get 5x points on every ride,  a 7.5% discount, and the meet and greet service—a private SUV transfer to your terminal. Spend over $20,000 a
              month on Atlas and receive Blade Airport Pass—$100 off every ride, a companion pass, and rides starting at $95.
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
