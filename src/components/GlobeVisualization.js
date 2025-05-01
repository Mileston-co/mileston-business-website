'use client';

import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export default function GlobeVisualization() {
    const globeRef = useRef(null);

    useEffect(() => {
        if (!globeRef.current) return;

        const globe = Globe()(globeRef.current)
            .globeImageUrl('/assets/images/globe.png')
            .backgroundColor('rgba(0,0,0,0)')
            .pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
            .showAtmosphere(true)
            .atmosphereAltitude(0.15);

        // **allow page scroll when swiping the canvas on mobile**
        const canvas = globeRef.current.querySelector('canvas');
        if (canvas) canvas.style.touchAction = 'pan-y';

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
        controls.enableZoom = false;

        const handleResize = () => {
            if (window.innerWidth < 768) {
                controls.enableRotate = false;
                globe.pointOfView({ altitude: 3 }, 1000);
            } else {
                controls.enableRotate = true;
                globe.pointOfView({ altitude: 2.5 }, 1000);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const points = [
            { lat: 51.5, lng: -0.1, text: 'London' },
            { lat: 35.6, lng: 139.6, text: 'Tokyo' },
            { lat: 40.7, lng: -74, text: 'New York' },
            { lat: 6.5244, lng: 3.3792, text: 'Lagos' },
            { lat: -33.8688, lng: 151.2093, text: 'Sydney' },
            { lat: 19.4326, lng: -99.1332, text: 'Mexico City' },
            { lat: -23.5505, lng: -46.6333, text: 'São Paulo' },
            { lat: 55.7558, lng: 37.6173, text: 'Moscow' },
            { lat: 28.6139, lng: 77.209, text: 'New Delhi' },
        ];

        globe
            .pointsData(points)
            .pointAltitude(() => 0.1)
            .pointColor(() => '#4ade80')
            .pointRadius(0.3)
            .pointLabel('text')
            .onPointClick((pt) => alert(`Clicked: ${pt.text}`));

        globe
            .labelsData(points)
            .labelLat((d) => d.lat)
            .labelLng((d) => d.lng)
            .labelText((d) => d.text)
            .labelSize(1.6)
            .labelDotRadius(0.4)
            .labelColor(() => '#facc15')
            .labelAltitude(0.01);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div ref={globeRef} className="w-[80%]" />;
}
