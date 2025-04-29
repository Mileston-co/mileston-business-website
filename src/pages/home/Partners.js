'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Title from '@/components/Title';
import Text from '@/components/Text';
import { ScrollTriggeredAnimation } from '@/components/Animation';

export default function Partners() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Add file extensions for each logo
    const logos = [
        { name: 'slipe_icon', ext: 'svg' },
        { name: 'nuclyex', ext: 'svg' },
        { name: 'workdey', ext: 'svg' },
        { name: 'ordinaryCourage', ext: 'jpg' },
        { name: 'theGlobalLens', ext: 'jpg' },
        { name: 'stride', ext: 'jpg' },
    ];

    return (
        <section className="w-full py-20 bg-white text-black">
            <div className="container px-4 mx-auto text-center">
                <ScrollTriggeredAnimation>
                    <Title variant="h2" className="text-4xl mb-6">
                        Trusted By
                    </Title>
                </ScrollTriggeredAnimation>

                <div className="relative mt-12 overflow-hidden">
                    <div className="flex animate-scroll whitespace-nowrap gap-16 items-center justify-center">
                        {logos.map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={`/assets/images/${logo.name}.${logo.ext}`}
                                    alt={logo.name}
                                    width={100}
                                    height={60}
                                    className="object-contain max-h-[60px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
