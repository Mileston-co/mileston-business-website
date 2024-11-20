"use client";

import React from 'react'
import HeroSection from './home/HeroSection'
import SendMoneyForm from './home/SendMoneyForm'
import Analytics from './home/Analytics'
import Features from './home/Features'
import CardFunctions from './home/CardFunctions'
import CryptoCurrency from './home/CryptoCurrency'
import { ScrollTriggeredAnimation } from '@/components/Animation';

function Home() {
  return (
    <main className='container mx-auto'>
      <HeroSection />
      <SendMoneyForm />
      <Analytics />
      <Features />
      <CardFunctions />
      <CryptoCurrency />
    </main>
  )
}

export default Home