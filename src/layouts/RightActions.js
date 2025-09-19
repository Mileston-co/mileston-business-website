'use client';

import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import getRef from '../components/getref';

const RightActions = () => (
    <div className="flex items-center lg:space-x-8">
        <Link href={`http://business.mileston.co/auth/signin?ref=${getRef() || ''}`}>
            <Button className="flex-shrink-0">
                <span className="hidden lg:inline">Sign Up</span>
                <span className="lg:hidden">Sign Up</span>
            </Button>
        </Link>
    </div>
);

export default RightActions;
