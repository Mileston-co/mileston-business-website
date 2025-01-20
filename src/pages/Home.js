"use client";

import React from 'react'
import HeroSection from './home/HeroSection'
import SendMoneyForm from './home/SendMoneyForm'
import Analytics from './home/Analytics'
import Features from './home/Features'
import CardFunctions from './home/CardFunctions'
import CryptoCurrency from './home/CryptoCurrency'
import StockSection from './home/StockSection'

function Home() {
  return (
    <main className='container mx-auto'>
      <HeroSection />
      <SendMoneyForm />
      <Analytics />
      <section id="features">
        <Features />
      </section>
      <section id="cards">
        <CardFunctions />
      </section>
      <section id="stocks">
        <StockSection />
      </section>
      <section id="crypto">
        <CryptoCurrency />
      </section>
    </main>
  )
}

export default Home