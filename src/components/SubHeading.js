import React from 'react';

function SubHeading({ className = '', children }) {
    return <h2 className={`text-2xl lg:text-4xl font-nokora-regular ${className}`}>{children}</h2>;
}

export default SubHeading;
