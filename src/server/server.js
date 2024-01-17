const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;


app.use(cors());  // To transit between different ports.

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');  // Save the file in the 'uploads' directory. Make sure this directory exists.
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    const filePath = req.file.path;
    
    // Run Slither on the uploaded file
    exec(`slither ${filePath}`, (error, stdout, stderr) => {

        // Clean up: remove the uploaded file after processing
        fs.unlink(filePath, (err) => {
            if (err) console.error(`Error deleting file: ${err}`);
        });

        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing the file.');
        }
        // 'stdout' contains the output of the Slither command
        // Parse the output and return the results to the frontend
        res.send(stdout);
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
