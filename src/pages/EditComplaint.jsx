import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

const EditComplaint = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/admin-home');
  };

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Complaint Details</h1>
        
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-700">Complaint ID: {id || '#CC-2023-XXXX'}</h2>
            <p className="text-gray-500">Reported on Oct 24, 2023</p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Status</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Rejected</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Assign Officer</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option value="">Select Officer</option>
                <option>Rajesh Kumar (Zone Officer)</option>
                <option>Priya Singh (Supervisor)</option>
                <option>Amit Verma (Field Agent)</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={() => navigate('/admin-home')} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold transition">Cancel</button>
              <button type="submit" className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold transition">Update Complaint</button>
            </div>
          </form>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default EditComplaint