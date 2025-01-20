'use client';

import React from 'react';
import HeroSection from './home/HeroSection';
import SendMoneyForm from './home/SendMoneyForm';
import Analytics from './home/Analytics';
import Features from './home/Features';
import CardFunctions from './home/CardFunctions';
import CryptoCurrency from './home/CryptoCurrency';
import GlobalInfrastructure from './home/GlobalInfrastructure';

function Home() {
    return (
        <main className="container mx-auto">
            <HeroSection />
            <SendMoneyForm />
            <Analytics />
            <section id="features">
                <Features />
            </section>
            <section id="cards">
                <CardFunctions />
            </section>
            <section id="infrastructure">
                <GlobalInfrastructure />
            </section>
            <section id="crypto">
                <CryptoCurrency />
            </section>
        </main>
    );
}

export default Home;
