
"use client"
import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import Image from 'next/image';

const ModalSection = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <>
    <div className="modal-section flex items-center justify-center">
    <button type="button" onClick={openModal} className='main-btn  '>
         <h2 className='main-btnText '>Learn More About Benefits</h2>
         <div className='main-btnDiv '>
         <LuPlus className='main-btnIcon  '/>
        </div> 
    </button>     
         
    </div>

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative  z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">

              <Dialog.Panel className="modal-panel transition-all">
              <div className='modal-subPanel'>
               
               <button type="button" onClick={closeModal} className='modal-btn'>
                  <CiCircleRemove className='modal-btnIcon'/>
                </button>

                <div className='flex flex-col gap-24'>
                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>One place for all your benefits.</h2>
                  <p className='modal-subText'>Access all your membership benefits right inside the app.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/BenefitsTap.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>SWIPE THROUGH YOUR BENEFITS WITH EASE.</p>
                  </div>
                </div>


                <div className='modal-container2 '>
               
                   <div className=' modal-subContainer2 '>
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/AtlasFlexPass.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>Atlas FlexPass</h2>
                        </div>
                        <p className='modal-benefit-p'>Change or cancel any flight for any reason, and Atlas will reimburse you for any incurred fees up to $600 a year.</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/Blade.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>BLADE Anywhere</h2>
                        </div>
                        <p className='modal-benefit-p'>Get 5x points, and 7.5% off, plus priority availability and waived card processing fees when you use Atlas to book a private jet charter with BLADE.</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/Blade.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>BLADE Airport</h2>
                        </div>
                        <p className='modal-benefit-p'>Get 5x points, and 7.5% off, plus meet & greet for airport transfers. Spend more than $20,000 per month with Atlas, and you’ll also receive a BLADE Airport Pass, which gets you $100 off every airport flight, a companion pass, and flights starting at $95 with your pass discount.</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/OneMedical.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>One Medical</h2>
                        </div>
                        <p className='modal-benefit-p'>Complimentary $199 statement credit when you enroll for an annual membership with Atlas card.</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/FutureFitness.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>Future</h2>
                        </div>
                        <p className='modal-benefit-p'>$300 in annual statement credits for Future personal training membership with your Atlas card.</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer3Div '>
                        <div className='modal-benefit'>
                          <Image width={23} height={23} src='https://atlascard.com/assets/icons/National.svg' alt='Atlas Flex Pass'/>
                          <h2 className='modal-subContainer2-h2 '>National</h2>
                        </div>
                        <p className='modal-benefit-p'>EmeraldClub® Executive membership. Receive faster access, special offers, upgrades, and more.</p>
                      </div>
                   
                   </div>
               </div> 
                </div>
               
               
               
              </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>

  )
}

export default ModalSection