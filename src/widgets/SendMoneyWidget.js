import React, { useState } from 'react';
import Card from '../components/Card';

const SendMoneyWidget = () => {
    const [amount, setAmount] = useState('2384');
    const [currency, setCurrency] = useState('EUR');
    const [recipient, setRecipient] = useState('John Smith');

    return (
        <Card className={'h-[520px]'} padding='p-10 lg:p-14'>
            <div className="bg-white rounded-3xl shadow-lg p-6 h-full w-full flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Amount</h3>
                    <p className="text-sm text-gray-500 mb-4">Send Money</p>

                    {/* Amount and Currency */}
                    <div className="grid grid-cols-4 items-center border rounded-lg px-4 py-2 mb-4 w-full">
                        <input
                            type="text"
                            value={`€${amount}`}
                            onChange={(e) => setAmount(e.target.value.replace('€', ''))}
                            className="col-span-3 text-lg font-semibold text-gray-800 focus:outline-none"
                            placeholder="Amount"
                        />
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="text-lg font-semibold text-gray-800 focus:outline-none bg-transparent  ml-2"
                        >
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            {/* Add more currencies as needed */}
                        </select>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">Balance: €6,950.00</p>

                    {/* Recipient */}
                    <div className="flex items-center border rounded-lg px-4 py-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold mr-3">
                            AG
                        </div>
                        <select
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="flex-1 text-gray-800 focus:outline-none bg-transparent"
                        >
                            <option value="John Smith">John Smith</option>
                            <option value="Jane Doe">Jane Doe</option>
                            {/* Add more recipients as needed */}
                        </select>
                    </div>
                </div>

                {/* Confirm Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Confirm and Send
                </button>
            </div>
        </Card>
    );
};

export default SendMoneyWidget;
