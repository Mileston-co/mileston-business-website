'use client';

import { useState, useEffect } from 'react';

import HomeContent from "./HomeContent";
import PartnerShow from "./PartnerShow";


function Home({ partnerId }) {
    const [countdown, setCountdown] = useState(3);
    const [showMainContent, setShowMainContent] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(timer);
                    setShowMainContent(true);
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [])
    return (
        <>
            {!showMainContent && <PartnerShow partnerId={partnerId} />}
            {showMainContent && <HomeContent partnerId={partnerId} />}
        </>
    );
}

export default Home;
