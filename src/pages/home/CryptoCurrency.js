import { faCoins } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Text from '../../components/Text'
import Badge from '../../components/Badge'
import Title from '../../components/Title'
import Button from '../../components/Button'

function CryptoCurrency() {
    return (
        <section className='section-container grid grid-cols-1 lg:grid-cols-2 gap-20'>
            <div className='flex flex-col justify-center gap-8 items-start pr-40'>

                <Badge icon={faCoins}>Account Transfer</Badge>
                <Title className='text-start'>Join the DeFi revolution with Mileston</Title>
                <Text className='lg:text-lg'>Borderless transactions made simple for everyone</Text>

                <Button>
                    Schedule a Demo
                </Button>
            </div>

            <div className='pr-10'>
                <img className='w-full max-w-4xl' src="/assets/images/crypto-currency-image.png" alt="Crypto Currency" />
            </div>
        </section>
    )
}

export default CryptoCurrency