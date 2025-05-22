
import FeaturedProducts from '@/components/home/FeaturedProducts'
import HeroSection from '@/components/home/HeroSection'
import RecentlyAdded from '@/components/home/RecentlyAdded'
import React from 'react'

export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <RecentlyAdded />
      <FeaturedProducts />
    </div>
  )
}
