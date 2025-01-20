import React from 'react';

function Button({ onClick, disabled = false, type = 'button', color = 'black', children }) {
    return (
        <button
            className={`${color == 'black' ? 'bg-black hover:bg-gray-800 text-white' : 'bg-white hover:bg-gray-300 text-black'} font-bold py-2 px-4 rounded-full`}
        >
            {children}
        </button>
    );
}

export default Button;
