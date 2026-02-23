import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import OfficerDashboard from './OfficerDashboard'

const UpdateStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [status, setStatus] = useState('In Progress');
  const [remarks, setRemarks] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Logic to update status would go here
    alert(`Status for ${id} updated to ${status}`);
    navigate('/officer-home');
  };

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300 [@media(display-mode:standalone)]:pb-24">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition font-medium bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> Back
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">Update Complaint Status</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8 transition-colors duration-300">
          <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">Complaint ID: {id}</h2>
            <p className="text-gray-500 dark:text-gray-400">Update the current status of this assigned task.</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">New Status</label>
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 dark:text-white"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Remarks / Action Taken</label>
              <textarea 
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Describe the action taken or reason for status change..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={() => navigate(-1)} className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold transition">Cancel</button>
              <button type="submit" className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 font-bold transition">Update Status</button>
            </div>
          </form>
        </div>
      </div>
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default UpdateStatus