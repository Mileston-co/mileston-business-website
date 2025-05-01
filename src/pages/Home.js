'use client';

import React from 'react';
import HeroSection from './home/HeroSection';
import SendMoneyForm from './home/SendMoneyForm';
import Analytics from './home/Analytics';
import Features from './home/Features';
import CardFunctions from './home/CardFunctions';
import CryptoCurrency from './home/CryptoCurrency';
import WhyMileston from './home/WhyMileston';
import Benefits from './home/Benefits';
import Partners from './home/Partners';

// import Testimonials from './home/Testimonials';

function Home() {
    return (
        <main className="container mx-auto">
            <HeroSection />
            <section id="partners">
                <Partners />
            </section>
            <section id="sendMoneyForm">
                <SendMoneyForm />
            </section>
            <Analytics />
            <section id="features">
                <Features />
            </section>
            <section id="why-mileston">
                <WhyMileston />
            </section>
            <section id="cards">
                <CardFunctions />
            </section>

            <section id="benefits">
                <Benefits />
            </section>
            <section id="crypto">
                <CryptoCurrency />
            </section>
        </main>
    );
}

export default Home;
