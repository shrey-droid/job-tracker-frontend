import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, MenuItem, Box } from '@mui/material';

function JobList({
                     jobs,
                     statusFilter,
                     setStatusFilter,
                     companyFilter,
                     setCompanyFilter,
                     dateFilter,
                     setDateFilter,
                     searchQuery
                 }) {
    const [sortBy, setSortBy] = useState('');

    const filteredJobs = jobs.filter(job => {
        const matchesStatus = statusFilter ? job.status.toLowerCase().includes(statusFilter.toLowerCase()) : true;
        const matchesCompany = companyFilter ? job.company.toLowerCase().includes(companyFilter.toLowerCase()) : true;
        const matchesDate = dateFilter ? job.appliedDate === dateFilter : true;
        const matchesSearch = searchQuery ? job.position.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        return matchesStatus && matchesCompany && matchesDate && matchesSearch;
    });

    const sortedJobs = [...filteredJobs].sort((a, b) => {
        if (sortBy === 'date') return new Date(b.appliedDate) - new Date(a.appliedDate);
        if (sortBy === 'company') return a.company.localeCompare(b.company);
        if (sortBy === 'status') return a.status.localeCompare(b.status);
        return 0;
    });

    return (
        <div>
            <Typography variant="h5" gutterBottom>Filter Jobs</Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        label="Filter by Status"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        fullWidth
                        select
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Applied">Applied</MenuItem>
                        <MenuItem value="Interview">Interview</MenuItem>
                        <MenuItem value="Offer">Offer</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        label="Filter by Company"
                        value={companyFilter}
                        onChange={(e) => setCompanyFilter(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        label="Filter by Date"
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        select
                        label="Sort By"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="date">Date</MenuItem>
                        <MenuItem value="company">Company</MenuItem>
                        <MenuItem value="status">Status</MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            <Typography variant="h5" gutterBottom>Job Applications</Typography>
            <Grid container spacing={2}>
                {sortedJobs.map(job => (
                    <Grid item xs={12} key={job.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{job.position}</Typography>
                                <Typography color="textSecondary">{job.company}</Typography>
                                <Typography>Status: {job.status}</Typography>
                                <Typography>Applied on: {job.appliedDate}</Typography>
                                <Typography>Notes: {job.notes}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default JobList;
