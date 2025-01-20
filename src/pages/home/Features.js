"use client";

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Card from '@/components/Card';

// Import feature tab components
import GlobeComponent from './feature-tabs/Globe';
import Analytics from './feature-tabs/Analytics';
import PaymentLinks from './feature-tabs/PaymentLinks';
import Checkout from './feature-tabs/Checkout';
import Stablecoin from './feature-tabs/Stablecoin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FEATURE_TABS = [
  {
    id: 'globe',
    title: 'Global Coverage',
    component: GlobeComponent,
    description: 'Send money anywhere in the world instantly with our global payment network'
  },
  {
    id: 'analytics',
    title: 'Smart Analytics',
    component: Analytics,
    description: 'Track your payments and business growth with powerful analytics'
  },
  {
    id: 'payment-link',
    title: 'Payment Links',
    component: PaymentLinks,
    description: 'Create and share payment links in seconds for seamless transactions'
  },
  {
    id: 'checkout',
    title: 'Smart Checkout',
    component: Checkout,
    description: 'Streamlined checkout experience for your customers with multiple payment options'
  },
  {
    id: 'stablecoin',
    title: 'Stablecoin Exchange',
    component: Stablecoin,
    description: 'Exchange cryptocurrencies with minimal fees and maximum security'
  }
];

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Main pin setup
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${FEATURE_TABS.length * window.innerHeight}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress * FEATURE_TABS.length;
          const newTab = Math.floor(progress);
          if (newTab !== activeTab && newTab < FEATURE_TABS.length) {
            setActiveTab(newTab);
          }
        },
      });

      // Animate content on tab change
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      // Hover animation for tabs
      tabsRef.current.forEach((tab) => {
        tab.addEventListener('mouseenter', () => {
          gsap.to(tab, {
            x: 10,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        tab.addEventListener('mouseleave', () => {
          gsap.to(tab, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate content change
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const handleTabClick = (index) => {
    const section = containerRef.current;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = (index / FEATURE_TABS.length) * (window.innerHeight * FEATURE_TABS.length);
    
    gsap.to(window, {
      duration: 1,
      scrollTo: sectionTop + scrollDistance,
      ease: "power2.inOut"
    });
  };

  const ActiveComponent = FEATURE_TABS[activeTab].component;

  return (
    <div ref={containerRef} className="flex items-center min-h-screen ">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Timeline Navigation */}
          <div className="lg:w-1/3">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-7 bottom-7 w-0.5 bg-gray-200" />
              
              {/* Navigation buttons */}
              <div className="flex flex-col space-y-6">
                {FEATURE_TABS.map((tab, index) => (
                  <button 
                    key={tab.id}
                    ref={el => tabsRef.current[index] = el}
                    onClick={() => handleTabClick(index)} 
                    className="relative flex flex-col items-start gap-2 py-3 group"
                  >
                    <div className="flex items-center gap-5">
                      <div 
                        className={`w-2 h-2 rounded-full bg-black transition-all duration-300 ${
                          activeTab === index ? 'scale-150 opacity-100' : 'opacity-0'
                        }`}
                      />
                      <p className={`text-lg font-medium transition-colors duration-300 ${
                        activeTab === index ? 'text-black' : 'text-gray-400'
                      }`}>
                        {tab.title}
                      </p>
                    </div>
                    <div 
                      className={`ml-7 text-sm transition-all duration-300 ${
                        activeTab === index ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                      }`}
                    >
                      {tab.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3" ref={contentRef}>
            <Card className="overflow-hidden border border-gray-100 shadow-xl backdrop-blur-sm bg-white/80">
              <ActiveComponent />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;