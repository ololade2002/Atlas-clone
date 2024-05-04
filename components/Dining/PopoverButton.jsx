
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
     <h2 className='location flex items-center justify-center font-rale gap-2 hover:bg-[rgba(255,255,255,0.3)]'><FaLocationDot/>  ITO, NYC</h2>

        {isPopoverVisible && (
          <div className="popover-dining-card  flex flex-col  py-6 px-6 ">

            <div className='flex flex-col justify-start items-start '>
              <h2 className='font-rale text-[30px] text-white'>ITO</h2>
              <p className='flex flex-row gap-1 items-center justify-center font-rale -mt-1 text-[13px] font-[300] text-white uppercase'><FaLocationDot className='text-[13px]'/> New York City</p>
            </div>

            <div className='pt-12 flex flex-col gap-5 font-rale font-[300] text-white'>
              <p>Set in downtown Manhattan and designed with a modern Japanese approach.
                 The 16-seat Omakase counter is a space where Chef/owners Masa Ito
                 and Kevin Kim share their inventive interpretation on traditional sushi.
              </p>

              <p>
              Carefully hand selected, the fish is flown in directly from Japan for the 
              excellent course of nigiri. With appetizers like kampachi with yuzu chive 
              oil or desserts like strawberry panna cotta. Book a table at ITO and more on Atlas.
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
