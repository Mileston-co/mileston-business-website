'use client';

import React, { useRef } from 'react';

const Invoice = () => {
    const InvoiceRef = useRef();

    return (
        <div className="p-4 md:p-8 space-y-8">
            {/* Demo Invoice */}
            <div
                ref={InvoiceRef}
                className="overflow-hidden bg-gray-50 border border-gray-200 rounded-xl shadow-md"
            >
                <div className="p-6 border-b border-gray-300 bg-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg">Invoice #12345</h3>
                            <p className="text-sm text-gray-600">Issued: 2023-10-01</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Due: 2023-10-15</p>
                            <p className="font-medium text-lg">$49.99</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-700">Bill To:</h4>
                        <p className="text-gray-800">John Doe</p>
                        <p className="text-gray-600 text-sm">123 Main Street, City, Country</p>
                    </div>

                    <button className="w-full py-3 font-medium text-white bg-black rounded-lg hover:bg-gray-800">
                        Pay Invoice
                    </button>
                </div>
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" ref={featuresRef}>
                {features.map((feature) => (
                    <div key={feature.title} className="p-6 bg-gray-50 rounded-xl">
                        <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Invoice;
