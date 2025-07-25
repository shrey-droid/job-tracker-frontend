import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://job-tracker-backend-6etg.onrender.com/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.position}</strong> at <em>{job.company}</em> - {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

