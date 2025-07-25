import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, MenuItem } from '@mui/material';

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
    const filteredJobs = jobs.filter(job => {
        const matchesStatus = statusFilter ? job.status.toLowerCase().includes(statusFilter.toLowerCase()) : true;
        const matchesCompany = companyFilter ? job.company.toLowerCase().includes(companyFilter.toLowerCase()) : true;
        const matchesDate = dateFilter ? job.appliedDate === dateFilter : true;
        const matchesSearch = searchQuery ? job.position.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        return matchesStatus && matchesCompany && matchesDate && matchesSearch;
    });

    return (
        <div>
            <Typography variant="h5" gutterBottom>Filter Jobs</Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Filter by Company"
                        value={companyFilter}
                        onChange={(e) => setCompanyFilter(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Filter by Date"
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" gutterBottom>Job Applications</Typography>
            <Grid container spacing={2}>
                {filteredJobs.map(job => (
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
