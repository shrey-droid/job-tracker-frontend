import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobList from './JobList';
import Header from './Header';
import { Container, TextField } from '@mui/material';
import ResumeUpload from './ResumeUpload';

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
            <Header/>
            <TextField
                label="Search by Position"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                sx={{mb: 3}}
            />
            <JobForm addJob={addJob}/>

            {/* ✅ Add Resume Upload Section */}
            <ResumeUpload />

            <input
                type="text"
                placeholder="Search by position, company, or notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '20px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />

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
