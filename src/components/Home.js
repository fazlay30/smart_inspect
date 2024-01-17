import React from 'react';
import './Home.css';
import './Responsive.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

// ... other imports ...

const HomePage = () => {
    const navigate = useNavigate();
    const goToUploadPage = () => {
        navigate("/upload");  // Navigate to Upload Page
    };

    return (
        <div className="container">
            <Navbar />
            <main>
                <section className="intro">
                    <h2>Welcome to Smart Contract Audit System</h2>
                    <p>Security is critical in the blockchain space. Our comprehensive smart contract audit service <br />helps everyone from startups to enterprises launch and maintain their Ethereum blockchain applications.</p>
                    <button className="cta-button" onClick={goToUploadPage}>Start Audit</button>
                </section>
                <div style={{ height: '20vh' }}></div> {/* Spacer to push the footer down */}
            </main>
            <Footer />
        </div>
    );
}

// ... export ...


export default HomePage;
