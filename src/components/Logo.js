'use client';

// src/components/Logo.js
import React, { useEffect } from 'react';
import MilestonLogo from './../assets/images/logo.png';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="text-2xl font-bold">
            <Image className="object-contain w-48" src={MilestonLogo} alt="Mileston Logo" />
        </div>
    );
};

export default Logo;
