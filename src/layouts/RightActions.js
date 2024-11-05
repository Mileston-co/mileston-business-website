// src/components/RightActions.js
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './../components/LanguageSelecter';

const RightActions = () => (
    <div className="flex items-center space-x-8">
        {/* <Link to="/help" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Help</Link>
        <Link to="/blog" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Blog</Link> */}
        {/* <LanguageSelector /> */}
        <Link to="/signup" className="px-4 py-1 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full">
            Join Waitlist
        </Link>
    </div>
);

export default RightActions;
