import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './UploadPage.css';
import './Responsive.css';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
    const navigate = useNavigate();
    const [chosenFile, setchosenFile] = useState(null);
    const [ErrorFile, setErrorFile] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

    const handlingFilesChange = (event) => {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.sol')) {
            setchosenFile(file);
            setErrorFile('');
        } else {
            setchosenFile(null);
            setErrorFile('Wrong file format, submit a valid .sol file.');
        }
    };

    const handlingSubmission = () => {
        if (!chosenFile) {
            alert('Wrong file format, submit a valid .sol file.');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", chosenFile);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text()) // Slither output will be plain text
        .then(data => {
            setLoading(false);
            setResults(data);
            navigate("/result"); // Navigate to Result Page after receiving the results
        })
        .catch(error => {
            setLoading(false);
            setErrorFile('Error during file analysis.');
            console.error('Error:', error);
        });
    };

    const FileSelection = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div className="upload-container">
            <Navbar />
            <div className="upload-form">
                <h2>Upload Smart Contract</h2>
                <div className="file-input">
                    <input
                        type="file"
                        accept=".sol"
                        id="file-input"
                        onChange={handlingFilesChange}
                    />
                    <label onClick={FileSelection}>Choose File</label>
                </div>
                {ErrorFile && <p className="error">{ErrorFile}</p>}
                {loading && <p>Uploading and analyzing the file...</p>}
                <button onClick={handlingSubmission}>Submit</button>
                {results && (
                    <div>
                        <h3>Analysis Results:</h3>
                        <pre>{results}</pre>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default UploadPage;