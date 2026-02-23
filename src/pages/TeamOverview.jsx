import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const TeamOverview = () => {
    const navigate = useNavigate();
    const team = [
        { name: 'Rajesh Kumar', role: 'Zone Officer', status: 'Active' },
        { name: 'Priya Singh', role: 'Supervisor', status: 'On Leave' },
        { name: 'Amit Verma', role: 'Field Agent', status: 'Active' },
        { name: 'Suresh Raina', role: 'Admin Support', status: 'Active' },
    ];
  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 mt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition font-medium bg-gradient-to-r from-gray-100/50 to-gray-200/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-200/50 hover:bg-gray-200/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> Back
        </button>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Team Overview</h1>
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="p-4">Name</th>
                        <th className="p-4">Role</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((member, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                            <td className="p-4 font-bold">{member.name}</td>
                            <td className="p-4">{member.role}</td>
                            <td className="p-4"><span className={`px-3 py-1 rounded-full text-xs ${member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{member.status}</span></td>
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

export default TeamOverview