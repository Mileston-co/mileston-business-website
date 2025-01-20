import React from 'react';
import Badge from '../../components/Badge';
import { faSignal, faBitcoinSign, faLock, faSun } from '@fortawesome/free-solid-svg-icons';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollTriggeredAnimation } from '@/components/Animation';

function CardFunctions() {
    const functions = [
        {
            icon: faBitcoinSign,
            title: 'Decentralized',
            description:
                'Experience true financial freedom with a decentralized platform. No middlemen. Your transactions are secure, transparent, and resistant to censorship.',
        },
        // Apple, google play, contactless access
        {
            icon: faLock,
            title: 'Increased Security',
            description:
                'Multiple signatures and split key methods to keep your funds secure. Be the true owner of your money.',
        },
        {
            icon: faSignal,
            title: 'Convenience',
            description:
                'Control your funds your own way. Extremely convenient Ui and features makes Mileston best in the business.',
        },
    ];

    return (
        <section className="relative flex flex-col items-center px-10 py-10 mx-8 bg-black rounded-2xl">
            <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_75%)]"></div>
            <div className="flex flex-col items-center section-container gap-8 !my-0 relative z-10">
                <ScrollTriggeredAnimation>
                    <div className="flex flex-col items-center justify-center max-w-xl gap-8 mx-auto">
                        <Badge bgColor="bg-green-900" textColor="text-green-300 " icon={faSun}>
                            Features
                        </Badge>
                        <Title className="text-white">
                            Unlocking the power of Mileston Checkout
                        </Title>
                        <Text className="text-center">
                            Discover the features that makes us best in the business
                        </Text>
                    </div>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <div className="grid gap-3 lg:grid-cols-3">
                        {functions.map((func, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-5 bg-[#242424] rounded-2xl p-5"
                                style={{
                                    boxShadow: '2px 2px 4px #ffffff2e, inset 1px 0px 2px #ffffff2e',
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={func.icon}
                                    className="text-5xl text-green-300"
                                />
                                <p className="text-lg text-white">{func.title}</p>
                                <p className="text-sm text-gray-500">{func.description}</p>
                            </div>
                        ))}
                    </div>
                </ScrollTriggeredAnimation>
            </div>
        </section>
    );
}

export default CardFunctions;
