
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
         <h2 className='main-btnText '>Learn More About Atlas Hotels</h2>
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
                  <h2 className='modal-mainText'>Find your vibe.</h2>
                  <p className='modal-subText'>Atlas Hotels is made to explore. Swipe, tap, and filter by vibe to discover the destination that’s just right for you.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/FindYourVibe.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>DISCOVER YOUR NEXT DREAM STAY.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>Advanced search .</h2>
                  <p className='modal-subText'>Search by city, country, or even by a specific hotel property.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/HotelSearch.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>REFINE YOUR SEARCH FOR THE PERFECT HOTEL.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>Book with a single tap.</h2>
                  <p className='modal-subText'>No need to enter your Atlas card information—we’ve got that. Just find what you like, and book.</p>
                  </div>
                
                  <div className=''>
                    <video autoPlay muted loop  playsInline disablePictureInPicture controls={false}  className='modal-video'>
                      <source  src="https://atlascard.com/assets/videos/HotelsBookTonight.mp4" type="video/mp4"/>    
                    </video>  
                    <div className='modal-line'></div>
                    <p className='modal-p'>DESIGNED TO GET YOU ON YOUR WAY. FAST.</p>
                  </div>
                </div>   

                <div className='modal-container2  '>
                   <h2 className='modal-mainText'>The greatest hotels in the world.</h2>
                   <p className='modal-subText'>Here’s a quick preview of a few of the most popular properties on Atlas Hotels.</p>
               
                   <div className=' modal-subContainer2 '>
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>1 Hotel Hanalei Bay</h2>
                        <p className='modal-suncontainer2-p '>KAUAI, HAWAII</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Aman Tokyo</h2>
                        <p className='modal-suncontainer2-p '>Tokyo, Japan</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Claridges&apos;s </h2>
                        <p className='modal-suncontainer2-p '>London, United Kingdom</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Cheval Blanc Paris</h2>
                        <p className='modal-suncontainer2-p '>Paris, France</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Dorchester</h2>
                        <p className='modal-suncontainer2-p '>London, United Kingdom</p>
                      </div>
               
                      <div className='h-[1px] w-full bg-[#272727]'></div>
                      <div className='modal-subContainer2Div '>
                        <h2 className='modal-subContainer2-h2 '>Montage Big Sky</h2>
                        <p className='modal-suncontainer2-p '>Big Sky, Montana</p>
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