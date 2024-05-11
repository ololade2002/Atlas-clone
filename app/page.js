
import React from 'react'
import AppSection from '@/components/AtlasApp/AppSection'
import CardSection from '@/components/AtlasCard/CardSection'
import BenefitSection from '@/components/Benefits/BenefitSection'
import ConciergeSection from '@/components/Concierge/ConciergeSection'
import DiningSection from '@/components/Dining/DiningSection'
import HeroSection from '@/components/HeroSection'
import HotelSection from '@/components/Hotels/HotelSection'
import RewardSection from '@/components/Rewards/RewardSection'
import TopContent from '@/components/TopContent'
import MembershipSection from '@/components/Membership/MembershipSection'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TopContent/>
      <DiningSection/>
      <HotelSection/>
      <ConciergeSection/>
      <BenefitSection/>
      <CardSection/>
      <AppSection/>
      <RewardSection/>
      <MembershipSection/>
      <Footer/>
    </div>
  )
}

export default Home