'use client';

// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import Logo from './../components/Logo';
import RightActions from './RightActions';

const NAVIGATION_ITEMS = [
    { label: 'Features', sectionId: 'features' },
    { label: 'Docs', url: 'https://docs.mileston.co' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const actionsRef = useRef(null);
    const containerRef = useRef(null);
    const navRef = useRef(null);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 flex justify-center w-full px-4 py-5"
            style={{ zIndex: 1000 }}
        >
            <div
                ref={containerRef}
                className={`max-w-6xl mx-auto grid grid-cols-12 items-center px-8 py-3 rounded-full transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                        : 'bg-white/50 backdrop-blur-sm'
                }`}
            >
                <div ref={logoRef} className="col-span-6 lg:col-span-3 mb-4 lg:mb-0">
                    <Logo />
                </div>

                <nav ref={navRef} className="hidden lg:flex justify-center col-span-6 gap-6">
                    {NAVIGATION_ITEMS.map(({ label, sectionId, url }) => (
                        <button
                            key={sectionId || url}
                            onClick={() => sectionId ? scrollToSection(sectionId) : window.open(url, '_blank')}
                            className={`text-sm font-medium transition-all duration-300 relative ${
                                activeSection === sectionId
                                    ? 'text-black'
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            {label}
                            {activeSection === sectionId && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full" />
                            )}
                        </button>
                    ))}
                </nav>

                <div ref={actionsRef} className="flex justify-end ml-4 lg:ml-0 col-span-6 lg:col-span-3 lg:mt-0">
                    <RightActions />
                </div>
            </div>
        </header>
    );
};

export default Header;
