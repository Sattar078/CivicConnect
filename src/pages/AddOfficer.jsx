import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

const AddOfficer = () => {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add officer would go here
    navigate('/manage-officers');
  };

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Officer</h1>
        
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input type="text" placeholder="Enter officer name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Badge ID</label>
                <input type="text" placeholder="e.g. OFF-109" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Rank/Designation</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option>Zone Officer</option>
                  <option>Supervisor</option>
                  <option>Field Agent</option>
                  <option>Inspector</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Assigned Zone</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={() => navigate('/manage-officers')} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold transition">Cancel</button>
              <button type="submit" className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold transition">Create Account</button>
            </div>
          </form>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default AddOfficer