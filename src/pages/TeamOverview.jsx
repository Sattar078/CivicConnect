import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TeamOverview = () => {
    const team = [
        { name: 'Rajesh Kumar', role: 'Zone Officer', status: 'Active' },
        { name: 'Priya Singh', role: 'Supervisor', status: 'On Leave' },
        { name: 'Amit Verma', role: 'Field Agent', status: 'Active' },
        { name: 'Suresh Raina', role: 'Admin Support', status: 'Active' },
    ];
  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar />
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