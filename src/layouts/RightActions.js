// src/components/RightActions.js
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './../components/LanguageSelecter';
import Button from '../components/Button';

const RightActions = () => (
    <div className="flex items-center space-x-8">
        {/* <Link to="/help" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Help</Link>
        <Link to="/blog" className="hidden md:inline-block text-sm hover:text-gray-500 dark:hover:text-gray-300">Blog</Link> */}
        {/* <LanguageSelector /> */}
        <Button>
            Join Waitlist
        </Button>
    </div>
);

export default RightActions;
