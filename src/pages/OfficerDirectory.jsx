import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OfficerDirectory = () => {
  const officers = [
    { id: 'OFF-101', name: 'Rajesh Kumar', rank: 'Zone Officer', zone: 'North', contact: '9876543210', status: 'Active' },
    { id: 'OFF-102', name: 'Priya Singh', rank: 'Supervisor', zone: 'South', contact: '9876543211', status: 'On Duty' },
    { id: 'OFF-103', name: 'Amit Verma', rank: 'Field Agent', zone: 'East', contact: '9876543212', status: 'Active' },
    { id: 'OFF-104', name: 'Suresh Raina', rank: 'Inspector', zone: 'West', contact: '9876543213', status: 'Leave' },
    { id: 'OFF-105', name: 'Anita Desai', rank: 'Zone Officer', zone: 'Central', contact: '9876543214', status: 'Active' },
  ];

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Officer Directory</h1>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">Download List</button>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                    <tr>
                        <th className="p-4 pl-6">Badge ID</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Rank</th>
                        <th className="p-4">Zone</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {officers.map((officer, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition">
                            <td className="p-4 pl-6 font-bold text-gray-700">{officer.id}</td>
                            <td className="p-4 font-medium text-gray-800">{officer.name}</td>
                            <td className="p-4 text-gray-600">{officer.rank}</td>
                            <td className="p-4 text-gray-600">{officer.zone}</td>
                            <td className="p-4 text-gray-600">{officer.contact}</td>
                            <td className="p-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${officer.status === 'Active' || officer.status === 'On Duty' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {officer.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OfficerDirectory