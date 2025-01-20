import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Badge({ icon, bgColor = 'bg-green-200', textColor = 'text-green-500', children }) {
    return (
        <div className={`${bgColor} ${textColor} rounded inline-flex items-center px-2 py-1 gap-3`}>
            <FontAwesomeIcon icon={icon} /> {children}
        </div>
    );
}

export default Badge;
