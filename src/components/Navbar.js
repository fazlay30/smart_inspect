// Navbar.js
import React from 'react';
import './Navbar.css';
import './Responsive.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <h1>Smart Inspect</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/upload">Upload Contract</Link></li>
                    <li><Link to="/previous-audits">Previous Audits</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;