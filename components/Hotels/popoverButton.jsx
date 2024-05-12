
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
     <h2 className='location location1 uppercase flex items-center justify-center font-rale gap-2 hover:bg-[rgba(255,255,255,0.3)]'><FaLocationDot/>The oberoi, marrakech , morocco </h2>

        {isPopoverVisible && (
          <div className="popover-dining-card  flex flex-col  py-6 px-6 ">

            <div className='flex flex-col justify-start items-start '>
              <h2 className='font-rale text-[30px] text-white'>The Oberoi Marrakech</h2>
              <p className='flex flex-row gap-1 items-center justify-center font-rale -mt-1 text-[13px] font-[300] text-white uppercase'><FaLocationDot className='text-[13px]'/>Marrakech, Morocco</p>
            </div>

            <div className='pt-12 flex flex-col gap-5 font-rale font-[300] text-white'>
              <p>Set in Marrakech, 12 km from Yves Saint Laurent Museum, The Oberoi Marrakech 
              offers accommodation with a restaurant, free private parking, free bikes and
              an outdoor swimming pool.
              </p>

              <p>
              Each accommodation at the 5-star hotel has garden views, and guests can enjoy
              access to a bar and to a garden. The hotel features an indoor pool, fitness centre,
              evening entertainment and a 24-hour front desk. Book The Oberoi Marrakech and more on Atlas.
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
