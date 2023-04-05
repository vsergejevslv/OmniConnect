import React from 'react';
import '../Button.css';

const Button = ({ children, type, onClick, className }) => {
    return (
        <button
            type={type || 'button'}
            onClick={onClick}
            className={`btn ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
