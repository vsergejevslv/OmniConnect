import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../Collaboration.css';

const Collaboration = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch collaboration projects from the backend API
        fetchCollaborationProjects();
    }, []);

    const fetchCollaborationProjects = async () => {
        // Replace with your API call to fetch collaboration projects
        const response = await fetch('/api/collaboration-projects');
        const data = await response.json();
        setProjects(data);
    };

    return (
        <div className="collaboration">
            <h1>Collaboration</h1>
            <Button className="btn-primary">Create New Project</Button>
            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.id} className="project-item">
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-actions">
                            <Button className="btn-secondary">Open</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Collaboration;
