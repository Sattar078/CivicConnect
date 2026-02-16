import React, { useState } from 'react'
import ComplaintModal from '../components/ComplaintModal'
import ComplaintSuccessModal from '../components/ComplaintSuccessModal'
import { Link } from 'react-router-dom'

const CitizenDashboard = ({ onClose }) => {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState(null);

  const handleComplaintSubmit = (details) => {
    setIsComplaintOpen(false);
    setSuccessDetails(details);
  };

  const stats = [
    { label: 'Total Complaints', value: 12, icon: '📋' },
    { label: 'Resolved', value: 8, icon: '✅' },
    { label: 'Pending', value: 4, icon: '⏳' },
  ];

  const complaints = [
    { id: '#CC-2023-001', category: 'Street Light', date: 'Oct 20, 2023', status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
    { id: '#CC-2023-002', category: 'Garbage Collection', date: 'Oct 18, 2023', status: 'Resolved', color: 'bg-green-100 text-green-700' },
    { id: '#CC-2023-003', category: 'Water Leakage', date: 'Oct 15, 2023', status: 'In Progress', color: 'bg-blue-100 text-blue-700' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-black font-bold text-xl z-10">✕</button>
        
        <div className="p-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Citizen Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your reported issues.</p>
          </div>
          <button onClick={() => setIsComplaintOpen(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition">
            + New Complaint
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium">{stat.label}</p>
                <h3 className="text-4xl font-bold text-gray-800 mt-1">{stat.value}</h3>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Complaints List */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                <tr>
                  <th className="p-4 pl-6">Complaint ID</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {complaints.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="p-4 pl-6 font-bold text-gray-700">{item.id}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4 text-gray-500">{item.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6">
                      <Link to="/track-complaint"><button className="text-green-600 font-bold hover:underline text-sm">View Details</button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {isComplaintOpen && <ComplaintModal onClose={() => setIsComplaintOpen(false)} onSubmit={handleComplaintSubmit} />}
        {successDetails && <ComplaintSuccessModal onClose={() => setSuccessDetails(null)} details={successDetails} />}
        </div>
      </div>
    </div>
  )
}

export default CitizenDashboard