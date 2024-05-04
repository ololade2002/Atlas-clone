
import Image from 'next/image'
import React from 'react'
import woman from '@/public/atlas-woman.webp'
import logo from '@/public/Atlas+Logo.png'
import alex_loader from '../../public/alex_loader (3).webp'
import Link from 'next/link'

const requestInvite = () => {
  return (
     <section>
        <div className='flex flex-row h-[100vh] '>

          <div className='w-[60%] h-[40vh] fixed top-0 left-0 '>
              <Image className='h-screen object-cover' src={woman} alt='A woman holds the beautiful Atlas Card '/>
          </div>

          <div className='absolute right-0 w-[40%] bg-[#fafafa] overflow-y-auto h-[100vh]'>
           <div className=' px-[70px] py-[48px]'>
            <Link href='/'>
            <Image className='h-14 w-full mb-4 object-contain' src={logo} alt='Atlas logo'/>
            </Link>
            <div className='line h-[1px]  bg-secondary w-full'></div>
            <div className='mt-8 flex flex-col gap-5'>
              <h2 className='text-secondary text-[37px] font-rale'>Request an invite.</h2>
              <p className='text-secondary text-[17px] font-rale'>Please tell us a bit about yourself so that we may review your request for an application.</p>

            </div>

           </div>

           <div className='bg-white'>
            <div className=' px-[70px] py-[48px]'>

            <Link href='/'>
            <Image className='h-14 w-[25%]  mb-4 object-contain' src={logo} alt='Atlas logo'/>
            </Link>

            <div className='flex flex-col gap-12 font-mono uppercase text-secondary text-[14px] font-[400]'>
              <ul className='list'>
                <li>Dining</li>
                <li>Hotels</li>
                <li>Concierge</li>
              </ul>
              <ul className='list'>
                <li>Benefits</li>
                <li>Card</li>
                <li>App</li>
              </ul>
              <ul className='list'>
                <li>EMAIL</li>
                <li>Twiiter</li>
                <li>Instagram</li>
              </ul>
              <ul className='list'>
                <li>STATEMENT DISCLOSURE</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>Download App</li>
              </ul>
            </div>

            <div className=' pb-12'>
              <Image src={alex_loader} className='h-[27vh] object-contain' alt='Atlas runner'/>
              <div className='bg-[rgba(0,0,0,0.09)] -mt-1 w-full h-[2px]'></div>
           </div>

           <div className='text-neutral font-mono flex flex-col gap-6 text-[12px]'>
            <p>1. PLEASE NOTE THAT THIS IS NOT A FORMAL FINANCIAL APPLICATION AND ANY PERSONAL INFORMATION YOU PROVIDE WILL NOT BE USED FOR CREDIT DECISIONING.</p>
            <p>ISSUED BY LEAD BANK | 2024 © ATLAS EXPLORATION, INC.</p>
            <p>ATLAS EXPLORATION, INC IS A TECHNOLOGY COMPANY, NOT A BANK. ATLAS CARD IS ISSUED BY LEAD BANK ("ISSUER"). 
              AN APPLICATION IS REQUIRED. CARDHOLDERS MUST BE AT LEAST 18 YEARS OLD AND A CITIZEN OF THE UNITED STATES, 
              OR A PERMANENT RESIDENT WITH A VALID SOCIAL SECURITY NUMBER (SSN) OR ITIN. FINANCING IS SUBJECT TO ISSUER'S 
              APPROVAL. PAYMENT OF ACCOUNT BALANCE DUE IN FULL MONTHLY. FEES MAY BE ASSESSED ON OVERDUE AMOUNTS. 
              AN ANNUAL MEMBERSHIP FEE APPLIES.</p>
           </div>




            </div>
           </div>
          </div>

        </div>
     </section>
  )
}

export default requestInvite