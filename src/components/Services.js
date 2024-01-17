import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Services.css';
import './Responsive.css';

const ServicesPage = () => {
    return (
        <div className="services-container">
            <Navbar />
            <div className="services-content">
                <h2 className="services-title">What We Offer</h2>
                <ul className="services-list">
                    <li><b>1. Real-Time Monitoring:</b> Continuous surveillance of your smart contracts for any security anomalies.</li>
                    <li><b>2. Custom Audits:</b> Tailored audits to meet your specific needs and compliance requirements.</li>
                    <li><b>3. Multi-Chain Support:</b> Offering audits for smart contracts on Ethereum, Binance Smart Chain, and other popular blockchains.</li>
                    <li><b>4. Automated Testing:</b> Utilizing state-of-the-art tools to automate vulnerability testing for quicker results.</li>
                    <li><b>5. Codebase Review:</b> Deep dive into the contract codebase to identify security threats or inefficiencies.</li>
                    <li><b>6. Manual Reviews:</b> Our team of experts also perform manual checks to catch vulnerabilities automated scans might miss.</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default ServicesPage;
