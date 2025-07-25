import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Container,
} from '@mui/material';

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://job-tracker-backend-6etg.onrender.com/api/jobs')
            .then((response) => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Job Applications
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : (
                <List>
                    {jobs.map((job) => (
                        <Card key={job.id} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{job.position}</Typography>
                                <Typography color="text.secondary">{job.company}</Typography>
                                <Typography>Status: {job.status}</Typography>
                                <Typography>Applied Date: {job.appliedDate}</Typography>
                                {job.notes && (
                                    <Typography variant="body2">Notes: {job.notes}</Typography>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </List>
            )}
        </Container>
    );
}

export default JobList;
