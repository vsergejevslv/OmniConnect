import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../IntegrationManagement.css';

const IntegrationManagement = () => {
    const [integrations, setIntegrations] = useState([]);

    useEffect(() => {
        // Fetch integrations from the backend API
        fetchIntegrations();
    }, []);

    const fetchIntegrations = async () => {
        // Replace with your API call to fetch integrations
        const response = await fetch('/api/integrations');
        const data = await response.json();
        setIntegrations(data);
    };

    return (
        <div className="integration-management">
            <h1>Integration Management</h1>
            <Button className="btn-primary">Add New Integration</Button>
            <ul className="integration-list">
                {integrations.map((integration) => (
                    <li key={integration.id} className="integration-item">
                        <div className="integration-info">
                            <h3>{integration.name}</h3>
                            <p>{integration.description}</p>
                        </div>
                        <div className="integration-actions">
                            <Button className="btn-secondary">Configure</Button>
                            <Button className="btn-danger">Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IntegrationManagement;
