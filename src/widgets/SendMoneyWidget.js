import React, { useState } from 'react';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@mui/material/CircularProgress';

const SendMoneyWidget = () => {
    const [amount, setAmount] = useState('14');
    const [currency, setCurrency] = useState('USDC');

    const [sendingMilestoneMoney, setSendingMilestoneMoney] = useState(false);
    const [moneySent, setMoneySent] = useState(false);

    return (
        <Card className={'h-[520px]'} padding='p-10 lg:p-14'>
            <div className="bg-white rounded-3xl shadow-lg p-6 h-full w-full flex flex-col justify-between ">
                <div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black'><img className='w-10 h-10 object-contain' alt="" src={"/assets/images/mileston.png"} /></div>
                        <h3 className="text-lg font-semibold text-gray-800">Awesome hoddie</h3>
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
                            className="text-lg font-semibold text-gray-800 focus:outline-none bg-transparent  ml-2"
                        >
                            <option value="USDC">USDC</option>
                            <option value="USDT">USDT</option>
                            {/* Add more currencies as needed */}
                        </select>
                    </div>
                </div>

                {/* Confirm Button */}
                <div className="flex flex-col gap-3">
                    {sendingMilestoneMoney === false && (<button onClick={() => {
                        setSendingMilestoneMoney(true);
                        setTimeout(() => {
                            setMoneySent(true);
                        }, 3000);
                    }} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                        Pay with Mileston
                    </button>)}

                    {sendingMilestoneMoney === true && (<button onClick={() => setSendingMilestoneMoney(true)} className={` bg-green-200 text-green-500 flex items-center justify-center mx-auto h-10 rounded-lg font-semibold transition-all ${moneySent ? 'w-full' : 'w-10'}`}>
                        {moneySent === false && <CircularProgress />}
                        {moneySent && (<p>Successfull!</p>)}
                    </button>)}

                    {sendingMilestoneMoney === false && (<button className="w-full bg-gray-100 text-nlack py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Pay with Wallet Connect
                    </button>)}
                </div>

                <div className='flex gap-5 items-center justify-center text-sm text-gray-400'>
                    <FontAwesomeIcon icon={ faLock }/>
                    <p>Secured Checkout Powered by Milestone</p>
                </div>
            </div>
        </Card>
    );
};

export default SendMoneyWidget;
