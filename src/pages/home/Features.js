import React, { useState } from 'react'
import Card from '../../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faLock } from '@fortawesome/free-solid-svg-icons'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

function Features() {

    const tabs = [
        {
            key: 'analytics',
            value: 'Comprehensive Analytics',
        },
        {
            key: 'multicurrency',
            value: 'Mileston Checkout',
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
                    {activeTab === 'multicurrency' && <SendPaymentLinkWidget />}
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

const SendPaymentLinkWidget = () => {
    const [amount, setAmount] = useState('14');
    const [currency, setCurrency] = useState('USDC');

    const [sendingMilestonMoney, setSendingMilestonMoney] = useState(false);
    const [moneySent, setMoneySent] = useState(false);

    return (
        <div className="bg-white rounded-3xl shadow-lg  h-full w-full flex flex-col justify-between ">
            <img className='rounded-t-3xl' alt="" src={"/assets/images/send-payment-link-cover.png"} />
            <div className='p-6'>
                <div className='flex items-center gap-5 mb-5'>
                    <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black'>
                        <img className='w-10 h-10 object-contain' alt="" src={"/assets/images/mileston.png"} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">2 T-Shirts</h3>
                </div>
                {/* Amount and Currency */}
                <div className="grid grid-cols-4 items-center border rounded-lg px-4 py-2 mb-4 w-full">
                    <input
                        type="text"
                        value={`USDC ${amount}`}
                        onChange={(e) => setAmount(e.target.value.replace('USDC ', ''))}
                        className="col-span-3 text-lg font-semibold text-gray-800 focus:outline-none"
                        placeholder="Amount"
                    />
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="text-lg font-semibold text-gray-800 focus:outline-none bg-transparent text-end pr-2  ml-2"
                    >
                        <option value="USDC">USDC</option>
                        <option value="USDT">USDT</option>
                        {/* Add more currencies as needed */}
                    </select>
                </div>
            </div>

            {/* Confirm Button */}
            <div className="flex flex-col gap-3 p-6">
                {sendingMilestonMoney === false && (<button onClick={() => {
                    setSendingMilestonMoney(true);
                    setTimeout(() => {
                        setMoneySent(true);
                    }, 3000);
                }} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Pay with Mileston
                </button>)}

                {sendingMilestonMoney === true && (<button onClick={() => setSendingMilestonMoney(true)} className={` bg-green-200 text-green-500 flex items-center justify-center mx-auto h-10 rounded-lg font-semibold transition-all ${moneySent ? 'w-full' : 'w-10'}`}>
                    {moneySent === false && <Spin />}
                    {moneySent && (<p>Successfull!</p>)}
                </button>)}

                {sendingMilestonMoney === false && (<button className="w-full bg-gray-100 text-nlack py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Pay with Wallet connect
                </button>)}
            </div>

            <div className='flex gap-5 items-center justify-center text-sm text-gray-400 p-6'>
                <FontAwesomeIcon icon={faLock} />
                <p>Secured Checkout Powered by Mileston</p>
            </div>
        </div>
    );
};

// const Multicurrency = () => {
//     const currencies = [
//         {
//             name: "US Dollers",
//             countryCode: "US",
//             code: "USD",
//             amount: "120,000",
//             percentage: 70
//         },
//         {
//             name: "Euro",
//             countryCode: "EU",
//             code: "EUR",
//             amount: "120,000",
//             percentage: 70
//         },
//         {
//             name: "British Pound",
//             countryCode: "GB",
//             code: "GBP",
//             amount: "120,000",
//             percentage: 70
//         }
//     ]

//     return (
//         <Feature
//             title='Multicurrency accounts'
//             icon={faBagShopping}
//         >
//             <div className='grid lg:grid-cols-2 gap-2 fade-down'>
//                 <div className='flex flex-col gap-2'>
//                     {currencies.map((currency, index) => (
//                         <Card className='bg-white'>

//                             <div className='flex gap-2 items-center justify-between w-full'>
//                                 <ReactCountryFlag style={{
//                                     width: '3em',
//                                     height: '3em',
//                                 }} className='rounded-full' cdnUrl="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/1x1/" countryCode={currency.countryCode} svg={true} />

//                                 <div className='inline-flex flex-col justify-start w-full '>
//                                     <p className='font-bold text-sm'>{currency.name}</p>
//                                     <div>
//                                         <p className='text-gray-500 text-xs'>{currency.code}</p>
//                                         {/* <ProgressBar progress={currency.percentage} /> */}
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-black'>${currency.amount}</p>
//                                     <p className='text-gray-400 text-xs'>${currency.amount}</p>
//                                 </div>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>

//                 <Card className='bg-white'>
//                     <div className='w-full flex justify-between gap-2 mb-8'>

//                         <div>
//                             <p className='text-black text-2xl mb-1 font-nokora-bold'> $20,000 </p>
//                             <p className='text-black text-sm'>Toronto office <span className='text-gray-300'>USD</span></p>
//                         </div>


//                         <ReactCountryFlag style={{
//                             width: '3em',
//                             height: '3em',
//                         }} className='rounded-full' cdnUrl="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/1x1/" countryCode={"US"} svg={true} />
//                     </div>

//                     <Card>

//                         <div className='flex flex-col gap-5 items-start'>
//                             <div className='inline-flex flex-col'>
//                                 <p className='text-md mb-1'>Account number</p>
//                                 <div className='mr-3'>
//                                     <ProgressBar progress={100} color='bg-gray-500' />
//                                 </div>
//                             </div>
//                             <div className='inline-flex flex-col'>
//                                 <p className='text-md mb-1'>ACH routing number</p>
//                                 <div className='mr-3'>
//                                     <ProgressBar progress={100} color='bg-gray-500' />
//                                 </div>
//                             </div>
//                             <div className='inline-flex flex-col'>
//                                 <p className='text-md mb-1'>Wire routing number</p>
//                                 <div className='mr-3'>
//                                     <ProgressBar progress={100} color='bg-gray-500' />
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </Card>
//             </div>
//         </Feature>
//     )
// }

const Analytics = () => {
    return (

        <Feature
            title='Comprehensive Analytics'
            icon={faCodeBranch}
        >
            <div className='bg-white p-5 rounded-2xl fade-down'>
                <AnalyticsChart />
            </div>

            <div>
                <p className='text-black text-xl font-nokora-regular'>
                    Detailed Analytics:
                    <span className='text-gray-400'>Get in depth analysis of every aspect of your business finances</span>
                </p>
            </div>
        </Feature>
    )
}



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data, options }) => {
    return <Line data={data} options={options} />;
};

const AnalyticsChart = () => {
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Transactions',
                data: [100, 200, 300, 500, 400, 600],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Transactions Over Months' },
        },
    };

    return <LineChart data={lineData} options={lineOptions} />;
};


export default Features