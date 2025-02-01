import React from 'react';

function Text({ children, color = 'text-gray-400', className = '' }) {
    return <p className={`text-md lg:text-lg ${color} ${className}`}>{children}</p>;
}

export default Text;
