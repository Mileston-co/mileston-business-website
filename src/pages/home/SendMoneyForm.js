import React from 'react'
import Badge from '../../components/Badge'
import { envelopeOpen } from 'fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import Text from '../../components/Text'
import SendMoneyWidget from '../../widgets/SendMoneyWidget'

function SendMoneyForm() {
    return (
        <section className='section-container !py-20 flex flex-col  items-center'>
            <div className='w-full max-w-4xl flex flex-col  items-center gap-5 lg:gap-8'>
                <Badge icon={faEnvelopeOpen}>Daily Finances</Badge>
                <h2 className='text-3xl lg:text-5xl text-center font-nokora-bold'>Efficienct at its best: Moneliq's daily finance</h2>
                <Text>Empowering global financial management</Text>
            </div>

            <div className='mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl items-center'>

                <div className='flex flex-col gap-5 items-start pr-28'>

                    <Badge icon={faEnvelopeOpen}>Account Transfer</Badge>
                    <h4 className='text-2xl lg:text-4xl font-nokora-regular'>Global Payments: your gateway to secure transactions</h4>
                    <Text>Moneliq: simplifying payments in the UK, Europe, and internationally</Text>

                </div>

                <SendMoneyWidget />
                {/* <div className='max-h-[] bg-gray-200 rounded-3xl p-14'>
                    <div className="bg-white rounded-3xl h-full">

                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default SendMoneyForm