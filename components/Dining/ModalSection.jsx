
"use client"
import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";

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
         <h2 className='main-btnText '>Learn More About Atlas Dining</h2>
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

                <div className='flex flex-col gap-16 lg:gap-24'>
                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>A world of options.</h2>
                  <p className='modal-subText'>Choose from top restaurants in NYC,
                   LA, SF, Miami, and more. All inside Atlas app.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/DiningLocations.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>FILTER BY LOCATION INSIDE ATLAS APP.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>Book in an instant</h2>
                  <p className='modal-subText'>No need to navigate clunky reservation sites. You&apos;re ready to go in just a couple of taps.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/DiningBookTonight.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>BOOK YOUR TABLE IN SECONDS.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>See everything, all at once.</h2>
                  <p className='modal-subText'>View or change your upcoming reservations inside Atlas app, right at your fingertips.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/DiningMyReservations.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>STAY ON TOP OF UPCOMING RESERVATIONS.</p>
                  </div>
                </div>   

                <div className='modal-container2  '>
                   <h2 className='modal-mainText'>Think of it as an amuse-bouche.</h2>
                   <p className='modal-subText'>With hundreds of incredible restaurants to choose from,
                   here are a few highlights to give you a sense of what&apos;s in store.</p>
               
                   <div className=' modal-subContainer2 '>
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Sartiano&apos;s</h2>
                        <p className='modal-suncontainer2-p '>New York, New York</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Sushi by Scratch</h2>
                        <p className='modal-suncontainer2-p '>MIAMI, FLORIDA</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Mila</h2>
                        <p className='modal-suncontainer2-p '>LOS ANGELES, CALIFORNIA</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Estela</h2>
                        <p className='modal-suncontainer2-p '>New York, New York</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Lure Fishbar</h2>
                        <p className='modal-suncontainer2-p '>MIAMI, FLORIDA</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Olivetta</h2>
                        <p className='modal-suncontainer2-p '>LOS ANGELES, CALIFORNIA</p>
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
