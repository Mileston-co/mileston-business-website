import { analytics, key } from 'fontawesome'
import React, { useState } from 'react'
import Card from '../../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Line } from '@ant-design/plots'
import ProgressBar from '../../components/ProgressBar'
import ReactCountryFlag from 'react-country-flag'

function Features() {

    const tabs = [
        {
            key: 'analytics',
            value: 'Anaylitcs Milestone work',
        },
        {
            key: 'multicurrency',
            value: 'Multicurrency accounts',
        },
    ]

    const [activeTab, setActiveTab] = useState('analytics')

    return (
        <section className='section-container flex flex-col lg:flex-row'>
            <div className='lg:w-1/3 border-l-2 border-l-gray-200 flex flex-col gap-6 mb-5 lg:mb-0'>

                {tabs.map((tab, index) => (
                    <button onClick={() => setActiveTab(tab.key)} key={index} className='flex items-center gap-5 -m-[3px]'>
                        <div className={`w-1 h-1 rounded-full bg-black ${activeTab === tab.key ? 'opacity-100' : 'opacity-0'}`} />
                        <p className={`${activeTab === tab.key ? 'text-black' : 'text-gray-400'} font-nokora-regular transition-colors`}>{tab.value}</p>
                    </button>
                ))}



            </div>
            <div className='lg:w-2/3'>
                <Card>
                    {activeTab === 'analytics' && <Analytics />}
                    {activeTab === 'multicurrency' && <Multicurrency />}
                </Card>
            </div>
        </section>
    )
}

const Feature = ({ title, icon, children }) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5 items-center'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-200'>
                    <FontAwesomeIcon icon={icon} className='text-black' />
                </div>

                <h4 className='text-xl lg:text-2xl font-nokora-regular'>{title}</h4>
            </div>

            {children}
        </div>
    )
}


const Multicurrency = () => {
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

    return (
        <Feature
            title='Multicurrency accounts'
            icon={faBagShopping}
        >
            <div className='grid lg:grid-cols-2 gap-2 fade-down'>
                <div className='flex flex-col gap-2'>
                    {currencies.map((currency, index) => (
                        <Card className='bg-white'>

                            <div className='flex gap-2 items-center justify-between w-full'>
                                <ReactCountryFlag style={{
                                    width: '3em',
                                    height: '3em',
                                }} className='rounded-full' cdnUrl="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/1x1/" countryCode={currency.countryCode} svg={true} />

                                <div className='inline-flex flex-col justify-start w-full '>
                                    <p className='font-bold text-sm'>{currency.name}</p>
                                    <div>
                                        <p className='text-gray-500 text-xs'>{currency.code}</p>
                                        {/* <ProgressBar progress={currency.percentage} /> */}
                                    </div>
                                </div>
                                <div>
                                    <p className='text-black'>${currency.amount}</p>
                                    <p className='text-gray-400 text-xs'>${currency.amount}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className='bg-white'>
                    <div className='w-full flex justify-between gap-2 mb-8'>

                        <div>
                            <p className='text-black text-2xl mb-1 font-nokora-bold'> $20,000 </p>
                            <p className='text-black text-sm'>Toronto office <span className='text-gray-300'>USD</span></p>
                        </div>


                        <ReactCountryFlag style={{
                            width: '3em',
                            height: '3em',
                        }} className='rounded-full' cdnUrl="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/1x1/" countryCode={"US"} svg={true} />
                    </div>

                    <Card>

                        <div className='flex flex-col gap-5 items-start'>
                            <div className='inline-flex flex-col'>
                                <p className='text-md mb-1'>Account number</p>
                                <div className='mr-3'>
                                    <ProgressBar progress={100} color='bg-gray-500' />
                                </div>
                            </div>
                            <div className='inline-flex flex-col'>
                                <p className='text-md mb-1'>ACH routing number</p>
                                <div className='mr-3'>
                                    <ProgressBar progress={100} color='bg-gray-500' />
                                </div>
                            </div>
                            <div className='inline-flex flex-col'>
                                <p className='text-md mb-1'>Wire routing number</p>
                                <div className='mr-3'>
                                    <ProgressBar progress={100} color='bg-gray-500' />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>
            </div>
        </Feature>
    )
}

const Analytics = () => {
    return (

        <Feature
            title='Analytics Milestone work'
            icon={faCodeBranch}
        >
            <div className='bg-white p-5 rounded-2xl fade-down'>
                <AnalyticsChart />
            </div>

            <div>
                <p className='text-black text-xl font-nokora-regular'>Comprehesive financial solution for every need: <span className='text-gray-400'>Tailored financial solutions to meet diverse needs.</span></p>
            </div>
        </Feature>
    )
}


const AnalyticsChart = () => {

    const filters = [
        {
            key: '1H',
            value: '1H'
        },
        {
            key: '1D',
            value: '1D'
        },
        {
            key: '1W',
            value: '1W'
        },
        {
            key: '1M',
            value: '1M'
        },
        {
            key: 'All',
            value: 'All'
        },
    ]

    const [activeFilter, setActiveFilter] = useState('1W');

    const data = [
        {
            year: '1991',
            value: 3,
            type: 'Lon',
        },
        {
            year: '1992',
            value: 4,
            type: 'Lon',
        },
        {
            year: '1993',
            value: 3.5,
            type: 'Lon',
        },
        {
            year: '1994',
            value: 5,
            type: 'Lon',
        },
        {
            year: '1995',
            value: 4.9,
            type: 'Lon',
        },
        {
            year: '1996',
            value: 6,
            type: 'Lon',
        },
        {
            year: '1997',
            value: null,
            type: 'Lon',
        },
        {
            year: '1998',
            value: null,
            type: 'Lon',
        },
        {
            year: '1999',
            value: null,
            type: 'Lon',
        },
        {
            year: '1991',
            value: null,
            type: 'Bor',
        },
        {
            year: '1992',
            value: null,
            type: 'Bor',
        },
        {
            year: '1993',
            value: null,
            type: 'Bor',
        },
        {
            year: '1994',
            value: null,
            type: 'Bor',
        },
        {
            year: '1995',
            value: null,
            type: 'Bor',
        },
        {
            year: '1996',
            value: 6,
            type: 'Bor',
        },
        {
            year: '1997',
            value: 7,
            type: 'Bor',
        },
        {
            year: '1998',
            value: 9,
            type: 'Bor',
        },
        {
            year: '1999',
            value: 13,
            type: 'Bor',
        },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        colorField: 'type',
        scale: {
            color: {
                range: ['#2688FF', 'red'],
            },
        },
        style: {
            lineWidth: 2,
            lineDash: (items) => {
                const { type } = items[0];
                return type === 'Bor' ? [2, 4] : [0, 0];
            },
        },
        height: 200,
        interaction: {
            tooltip: {
                render: (e, { title, items }) => {
                    const list = items.filter((item) => item.value);
                    return (
                        <div key={title}>
                            <h4>{title}</h4>
                            {list.map((item) => {
                                const { name, value, color } = item;
                                return (
                                    <div>
                                        <div style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <span
                                                    style={{
                                                        display: 'inline-block',
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        backgroundColor: color,
                                                        marginRight: 6,
                                                    }}
                                                ></span>
                                                <span>{name}</span>
                                            </div>
                                            <b>{value}</b>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                },
            },
        },
        legend: false,
    };
    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <p className='font-nokora-bold text-md'>Statistics</p>

                <div className='flex bg-gray-200 rounded-2xl p-1'>
                    {filters.map((filter, index) => (
                        <button onClick={() => setActiveFilter(filter.key)} key={index} className={`px-3 py-1 rounded-2xl ${filter.key === activeFilter ? 'bg-white' : 'bg-transparent'}`}>
                            <p className='font-nokora-regular text-xs'>{filter.value}</p>
                        </button>
                    ))}
                </div>
            </div>
            <Line {...config} />
        </div>
    );
};

export default Features