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

    const gradientBackground = (ctx) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;

        if (!chartArea) return null;

        const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
        return gradient;
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Transaction Volume',
                data: [30, 57, 70, 90],
                fill: true,
                backgroundColor: (ctx) => gradientBackground(ctx),
                borderColor: 'rgba(99, 102, 241, 1)',
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#4F46E5',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: '500',
                    },
                    color: '#4B5563',
                },
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#111827',
                bodyColor: '#1F2937',
                borderColor: '#E5E7EB',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                titleFont: { weight: '600' },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12 },
                },
            },
            y: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                    borderDash: [5, 5],
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12 },
                    callback: function (value) {
                        return `$${value}K`;
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
                    <div
                        key={stat.label}
                        className="p-5 md:p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <div className="flex items-baseline gap-2 mt-2">
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <span className="text-sm text-green-600 font-medium">
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={chartRef}
                className="relative h-[180px] md:h-[280px] bg-white rounded-2xl shadow px-4 pt-5 md:pt-6 md:px-6"
            >
                <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <h3 className="text-lg font-semibold text-gray-800">Transaction Volume</h3>
                    <p className="text-sm text-gray-500">Last 6 months</p>
                </div>
                <div className="h-full pt-14 md:pt-20">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
