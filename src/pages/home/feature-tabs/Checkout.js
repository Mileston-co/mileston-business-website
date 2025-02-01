'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faWallet,
    faBitcoinSign,
    faShieldHalved,
    faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState('card');
    const checkoutRef = useRef();
    const formRef = useRef();
    const featuresRef = useRef();

    const paymentMethods = [
        { id: 'card', name: 'Wallet Connect', icon: faWallet },
        { id: 'crypto', name: 'QR Code', icon: faQrcode },
        { id: 'wallet', name: 'Mileston', icon: faBuilding },
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

    return (
        <div className="p-4 md:p-8 space-y-8">
            {/* Demo Checkout */}
            <div
                ref={checkoutRef}
                className="overflow-hidden bg-white border border-gray-100 rounded-xl"
            >
                <div className="p-1 md:p-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg">
                                <span className="font-bold text-white">M</span>
                            </div>
                            <div>
                                <h3 className="font-medium">Mileston Store</h3>
                                <p className="text-sm text-gray-500">Premium Plan</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <ReactCountryFlag countryCode="US" svg />
                            <span className="font-medium">$49.99</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-6 space-y-6">
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-gray-700">Payment Method</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    className={`payment-method-btn p-4 rounded-lg border transition-all ${
                                        selectedMethod === method.id
                                            ? 'border-black bg-gray-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    disabled={method.id !== 'card'}
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
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Customer Information
                                </label>
                                <input
                                    type="text"
                                    placeholder="Just a buyer..."
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                />
                            </div>
                        </div>
                    )}

                    <button className="w-full py-3 font-medium text-white transition-transform bg-black rounded-lg active:scale-[0.99]">
                        Connect Wallet & Pay Now
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-gray-400" />
                        <span>Secured by Mileston</span>
                    </div>
                </div>
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div key={feature.title} className="p-6 bg-gray-50 rounded-xl">
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Checkout;
