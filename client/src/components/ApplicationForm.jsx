import { useState } from 'react';
import { createApplication } from '../api';

function ApplicationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'applied',
    jobLink: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createApplication(formData);
      onAdd(res.data);
      setFormData({ company: '', role: '', status: 'applied', jobLink: '', notes: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Application</h2>
      <div>
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
        </select>
        <input name="jobLink" placeholder="Job Link" value={formData.jobLink} onChange={handleChange} />
        <input name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Application</button>
      </div>
    </div>
  );
}

export default ApplicationForm;