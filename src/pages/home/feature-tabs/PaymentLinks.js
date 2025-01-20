'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCopy, faCheck, faQrcode, faShare } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const PaymentLinks = () => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('link');
    const demoRef = useRef();
    const featuresRef = useRef();
    const integrationRef = useRef();

    const demoLink = 'pay.mileston.com/demo-payment';

    const handleCopy = () => {
        navigator.clipboard.writeText(demoLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const features = [
        {
            title: 'Instant Setup',
            description: 'Create payment links in seconds with custom amounts and descriptions',
        },
        {
            title: 'Multiple Currencies',
            description: 'Accept payments in 40+ fiat currencies and major cryptocurrencies',
        },
        {
            title: 'Smart Routing',
            description: 'Automatically route payments through the most optimal payment method',
        },
    ];

    useEffect(() => {
        // Animate demo section
        gsap.fromTo(
            demoRef.current,
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
                delay: 0.2,
                ease: 'power2.out',
            }
        );

        // Animate integration section
        gsap.fromTo(
            integrationRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.4,
                ease: 'power2.out',
            }
        );
    }, []);

    // Animate tab change
    useEffect(() => {
        const content = activeTab === 'link' ? '.link-content' : '.qr-content';
        gsap.fromTo(
            content,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            }
        );
    }, [activeTab]);

    return (
        <div className="p-8 space-y-8">
            {/* Demo Section */}
            <div ref={demoRef} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('link')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === 'link'
                                ? 'bg-white text-black shadow-sm'
                                : 'text-gray-500 hover:text-black'
                        }`}
                    >
                        Payment Link
                    </button>
                    <button
                        onClick={() => setActiveTab('qr')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === 'qr'
                                ? 'bg-white text-black shadow-sm'
                                : 'text-gray-500 hover:text-black'
                        }`}
                    >
                        QR Code
                    </button>
                </div>

                {activeTab === 'link' ? (
                    <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg link-content">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
                                <FontAwesomeIcon icon={faLink} className="text-indigo-600" />
                            </div>
                            <span className="text-sm font-medium">{demoLink}</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="p-2 transition-colors rounded-lg hover:bg-gray-50"
                        >
                            <FontAwesomeIcon
                                icon={copied ? faCheck : faCopy}
                                className={copied ? 'text-green-500' : 'text-gray-400'}
                            />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 p-8 bg-white border border-gray-100 rounded-lg qr-content">
                        <div className="flex items-center justify-center w-48 h-48 bg-gray-100 rounded-lg">
                            <FontAwesomeIcon icon={faQrcode} className="text-6xl text-gray-400" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg bg-gray-50 hover:bg-gray-100">
                            <FontAwesomeIcon icon={faShare} className="text-gray-500" />
                            Share QR Code
                        </button>
                    </div>
                )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="p-6 bg-white border border-gray-100 rounded-xl"
                    >
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Usage Example */}
            <div ref={integrationRef} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="mb-4 text-lg font-medium">Quick Integration</h3>
                <div className="p-4 bg-gray-900 rounded-lg">
                    <code className="font-mono text-sm text-gray-300">
                        <span className="text-blue-400">const</span> paymentLink ={' '}
                        <span className="text-green-400">await</span>{' '}
                        mileston.createPaymentLink(&#123;
                        <br />
                        &nbsp;&nbsp;amount: <span className="text-orange-400">1000</span>,
                        <br />
                        &nbsp;&nbsp;currency:{' '}
                        <span className="text-yellow-400">&apos;USD&apos;</span>,
                        <br />
                        &nbsp;&nbsp;description:{' '}
                        <span className="text-yellow-400">&apos;Premium Subscription&apos;</span>
                        <br />
                        &#125;);
                    </code>
                </div>
            </div>
        </div>
    );
};

export default PaymentLinks;
