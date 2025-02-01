'use client';

import React, { useState, useRef } from 'react';
import Card from '@/components/Card';

// Import feature tab components
import Analytics from './feature-tabs/Analytics';
import PaymentLinks from './feature-tabs/PaymentLinks';
import Checkout from './feature-tabs/Checkout';

const GlobeComp = () => {
    return (
      <div className="flex flex-col items-center my-10">
        {/* Container div with fixed size */}
        <div className="relative w-64 h-64"> {/* Adjust size as needed */}
          {/* Animated image only */}
          <img
            src='/assets/images/earth.png'
            alt='earth'
            className='animate-spin-custom w-80 h-80 object-contain rounded-full shadow-emerald-800'
          />
        </div>
        <p className="caption mt-14 font-bold">Worldwide coverage, we support 180+ countries</p>
      </div>
    );
  };

const FEATURE_TABS = [
    // {
    //     id: 'globe',
    //     title: 'Global Coverage',
    //     component: GlobeComp,
    //     description: 'Send money anywhere in the world instantly with our global payment network',
    // },
    {
        id: 'analytics',
        title: 'Smart Analytics',
        component: Analytics,
        description: 'Track your payments and business growth with powerful analytics',
    },
    {
        id: 'payment-link',
        title: 'Payment Links',
        component: PaymentLinks,
        description: 'Create and share payment links in seconds for seamless transactions',
    },
    {
        id: 'checkout',
        title: 'Smart Checkout',
        component: Checkout,
        description:
            'Streamlined checkout experience for your customers with multiple payment options',
    },
];

function Features() {
    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const tabsRef = useRef([]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const ActiveComponent = FEATURE_TABS[activeTab].component;

    return (
        <div ref={containerRef} className="flex items-center mx-8">
            <div className="w-full px-4">
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
                                        ref={(el) => (tabsRef.current[index] = el)}
                                        onClick={() => handleTabClick(index)}
                                        className="relative flex flex-col text-left items-start gap-2 py-3 group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div
                                                className={`w-2 h-2 rounded-full bg-black transition-all duration-300 ${activeTab === index
                                                        ? 'scale-150 opacity-100'
                                                        : 'opacity-0'
                                                    }`}
                                            />
                                            <p
                                                className={`text-lg font-medium transition-colors duration-300 ${activeTab === index
                                                        ? 'text-black'
                                                        : 'text-gray-400'
                                                    }`}
                                            >
                                                {tab.title}
                                            </p>
                                        </div>
                                        <div
                                            className={`ml-7 text-sm transition-all duration-300 ${activeTab === index
                                                    ? 'opacity-100 h-auto'
                                                    : 'opacity-0 h-0'
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
                        <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white/80">
                            <ActiveComponent />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
