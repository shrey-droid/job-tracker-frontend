import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobList from './JobList';
import Header from './Header';
import { Container, TextField } from '@mui/material';

function App() {
    const [jobs, setJobs] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('https://job-tracker-backend-6etg.onrender.com/api/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const addJob = async (job) => {
        try {
            await axios.post('https://job-tracker-backend-6etg.onrender.com/api/jobs', job);
            fetchJobs();
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Header />
            <TextField
                label="Search by Position"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
            />
            <JobForm addJob={addJob} />
            <JobList
                jobs={jobs}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                companyFilter={companyFilter}
                setCompanyFilter={setCompanyFilter}
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
                searchQuery={searchQuery}
            />
        </Container>
    );
}

export default App;
