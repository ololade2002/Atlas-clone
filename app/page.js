
import AppSection from '@/components/AtlasApp/AppSection'
import CardSection from '@/components/AtlasCard/CardSection'
import BenefitSection from '@/components/Benefits/BenefitSection'
import ConciergeSection from '@/components/Concierge/ConciergeSection'
import DiningSection from '@/components/Dining/DiningSection'
import HeroSection from '@/components/HeroSection'
import HotelSection from '@/components/Hotels/HotelSection'
import TopContent from '@/components/TopContent'
import React from 'react'

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
    </div>
  )
}

export default Home