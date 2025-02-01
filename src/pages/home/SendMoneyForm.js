import React from 'react';
import Text from '../../components/Text';
import SendMoneyWidget from '../../widgets/SendMoneyWidget';
import Title from '../../components/Title';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';

function SendMoneyForm() {
    return (
        <section className="section-container flex flex-col  items-center">
            <ScrollTriggeredAnimation>
                <div className="w-full max-w-4xl flex flex-col  items-center gap-5 lg:gap-8">
                    <Title>Efficiency at its best: Mileston&apos;s daily finance</Title>
                    <Text>Empowering global crypto transactions</Text>
                </div>
            </ScrollTriggeredAnimation>

            <div className="mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl items-center">
                <div className="flex flex-col gap-5 items-start pr-28">
                    <ScrollTriggeredAnimation>
                        <SubHeading>
                            Borderless payments: Integrate secure and user-friendly crypto checkout
                            in minutes
                        </SubHeading>
                        <Text>
                            Mileston: Simplifying cross border payments with almost zero fees
                        </Text>
                    </ScrollTriggeredAnimation>
                </div>

                <ScrollTriggeredAnimation>
                    <SendMoneyWidget />
                </ScrollTriggeredAnimation>
                {/* <div className='max-h-[] bg-gray-200 rounded-3xl p-14'>
                    <div className="bg-white rounded-3xl h-full">

                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default SendMoneyForm;
