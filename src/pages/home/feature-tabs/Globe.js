'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), {
    ssr: false,
});

const Globe = () => {
    const statsRef = useRef();

    const globeConfig = {
        pointSize: 4,
        globeColor: '#062056',
        showAtmosphere: true,
        atmosphereColor: '#FFFFFF',
        atmosphereAltitude: 0.1,
        emissive: '#062056',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: 'rgba(255,255,255,0.7)',
        ambientLight: '#38bdf8',
        directionalLeftLight: '#ffffff',
        directionalTopLight: '#ffffff',
        pointLight: '#ffffff',
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ['#06b6d4', '#3b82f6', '#6366f1'];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];

    useEffect(() => {
        // Stats animation
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach((stat, index) => {
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                delay: 0.5 + index * 0.2,
                ease: 'power2.out',
                snap: { textContent: 1 },
            });
        });
    }, []);

    return (
        <div className="relative h-[600px]">
            <div className="absolute inset-0">
                <World data={sampleArcs} globeConfig={globeConfig} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/80 to-transparent">
                <div className="grid grid-cols-3 gap-8" ref={statsRef}>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-black stat-value">180</p>
                        <p className="text-gray-600">Countries Supported</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-black stat-value">0.01</p>
                        <p className="text-gray-600">Minimum Fee</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-black stat-value">24</p>
                        <p className="text-gray-600">Instant Transfers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Globe;
