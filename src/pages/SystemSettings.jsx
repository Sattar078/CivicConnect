import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'

const SystemSettings = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">System Settings</h1>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">General Configuration</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Enable New Registrations</span>
                        <input type="checkbox" defaultChecked className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">System Maintenance Mode</span>
                        <input type="checkbox" className="w-6 h-6 text-green-600" />
                    </div>
                </div>
            </div>
            
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Email Alerts for Admins</span>
                        <input type="checkbox" defaultChecked className="w-6 h-6 text-green-600" />
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-50 text-right">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">Save Changes</button>
            </div>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default SystemSettings