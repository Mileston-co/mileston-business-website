'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faWallet,
    faBitcoinSign,
    faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';
import gsap from 'gsap';

const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState('card');
    const checkoutRef = useRef();
    const formRef = useRef();
    const featuresRef = useRef();

    const paymentMethods = [
        { id: 'card', name: 'Credit Card', icon: faCreditCard },
        { id: 'crypto', name: 'Cryptocurrency', icon: faBitcoinSign },
        { id: 'wallet', name: 'Digital Wallet', icon: faWallet },
    ];

    const features = [
        {
            title: 'Smart Routing',
            description: 'Automatically route payments through the most cost-effective method',
        },
        {
            title: 'Fraud Protection',
            description: 'Advanced AI-powered fraud detection and prevention',
        },
        {
            title: 'Global Coverage',
            description: 'Accept payments from customers worldwide in their local currency',
        },
    ];

    useEffect(() => {
        // Animate checkout form
        gsap.fromTo(
            checkoutRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
            }
        );

        // Animate features
        const featureCards = featuresRef.current.children;
        gsap.fromTo(
            featureCards,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.3,
                ease: 'power2.out',
            }
        );

        // Add hover animation to payment method buttons
        const buttons = document.querySelectorAll('.payment-method-btn');
        buttons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });
        });
    }, []);

    // Animate form change
    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                }
            );
        }
    }, [selectedMethod]);

    return (
        <div className="p-8 space-y-8">
            {/* Demo Checkout */}
            <div
                ref={checkoutRef}
                className="overflow-hidden bg-white border border-gray-100 rounded-xl"
            >
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg">
                                <span className="font-bold text-white">M</span>
                            </div>
                            <div>
                                <h3 className="font-medium">Mileston Store</h3>
                                <p className="text-sm text-gray-500">Premium Plan</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode="US" svg />
                            <span className="font-medium">$49.99</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-gray-700">Payment Method</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    className={`payment-method-btn p-4 rounded-lg border transition-all ${
                                        selectedMethod === method.id
                                            ? 'border-black bg-gray-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={method.icon}
                                        className={`text-xl mb-2 ${
                                            selectedMethod === method.id
                                                ? 'text-black'
                                                : 'text-gray-400'
                                        }`}
                                    />
                                    <p className="text-sm font-medium">{method.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {selectedMethod === 'card' && (
                        <div ref={formRef} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="4242 4242 4242 4242"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Card Holder
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                />
                            </div>
                        </div>
                    )}

                    <button className="w-full py-3 font-medium text-white transition-transform bg-black rounded-lg active:scale-[0.99]">
                        Pay Now
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-gray-400" />
                        <span>Secured by Mileston</span>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div key={feature.title} className="p-6 bg-gray-50 rounded-xl">
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Checkout;
