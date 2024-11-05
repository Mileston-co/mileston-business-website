// src/components/NavLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ title, children }) => (
  <div className="group relative">
    <button className="font-medium hover:text-gray-500 dark:hover:text-gray-300">{title}</button>
    {children && (
      <div className="absolute hidden group-hover:flex flex-col top-full mt-2 w-32 bg-white dark:bg-gray-800 rounded shadow-lg text-gray-700 dark:text-gray-300">
        {children}
      </div>
    )}
  </div>
);

export default NavLink;
