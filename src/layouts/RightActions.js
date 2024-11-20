// src/components/RightActions.js
import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';

const RightActions = () => (
    <div className="flex items-center lg:space-x-8">
        {/* <Link to="/help" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Help</Link>
        <Link to="/blog" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Blog</Link> */}
        {/* <LanguageSelector /> */}
        <Link href="https://cal.com/ahmedrza" target='_blank'>
            <Button>
                Schedule a Demo
            </Button>
        </Link>
    </div>
);

export default RightActions;
