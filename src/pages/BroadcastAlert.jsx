import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'
import { useNavigate } from 'react-router-dom'

const BroadcastAlert = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    alert('Alert broadcasted successfully to residents in your zone.');
    navigate('/officer-home');
  };

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Broadcast Alert</h1>
        
        <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-gray-600 mb-6">Send notifications to citizens in your assigned zone regarding maintenance, outages, or emergencies.</p>
            
            <form onSubmit={handleSend} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Alert Title</label>
                    <input type="text" placeholder="e.g., Water Supply Interruption" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Message Details</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none" placeholder="Describe the issue and expected resolution time..." required></textarea>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={() => navigate('/officer-home')} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold transition">Cancel</button>
                    <button type="submit" className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 font-bold transition">Send Broadcast</button>
                </div>
            </form>
        </div>
      </div>
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default BroadcastAlert