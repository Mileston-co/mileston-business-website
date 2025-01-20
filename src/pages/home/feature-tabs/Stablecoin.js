'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faChartLine,
    faShieldHalved,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const Stablecoin = () => {
    const [amount, setAmount] = useState('1000');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('USDC');
    const exchangeRef = useRef();
    const coinsRef = useRef();
    const featuresRef = useRef();

    const stablecoins = [
        { code: 'USDC', name: 'USD Coin', rate: 1.0 },
        { code: 'USDT', name: 'Tether', rate: 1.0 },
        { code: 'BUSD', name: 'Binance USD', rate: 1.0 },
        { code: 'DAI', name: 'Dai', rate: 1.0 },
    ];

    const features = [
        {
            icon: faChartLine,
            title: 'Real-time Rates',
            description: 'Get the best exchange rates with real-time price updates',
        },
        {
            icon: faShieldHalved,
            title: 'Secure Exchange',
            description: 'Industry-leading security measures to protect your assets',
        },
        {
            icon: faGlobe,
            title: 'Global Access',
            description: 'Exchange stablecoins from anywhere in the world',
        },
    ];

    useEffect(() => {
        // Animate exchange widget
        gsap.fromTo(
            exchangeRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
            }
        );

        // Animate stablecoin list
        const coinCards = coinsRef.current.children;
        gsap.fromTo(
            coinCards,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.2,
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
                delay: 0.4,
                ease: 'power2.out',
            }
        );

        // Animate arrow rotation
        const arrowIcon = document.querySelector('.exchange-arrow');
        gsap.to(arrowIcon, {
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className="p-8 space-y-8">
            {/* Exchange Widget */}
            <div ref={exchangeRef} className="p-6 bg-white border border-gray-100 rounded-xl">
                <h3 className="mb-6 text-lg font-medium">Exchange Stablecoins</h3>

                <div className="space-y-6">
                    {/* From Currency */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            You Send
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                            />
                            <select
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                                className="px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/5"
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>

                    {/* Exchange Icon */}
                    <div className="flex justify-center">
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 exchange-arrow"
                        />
                    </div>

                    {/* To Currency */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            You Receive
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={amount}
                                disabled
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50"
                            />
                            <select
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                                className="px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/5"
                            >
                                {stablecoins.map((coin) => (
                                    <option key={coin.code} value={coin.code}>
                                        {coin.code}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button className="w-full py-3 font-medium text-white transition-transform bg-black rounded-lg active:scale-[0.99]">
                        Exchange Now
                    </button>
                </div>
            </div>

            {/* Stablecoin List */}
            <div className="grid grid-cols-4 gap-4" ref={coinsRef}>
                {stablecoins.map((coin) => (
                    <div key={coin.code} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{coin.code}</span>
                            <span className="text-sm text-gray-500">${coin.rate}</span>
                        </div>
                        <p className="text-xs text-gray-600">{coin.name}</p>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="p-6 bg-white border border-gray-100 rounded-xl"
                    >
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-gray-50">
                            <FontAwesomeIcon icon={feature.icon} className="text-gray-700" />
                        </div>
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stablecoin;
