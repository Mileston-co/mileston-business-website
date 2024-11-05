import React from 'react'
import Card from '../../components/Card'
import ReactCountryFlag from "react-country-flag"
import ProgressBar from '../../components/ProgressBar'
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faChartLine, faPlane, faShop } from '@fortawesome/free-solid-svg-icons'
import Text from '../../components/Text'


function Features() {

    const currencies = [
        {
            name: "US Dollers",
            countryCode: "US",
            code: "USD",
            amount: "120,000",
            percentage: 70
        },
        {
            name: "Euro",
            countryCode: "EU",
            code: "EUR",
            amount: "120,000",
            percentage: 70
        },
        {
            name: "British Pound",
            countryCode: "GB",
            code: "GBP",
            amount: "120,000",
            percentage: 70
        }
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
        <section className='section-container grid lg:grid-cols-3 gap-3'>

            <Feature title={"Analytics"} description={" Gain insights into your financial habits with advanced analytics, aiding informed decisions and effective financial management."}>

                <div className='bg-white rounded-2xl p-5 w-full flex flex-col gap-6'>

                    {currencies.map((currency, index) => (
                        <div key={index} className='flex items-center gap-5 justify-between'>
                            <ReactCountryFlag style={{
                                width: '2em',
                                height: '2em',
                            }} countryCode={currency.countryCode} svg={true} />

                            <div className='inline-flex flex-col justify-start w-full gap-2'>
                                <p className='font-bold text-sm'>{currency.name}</p>
                                <div>
                                    <ProgressBar progress={currency.percentage} />
                                </div>
                            </div>

                            <p className='text-gray-400'>${currency.amount}</p>
                        </div>
                    ))}
                </div>

            </Feature>
            <Feature title={"Budgeting"} description={"Take control of your finances with our budgeting features, managing income and expenses to meet your financial goals."}>

                <div className='flex flex-col gap-2'>

                    <div className='bg-white rounded-2xl p-5 w-full flex  gap-5'>
                        <div style={{
                            width: '3em',
                            height: '3em',
                        }} className='rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon className='text-gray-200' icon={faChartLine} />
                        </div>

                        <div className='inline-flex flex-col justify-start gap-2'>
                            <div className='flex items-start gap-2'>
                                <p className='font-bold text-lg'>$290,120.99</p>
                                <span className='bg-gray-200 px-1 text-xs'>+9%</span>
                            </div>
                            <Text className={'text-xs lg:text-xs'}>Gross Sales</Text>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-5 w-full flex  gap-5'>
                        <div style={{
                            width: '3em',
                            height: '3em',
                        }} className='rounded-full flex justify-center items-center bg-black'>
                            <FontAwesomeIcon className='text-gray-200' icon={faChartLine} />
                        </div>

                        <div className='inline-flex flex-col justify-start gap-2'>
                            <div className='flex items-start gap-2'>
                                <p className='font-bold text-lg'>$290,120.99</p>
                                <span className='bg-gray-200 px-1 text-xs'>+9%</span>
                            </div>
                            <Text className={'text-xs lg:text-xs'}>Gross Sales</Text>
                        </div>
                    </div>


                </div>

            </Feature>


            <Feature title={"Analytics"} description={" Gain insights into your financial habits with advanced analytics, aiding informed decisions and effective financial management."}>

                <div className='bg-white rounded-2xl p-5 w-full flex flex-col gap-6'>

                    {accounts.map((account, index) => (
                        <div key={index} className='flex items-center gap-5 justify-between'>
                            <div className='flex items-center gap-5'>

                                <div style={{
                                    width: '2.1em',
                                    height: '2.1em',
                                }} className={`rounded-full flex justify-center items-center ${account.iconBg}`}>
                                    <FontAwesomeIcon className='text-white text-xs' icon={account.icon} />
                                </div>

                                <p className='font-bold text-sm'>{account.name}</p>

                            </div>
                            <p className='text-gray-400'>${account.amount}</p>
                        </div>
                    ))}
                </div>

            </Feature>

        </section >
    )
}

function Feature({ title, description, children }) {

    return (
        <Card>
            <div className='flex flex-col items-center gap-5 mt-10'>
                <h4 className='font-bold text-xl lg:text-2xl mb-3 text-center'>{title}</h4>
                <Text className={ 'text-center' }>
                    {description}</Text>

                <div className='mt-4 w-full'>
                    {children}
                </div>
            </div>
        </Card>
    )

}

export default Features