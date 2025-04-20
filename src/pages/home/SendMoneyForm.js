import React from 'react';
import Text from '../../components/Text';
import SendMoneyWidget from '../../widgets/SendMoneyWidget';
import Title from '../../components/Title';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';
import { CreditCard, Lock } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="flex flex-col items-center bg-white border shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="bg-black text-white rounded-full p-2 mb-3">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-black text-center">{title}</h3>
            <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
    );
}

function SendMoneyForm() {
    return (
        <section className="section-container flex flex-col items-center">
            <ScrollTriggeredAnimation>
                <div className="w-full max-w-4xl flex flex-col items-center gap-5 lg:gap-8">
                    <Title>Efficiency at its best</Title>
                    <Text>Empowering global crypto transactions</Text>
                </div>
            </ScrollTriggeredAnimation>

            <div className="mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl items-center lg:h-full">
                <ScrollTriggeredAnimation>
                    <SendMoneyWidget />
                </ScrollTriggeredAnimation>

                <div className="flex flex-col gap-8 sm:pr-28 pr-0 items-center self-center w-full">
                    <ScrollTriggeredAnimation>
                        <SubHeading className="sm:text-start text-center text-xl mb-4">
                            Seamless DeFi Wallet Payments that enables individuals and businesses to
                            send money anywhere in the world.
                        </SubHeading>
                        <Text className="sm:text-start text-center text-gray-600">
                            Experience secure, fast, and borderless payments with our DeFi wallet
                            solutions.
                        </Text>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 w-full">
                            <FeatureCard
                                icon={CreditCard}
                                title="Fast Payments"
                                description="Send and receive payments instantly with minimal fees."
                            />
                            <FeatureCard
                                icon={Lock}
                                title="Secure Wallet"
                                description="Your funds are protected with top-notch security protocols."
                            />
                        </div>
                    </ScrollTriggeredAnimation>
                </div>
            </div>
        </section>
    );
}

export default SendMoneyForm;
