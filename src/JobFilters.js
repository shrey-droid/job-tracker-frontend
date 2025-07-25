// src/JobFilters.js
import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

function JobFilters({
                        statusFilter,
                        setStatusFilter,
                        companyFilter,
                        setCompanyFilter,
                        dateFilter,
                        setDateFilter,
                        searchQuery,
                        setSearchQuery
                    }) {
    return (
        <Box display="flex" flexDirection="column" gap={2} marginBottom={3}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
            />
            <TextField
                select
                label="Filter by Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Applied">Applied</MenuItem>
                <MenuItem value="Interview">Interview</MenuItem>
                <MenuItem value="Offer">Offer</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
            </TextField>
            <TextField
                label="Filter by Company"
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
            />
            <TextField
                type="date"
                label="Filter by Date"
                InputLabelProps={{ shrink: true }}
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
            />
        </Box>
    );
}

export default JobFilters;
