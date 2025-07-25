import React from 'react';
import JobList from './JobList';
import JobForm from './JobForm';

function App() {
  return (
    <div className="App">
      <h1>Job Tracker</h1>
      <h2>Add Job Application</h2>
      <JobForm />
      <h2>Job Applications</h2>
      <JobList />
    </div>
  );
}

export default App;
