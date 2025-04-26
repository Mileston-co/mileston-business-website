'use client';

import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeVisualization = () => {
    const globeRef = useRef();

    useEffect(() => {
        const globe = Globe()(globeRef.current)
            .globeImageUrl('/assets/images/globe.png')
            .backgroundColor('rgba(0,0,0,0)')
            .pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
            .showAtmosphere(true)
            .atmosphereColor('#3a9bdc')
            .atmosphereAltitude(0.15);

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
        controls.enableZoom = false;

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

        // Clickable points
        globe
            .pointsData(points)
            .pointAltitude(() => 0.1)
            .pointColor(() => '#4ade80')
            .pointRadius(0.3)
            .pointLabel('text')
            .onPointClick((point) => {
                alert(`Clicked: ${point.text}`);
            });

        // Animated floating labels
        globe
            .labelsData(points)
            .labelLat((d) => d.lat)
            .labelLng((d) => d.lng)
            .labelText((d) => d.text)
            .labelSize(1.6)
            .labelDotRadius(0.4)
            .labelColor(() => '#facc15')
            .labelAltitude(0.01);
    }, []);

    return <div ref={globeRef} className="w-full h-full" />;
};

export default GlobeVisualization;
