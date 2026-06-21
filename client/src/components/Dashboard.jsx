function Dashboard({ applications, activeFilter, onFilterChange }) {
  const counts = {
    all: applications.length,
    applied: applications.filter(app => app.status === 'applied').length,
    interview: applications.filter(app => app.status === 'interview').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
    offer: applications.filter(app => app.status === 'offer').length,
  };

  const colors = {
    all: 'bg-gray-100 text-gray-800',
    applied: 'bg-blue-100 text-blue-800',
    interview: 'bg-yellow-100 text-yellow-800',
    rejected: 'bg-red-100 text-red-800',
    offer: 'bg-green-100 text-green-800',
  };

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {['all', 'applied', 'interview', 'rejected', 'offer'].map(status => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          className={`px-4 py-2 rounded-full font-medium capitalize transition-all
            ${colors[status]}
            ${activeFilter === status ? 'ring-2 ring-offset-1 ring-gray-400' : 'opacity-70 hover:opacity-100'}
          `}
        >
          {status} ({counts[status]})
        </button>
      ))}
    </div>
  );
}

export default Dashboard;