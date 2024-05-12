
"use client"
import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import Image from 'next/image';
import cardfront from '../../public/cardfront.webp';
import cardback from '../../public/cardback.webp';
import cardcorner from '../../public/CardBackCorner.webp'

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
         <h2 className='main-btnText '>Learn More About The Card</h2>
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
                  <h2 className='modal-mainText'>Advanced Construction.</h2>
                  <p className='modal-subText'>21 grams of high density steel, CNC-milled and engraved, then polished to a brilliant mirror finish that is unlike any other card.</p>
                  </div>
                
                  <div className=''>
                    <div className='w-[85%] lg:w-[50%] h-[55vh] md:h-[85vh] flex rounded-3xl bg-gradient-to-r from-[#373c59] to-[#9c97b8] justify-start flex-col mx-auto'>
                    <Image className='w-[87%] h-[87%] object-cover rounded-tl-3xl flex justify-start' src={cardfront} alt='Front of the card'/>  
                    </div>
                    <div className='modal-line'></div>
                    <p className='modal-p'>DESIGNED AND ENGINEERED. FRONT TO BACK.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>Personalized for you.</h2>
                  <p className='modal-subText'>Featuring a personal icon by your name—pick from a range of fun icons to make it yours.</p>
                  </div>
                
                  <div className=''>
                    <div className='w-[85%] lg:w-[50%] h-[55vh] md:h-[85vh] flex rounded-3xl bg-gradient-to-r from-[#373c59] to-[#9c97b8] justify-end items-end flex-col mx-auto'>
                    <Image className='w-[87%] h-[87%] object-cover rounded-tl-3xl flex justify-start' src={cardcorner} alt='Front of the card'/>  
                    </div>
                    <div className='modal-line'></div>
                    <p className='modal-p'>MAKE ATLAS CARD YOURS WITH AN ENGRAVED ICON.</p>
                  </div>
                </div>

                <div className='modal-container1'>
                  <div className='modal-subContainer'>
                  <h2 className='modal-mainText'>Enhanced privacy.</h2>
                  <p className='modal-subText'>With no visible card number on its surface, Atlas keeps your privacy where it belongs.</p>
                  </div>
                
                  <div className=''>
                    <div className='w-[85%] lg:w-[50%] h-[55vh] md:h-[85vh] flex rounded-3xl bg-gradient-to-r from-[#373c59] to-[#9c97b8] justify-center items-center flex-col mx-auto'>
                    <Image className=' object-contain w-[98%] md:w-[89%] rounded-tl-3xl flex justify-start' src={cardback} alt='Front of the card'/>  
                    </div>
                    <div className='modal-line'></div>
                    <p className='modal-p'>MADE WITH PRIVACY AND SECURITY IN MIND.</p>
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
