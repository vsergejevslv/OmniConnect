import React from 'react';
import '../Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="container">
                <div className="footer-content">
                    <p>OmniConnect &copy; {new Date().getFullYear()}</p>
                    <nav className="footer-navigation">
                        <ul>
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms-of-service">Terms of Service</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
