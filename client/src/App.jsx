import { useState, useEffect } from 'react';
import { getApplications } from './api';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';

function App() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications()
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = (newApp) => {
    setApplications([newApp, ...applications]);
  };

  const handleDelete = (id) => {
    setApplications(applications.filter(app => app._id !== id));
  };

  const handleUpdate = (updatedApp) => {
    setApplications(applications.map(app =>
      app._id === updatedApp._id ? updatedApp : app
    ));
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationForm onAdd={handleAdd} />
      <ApplicationList
        applications={applications}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;