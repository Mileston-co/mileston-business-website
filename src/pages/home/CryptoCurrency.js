'use client';

import React from 'react';
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from 'next/link';
import { ScrollTriggeredAnimation } from '@/components/Animation';
import dynamic from 'next/dynamic';

const GlobeVisualization = dynamic(() => import('../../components/GlobeVisualization'), {
    ssr: false,
});

function CryptoCurrency() {
    return (
        <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-x-16 min-h-screen items-center w-full mb-0 place-items-center px-6 lg:px-12">
            <ScrollTriggeredAnimation>
                <div className="flex flex-col justify-center gap-8 w-full max-w-[600px]">
                    <Title className="sm:text-start text-center w-full">
                        Start accepting digital currencies today
                    </Title>

                    <Text className="lg:text-lg text-center sm:text-start ">
                        Borderless transactions made simple for everyone
                    </Text>

                    <div className="flex flex-col md:mx-px mx-auto sm:flex-row justify-center sm:justify-start gap-6">
                        <Link href="https://cal.com/ahmedrza" target="_blank">
                            <Button>Schedule a Demo</Button>
                        </Link>
                    </div>
                </div>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation>
                <div className="flex justify-center items-center w-[50%] h-[400px] md:h-[500px] lg:h-[600px] md:max-w-5xl">
                    <GlobeVisualization />
                </div>
            </ScrollTriggeredAnimation>
        </section>
    );
}

export default CryptoCurrency;
