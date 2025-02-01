'use client';

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCopy, faCheck, faQrcode, faShare } from '@fortawesome/free-solid-svg-icons';

const PaymentLinks = () => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('link');
    const demoRef = useRef();
    const featuresRef = useRef();
    const integrationRef = useRef();

    const demoLink = 'demo.mileston.co';

    const handleCopy = () => {
        navigator.clipboard.writeText(demoLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const features = [
        {
            title: 'Instant Setup',
            description: 'Create payment links in seconds with custom amounts and descriptions.',
        },
        {
            title: 'Multiple Blockchains Support',
            description: 'Accept payments through multiple blockchains with just one wallet.',
        },
        {
            title: 'Quick Settlement',
            description: 'Settlement is as immediate as the time you got paid.',
        },
    ];

    return (
        <div className="p-4 md:p-8 space-y-8">

            {/* Demo Section */}
            <div ref={demoRef} className="p-4 md:p-6 bg-gray-50 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white border border-gray-100 rounded-lg link-content">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
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
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="p-4 md:p-6 bg-white border border-gray-100 rounded-xl"
                    >
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Usage Example
            <div ref={integrationRef} className="p-4 md:p-6 bg-gray-50 rounded-xl">
                <h3 className="mb-4 text-lg font-medium">Quick Integration</h3>
                <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
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
            </div> */}

        </div>
    );
};

export default PaymentLinks;
