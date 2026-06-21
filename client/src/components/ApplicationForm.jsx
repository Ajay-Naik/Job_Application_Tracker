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
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Application</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
        </select>
        <input
          name="jobLink"
          placeholder="Job Link"
          value={formData.jobLink}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 sm:col-span-2"
        />
        <button
          onClick={handleSubmit}
          className="sm:col-span-2 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition-colors"
        >
          Add Application
        </button>
      </div>
    </div>
  );
}

export default ApplicationForm;