import React, { useState } from 'react';
import axios from 'axios';

function JobForm() {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    status: '',
    appliedDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://job-tracker-backend-6etg.onrender.com/api/jobs', formData);
      alert('Job added successfully ✅');
      setFormData({
        position: '',
        company: '',
        status: '',
        appliedDate: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error adding job:', error);
      alert('Failed to add job ❌');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="status"
        placeholder="Status (e.g. Applied)"
        value={formData.status}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="appliedDate"
        value={formData.appliedDate}
        onChange={handleChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;

