import React from 'react';

function SubHeading({ className = '', children }) {
    return <h2 className={`text-xl lg:text-2xl font-nokora-regular ${className}`}>{children}</h2>;
}

export default SubHeading;
