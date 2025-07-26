// src/ResumeUpload.js
import React, { useState } from 'react';
import { Box, Typography, Button, Input } from '@mui/material';

function ResumeUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch('http://localhost:5000/api/resume/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            alert(`Resume Score: ${data.score}/100`);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed.');
        }
    };

    return (
        <Box mt={4}>
            <Typography variant="h6">Upload Resume for Scoring</Typography>
            <Input type="file" onChange={handleFileChange} />
            <Button
                variant="contained"
                component="span"
                size="medium"
                sx={{ mt: 2, width: '100%', fontSize: '16px' }}
                onClick={handleUpload} // ✅ This makes it work
            >
                Upload and Score
            </Button>
        </Box>
    );
}

export default ResumeUpload;
