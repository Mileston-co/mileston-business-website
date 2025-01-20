'use client';
import { useEffect, useRef, useState } from 'react';
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from 'three';
import ThreeGlobe from 'three-globe';
import { useThree, Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import countries from '@/assets/data/globe.json';

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

export function Globe({ globeConfig, data }) {
    const [globeData, setGlobeData] = useState(null);

    const globeRef = useRef(null);

    const defaultProps = {
        pointSize: 1,
        atmosphereColor: '#ffffff',
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: 'rgba(255,255,255,0.7)',
        globeColor: '#1d072e',
        emissive: '#000000',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig,
    };

    useEffect(() => {
        if (globeRef.current) {
            _buildData();
            _buildMaterial();
        }
    }, [globeRef.current]);

    const _buildMaterial = () => {
        if (!globeRef.current) return;

        const globeMaterial = globeRef.current.globeMaterial();
        globeMaterial.color = new Color(globeConfig.globeColor || defaultProps.globeColor);
        globeMaterial.emissive = new Color(globeConfig.emissive || defaultProps.emissive);
        globeMaterial.emissiveIntensity =
            globeConfig.emissiveIntensity || defaultProps.emissiveIntensity;
        globeMaterial.shininess = globeConfig.shininess || defaultProps.shininess;
    };

    const _buildData = () => {
        if (!Array.isArray(data)) {
            console.error('Invalid data provided to Globe component');
            return;
        }

        const arcs = data.filter((arc) => {
            // Validate coordinates
            return (
                !isNaN(arc.startLat) &&
                !isNaN(arc.startLng) &&
                !isNaN(arc.endLat) &&
                !isNaN(arc.endLng) &&
                Math.abs(arc.startLat) <= 90 &&
                Math.abs(arc.endLat) <= 90 &&
                Math.abs(arc.startLng) <= 180 &&
                Math.abs(arc.endLng) <= 180
            );
        });

        let points = [];
        for (let i = 0; i < arcs.length; i++) {
            const arc = arcs[i];
            const rgb = hexToRgb(arc.color);
            if (!rgb) continue; // Skip invalid colors

            const colorFn = (t) => {
                const opacity = Math.max(0, Math.min(1, 1 - t));
                return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
            };

            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: colorFn,
                lat: arc.startLat,
                lng: arc.startLng,
            });
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: colorFn,
                lat: arc.endLat,
                lng: arc.endLng,
            });
        }

        // remove duplicates for same lat and lng
        const filteredPoints = points.filter(
            (v, i, a) => a.findIndex((v2) => ['lat', 'lng'].every((k) => v2[k] === v[k])) === i
        );

        setGlobeData(filteredPoints);
    };

    useEffect(() => {
        if (globeRef.current && globeData) {
            try {
                globeRef.current
                    .hexPolygonsData(countries.features)
                    .hexPolygonResolution(3)
                    .hexPolygonMargin(0.7)
                    .showAtmosphere(defaultProps.showAtmosphere)
                    .atmosphereColor(defaultProps.atmosphereColor)
                    .atmosphereAltitude(defaultProps.atmosphereAltitude)
                    .hexPolygonColor((e) => {
                        return defaultProps.polygonColor;
                    });
                startAnimation();
            } catch (error) {
                console.error('Error initializing globe:', error);
            }
        }
    }, [globeData]);

    const startAnimation = () => {
        if (!globeRef.current || !globeData || !Array.isArray(data)) return;

        try {
            const validArcs = data.filter(
                (d) =>
                    !isNaN(d.startLat) &&
                    !isNaN(d.startLng) &&
                    !isNaN(d.endLat) &&
                    !isNaN(d.endLng) &&
                    !isNaN(d.arcAlt)
            );

            globeRef.current
                .arcsData(validArcs)
                .arcStartLat((d) => Number(d.startLat))
                .arcStartLng((d) => Number(d.startLng))
                .arcEndLat((d) => Number(d.endLat))
                .arcEndLng((d) => Number(d.endLng))
                .arcColor((e) => (typeof e.color === 'string' ? e.color : '#ffffff'))
                .arcAltitude((e) => Number(e.arcAlt))
                .arcStroke((e) => {
                    return [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)];
                })
                .arcDashLength(defaultProps.arcLength)
                .arcDashInitialGap((e) => Number(e.order))
                .arcDashGap(15)
                .arcDashAnimateTime((e) => defaultProps.arcTime);

            globeRef.current
                .pointsData(globeData)
                .pointColor((e) => (typeof e.color === 'function' ? e.color(0) : '#ffffff'))
                .pointsMerge(true)
                .pointAltitude(0.0)
                .pointRadius(2);

            globeRef.current
                .ringsData([])
                .ringColor((e) => {
                    if (!e || !e.color) return '#ffffff';
                    const color = typeof e.color === 'function' ? e.color(0) : e.color;
                    return color;
                })
                .ringMaxRadius(defaultProps.maxRings)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod(
                    (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
                );
        } catch (error) {
            console.error('Error starting animation:', error);
        }
    };

    useEffect(() => {
        if (!globeRef.current || !globeData) return;

        const interval = setInterval(() => {
            if (!globeRef.current || !globeData || globeData.length === 0) return;

            try {
                const maxIndex = Math.min(data.length - 1, globeData.length - 1);
                const count = Math.floor((maxIndex * 4) / 5);
                numbersOfRings = genRandomNumbers(0, maxIndex, Math.max(1, count));

                const validRings = globeData.filter((d, i) => numbersOfRings.includes(i));
                if (validRings.length > 0) {
                    globeRef.current.ringsData(validRings);
                }
            } catch (error) {
                console.error('Error updating rings:', error);
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [globeRef.current, globeData]);

    return (
        <>
            <threeGlobe ref={globeRef} />
        </>
    );
}

export function WebGLRendererConfig() {
    const { gl, size } = useThree();

    useEffect(() => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(size.width, size.height);
        gl.setClearColor(0xffaaff, 0);
    }, []);

    return null;
}

export function World(props) {
    const { globeConfig } = props;
    const scene = new Scene();
    scene.fog = new Fog(0xffffff, 400, 2000);
    return (
        <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
            <WebGLRendererConfig />
            <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
            <directionalLight
                color={globeConfig.directionalLeftLight}
                position={new Vector3(-400, 100, 400)}
            />
            <directionalLight
                color={globeConfig.directionalTopLight}
                position={new Vector3(-200, 500, 200)}
            />
            <pointLight
                color={globeConfig.pointLight}
                position={new Vector3(-200, 500, 200)}
                intensity={0.8}
            />
            <Globe {...props} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={cameraZ}
                maxDistance={cameraZ}
                autoRotateSpeed={1}
                autoRotate={true}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI - Math.PI / 3}
            />
        </Canvas>
    );
}

export function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

export function genRandomNumbers(min, max, count) {
    const arr = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}
