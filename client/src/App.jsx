import { useState, useEffect } from "react";
import { getApplications } from "./api";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import Dashboard from "./components/Dashboard";

function App() {
  const [applications, setApplications] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredApplications =
    activeFilter === "all"
      ? applications
      : applications.filter((app) => app.status === activeFilter);

  useEffect(() => {
    getApplications()
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAdd = (newApp) => {
    setApplications([newApp, ...applications]);
  };

  const handleDelete = (id) => {
    setApplications(applications.filter((app) => app._id !== id));
  };

  const handleUpdate = (updatedApp) => {
    setApplications(
      applications.map((app) =>
        app._id === updatedApp._id ? updatedApp : app,
      ),
    );
  };

  return (
  <div className="max-w-4xl mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Application Tracker</h1>
    <Dashboard
      applications={applications}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
    />
    <ApplicationForm onAdd={handleAdd} />
    <ApplicationList
      applications={filteredApplications}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
    />
  </div>
);
}

export default App;
