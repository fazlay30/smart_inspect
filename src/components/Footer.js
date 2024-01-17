import React from 'react';
import './Footer.css';
import './Responsive.css';

const Footer = () => {
    return (
        <footer>
            <div className="contact-us">
                <h4>Contact Us:</h4>
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="mailto:your-email@example.com">Email</a></li>
                    <li><a href="tel:+1234567890">Phone: +1 234 567 890</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Smart Contract Audit System. All rights reserved.</p>
                <ul>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
