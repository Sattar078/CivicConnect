import React from 'react'

const OfficerDashboard = ({ onClose }) => {
  const stats = [
    { label: 'Assigned Tasks', value: 12, icon: '📋', color: 'bg-blue-100 text-blue-600' },
    { label: 'In Progress', value: 5, icon: '⏳', color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Resolved', value: 7, icon: '✅', color: 'bg-green-100 text-green-600' },
  ];

  const assignedComplaints = [
    { id: '#CC-2023-001', category: 'Street Light', location: 'Sector 4', date: 'Oct 20, 2023', status: 'Pending', priority: 'High' },
    { id: '#CC-2023-005', category: 'Water Leakage', location: 'Main Road', date: 'Oct 22, 2023', status: 'In Progress', priority: 'Medium' },
    { id: '#CC-2023-008', category: 'Garbage', location: 'Park Avenue', date: 'Oct 23, 2023', status: 'Resolved', priority: 'Low' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-7xl rounded-3xl shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-black font-bold text-xl z-10">✕</button>
        
        <div className="p-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Officer Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your assigned civic duties and update status.</p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md font-medium hover:bg-green-700">
            Refresh Data
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Tasks Table */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Assigned Complaints</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                <tr>
                  <th className="p-4 pl-6">ID</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {assignedComplaints.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="p-4 pl-6 font-bold text-gray-700">{item.id}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4 text-gray-600">{item.location}</td>
                    <td className="p-4 text-gray-500">{item.date}</td>
                    <td className="p-4"><span className={`font-bold ${item.priority === 'High' ? 'text-red-500' : item.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>{item.priority}</span></td>
                    <td className="p-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Resolved' ? 'bg-green-100 text-green-700' : item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span></td>
                    <td className="p-4 pr-6"><button className="text-blue-600 font-bold hover:underline text-sm">Update Status</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OfficerDashboard