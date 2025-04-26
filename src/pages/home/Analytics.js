'use client';

import { useState } from 'react';
import { MotionDiv } from '@/components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faStripe } from '@fortawesome/free-brands-svg-icons';
import MilestonLogoWhite from '../../assets/images/logo-white.png';
import Image from 'next/image';
import { ArrowRight, Check, Code, Shield } from 'lucide-react';

function Analytics() {
    const processors = [
        {
            name: 'Mileston',
            fee: '0.4% Only!',
            percentage: 20,
            logo: MilestonLogoWhite,
            milestone: true,
            color: 'bg-black',
            hoverColor: 'hover:bg-gray-900',
        },
        {
            name: 'PayPal',
            icon: faPaypal,
            fee: '2.9% + $0.30/Tr',
            percentage: 70,
            milestone: false,
            color: 'bg-gray-500',
            hoverColor: 'hover:bg-gray-100',
        },
        {
            name: 'Stripe',
            icon: faStripe,
            fee: '2.9% + $0.30/Tr',
            percentage: 70,
            milestone: false,
            color: 'bg-violet-500',
            hoverColor: 'hover:bg-gray-100',
        },
    ];

    return (
        <section className="grid items-stretch gap-6 -mt-28 mb-12 px-4 py-16 mx-auto max-w-7xl lg:grid-cols-3">
            <FeesCard processors={processors} />
            <IntegrationCard />
            <ProtectionCard />
        </section>
    );
}

function FeesCard({ processors }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Feature
            icon={<Shield className="w-6 h-6 text-black" />}
            title="Low Fees"
            description="Accept business payments from around the world with just 0.4% transaction fee."
            className="bg-gradient-to-br from-white to-gray-50"
        >
            <div className="flex flex-col w-full gap-6 p-6 mt-6 bg-white rounded-xl shadow-sm">
                {processors.map((processor, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-5 p-3 transition-all duration-300 rounded-lg hover:bg-gray-50"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            className={`flex justify-center items-center rounded-full w-12 h-12 transition-all duration-300 ${
                                processor.milestone
                                    ? processor.color
                                    : 'bg-gray-100 hover:bg-gray-200'
                            } ${processor.hoverColor}`}
                        >
                            {processor.milestone ? (
                                <Image
                                    src={processor.logo || '/placeholder.svg'}
                                    alt={processor.name}
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className={`${processor.milestone ? 'text-white' : 'text-gray-700'} text-xl`}
                                    icon={processor.icon}
                                />
                            )}
                        </div>
                        <div className="inline-flex flex-col justify-start w-full gap-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-bold">{processor.name}</p>
                                <p className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                    {processor.fee}
                                </p>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <MotionDiv
                                    className="h-full bg-gradient-to-r from-green-300 to-green-500 rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{
                                        width:
                                            hoveredIndex === index || hoveredIndex === null
                                                ? `${processor.percentage}%`
                                                : '0%',
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: 'easeOut',
                                        delay: hoveredIndex === index ? 0 : 0.2,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pt-2 mt-4 border-t border-gray-100">
                    <a
                        href="https://cal.com/ahmedrza"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black transition-all rounded-lg"
                    >
                        Schedule a Demo
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Feature>
    );
}

function IntegrationCard() {
    return (
        <Feature
            icon={<Code className="w-6 h-6 text-black" />}
            title="Easy Integration"
            description="Easily integrate crypto checkout with our robust APIs to start accepting payments."
            className="bg-gradient-to-br from-white to-gray-50"
        >
            <div className="relative p-6 mt-6 overflow-hidden bg-white rounded-xl shadow-sm">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-sm font-mono">
                        <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-md">
                            GET
                        </span>
                        <span className="text-gray-700">/api/payments</span>
                    </div>

                    <div className="p-4 mb-4 overflow-hidden text-sm font-mono bg-gray-50 rounded-lg">
                        <pre className="text-gray-700">
                            {`{
  "success": true,
  "data": {
    "id": "pay_123456",
    "amount": 100.00,
    "currency": "USDC"
  }
}`}
                        </pre>
                    </div>

                    <ul className="space-y-2">
                        {['SDK Support'].map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-black" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-12 text-sm font-medium text-white transition-all bg-black rounded-lg"
                        onClick={() => window.open('https://docs.mileston.co/', '_blank')}
                    >
                        View Documentation
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-gray-50 rounded-full opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 bg-gray-50 rounded-full opacity-30"></div>
            </div>
        </Feature>
    );
}

function ProtectionCard() {
    return (
        <Feature
            icon={<Shield className="w-6 h-6 text-black" />}
            title="Volatility Protection"
            description="With Mileston's auto USDC convert feature, you will always receive USDC."
            className="bg-gradient-to-br from-white to-gray-50"
        >
            <div className="relative p-6 mt-6 overflow-hidden bg-white rounded-xl shadow-sm">
                <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-30"></div>
                        <div className="relative p-4 bg-black rounded-full">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full p-3 mb-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                ₿
                            </div>
                            <span className="font-medium">Bitcoin</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                $
                            </div>
                            <span className="font-medium">USDC</span>
                        </div>
                    </div>

                    <ul className="w-full space-y-2">
                        {[
                            'Instant conversion to USDC',
                            'No price fluctuation risk',
                            'Automatic settlement',
                        ].map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 p-2 text-sm bg-gray-50 rounded-lg"
                            >
                                <Check className="w-4 h-4 text-black" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-6 text-sm font-medium text-white transition-all bg-black rounded-lg"
                        onClick={() => window.open('https://cal.com/ahmedrza', '_blank')}
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </Feature>
    );
}

function Feature({ icon, title, description, children, className = '' }) {
    return (
        <div
            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 border border-white/10 hover:shadow-2xl relative overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>

                <p className="mb-4 text-gray-600">{description}</p>
                {children}
            </div>
        </div>
    );
}

export default Analytics;
