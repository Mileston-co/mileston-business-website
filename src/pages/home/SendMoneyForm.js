import React from 'react';
import Text from '../../components/Text';
import SendMoneyWidget from '../../widgets/SendMoneyWidget';
import Title from '../../components/Title';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';
import { CreditCard, Zap } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="flex flex-col bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left">
            <div className="mb-4">
                <Icon className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-lg text-black">{title}</h3>
            <p className="text-sm text-black/80 mt-1">{description}</p>
        </div>
    );
}

function SendMoneyForm() {
    return (
        <section className="w-full py-20">
            <ScrollTriggeredAnimation>
                <div className="flex flex-col items-center gap-4 lg:gap-6 text-center px-6 lg:px-20">
                    <div>
                        <Title className="font-semibold">Efficiency at Its Best</Title>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <Text>
                            Empowering global crypto transactions with seamless, secure, and
                            scalable payment infrastructure designed for modern businesses.
                        </Text>
                    </div>
                </div>
            </ScrollTriggeredAnimation>

            <div className="bg-gray-50 mt-14 rounded-xl">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ScrollTriggeredAnimation>
                        <SendMoneyWidget />
                    </ScrollTriggeredAnimation>

                    <div className="flex flex-col gap-8 items-center lg:items-start w-full">
                        <ScrollTriggeredAnimation>
                            <SubHeading className="text-center lg:text-left text-xl mb-4">
                                Checkout that sits right inside your app — no redirects, no extra
                                steps.
                            </SubHeading>
                            <Text className="text-center lg:text-left text-gray-600">
                                Let your customers pay in seconds with their wallet or card while
                                you customize the look to match your brand. Fast, secure, and
                                frictionless payments that drive results.
                            </Text>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 w-full">
                                <FeatureCard
                                    icon={CreditCard}
                                    title="Higher Conversions"
                                    description="Embedded design means fewer drop-offs and a smoother experience — proven to convert up to 30% more."
                                />
                                <FeatureCard
                                    icon={Zap}
                                    title="Faster Settlement"
                                    description="Get instantly settled in USDC, whether customers pay with card or crypto — no delays, no hassle."
                                />
                            </div>
                        </ScrollTriggeredAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SendMoneyForm;
