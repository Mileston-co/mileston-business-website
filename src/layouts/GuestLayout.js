import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function GuestLayout() {
    useEffect(() => {
        try {
            const url = new URL(window.location.href);
            const ref = url.searchParams.get('ref');
            if (ref) localStorage.setItem('referralId', ref);
            const stored = localStorage.getItem('referralId');
            const api = process.env.REACT_APP_AFF_API_URL || '';
            if (stored && api) {
                fetch(`${api}/public/affiliate/clicks/${stored}`, { method: 'POST' });
            }
        } catch (e) { }
    }, []);
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default GuestLayout;
