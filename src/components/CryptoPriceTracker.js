'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';

export default function CryptoPriceTracker() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function fetchCoins() {
            try {
                const res = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin,eur-coin,euro-coin,tether,dai&order=market_cap_desc&per_page=5&page=1&sparkline=true'
                );
                const data = await res.json();
                setCoins(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchCoins();
    }, []);

    return (
        <>
            {coins.map((coin) => {
                const isPositive = coin.price_change_percentage_24h >= 0;

                return (
                    <motion.div
                        key={coin.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-md p-4 flex flex-col justify-between"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={coin.image} alt={coin.symbol} className="w-8 h-8" />
                            <div>
                                <h3 className="text-md font-medium text-gray-900 dark:text-white">
                                    {coin.name}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase">{coin.symbol}</p>
                            </div>
                        </div>

                        <div className="text-right mb-4">
                            <p className="text-md font-bold text-gray-900 dark:text-white">
                                $
                                {coin.current_price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                })}
                            </p>
                            <div
                                className={`flex items-center justify-end text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}
                            >
                                {isPositive ? (
                                    <ArrowUpIcon className="w-4 h-4" />
                                ) : (
                                    <ArrowDownIcon className="w-4 h-4" />
                                )}
                                <span className="ml-1">
                                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                </span>
                            </div>
                        </div>

                        <div className="w-full h-20">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={coin.sparkline_in_7d.price.map((p, i) => ({
                                        value: p,
                                        time: i,
                                    }))}
                                >
                                    <Tooltip
                                        formatter={(value) => `$${value.toFixed(2)}`}
                                        labelFormatter={() => ''}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke={isPositive ? '#16A34A' : '#DC2626'}
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
}
