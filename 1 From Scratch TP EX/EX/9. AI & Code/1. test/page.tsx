'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import PropertiesSection from '@/components/PropertiesSection'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-aura-black">
      <HeroSection />
      <PropertiesSection />
      <ChatWidget />
    </main>
  )
}


