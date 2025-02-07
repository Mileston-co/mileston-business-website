import React from 'react';
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from 'next/link';
import { ScrollTriggeredAnimation } from '@/components/Animation';

function CryptoCurrency() {
    return (
        <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollTriggeredAnimation>
                <div className="flex flex-col justify-center gap-8 items-start pr-40">
                    {/* <Badge icon={faCoins}>Account Transfer</Badge> */}
                    <Title className="text-start">Join the DeFi revolution with Mileston</Title>
                    <Text className="lg:text-lg">
                        Borderless transactions made simple for everyone
                    </Text>

                    <div className="flex flex-col ld:flex-row items-center justify-center gap-6">
                        <Link href="https://cal.com/ahmedrza" target="_blank">
                            <Button>Schedule a Demo</Button>
                        </Link>
                    </div>

                </div>
            </ScrollTriggeredAnimation>

            <ScrollTriggeredAnimation>
                <div className="pr-10">
                    <img
                        className="w-full max-w-4xl"
                        src="/assets/images/crypto-currency-image.png"
                        alt="Crypto Currency"
                    />
                </div>
            </ScrollTriggeredAnimation>
        </section>
    );
}

export default CryptoCurrency;
