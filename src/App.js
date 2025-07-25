import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import JobForm from './JobForm';
import JobList from './JobList';
import axios from 'axios';

function App() {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('https://job-tracker-backend-6etg.onrender.com/api/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <JobForm onJobAdded={fetchJobs} />
                <JobList jobs={jobs} />
            </Container>
            <Footer />
        </>
    );
}

export default App;
