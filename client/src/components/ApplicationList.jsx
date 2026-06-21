import { deleteApplication, updateApplication } from "../api";

const statusColors = {
  applied: "bg-blue-100 text-blue-800",
  interview: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
  offer: "bg-green-100 text-green-800",
};

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
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Applications</h2>
      {applications.length === 0 && (
        <p className="text-gray-400 text-sm">No applications found.</p>
      )}
      <div className="flex flex-col gap-4">
        {applications.map((app) => (
          <div key={app._id} className="bg-white rounded-xl shadow p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {app.company}
                </h3>
                <p className="text-sm text-gray-500">{app.role}</p>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${statusColors[app.status]}`}>
                {app.status}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Applied: {new Date(app.dateApplied).toLocaleDateString("en-GB")}
            </p>
            {app.jobLink && (
              <a
                href={app.jobLink}
                target="_blank"
                className="text-blue-500 text-sm underline block mb-2">
                Job Link
              </a>
            )}
            {app.notes && (
              <p className="text-sm text-gray-600 mb-3">{app.notes}</p>
            )}
            <div className="flex justify-between items-center mt-3">
              <select
                value={app.status}
                onChange={(e) => handleStatusChange(app._id, e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
              </select>
              <button
                onClick={() => handleDelete(app._id)}
                className="text-red-500 text-sm hover:text-red-700 font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicationList;
