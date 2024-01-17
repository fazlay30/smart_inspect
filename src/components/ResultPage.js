import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreviousAudits.css';
import Navbar from './Navbar';
import './Responsive.css';
import Footer from './Footer';


const PreviousAudits = () => {
    const [auditResults, setAuditResults] = useState(null);

    useEffect(() => {
        axios.get('./app/ResultPage')
            .then(response => {
                setAuditResults(response.data);
            })
            .catch(error => {
                console.error("Error fetching audit results:", error);
            });
    }, []);

    return (
        <div className="audits-container">
            <Navbar />
            <div className="center-table">
                <table>
                    <caption>Your Report</caption>
                    <thead>
                        <tr>
                            <th>Checks</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
            <td>Test Name:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Severity Level:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Status:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Function Name:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Recommendations:</td>
            <td>*****</td>
        </tr>
        <tr>
            <td>Timestamp:</td>
            <td>*****</td>
        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
    );
}

export default PreviousAudits;
