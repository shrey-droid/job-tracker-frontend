import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
} from '@mui/material';

function JobForm({ onJobAdded }) {
    const [formData, setFormData] = useState({
        position: '',
        company: '',
        status: '',
        appliedDate: '',
        notes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://job-tracker-backend-6etg.onrender.com/api/jobs', formData)
            .then((response) => {
                console.log('Job added:', response.data);
                onJobAdded(); // refresh job list
                setFormData({
                    position: '',
                    company: '',
                    status: '',
                    appliedDate: '',
                    notes: '',
                });
            })
            .catch((error) => {
                console.error('Error adding job:', error);
            });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Add Job Application
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Status (e.g. Applied)"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Applied Date"
                    name="appliedDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formData.appliedDate}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Notes"
                    name="notes"
                    multiline
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained">
                    Add Job
                </Button>
            </Box>
        </Paper>
    );
}

export default JobForm;
