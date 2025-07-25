import React from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';

const statusOptions = ['All', 'Applied', 'Interview', 'Offer', 'Rejected'];

const JobFilters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    select
                    label="Status"
                    name="status"
                    value={filters.status}
                    onChange={handleChange}
                >
                    {statusOptions.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={filters.company}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    type="date"
                    name="appliedDate"
                    value={filters.appliedDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </Grid>
    );
};

export default JobFilters;
