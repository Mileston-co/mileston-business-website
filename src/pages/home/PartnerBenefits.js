import React from 'react';
import Text from '../../components/Text';
import Title from '../../components/Title';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';
import Button from '@/components/Button';
import { ArrowDown } from 'lucide-react';

function PartnerBenefits({ partnerId }) {
    console.log('From partner benefits', partnerId)

    function formatPartnerName(partnerId) {
        if (!partnerId) return '';
        return partnerId
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <section className="w-full py-20">
            <ScrollTriggeredAnimation>
                <div className="flex flex-col items-center gap-4 lg:gap-6 text-center px-6 lg:px-20">
                    <div>
                        <Title className="font-semibold">{formatPartnerName(partnerId)} and Mileston</Title>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <Text>
                            Unlock a new level of unprecedented crypto transactions with {formatPartnerName(partnerId)} and Mileston.
                        </Text>
                    </div>
                </div>
            </ScrollTriggeredAnimation>

            <div className="bg-gray-50 mt-14 rounded-xl p-14 md:p-20">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <ScrollTriggeredAnimation>
                        <SubHeading className="text-left md-tect-center text-xl mb-4">
                            {formatPartnerName(partnerId)} has teamed up with Mileston to provide $5k worth of
                            free transactions, priority support and custom features requests for emerging
                            startups and teams looking to expand markets with digital currency payments.
                        </SubHeading>

                        <div className='flex items-center justify-center my-10'>
                            <a href='#sendMoneyForm'>
                                <Button>
                                    <div className='flex items-center justify-center'>
                                        <span>Discover more</span>
                                        <ArrowDown className='W-10 h-10 ml-3' />
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </ScrollTriggeredAnimation>
                </div>
            </div>
        </section>
    );
}

export default PartnerBenefits;
