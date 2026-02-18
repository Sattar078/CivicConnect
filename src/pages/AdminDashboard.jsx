import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = ({ onClose }) => {
  const stats = [
    { label: 'Total Complaints', value: 154, icon: '📊', color: 'bg-blue-100 text-blue-600' },
    { label: 'Pending', value: 45, icon: '⏳', color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Resolved', value: 109, icon: '✅', color: 'bg-green-100 text-green-600' },
    { label: 'Active Officers', value: 12, icon: '👮', color: 'bg-purple-100 text-purple-600' },
  ];

  const recentComplaints = [
    { id: '#CC-2023-8942', citizen: 'Ravi Kumar', category: 'Road', location: 'Sector 4', date: 'Oct 24, 2023', status: 'Pending', officer: 'Not Assigned', officerId: 'N/A' },
    { id: '#CC-2023-8941', citizen: 'Anita Singh', category: 'Water', location: 'MG Road', date: 'Oct 24, 2023', status: 'In Progress', officer: 'Rajesh Gupta', officerId: 'OFF-102' },
    { id: '#CC-2023-8940', citizen: 'John Doe', category: 'Electricity', location: 'Block C', date: 'Oct 23, 2023', status: 'Resolved', officer: 'Amit Sharma', officerId: 'OFF-105' },
    { id: '#CC-2023-8939', citizen: 'Priya M', category: 'Sanitation', location: 'Market Area', date: 'Oct 23, 2023', status: 'Pending', officer: 'Not Assigned', officerId: 'N/A' },
  ];

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-7xl rounded-3xl shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto transition-colors duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-black dark:hover:text-white font-bold text-xl z-10">✕</button>
        
        <div className="p-4 md:p-8 py-6 md:py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Overview of municipal activities and complaint management.</p>
          </div>
          <div className="flex gap-4">
             <Link to="/reports"><button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-200 font-medium hover:bg-gray-50">Export Report</button></Link>
             <Link to="/manage-officers"><button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md font-medium hover:bg-green-700">+ Assign Officer</button></Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Complaints Table */}
        <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-lg overflow-x-auto border border-gray-100 dark:border-gray-600">
          <div className="p-6 border-b border-gray-100 dark:border-gray-600 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Complaints</h2>
            <Link to="/all-complaints"><button className="text-green-600 font-bold text-sm hover:underline">View All</button></Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm uppercase">
                <tr>
                  <th className="p-4 pl-6">ID</th>
                  <th className="p-4">Citizen</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Assigned Officer</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-600">
                {recentComplaints.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                    <td className="p-4 pl-6 font-bold text-gray-700 dark:text-gray-200">{item.id}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">{item.citizen}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">{item.category}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">{item.location}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">{item.date}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">
                      <div className="font-bold text-sm">{item.officer}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.officerId}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold 
                        ${item.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                          item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-yellow-100 text-yellow-700'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6">
                      <Link to={`/edit-complaint/${item.id.replace('#', '')}`}><button className="text-blue-600 font-bold hover:underline text-sm mr-3">Edit</button></Link>
                      <button onClick={() => { if(window.confirm('Are you sure you want to delete this complaint?')) alert('Complaint deleted successfully.'); }} className="text-red-600 font-bold hover:underline text-sm">Delete</button>
                    </td>
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

export default AdminDashboard