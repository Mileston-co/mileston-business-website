'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Title from '@/components/Title';
import Text from '@/components/Text';
import { MotionDiv, ScrollTriggeredAnimation } from '@/components/Animation';

export default function Partners() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="w-full py-20 mb-40 bg-black text-white">
            <div className="container px-4 mx-auto text-center">
                <ScrollTriggeredAnimation>
                    <Title variant="h2" className="text-4xl mb-6">
                        Trusted by Leading Businesses
                    </Title>
                    <Text variant="lead" className="text-gray-400 mb-12">
                        Join forward-thinking companies using Mileston for secure, decentralized
                        stablecoin payments.
                    </Text>
                </ScrollTriggeredAnimation>

                <MotionDiv
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {['slipe_icon', 'workdey', 'nuclyex'].map((company, index) => (
                        <MotionDiv
                            variants={item}
                            key={company}
                            className="flex flex-col items-center p-6 rounded-lg bg-transparent border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-black/40 rounded-full p-4">
                                <Image
                                    src={`/assets/${company}.svg`}
                                    alt={company}
                                    width={60}
                                    height={60}
                                    className="object-contain grayscale"
                                />
                            </div>
                            <Text variant="default" className="mt-4 text-lg font-medium">
                                {company.charAt(0).toUpperCase() + company.slice(1)}
                            </Text>
                        </MotionDiv>
                    ))}

                    <MotionDiv
                        variants={item}
                        className="flex flex-col items-center p-6 rounded-lg bg-transparent border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="w-20 h-20 flex items-center justify-center bg-black/40 rounded-full p-4">
                            <div className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">+</span>
                            </div>
                        </div>
                        <Text variant="default" className="mt-4 text-lg font-medium">
                            Your Business
                        </Text>
                    </MotionDiv>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16"
                >
                    <button
                        className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-medium transition-colors hover:bg-white hover:text-black"
                        onClick={() => window.open('https://cal.com/ahmedrza', '_blank')}
                    >
                        Become a Partner
                    </button>
                </MotionDiv>
            </div>
        </section>
    );
}
