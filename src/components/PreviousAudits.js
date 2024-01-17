import React from 'react';
import './PreviousAudits.css'; // Importing the styles
import Navbar from './Navbar';  // Reusing existing components
import Footer from './Footer';
import './Responsive.css';

const PreviousAudits = () => {
    return (
        <div className="audits-container">
            <Navbar />
            <div className="center-table">
                <table>
                    <caption>Previous Reports</caption>
                    <thead>
                        <tr>
                            <th>Audit ID</th>
                            <th>Contract Name</th>
                            <th>Category</th>
                            <th>Errors</th>
                            <th>Suggestions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
        <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
        <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
        <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
        <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
        <tr>
            <td>*****</td>
            <td>*****</td>
            <td>*****</td>
            <td><a href="/details/1">Details</a></td>
            <td><a href="/details/1">Details</a></td>
        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
        
    );
}

export default PreviousAudits;
