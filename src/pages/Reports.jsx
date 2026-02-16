import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'

const Reports = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
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