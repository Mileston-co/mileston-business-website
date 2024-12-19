import React from 'react'
import Card from '../../components/Card'
import ReactCountryFlag from "react-country-flag"
import ProgressBar from '../../components/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faChartLine, faPlane, faShop } from '@fortawesome/free-solid-svg-icons'
import Text from '../../components/Text'
import SubHeading from '../../components/SubHeading'
import { ScrollTriggeredAnimation } from "@/components/Animation";
import { faPaypal, faSquarespace, faStripe } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import VolatilityProtection from '../../assets/images/volatility-protection.png';
import EasyIntegration from '../../assets/images/easy-integration.jpg';
import MilestonLogoWhite from '../../assets/images/logo-white.png';


function Analytics() {

    const processors = [
        {
            name: "Mileston",
            fee: "0.4% Only!",
            percentage: 20,
            logo: MilestonLogoWhite,
            milestone: true
        },
        {
            name: "PayPal",
            icon: faPaypal,
            fee: "2.9% + $0.30/Tr",
            percentage: 70,
            milestone: false
        },
        {
            name: "Stripe",
            icon: faStripe,
            fee: "2.9% + $0.30/Tr",
            percentage: 70,
            milestone: false
        },
    ]

    const accounts = [
        {
            name: "Shopping",
            amount: "120,000",
            icon: faBagShopping,
            iconBg: 'bg-purple-300'
        },

        {
            name: "Restuarants",
            amount: "120,000",
            icon: faShop,
            iconBg: 'bg-green-300'
        },
        {
            name: "Travel",
            amount: "120,000",
            icon: faPlane,
            iconBg: 'bg-blue-300'
        }
    ]

    return (
        <section className='grid gap-3 items-start section-container lg:grid-cols-3'>

            <Feature
                title={"Low Fees"}
                description={"Accept business payments from around the world with just 0.4% transaction fee."}
            >
                <ScrollTriggeredAnimation>
                    <div className='flex flex-col gap-6 p-5 w-full bg-white rounded-2xl'>

                        {processors.map((processor, index) => (
                            <div key={index} className='flex gap-5 justify-between items-center'>
                                {/* <ReactCountryFlag style={{
                                    width: '2em',
                                    height: '2em',
                                }} countryCode={processor.countryCode} svg={true} /> */}
                                <div style={{
                                    minWidth: '2.2em',
                                    height: '2.2em',
                                }} className={`flex justify-center items-center rounded-full ${ processor.milestone ? 'bg-black' : 'bg-gray-200' }`}>
                                    {processor.milestone ?
                                        <Image src={processor.logo} alt="" className='object-contain w-[1.8em] h-[1.8em]' />
                                        :
                                        <FontAwesomeIcon className={`${ processor.milestone ? 'text-gray-200' : 'text-black' }`} icon={processor.icon} />
                                    }
                                </div>

                                <div className='inline-flex flex-col gap-2 justify-start w-full'>
                                    <div className='flex gap-2'>
                                        <p className='text-xs font-bold'>{processor.name}</p>
                                        <p className='text-xs text-gray-400'>{processor.fee}</p>
                                    </div>
                                    <div>
                                        <ProgressBar progress={processor.percentage} />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </ScrollTriggeredAnimation>

            </Feature>
            <Feature
                title={"Easy Integration"}
                description={"Easily integrate crypto checkout with our robust APIs and start accepting payments immediately."}
            >
                <ScrollTriggeredAnimation>
                    <div className='flex flex-col gap-6 p-5 w-full bg-white rounded-2xl'>
                        <Image src={EasyIntegration} alt="" className='object-contain h-[9.5em]' />
                    </div>

                    {/* <div className='flex flex-col gap-2'>

                            <div className='flex gap-5 p-5 w-full bg-white rounded-2xl'>

                                <div style={{
                                    width: '3em',
                                    height: '3em',
                            }} className='flex justify-center items-center bg-black rounded-full'>
                                <FontAwesomeIcon className='text-gray-200' icon={faChartLine} />
                            </div>
                            <div className='inline-flex flex-col gap-2 justify-start'>
                                <div className='flex gap-2 items-start'>
                                    <p className='text-lg font-bold'>$290,120.99</p>
                                    <span className='px-1 text-xs bg-gray-200'>+9%</span>
                                </div>
                                <Text className={'text-xs lg:text-xs'}>Gross Sales</Text>
                            </div>
                        </div>
                        <div className='flex gap-5 p-5 w-full bg-white rounded-2xl'>

                            <div style={{
                                width: '3em',
                                height: '3em',
                            }} className='flex justify-center items-center bg-black rounded-full'>
                                <FontAwesomeIcon className='text-gray-200' icon={faChartLine} />
                            </div>

                            <div className='inline-flex flex-col gap-2 justify-start'>
                                <div className='flex gap-2 items-start'>
                                    <p className='text-lg font-bold'>$290,120.99</p>
                                    <span className='px-1 text-xs bg-gray-200'>+9%</span>
                                </div>
                                <Text className={'text-xs lg:text-xs'}>Gross Sales</Text>
                            </div>

                        </div>

                    </div> */}
                </ScrollTriggeredAnimation>

            </Feature>


            <Feature
                title={"Volatility Protection"}
                description={"Get volatility protection by Mileston's auto USDC convert feature. You'll always receive USDC."}
            >
                <ScrollTriggeredAnimation>
                    <div className='flex flex-col gap-6 p-5 w-full bg-white rounded-2xl'>

                        <Image src={VolatilityProtection} alt="" className='object-contain h-[9.5em]' />
                        {/* {accounts.map((account, index) => (
                            <div key={index} className='flex gap-5 justify-between items-center'>
                                <div className='flex gap-5 items-center'>

                                    <div style={{
                                        width: '2.1em',
                                        height: '2.1em',
                                    }} className={`rounded-full flex justify-center items-center ${account.iconBg}`}>
                                        <FontAwesomeIcon className='text-xs text-white' icon={account.icon} />
                                    </div>

                                    <p className='text-sm font-bold'>{account.name}</p>

                                </div>

                                <p className='text-gray-400'>${account.amount}</p>
                            </div>
                        ))} */}
                    </div>
                </ScrollTriggeredAnimation>
            </Feature>

        </section >
    )
}

function Feature({ title, description, children }) {

    return (
        <Card>

            <div className='flex flex-col gap-5 items-center mt-10'>
                <ScrollTriggeredAnimation>
                    <SubHeading>{title}</SubHeading>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <Text className={'text-center'}>
                        {description}</Text>
                </ScrollTriggeredAnimation>
                <ScrollTriggeredAnimation>
                    <div className='mt-4 w-full'>
                        {children}
                    </div>
                </ScrollTriggeredAnimation>
            </div>
        </Card>
    )

}

export default Analytics