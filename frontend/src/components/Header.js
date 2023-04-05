import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="container">
                <div className="header-content">
                    <NavLink to="/" className="logo">
                        OmniConnect
                    </NavLink>
                    <nav className="main-navigation">
                        <ul>
                            <li>
                                <NavLink to="/integrations">Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/data-mapping">Data Mapping</NavLink>
                            </li>
                            <li>
                                <NavLink to="/collaboration">Collaboration</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="user-info">
                        {/* Replace with actual user data */}
                        <span>Welcome, John Doe</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
