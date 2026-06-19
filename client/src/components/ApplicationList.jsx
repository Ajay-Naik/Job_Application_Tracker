import { deleteApplication, updateApplication } from '../api';

function ApplicationList({ applications, onDelete, onUpdate }) {
  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await updateApplication(id, { status: newStatus });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Applications</h2>
      {applications.length === 0 && <p>No applications yet.</p>}
      {applications.map(app => (
        <div key={app._id}>
          <h3>{app.company} — {app.role}</h3>
          <p>Status:
            <select
              value={app.status}
              onChange={(e) => handleStatusChange(app._id, e.target.value)}
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
              <option value="offer">Offer</option>
            </select>
          </p>
          <p>Applied: {new Date(app.dateApplied).toLocaleDateString()}</p>
          {app.jobLink && <a href={app.jobLink} target="_blank">Job Link</a>}
          {app.notes && <p>Notes: {app.notes}</p>}
          <button onClick={() => handleDelete(app._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ApplicationList;