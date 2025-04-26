import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@mui/material/CircularProgress';

const SendMoneyWidget = () => {
    const [amount, setAmount] = useState(0); // Start at 0 for animation
    const [currency, setCurrency] = useState('USDC');
    const [sendingMilestoneMoney, setSendingMilestoneMoney] = useState(false);
    const [moneySent, setMoneySent] = useState(false);
    const amountRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Animate the amount from 0 to 200
                    let currentAmount = 0;
                    const targetAmount = 200;
                    const increment = 5; // Adjust speed by changing increment or interval
                    const interval = setInterval(() => {
                        currentAmount += increment;
                        if (currentAmount >= targetAmount) {
                            clearInterval(interval);
                            currentAmount = targetAmount;
                        }
                        setAmount(currentAmount);
                    }, 50);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the widget is in view
        );

        if (amountRef.current) {
            observer.observe(amountRef.current);
        }

        return () => {
            if (amountRef.current) observer.unobserve(amountRef.current);
        };
    }, []);

    return (
        <Card className=" bg-gray-50 h-[520px]" padding="p-10 lg:p-14">
            <div
                className="flex flex-col justify-between w-full h-full p-6 bg-white shadow-lg rounded-3xl"
                ref={amountRef}
            >
                <div>
                    <div className="flex items-center gap-5 mb-5">
                        <div className="flex items-center justify-center bg-black rounded-full w-14 h-14">
                            <img
                                className="object-contain w-10 h-10"
                                alt=""
                                src="/assets/images/mileston.png"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Black Hoodie</h3>
                    </div>
                    {/* Amount and Currency */}
                    <div className="grid items-center w-full grid-cols-4 px-4 py-2 mb-4 border rounded-lg">
                        <div
                            className="col-span-3 text-lg font-semibold text-gray-800 focus:outline-none"
                            style={{ minHeight: '1.5rem' }}
                        >
                            USDC {amount}
                        </div>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="ml-2 text-lg font-semibold text-gray-800 bg-transparent focus:outline-none"
                        >
                            <option value="USDC">USDC</option>
                            <option value="USDT">USDT</option>
                            {/* Add more currencies as needed */}
                        </select>
                    </div>
                </div>

                {/* Confirm Button */}
                <div className="flex flex-col gap-3">
                    {!sendingMilestoneMoney && (
                        <button
                            onClick={() => {
                                setSendingMilestoneMoney(true);
                                setTimeout(() => {
                                    setMoneySent(true);
                                }, 1000);
                            }}
                            className="w-full py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
                        >
                            Pay with Mileston
                        </button>
                    )}

                    {sendingMilestoneMoney && (
                        <button
                            onClick={() => setSendingMilestoneMoney(true)}
                            className={`bg-green-200 text-green-500 flex items-center justify-center mx-auto h-10 rounded-lg font-semibold transition-all ${
                                moneySent ? 'w-full' : 'w-10'
                            }`}
                        >
                            {!moneySent && <CircularProgress />}
                            {moneySent && <p>Successful!</p>}
                        </button>
                    )}

                    {!sendingMilestoneMoney && (
                        <button className="w-full py-3 font-semibold text-black transition bg-gray-100 rounded-lg hover:bg-gray-100">
                            Pay with QR Code
                        </button>
                    )}
                </div>

                <div className="flex items-center justify-center gap-5 text-sm text-gray-400">
                    <FontAwesomeIcon icon={faLock} />
                    <p>Secured Checkout Powered by Mileston</p>
                </div>
            </div>
        </Card>
    );
};

export default SendMoneyWidget;
