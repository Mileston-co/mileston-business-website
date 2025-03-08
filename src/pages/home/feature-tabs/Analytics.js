'use client';

import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Analytics = () => {
    const statsRef = useRef();
    const chartRef = useRef();
    const featuresRef = useRef();

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Transaction Volume',
                data: [30, 45, 57, 75],
                fill: true,
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderColor: 'rgba(79, 70, 229, 1)',
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(79, 70, 229, 1)',
                pointHoverBorderColor: 'white',
                pointHoverBorderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'white',
                titleColor: 'black',
                bodyColor: 'black',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `$${context.parsed.y}K`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: 'Nokora Regular',
                        size: 12,
                    },
                },
            },
            y: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
                ticks: {
                    font: {
                        family: 'Nokora Regular',
                        size: 12,
                    },
                    callback: function (value) {
                        return '$' + value + 'K';
                    },
                },
            },
        },
    };

    const stats = [
        { label: 'Total Revenue', value: '$2.5M', change: '+25%' },
        { label: 'Subscription', value: '15.2K', change: '+12%' },
        { label: 'Success Rate', value: '99.9%', change: '+0.0%' },
    ];

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={statsRef}>
                {stats.map((stat) => (
                    <div key={stat.label} className="p-4 md:p-6 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <div className="flex items-baseline gap-2 mt-2">
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <span className="text-sm text-green-600">{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={chartRef} className="relative h-[150px] md:h-[250px] bg-white rounded-xl px-4 pt-4 md:pt-6 md:px-6">
                <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <h3 className="text-lg font-medium">Transaction Volume</h3>
                    <p className="text-sm text-gray-600">Last 6 months</p>
                </div>
                <div className="h-full pt-12 md:pt-16">
                    <Line data={data} options={options} />
                </div>
            </div>

            {/* <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 md:p-6 bg-gray-50 rounded-xl">
                    <h4 className="mb-2 text-lg font-medium">Real-time Monitoring</h4>
                    <p className="text-sm text-gray-600">
                        Track transactions and user activity in real-time with detailed analytics
                    </p>
                </div>
                <div className="p-4 md:p-6 bg-gray-50 rounded-xl">
                    <h4 className="mb-2 text-lg font-medium">Smart Insights</h4>
                    <p className="text-sm text-gray-600">
                        AI-powered insights to help you optimize your payment flows
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default Analytics;
