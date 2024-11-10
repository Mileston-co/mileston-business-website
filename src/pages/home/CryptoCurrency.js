import { faCoins } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import SubHeading from '../../components/SubHeading'
import Text from '../../components/Text'
import CryptoCurrencyImg from '../../assets/images/crypto-currency-image.png'
import Badge from '../../components/Badge'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function CryptoCurrency() {
    return (
        <section className='section-container grid grid-cols-1 lg:grid-cols-2 gap-20'>
            <div className='flex flex-col justify-center gap-8 items-start pr-40'>

                <Badge icon={faCoins}>Account Transfer</Badge>
                <Title className='text-start'>Join the crypto revolution with Milestone</Title>
                <Text className='lg:text-lg'>Invest in the future: safe and profitable crypto assets for everyone</Text>

                <Button>
                    Get Started
                </Button>
            </div>

            <div className='pr-10'>
                <img className='w-full max-w-4xl' src={CryptoCurrencyImg} alt="Crypto Currency" />
            </div>
        </section>
    )
}

export default CryptoCurrency