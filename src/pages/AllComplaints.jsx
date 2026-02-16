import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'
import { Link } from 'react-router-dom'

const AllComplaints = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const complaints = [
    { id: '#CC-2023-8942', citizen: 'Ravi Kumar', category: 'Road', location: 'Sector 4', date: 'Oct 24, 2023', status: 'Pending' },
    { id: '#CC-2023-8941', citizen: 'Anita Singh', category: 'Water', location: 'MG Road', date: 'Oct 24, 2023', status: 'In Progress' },
    { id: '#CC-2023-8940', citizen: 'John Doe', category: 'Electricity', location: 'Block C', date: 'Oct 23, 2023', status: 'Resolved' },
    { id: '#CC-2023-8939', citizen: 'Priya M', category: 'Sanitation', location: 'Market Area', date: 'Oct 23, 2023', status: 'Pending' },
    { id: '#CC-2023-8938', citizen: 'Rahul V', category: 'Road', location: 'Sector 9', date: 'Oct 22, 2023', status: 'Resolved' },
  ];

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Complaints</h1>
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="p-4 pl-6">ID</th>
                  <th className="p-4">Citizen</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {complaints.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="p-4 pl-6 font-bold text-gray-700">{item.id}</td>
                    <td className="p-4 text-gray-600">{item.citizen}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4 text-gray-600">{item.location}</td>
                    <td className="p-4 text-gray-500">{item.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold 
                        ${item.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                          item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-yellow-100 text-yellow-700'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6">
                      <Link to={`/edit-complaint/${item.id.replace('#', '')}`}><button className="text-blue-600 font-bold hover:underline text-sm">View</button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default AllComplaints