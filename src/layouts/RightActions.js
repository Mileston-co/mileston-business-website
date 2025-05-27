import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';

const RightActions = () => (
    <div className="flex items-center lg:space-x-8">
        <Link href="http://business.mileston.co/">
            <Button className="flex-shrink-0">
                <span className="hidden lg:inline">Sign Up</span>
                <span className="lg:hidden">Sign Up</span>
            </Button>
        </Link>
    </div>
);

export default RightActions;
