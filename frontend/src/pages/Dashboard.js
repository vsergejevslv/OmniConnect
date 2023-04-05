import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import '../Dashboard.css';

const Dashboard = () => {
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

    const handleDeleteIntegration = async (integrationId) => {
        // Replace with your API call to delete an integration
        await fetch(`/api/integrations/${integrationId}`, { method: 'DELETE' });
        fetchIntegrations();
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Button className="btn-primary">Create Integration</Button>
            <ul className="integration-list">
                {integrations.map((integration) => (
                    <li key={integration.id} className="integration-item">
                        <span>{integration.name}</span>
                        <Button className="btn-secondary">Edit</Button>
                        <Button
                            className="btn-danger"
                            onClick={() => handleDeleteIntegration(integration.id)}
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
