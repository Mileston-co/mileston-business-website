// src/components/LanguageSelector.js
import React from 'react';
import { Link } from 'react-router-dom';

const LanguageSelector = () => (
  <div className="relative group">
    <button className="text-sm font-medium hover:text-gray-500 dark:hover:text-gray-300">EN</button>
    <div className="absolute hidden group-hover:flex flex-col top-full mt-2 w-24 bg-white dark:bg-gray-800 rounded shadow-lg text-gray-700 dark:text-gray-300">
      <Link to="/en" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">EN</Link>
      <Link to="/fr" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">FR</Link>
    </div>
  </div>
);

export default LanguageSelector;
