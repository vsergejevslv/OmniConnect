import React from 'react';
import '../Input.css';

const Input = ({ label, type, value, onChange, name, className }) => {
    return (
        <div className={`input-field ${className}`}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type || 'text'}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
