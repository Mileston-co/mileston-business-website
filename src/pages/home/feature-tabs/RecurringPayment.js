'use client';

import React from 'react';

const RecurringPayment = () => {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="overflow-hidden bg-gray-50 border border-gray-200 rounded-xl shadow-md">
                <div className="p-6 border-b border-gray-300 bg-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg">Recurring Payment</h3>
                            <p className="text-sm text-gray-600">Plan: Premium Subscription</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Next Payment: 2023-11-01</p>
                            <p className="font-medium text-lg">$49.99/month</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-700">Subscriber:</h4>
                        <p className="text-gray-800">John Doe</p>
                        <p className="text-gray-600 text-sm">john.doe@example.com</p>
                    </div>

                    <button className="w-full py-3 font-medium text-white bg-black rounded-lg hover:bg-gray-800">
                        Manage Subscription
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecurringPayment;
