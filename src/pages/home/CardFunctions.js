import React from 'react';
import { faRocket, faUser, faPlug, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '../../components/Badge';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { ScrollTriggeredAnimation } from '@/components/Animation';

function GetStartedSteps() {
    const steps = [
        {
            icon: faUser,
            title: 'Sign Up in Seconds',
            description:
                'Create your account with just an email. No lengthy forms—just instant access.',
        },
        {
            icon: faPlug,
            title: 'Integrate & Customize',
            description:
                'Integrate our battle-tested APIs and SDKs. Customize endpoints to fit your needs, our docs make it effortless.',
        },
        {
            icon: faCheck,
            title: 'Test & Go Live',
            description:
                'Test your integration and go live instantly by just flipping the switch and start generating revenue.',
        },
    ];

    return (
        <section className="relative mt-24 px-6 lg:px-20 py-20 bg-black rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center gap-14 text-center">
                <ScrollTriggeredAnimation>
                    <Badge bgColor="bg-green-900" textColor="text-green-300" icon={faRocket}>
                        Get Started
                    </Badge>
                    <div className="flex flex-col gap-4">
                        <Title className="text-white text-4xl sm:text-5xl max-w-3xl leading-tight">
                            Get Started with Mileston in 3 Simple Steps
                        </Title>
                        <Text className="text-gray-400 max-w-xl mx-auto">
                            For fast-paced businesses like you, which can&apos;t waste any time, get
                            up and running with Mileston in just a few steps.
                        </Text>
                    </div>
                </ScrollTriggeredAnimation>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1b1b1b] rounded-2xl p-6 flex flex-col gap-4 border border-white/10 hover:border-white/20 transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                        >
                            <div className="text-green-300 text-4xl">
                                <FontAwesomeIcon icon={step.icon} />
                            </div>
                            <h3 className="text-white text-xl">{step.title}</h3>
                            <p className="text-gray-400 text-sm">
                                {step.description.replace("'", '&apos;')}
                            </p>
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500/10 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GetStartedSteps;
