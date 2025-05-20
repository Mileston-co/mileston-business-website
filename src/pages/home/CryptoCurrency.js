'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Link from 'next/link';

export default function CryptoCurrency() {
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

    const positions = [
        { top: '10%', left: '20%' },
        { top: '20%', right: '10%' },
        { bottom: '15%', left: '15%' },
        { bottom: '20%', right: '10%' },
        { top: '50%', left: '0%' },
    ];

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden px-6 mb-40 mt-30">
            {/* Mobile view */}
            <div className="lg:hidden text-center space-y-8 sm:space-y-4 max-w-md mx-auto">
                <Title>Start accepting digital currencies today</Title>
                <Text>Borderless transactions made simple for everyone</Text>
                <Link href="https://cal.com/ahmedrza" target="_blank">
                    <Button>Schedule a Demo</Button>
                </Link>
            </div>

            {/* Desktop view */}
            <div className="hidden lg:flex flex-col space-y-4 items-center text-center relative z-10 max-w-xl">
                <Title>Start accepting digital currencies today</Title>
                <Text className="mb-4">Borderless transactions made simple for everyone</Text>
                <Link href="https://cal.com/ahmedrza" target="_blank">
                    <Button>Schedule a Demo</Button>
                </Link>
            </div>

            {/* Floating logos */}
            {coins.map((coin, index) => (
                <motion.img
                    key={coin.id}
                    src={coin.image}
                    alt={coin.symbol}
                    className="hidden lg:block w-10 h-10 absolute"
                    style={{ ...positions[index % positions.length] }}
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: Math.random(),
                    }}
                />
            ))}
        </section>
    );
}
