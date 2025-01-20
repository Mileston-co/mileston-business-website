import React from 'react';

function Card({ children, className = '', padding = 'p-5' }) {
    return <div className={`bg-gray-100 rounded-3xl ${padding} ${className}`}>{children}</div>;
}

export default Card;
