import React from 'react'; 
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPlane, faShop } from '@fortawesome/free-solid-svg-icons';
import Text from '../../components/Text';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';
import { faPaypal, faStripe } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import VolatilityProtection from '../../assets/images/volatility-protection.png';
import EasyIntegration from '../../assets/images/easy-integration.png';
import MilestonLogoWhite from '../../assets/images/logo-white.png';

function Analytics() {
    const processors = [
        {
            name: 'Mileston',
            fee: '0.4% Only!',
            percentage: 20,
            logo: MilestonLogoWhite,
            milestone: true,
        },
        {
            name: 'PayPal',
            icon: faPaypal,
            fee: '2.9% + $0.30/Tr',
            percentage: 70,
            milestone: false,
        },
        {
            name: 'Stripe',
            icon: faStripe,
            fee: '2.9% + $0.30/Tr',
            percentage: 70,
            milestone: false,
        },
    ];

    return (
        <section className="grid items-stretch gap-3 section-container lg:grid-cols-3">
            <Feature
                title="Low Fees"
                description="Accept business payments from around the world with just 0.4% transaction fee."
            >
                <ScrollTriggeredAnimation>
                    <div className="flex flex-col w-full gap-6 p-5 bg-white rounded-2xl">
                        {processors.map((processor, index) => (
                            <div key={index} className="flex items-center justify-between gap-5">
                                <div
                                    style={{ minWidth: '2.2em', height: '2.2em' }}
                                    className={`flex justify-center items-center rounded-full ${processor.milestone ? 'bg-black' : 'bg-gray-200'}`}
                                >
                                    {processor.milestone ? (
                                        <Image
                                            src={processor.logo}
                                            alt=""
                                            className="object-contain w-[1.8em] h-[1.8em]"
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            className={`${processor.milestone ? 'text-gray-200' : 'text-black'}`}
                                            icon={processor.icon}
                                        />
                                    )}
                                </div>
                                <div className="inline-flex flex-col justify-start w-full gap-2">
                                    <div className="flex gap-2">
                                        <p className="text-xs font-bold">{processor.name}</p>
                                        <p className="text-xs text-gray-400">{processor.fee}</p>
                                    </div>
                                    <ProgressBar progress={processor.percentage} />
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollTriggeredAnimation>
            </Feature>

            <Feature
                title="Easy Integration"
                description="Easily integrate crypto checkout with our robust APIs to start accepting payments."
            >
                <ScrollTriggeredAnimation>
                    <div className="flex flex-col w-full gap-6 p-5 bg-white rounded-2xl">
                        <Image src={EasyIntegration} alt="" className="object-contain w-[12em] h-[10em]" />
                    </div>
                </ScrollTriggeredAnimation>
            </Feature>

            <Feature
                title="Volatility Protection"
                description="With Mileston's auto USDC convert feature, you will always receive USDC."
            >
                <ScrollTriggeredAnimation>
                    <div className="flex flex-col w-full gap-6 p-5 bg-white rounded-2xl">
                        <Image src={VolatilityProtection} alt="" className="object-contain w-[12em] h-[8.5em]" />
                        {/* Added a spacer div to help equalize heights */}
                        <div className="h-full" />
                    </div>
                </ScrollTriggeredAnimation>
            </Feature>
        </section>
    );
}

function Feature({ title, description, children }) {
    return (
        <Card className="min-h-[300px] flex flex-col">
            <div className="flex flex-col items-center gap-5 mt-10">
                <ScrollTriggeredAnimation>
                    <SubHeading>{title}</SubHeading>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <Text className="text-center">{description}</Text>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <div className="w-full mt-4">{children}</div>
                </ScrollTriggeredAnimation>
            </div>
        </Card>
    );
}

export default Analytics;
