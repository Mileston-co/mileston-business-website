import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function GuestLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default GuestLayout;
