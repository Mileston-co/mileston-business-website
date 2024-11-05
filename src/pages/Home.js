import React from 'react'
import HeroSection from './home/HeroSection'
import SendMoneyForm from './home/SendMoneyForm'
import Features from './home/Features'

function Home() {
  return (
    <main className='container mx-auto'>
      <HeroSection />
      <SendMoneyForm />
      <Features />
    </main>
  )
}

export default Home