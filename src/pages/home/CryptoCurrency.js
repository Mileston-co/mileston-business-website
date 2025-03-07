import React from 'react';
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from 'next/link';
import { ScrollTriggeredAnimation } from '@/components/Animation';

function CryptoCurrency() {
    return (
<section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-screen items-center w-full">
            <ScrollTriggeredAnimation>
            <div className="flex flex-col justify-center gap-8 items-start sm:items-center text-center lg:items-start lg:text-left">

                    {/* <Badge icon={faCoins}>Account Transfer</Badge> */}
                    <Title className="sm:text-start text-center w-full">Join the DeFi revolution with Mileston</Title>
                    <Text className="lg:text-lg text-center self-center sm:self-start">
                        Borderless transactions made simple for everyone
                    </Text>

                    <div className="flex flex-col ld:flex-row self-center sm:self-start justify-center gap-6">
                        <Link href="https://cal.com/ahmedrza" target="_blank">
                            <Button>Schedule a Demo</Button>
                        </Link>
                    </div>

                </div>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation>
                <div className="pr-0 sm:pr-10">
                    <img
                        className="w-[100%] max-w-4xl"
                        src="/assets/images/globe2.png"
                        alt="Crypto Currency"
                    />
                </div>
            </ScrollTriggeredAnimation>
        </section>
    );
}

export default CryptoCurrency;
