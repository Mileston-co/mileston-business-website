import React from 'react';
import { CheckCircle, XCircle, CreditCard, Wallet } from 'lucide-react';
import Text from '../../components/Text';
import SubHeading from '../../components/SubHeading';
import Title from '../../components/Title';
import { ScrollTriggeredAnimation } from '../../components/Animation';

const FeatureList = ({ title, features, icon: Icon, iconColor, textColor }) => (
    <div
        className={`rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ease-in-out ${textColor}`}
    >
        <div className="flex items-center gap-2 mb-6">
            <Wallet className="w-5 h-5" />
            <SubHeading className="mb-0">{title}</SubHeading>
        </div>
        <ul className="space-y-5">
            {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-1 ${iconColor}`} />
                    <Text>{item}</Text>
                </li>
            ))}
        </ul>
    </div>
);

export default function WhyMileston() {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-50 through-gray-100 to-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <ScrollTriggeredAnimation>
                    <Title className="text-black mb-4 font-semibold">
                        Built for <span className="text-green-500">Growth</span> - From First Click
                        to Final Payment
                    </Title>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <Text className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Mileston helps you convert more users, automate billing, and manage crypto +
                        card payments, all in one place, with zero complexity.
                    </Text>
                </ScrollTriggeredAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    <ScrollTriggeredAnimation>
                        {/* Traditional Finance */}
                        <FeatureList
                            title="Other Solutions"
                            features={[
                                'Rigid checkout flows that drop conversions',
                                'High transaction fee and slow processing time',
                                'No real developer ecosystem — just raw APIs',
                                'Basic transactions only — no advanced flows',
                            ]}
                            icon={XCircle}
                            iconColor="text-black"
                            textColor="bg-white text-black border border-black"
                        />
                    </ScrollTriggeredAnimation>

                    <ScrollTriggeredAnimation>
                        {/* Mileston DeFi Solution */}
                        <FeatureList
                            title="Mileston"
                            features={[
                                'Embedded & customizable checkout',
                                'Low 0.4% transaction fees with swift settlements',
                                'Production-ready SDKs — frontend and backend',
                                'Card + wallet support — pay with crypto or cards',
                            ]}
                            icon={CheckCircle}
                            iconColor="text-white"
                            textColor="bg-black text-white"
                        />
                    </ScrollTriggeredAnimation>
                </div>
            </div>
        </section>
    );
}
