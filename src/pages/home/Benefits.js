import { useState } from 'react';
import { Wallet, DollarSign, ShieldCheck, Activity, ChevronRight, CreditCard } from 'lucide-react';
import Title from '@/components/Title';
import Text from '@/components/Text';
import { ScrollTriggeredAnimation } from '@/components/Animation';

export default function Benefits() {
    const [activeCard, setActiveCard] = useState(0);

    const benefits = [
        {
            icon: <Wallet className="w-5 h-5" />,
            title: 'Access 500M+ Potential Customers',
            description:
                'Crypto users don’t just hold digital assets—they’re actively looking to spend them.',
            highlight: '500M+ crypto users worldwide',
            color: 'from-black to-gray-800',
            lightColor: 'bg-gray-50',
            cardContent: [
                'You automatically become visible to 500M+ crypto holders',
                '78% of crypto users prefer shopping with crypto-friendly businesses',
                'Eliminate cross-border fees and chargebacks that eat into profits',
                'Unlock global audience',
            ],
        },
        {
            icon: <DollarSign className="w-5 h-5" />,
            title: 'Increase Conversions with Mileston',
            description:
                'We increase conversions by 40% more than traditional gateways by reducing friction.',
            highlight: '40% higher conversion rates',
            color: 'from-gray-900 to-black',
            lightColor: 'bg-gray-50',
            cardContent: [
                'Convert more users into buyers with our embedded checkout solution.',
                'Increase user experience on your website by adding built-in payment solutions.',
                'You don’t need to spend days just to add a custom checkout, use our powerful SDKs.',
            ],
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: 'Increase Profits by Paying Fewer Fees',
            description:
                'Avoid losing profits to high transaction fees, which can make your products 12-18% more expensive.',
            highlight: 'Save on transaction fees',
            color: 'from-black to-gray-800',
            lightColor: 'bg-gray-50',
            cardContent: [
                'Pay only 0.4%-0.8% fee, and increase your profits.',
                'Save more than $2,500/month on every $100K in sales.',
                'No need to worry about chargebacks adding up to additional losses.',
            ],
        },
        {
            icon: <Activity className="w-5 h-5" />,
            title: 'Get Your Money Instantly',
            description: 'Get your funds settled instantly in USDC without 2-3 days delay.',
            highlight: 'Instant USDC settlement',
            color: 'from-gray-900 to-black',
            lightColor: 'bg-gray-50',
            cardContent: [
                'Mileston average transaction processing takes 10 seconds.',
                'Reduce the risk of volatility and get USDC without any limitation on amount.',
                'Easily withdraw it back to fiat with just one click.',
            ],
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <ScrollTriggeredAnimation>
                        <p className="inline-flex items-center gap-2 bg-[#f7f9fc] text-black font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
                            <CreditCard className="w-4 h-4 text-green-500" />
                            Mileston For Payments
                        </p>
                        <Title className="text-3xl font-semibold text-black mb-4">
                            The Mileston Advantage
                        </Title>
                        <Text className="text-gray-600 max-w-2xl mx-auto">
                            Experience the next generation of blockchain payments with
                            enterprise-grade reliability and consumer-friendly simplicity.
                        </Text>
                    </ScrollTriggeredAnimation>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Main feature card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div
                            className={`bg-gradient-to-r ${benefits[activeCard].color} p-6 text-white`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <div className="w-5 h-5">{benefits[activeCard].icon}</div>
                                </div>
                                <h3 className="text-2xl font-bold">{benefits[activeCard].title}</h3>
                            </div>
                            <p className="mb-4 text-white/90">{benefits[activeCard].description}</p>
                            <div className="flex items-center gap-2 bg-white/20 rounded-full py-1.5 px-4 w-fit backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-sm font-medium">
                                    {benefits[activeCard].highlight}
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-col gap-3">
                                <h4 className="font-medium text-gray-900">Key Benefits</h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {benefits[activeCard].cardContent.map((content, index) => (
                                        <li key={index}>{content}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Feature selection cards */}
                    <div className="grid grid-cols-1 gap-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCard(index)}
                                className={`${benefit.lightColor} rounded-xl p-5 cursor-pointer transition-all duration-300 border ${activeCard === index ? 'border-black' : 'border-transparent'} hover:shadow-md`}
                            >
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-10 px-4 h-10 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105 shadow-md`}
                                        >
                                            <div className="w-5 h-5">{benefit.icon}</div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight
                                        className={`w-5 h-5 ${activeCard === index ? 'text-gray-800' : 'text-gray-400'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://business.mileston.co/"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                            <Wallet className="w-5 h-5 mr-2" />
                            Get Started
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-gray-900 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Experience the Mileston Difference
                        </span>
                        <span className="relative invisible">
                            Experience the Mileston Difference
                        </span>
                    </a>
                </div>

                <div className="mt-6 text-center text-gray-500 text-sm">
                    Join the next generation of stablecoin-powered commerce
                </div>
            </div>
        </section>
    );
}
