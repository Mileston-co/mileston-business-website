import React from 'react';

function Title({ className = '', children }) {
    return (
        <h2 className={`text-3xl lg:text-5xl text-center font-nokora-bold ${className}`}>
            {children}
        </h2>
    );
}

export default Title;
