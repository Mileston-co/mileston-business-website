'use client';
import Image from 'next/image';
import { ScrollTriggeredAnimation } from '@/components/Animation';

export default function Partners() {
    const logos = [
        'ordinaryCourage',
        'slipe_icon',
        'nuclyex',
        'theGlobalLens',
        'workdey',
        'stride',
    ];

    const loopLogos = [...logos, ...logos];

    return (
        <section className="w-full py-20 bg-white text-black">
            <div className="container px-4 mx-auto text-center">
                <ScrollTriggeredAnimation>
                    <div className="flex items-center justify-center mb-6">
                        <hr className="w-16 sm:w-24 md:w-32 border-t border-gray-300" />
                        <h2 className="text-2xl mx-6 font-semibold">Trusted By</h2>
                        <hr className="w-16 sm:w-24 md:w-32 border-t border-gray-300" />
                    </div>

                    {/* Infinite Scrolling Logos */}
                    <div className="relative overflow-hidden mt-12">
                        <div className="flex animate-scroll whitespace-nowrap gap-16 items-center">
                            {loopLogos.map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <Image
                                        src={`/assets/images/${logo}.svg`}
                                        alt={logo}
                                        width={100}
                                        height={60}
                                        className="object-contain max-h-[60px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollTriggeredAnimation>
            </div>
        </section>
    );
}
