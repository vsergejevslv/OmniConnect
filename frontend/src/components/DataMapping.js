import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../DataMapping.css';

const DataMapping = () => {
    const [mappings, setMappings] = useState([]);

    useEffect(() => {
        // Fetch data mappings from the backend API
        fetchDataMappings();
    }, []);

    const fetchDataMappings = async () => {
        // Replace with your API call to fetch data mappings
        const response = await fetch('/api/data-mappings');
        const data = await response.json();
        setMappings(data);
    };

    return (
        <div className="data-mapping">
            <h1>Data Mapping</h1>
            <Button className="btn-primary">Add New Mapping</Button>
            <ul className="mapping-list">
                {mappings.map((mapping) => (
                    <li key={mapping.id} className="mapping-item">
                        <div className="mapping-info">
                            <h3>{mapping.name}</h3>
                            <p>{mapping.description}</p>
                        </div>
                        <div className="mapping-actions">
                            <Button className="btn-secondary">Edit</Button>
                            <Button className="btn-danger">Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataMapping;
