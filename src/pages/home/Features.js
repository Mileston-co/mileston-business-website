'use client';

import React, { useState, useRef } from 'react';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Text from '@/components/Text';
import { CreditCard } from 'lucide-react';
import { ScrollTriggeredAnimation } from '@/components/Animation';

// Import feature tab components
import Analytics from './feature-tabs/Analytics';
import PaymentLinks from './feature-tabs/PaymentLinks';
import Invoice from './feature-tabs/Invoice';
import RecurringPayment from './feature-tabs/RecurringPayment';

const GlobeComp = () => {
    return (
        <div className="flex flex-col items-center my-10">
            {/* Container div with fixed size */}
            <div className="relative w-64 h-64">
                {' '}
                {/* Adjust size as needed */}
                {/* Animated image only */}
                <img
                    src="/assets/images/earth.png"
                    alt="earth"
                    className="animate-spin-custom w-80 h-80 object-contain rounded-full shadow-emerald-800"
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
        id: 'payment-link',
        title: 'Payment Links',
        component: PaymentLinks,
        description: 'Create and share payment links in seconds for seamless transactions',
    },
    {
        id: 'invoice',
        title: 'Invoices',
        component: Invoice,
        description: 'Generate and manage invoices for your customers with ease',
    },
    {
        id: 'recurring-payment',
        title: 'Recurring Payments',
        component: RecurringPayment,
        description: 'Set up and manage recurring payments effortlessly',
    },
    {
        id: 'analytics',
        title: 'Smart Analytics',
        component: Analytics,
        description: 'Track your payments and business growth with powerful analytics',
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
        <div ref={containerRef} className="flex items-center mx-8 mb-24">
            <div className="w-full px-4 text-center">
                <ScrollTriggeredAnimation>
                    <p className="inline-flex items-center justify-center gap-2 bg-[#f7f9fc] text-black font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
                        <CreditCard className="w-4 h-4 text-green-500" />
                        Mileston For Payments
                    </p>
                    <Title className="text-3xl font-semibold mb-4">
                        Everything you need to grow and Scale
                    </Title>
                    <Text className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
                        Discover our suite of tools designed to simplify your financial operations
                        and help your business grow globally
                    </Text>
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
                                                    className={`w-2 h-2 rounded-full bg-black transition-all duration-300 ${
                                                        activeTab === index
                                                            ? 'scale-150 opacity-100'
                                                            : 'opacity-0'
                                                    }`}
                                                />
                                                <p
                                                    className={`text-lg font-medium transition-colors duration-300 ${
                                                        activeTab === index
                                                            ? 'text-black'
                                                            : 'text-gray-400'
                                                    }`}
                                                >
                                                    {tab.title}
                                                </p>
                                            </div>
                                            <div
                                                className={`ml-7 text-sm transition-all duration-300 ${
                                                    activeTab === index
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
                </ScrollTriggeredAnimation>
            </div>
        </div>
    );
}

export default Features;
