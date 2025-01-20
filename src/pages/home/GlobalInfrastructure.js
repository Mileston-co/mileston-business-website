import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagicGlobe from '@/components/ui/MagicGlobe';
import TrustIcon from '@/assets/icons/trust.svg';
import BinanceIcon from '@/assets/icons/binance.svg';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const GlobalInfrastructure = () => {
    const containerRef = useRef(null);
    const notificationsRef = useRef(null);
    const cardsRef = useRef([]);

    const notifications = [
        { type: 'payment', amount: '€2,500.00', from: 'Sarah Wilson', country: 'GB' },
        { type: 'transfer', amount: '€1,200.00', from: 'John Smith', country: 'US' },
        { type: 'payment', amount: '€800.00', from: 'Maria Garcia', country: 'ES' },
        { type: 'transfer', amount: '€3,000.00', from: 'Yuki Tanaka', country: 'JP' },
    ];

    useEffect(() => {
        // Initial animation for the container
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom-=100',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Notifications animation
        const notificationElements = notificationsRef.current.children;
        gsap.fromTo(
            notificationElements,
            {
                opacity: 0,
                x: 50,
                scale: 0.8,
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: notificationsRef.current,
                    start: 'top bottom-=100',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Cards animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        // Wallet card animations
        const walletCard = cardsRef.current[2];
        if (walletCard) {
            const walletOptions = walletCard.querySelectorAll('.wallet-option');

            // Set initial positions
            gsap.set(walletOptions, {
                opacity: 0,
                x: -100,
                z: -200,
                rotateX: 5,
                transformOrigin: '0% 50% -100',
            });

            // Create timeline for the animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: walletCard,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                },
            });

            // Animate each option
            walletOptions.forEach((option, index) => {
                tl.to(
                    option,
                    {
                        opacity: 1,
                        x: 0,
                        z: 0,
                        rotateX: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                    },
                    index * 0.15
                ); // Stagger the animations
            });
        }
    }, []);

    return (
        <div className="space-y-8 section-container" ref={containerRef}>
            {/* Top Card */}
            <section className="relative mx-auto bg-gray-100 shadow-sm rounded-3xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-8 ml-4">
                        {/* Left side - Content */}
                        <div className="col-span-4 py-16">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold">Global Infrastructure</h2>
                                <p className="text-gray-400">
                                    Send and receive borderless stablecoin transactions worldwide
                                    with ease and security
                                </p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-100 rounded-xl">
                                        <div className="text-2xl font-bold">180+</div>
                                        <div className="text-sm text-gray-600">
                                            Countries Supported
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gray-100 rounded-xl">
                                        <div className="text-2xl font-bold">24/7</div>
                                        <div className="text-sm text-gray-600">
                                            Instant Transfers
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle - Notifications */}
                        <div className="col-span-4 py-16" ref={notificationsRef}>
                            {notifications.map((notification, index) => (
                                <div
                                    key={index}
                                    className="p-4 mb-4 transition-all bg-white rounded-xl hover:shadow-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex items-center justify-center w-10 h-10 text-sm bg-gray-100 rounded-full">
                                                {notification.country}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-600">
                                                    {notification.from}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {notification.type}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-600">
                                            {notification.amount}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right side - Globe */}
                        <div className="relative flex items-center justify-end col-span-4 overflow-hidden">
                            <div className="absolute right-0 w-[600px] h-[600px] translate-x-1/3">
                                <MagicGlobe />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Column Section */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Column 1 - SDK Integration */}
                    <div
                        className="p-8 overflow-hidden bg-gray-100 rounded-3xl"
                        ref={(el) => (cardsRef.current[0] = el)}
                    >
                        <h3 className="mb-6 text-2xl font-bold">Easy to integrate SDK</h3>
                        <div className="space-y-4">
                            {/* Code snippet */}
                            <div className="relative transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg">
                                <div className="absolute flex space-x-2 top-3 right-3">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="p-4 pt-8 bg-[#1E1E1E] text-white rounded-xl font-mono text-sm overflow-x-auto">
                                    <div className="opacity-70">
                                        <span className="text-blue-400">import</span>{' '}
                                        <span className="text-white">{'{'}</span>{' '}
                                        <span className="text-purple-400">Mileston</span>{' '}
                                        <span className="text-white">{'}'}</span>{' '}
                                        <span className="text-blue-400">from</span>{' '}
                                        <span className="text-green-400">
                                            &apos;@mileston/sdk&apos;
                                        </span>
                                    </div>
                                    <div className="mt-2 opacity-70">
                                        <span className="text-blue-400">const</span>{' '}
                                        <span className="text-purple-400">client</span>{' '}
                                        <span className="text-white">=</span>{' '}
                                        <span className="text-blue-400">new</span>{' '}
                                        <span className="text-purple-400">Mileston</span>
                                        <span className="text-white">{'('}</span>
                                        <span className="text-orange-400">{'{'}</span>
                                    </div>
                                    <div className="ml-4 opacity-70">
                                        <span className="text-blue-400">apiKey:</span>{' '}
                                        <span className="text-green-400">
                                            &apos;YOUR_API_KEY&apos;
                                        </span>
                                    </div>
                                    <div className="opacity-70">
                                        <span className="text-orange-400">{'}'}</span>
                                        <span className="text-white">{')'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Function example */}
                            <div className="relative transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg">
                                <div className="p-4 bg-[#1E1E1E] text-white rounded-xl font-mono text-sm overflow-x-auto">
                                    <div className="opacity-70">
                                        <span className="text-blue-400">async function</span>{' '}
                                        <span className="text-yellow-400">createPayment</span>
                                        <span className="text-white">()</span>{' '}
                                        <span className="text-white">{'{'}</span>
                                    </div>
                                    <div className="ml-4 opacity-70">
                                        <span className="text-blue-400">const</span>{' '}
                                        <span className="text-purple-400">payment</span>{' '}
                                        <span className="text-white">=</span>{' '}
                                        <span className="text-blue-400">await</span>{' '}
                                        <span className="text-purple-400">client</span>
                                        <span className="text-white">.payments.create({'{'}</span>
                                    </div>
                                    <div className="ml-8 opacity-70">
                                        <span className="text-blue-400">amount:</span>{' '}
                                        <span className="text-orange-400">1000</span>,
                                    </div>
                                    <div className="ml-8 opacity-70">
                                        <span className="text-blue-400">currency:</span>{' '}
                                        <span className="text-green-400">&apos;USD&apos;</span>
                                    </div>
                                    <div className="ml-4 opacity-70">
                                        <span className="text-white">{'})'}</span>
                                    </div>
                                    <div className="opacity-70">
                                        <span className="text-white">{'}'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features list */}
                            <div className="mt-6 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>Type-safe with full TypeScript support</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>Promise-based async/await API</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>Comprehensive error handling</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Security */}
                    <div
                        className="p-8 bg-gray-100 rounded-3xl"
                        ref={(el) => (cardsRef.current[1] = el)}
                    >
                        <h3 className="mb-6 text-2xl font-bold">Security that never sleeps</h3>
                        <div className="flex items-center justify-center w-full h-64 bg-white rounded-xl">
                            <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Column 3 - Wallet Integration */}
                    <div
                        className="p-8 bg-gray-50 rounded-3xl"
                        ref={(el) => (cardsRef.current[2] = el)}
                    >
                        <h3 className="mb-6 text-2xl font-bold">Works with all wallets</h3>
                        <div className="wallet-container">
                            <div className="absolute space-y-3 wallet-card">
                                {/* WalletConnect */}
                                <div className="wallet-option">
                                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                                        <div className="flex items-center justify-center w-10 h-10 bg-[#3B99FC]/10 rounded-full">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M6.36 8.65c3.12-3.12 8.16-3.12 11.28 0l.37.37c.16.16.16.41 0 .57l-1.27 1.27c-.08.08-.2.08-.28 0l-.51-.51c-2.18-2.18-5.72-2.18-7.9 0l-.55.55c-.08.08-.2.08-.28 0L6.15 9.83c-.16-.16-.16-.41 0-.57l.21-.21zm13.96 2.68l1.13 1.13c.16.16.16.41 0 .57l-5.11 5.11c-.16.16-.41.16-.57 0l-3.63-3.63c-.04-.04-.1-.04-.14 0l-3.63 3.63c-.16.16-.41.16-.57 0l-5.11-5.11c-.16-.16-.16-.41 0-.57l1.13-1.13c.16-.16.41-.16.57 0l3.63 3.63c.04.04.1.04.14 0l3.63-3.63c.16-.16.41-.16.57 0l3.63 3.63c.04.04.1.04.14 0l3.63-3.63c.16-.16.41-.16.57 0z"
                                                    fill="#3B99FC"
                                                />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            WalletConnect
                                        </span>
                                    </div>
                                </div>

                                {/* Phantom */}
                                <div className="wallet-option">
                                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                            <svg
                                                width="1200"
                                                height="1200"
                                                viewBox="0 0 1200 1200"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_2596_138580)">
                                                    <rect
                                                        y="-0.000976562"
                                                        width="1200"
                                                        height="1200"
                                                        fill="#AB9FF2"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M522.218 764.813C475.101 837.011 396.147 928.377 291.089 928.377C241.425 928.377 193.671 907.932 193.671 819.121C193.671 592.942 502.479 242.812 789.003 242.812C952.003 242.812 1016.95 355.901 1016.95 484.325C1016.95 649.167 909.979 837.65 803.647 837.65C769.901 837.65 753.346 819.121 753.346 789.731C753.346 782.064 754.62 773.758 757.167 764.813C720.874 826.788 650.835 884.292 585.253 884.292C537.499 884.292 513.304 854.262 513.304 812.093C513.304 796.759 516.487 780.786 522.218 764.813ZM769.035 479.871C769.035 517.293 746.956 536.003 722.258 536.003C697.185 536.003 675.481 517.293 675.481 479.871C675.481 442.449 697.185 423.738 722.258 423.738C746.956 423.738 769.035 442.449 769.035 479.871ZM909.367 479.872C909.367 517.294 887.288 536.005 862.59 536.005C837.517 536.005 815.813 517.294 815.813 479.872C815.813 442.45 837.517 423.74 862.59 423.74C887.288 423.74 909.367 442.45 909.367 479.872Z"
                                                        fill="#FFFDF8"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2596_138580">
                                                        <rect
                                                            y="-0.000976562"
                                                            width="1200"
                                                            height="1200"
                                                            rx="600"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="font-medium text-gray-900">Phantom</span>
                                    </div>
                                </div>

                                {/* Trust Wallet */}
                                <div className="wallet-option">
                                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                            <Image src={TrustIcon} alt="Trust Wallet" />
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            Trust Wallet
                                        </span>
                                    </div>
                                </div>

                                {/* Binance Pay */}
                                <div className="wallet-option">
                                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                            <Image src={BinanceIcon} alt="Binance Pay" />
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            Binance Pay
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalInfrastructure;
