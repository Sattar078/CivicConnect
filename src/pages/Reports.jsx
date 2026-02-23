import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'
import { useNavigate } from 'react-router-dom'

const Reports = () => {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-6xl mx-auto px-6 mt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition font-medium bg-gradient-to-r from-gray-100/50 to-gray-200/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-200/50 hover:bg-gray-200/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> Back
        </button>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">System Reports</h1>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50">Download PDF</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Complaint Resolution Rate</h3>
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                    [Bar Chart Placeholder]
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Complaints by Category</h3>
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                    [Pie Chart Placeholder]
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Trends</h3>
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                    [Line Chart Placeholder]
                </div>
            </div>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default Reports