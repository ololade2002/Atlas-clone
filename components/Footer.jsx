 import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/Atlas+Logo.png'
import alex from '../public/alex_loader-dark.webp'
 
 const Footer = () => {
   return (
     <section className='bg-gradient-to-b from-[#141414] to-[#000]'>
        <div className='w-full px-4 lg:w-[55%] py-20 flex flex-col gap-14 justify-center items-center mx-auto'>
            
        <div className="footer-container1 w-full flex justify-start items-start">
            <Image className='invert brightness-0 w-[24%] -ml-[10px] md:-ml-[25px]' src={logo} alt='Logo'/>
        </div>

       <div className='footer-container2 w-full flex flex-col gap-8 mg:gap-0 md:flex-row justify-between mx-auto '>
        <div className='footer-subcontainer'>
            <Link href='/' className='footer-text'>Dinner</Link>
            <Link href='/' className='footer-text'>Hotels</Link>
            <Link href='/' className='footer-text'>Concierge</Link>
        </div>

        <div className='footer-subcontainer'>
            <Link href='/' className='footer-text'>Benefits</Link>
            <Link href='/' className='footer-text'>Card</Link>
            <Link href='/' className='footer-text'>App</Link>
        </div>

        <div className='footer-subcontainer'>
            <Link href='/' className='footer-text'>Email</Link>
            <Link href='/' className='footer-text'>Twitter</Link>
            <Link href='/' className='footer-text'>Instagram</Link>
        </div>

        <div className='footer-subcontainer'>
            <Link href='/' className='footer-text'>Statement Disclosure</Link>
            <Link href='/' className='footer-text'>Privacy Policy</Link>
            <Link href='/' className='footer-text'>Terms of use</Link>
        </div>

        <div className='footer-subcontainer'>
            <Link href='/' className='footer-text'>Dowmload App</Link>
            <Link href='/' className='footer-text'>Media Kit</Link>
        </div>
       </div>

       <div className="footer-container3 w-full">
        <div className='flex justify-end items-end'>
        <Image src={alex} className='mr-[30px] w-[25%]' alt='Alex loader'/>
        </div>
        <div className='bg-white -mt-0 w-full h-[1px]'></div>
       </div>

       <div className="footer-container4">
        <div className='font-mono text-neutral text-[12px] flex flex-col gap-2'>
            <p>1. ATLAS DINING RESERVATIONS ARE AVAILABLE ON A FIRST COME, FIRST SERVE BASIS EXCLUSIVELY TO ATLAS CARDHOLDERS. THE ATLAS DINING CODE OF CONDUCT (ATLASCARD.COM/CODE-OF-CONDUCT) AND THE CANCELATION POLICY OF THE APPLICABLE RESTAURANT APPLY FOR EACH RESERVATION. LISTED RESTAURANTS ARE SUBJECT TO CHANGE ANY TIME WITHOUT PRIOR NOTICE.</p>
            <p>2. LAST-MINUTE RESERVATIONS SUBJECT TO AVAILABILITY.</p>
            <p>3. POINTS EARNED FOR PURCHASES WITH ATLAS CARD ARE POSTED TO YOUR ACCOUNT PER STATEMENT PERIOD AFTER PAYMENT OF YOUR STATEMENT BALANCE. YOUR AVAILABLE POINTS BALANCE CAN BE UTILIZED TO PAY FOR ATLAS HOTELS BOOKINGS IN PART OR IN FULL. ATLAS HOTELS BOOKINGS DO NOT ACCRUE POINTS WHEN PAYING FOR A STAY WITH YOUR POINTS BALANCE. 3X POINTS (3 POINTS FOR EVERY DOLLAR SPENT) ARE EARNED WHEN PAYING FOR ATLAS HOTELS BOOKINGS USING YOUR ATLAS CARD. SUBJECT TO RESTRICTIONS AND REWARDS & BENEFIT TERMS OF USE.</p>
            <p>4. PASSES, TICKETS, OR OTHER VARIOUS FORMS OF ENTRY AT SPECIFIC SEATING AND/OR EVENT ACCESS LEVELS AVAILABLE EXCLUSIVELY TO ATLAS CARDHOLDERS SUBJECT TO AVAILABILITY. CARDHOLDER IS RESPONSIBLE FOR THE COST OF PURCHASES OF GOODS AND SERVICES AND/OR THIRD PARTY EXPENSES AND SERVICES INCURRED IN RELATION TO ANY FULFILLED REQUESTS.</p>
            <p>5. SPORTING EVENT ACCESS AVAILABLE EXCLUSIVELY TO ATLAS CARDHOLDERS SUBJECT TO AVAILABILITY. CARDHOLDER IS RESPONSIBLE FOR THE COST OF PURCHASES OF GOODS AND SERVICES AND/OR THIRD PARTY EXPENSES AND SERVICES INCURRED IN RELATION TO ANY FULFILLED REQUESTS.</p>
            <p>6. ACCESS TO SPECIFIC CONCERT EVENTS AVAILABLE EXCLUSIVELY TO ATLAS CARDHOLDERS SUBJECT TO AVAILABILITY. CARDHOLDER IS RESPONSIBLE FOR THE COST OF PURCHASES OF GOODS AND SERVICES AND/OR THIRD PARTY EXPENSES AND SERVICES INCURRED IN RELATION TO ANY FULFILLED REQUESTS.</p>
            <p>7. ATLAS CARDHOLDERS ARE ELIGIBLE TO RECEIVE REIMBURSEMENT FOR UP TO $600 PER YEAR OF CANCELATION/CHANGE FEE INCURRED WITH RESPECT TO ELIGIBLE AIRFARE PURCHASES THAT ARE CANCELED FOR ANY REASON, FOR WHICH REIMBURSEMENT IS SOUGHT BEFORE THE BENEFIT END DATE, AND IF THE ELIGIBLE CARDHOLDER IS NOT ELIGIBLE TO RECEIVE A REIMBURSEMENT FROM ANOTHER SOURCE. $100 MAXIMUM REIMBURSEMENT PER REQUEST. VISIT HTTPS://ATLASCARD.COM/FLEXPASS TO LEARN MORE.</p>
            <p>8. 5X POINTS (5 POINTS FOR EVERY DOLLAR SPENT) FOR BLADE PRIVATE JET CHARTER SERVICES APPLIES TO ELIGIBLE BLADE TRANSACTIONS. POINTS ARE CALCULATED AND APPLIED AFTER THE END OF THE APPLICABLE STATEMENT PERIOD THAT INCLUDES FULLY SETTLED BLADE TRANSACTIONS, UPON PAYMENT OF STATEMENT BALANCE. SUBJECT TO RESTRICTIONS AND REWARDS & BENEFIT TERMS OF USE.</p>
            <p>9. 5X POINTS (5 POINTS FOR EVERY DOLLAR SPENT) FOR BLADE HELICOPTER SERVICES APPLIES TO ELIGIBLE BLADE TRANSACTIONS. POINTS ARE CALCULATED AND APPLIED AFTER THE END OF THE APPLICABLE STATEMENT PERIOD THAT INCLUDES FULLY SETTLED BLADE TRANSACTIONS, UPON PAYMENT OF STATEMENT BALANCE. SUBJECT TO RESTRICTIONS AND REWARDS & BENEFIT TERMS OF USE.</p>
            <p>10. ATLAS CARD IS A CHARGE CARD WITH NO PRE-SET SPENDING LIMITS AND DOES NOT INCUR INTEREST PAYMENTS. UNLIKE TYPICAL CREDIT CARDS, THE AMOUNT YOU CAN SPEND ON A PURCHASE IS APPROVED BASED ON A RANGE OF FACTORS, SUCH AS YOUR PURCHASE HISTORY, STATEMENT BALANCE PAYMENTS, AND CREDIT HISTORY. WITH A CHARGE CARD, YOU NEED TO PAY OFF YOUR FULL STATEMENT BALANCE EACH MONTH TO CONTINUE UTILIZING CARD SERVICES. NON-PAYMENT OF AN OUTSTANDING STATEMENT BALANCE MAY INCUR A LATE PAYMENT CHARGE. PLEASE REFER TO THE CARDHOLDER AGREEMENT FOR MORE DETAILS ON THE FULL SCHEDULE OF SERVICE FEES.</p>
        </div>
       </div>

        </div>
     </section>
   )
 }
 
 export default Footer