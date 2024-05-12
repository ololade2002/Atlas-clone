"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import woman from '@/public/atlas-woman.webp'
import logo from '@/public/Atlas+Logo.png'
import alex_loader from '../../public/alex_loader (3).webp'

const RequestInvite = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    city:'',
    agree: false,
    accept: false  
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.city && formData.agree && formData.accept) {
      setSubmitted(true);
    } else {
      setError('Please fill in all fields and agree to the terms');
    }
  };


  return (
     <section>
        <div className='flex flex-col-reverse lg:flex-row h-[100vh] '>

          <div className='w-[60%] h-[40vh] fixed top-0 left-0 '>
              <Image className='h-screen object-cover' src={woman} alt='A woman holds the beautiful Atlas Card '/>
          </div>

          <div className='absolute right-0 w-full lg:w-[40%] bg-[#fafafa] overflow-y-auto h-[100vh]'>
           <div className=' px-[20px] sm:px-[40px] md:px-[70px] py-[48px]'>
            <Link href='/'>
            <Image className='h-14 w-full mb-4 object-contain' src={logo} alt='Atlas logo'/>
            </Link>
            <div className='line h-[1px]  bg-secondary w-full'></div>
            
            <div className=''>
              {!submitted ? (
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
 
                <div className='my-8 flex flex-col gap-5'>
                   <h2 className='text-secondary text-[28px] xs:text-[32px] sm:text-[37px] font-rale'>Request an invite.</h2>
                   <p className='text-secondary text-[17px] font-rale'>Please tell us a bit about yourself so that we may review your request for an application.</p>
                 </div>
                  
                  <label >
                    <input type="text" className='form-input' placeholder='Firstname' name="firstName"  required value={formData.firstName} onChange={handleChange} />
                  </label>

                  <label>
                    <input type="text" className='form-input' placeholder='Lastname' name="lastName" required value={formData.lastName} onChange={handleChange} />
                  </label>

                  <label>
                    <input type="email" className='form-input' placeholder='Email' name="email" required value={formData.email} onChange={handleChange}/>
                  </label>

                  <label>
                    <input type="text" className='form-input' placeholder='Phone Number' name="phone" required value={formData.phone} onChange={handleChange}/>
                  </label>
                  
                  <label>
                    <input type="text" className='form-input' placeholder='City' name="city" required value={formData.city} onChange={handleChange}/>
                  </label>

                  <label className='flex flex-row items-center mt-4 gap-4'>
                    <input className='h-7 w-7 rounded-lg ' type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}/>
                    <p className='font-rale text-[#727272] text-[14px]'>I agree to the Terms of Use and Privacy Policy.</p>
                  </label>

                  <label className='flex flex-row items-center mt-2 gap-4'>
                    <input className='h-7 w-7 rounded-lg' type="checkbox" name="accept" checked={formData.accept} onChange={handleChange}/>
                    <p className='font-rale text-[#727272] text-[14px]'>I agree to receiving invite updates via email.</p>
                  </label>
 
                  <button className='bg-secondary font-rale mt-5 text-[20px] rounded-full py-4' type="submit">Submit</button>
                  {error && <p className='font-rale text-red-500 text-center text-[18px] pt-2' >{error}</p>}
                </form>
               ) : (
            <div>
              <p className='text-secondary font-rale text-4xl font-[400] pt-8'>Thank you, {formData.firstName}!</p>
              <p className='text-secondary font-rale text-[20px] my-6'>Your request has been submitted.</p>
              <button className='uppercase py-4 bg-secondary text-white font-rale my-16 hover:opacity-90 w-full mx-auto rounded-full'>Atlas is better with friends</button>
            </div>
             )}
            </div>

           </div>

           <div className='bg-white'>
            <div className=' px-[20px] sm:px-[40px] md:px-[70px] py-[48px]'>

            <Link href='/'>
            <Image className='h-14 w-[25%]  mb-4 object-contain' src={logo} alt='Atlas logo'/>
            </Link>

            <div className='flex flex-col gap-12 font-mono uppercase text-secondary text-[14px] font-[400]'>
              <div className='list'>
                <Link className='list-item' href='/#dining'>Dining</Link>
                <Link className='list-item' href='/#hotel'>Hotels</Link>
                <Link className='list-item' href='/#concierge'>Concierge</Link>
              </div>
              <div className='list'>
                <Link className='list-item' href='/#benefit'>Benefits</Link>
                <Link className='list-item' href='/#card'>Card</Link>
                <Link className='list-item' href='/#app'>App</Link>
              </div>
              <ul className='list'>
                <li className='list-item'>EMAIL</li>
                <Link href='https://twitter.com/atlascardhq' className='list-item'>Twiiter</Link>
                <Link href='https://www.instagram.com/atlascardhq' className='list-item'>Instagram</Link>
              </ul>
              <ul className='list'>
                <li className='list-item'>STATEMENT DISCLOSURE</li>
                <li className='list-item'>Privacy Policy</li>
                <li className='list-item'>Terms Of Use</li>
                <li className='list-item'>Download App</li>
              </ul>
            </div>

            <div className=' pb-12'>
              <Image src={alex_loader} className='h-[27vh] object-contain' alt='Atlas runner'/>
              <div className='bg-[rgba(0,0,0,0.09)] -mt-1 w-full h-[2px]'></div>
           </div>

           <div className='text-neutral font-mono flex flex-col gap-6 text-[12px]'>
            <p>1. PLEASE NOTE THAT THIS IS NOT A FORMAL FINANCIAL APPLICATION AND ANY PERSONAL INFORMATION YOU PROVIDE WILL NOT BE USED FOR CREDIT DECISIONING.</p>
            <p>ISSUED BY LEAD BANK | 2024 © ATLAS EXPLORATION, INC.</p>
            <p>ATLAS EXPLORATION, INC IS A TECHNOLOGY COMPANY, NOT A BANK. ATLAS CARD IS ISSUED BY LEAD BANK (ISSUER). 
              AN APPLICATION IS REQUIRED. CARDHOLDERS MUST BE AT LEAST 18 YEARS OLD AND A CITIZEN OF THE UNITED STATES, 
              OR A PERMANENT RESIDENT WITH A VALID SOCIAL SECURITY NUMBER (SSN) OR ITIN. FINANCING IS SUBJECT TO ISSUER&apos;S 
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

export default RequestInvite
