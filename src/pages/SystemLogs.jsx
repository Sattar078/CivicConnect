import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'

const SystemLogs = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const logs = [
    { id: 1, event: 'System Backup Completed', time: '2 hours ago', type: 'success' },
    { id: 2, event: 'New Officer Account Created (ID: OFF-108)', time: '5 hours ago', type: 'info' },
    { id: 3, event: 'High Load Warning: Database CPU > 80%', time: 'Yesterday', type: 'warning' },
    { id: 4, event: 'Admin Login: SuperAdmin', time: 'Yesterday', type: 'info' },
    { id: 5, event: 'Failed Login Attempt (IP: 192.168.1.1)', time: '2 days ago', type: 'error' },
  ];

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">System Logs</h1>
        <div className="bg-white rounded-2xl shadow-md p-6">
            <ul className="space-y-4">
                {logs.map((log) => (
                    <li key={log.id} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                            <span className={`w-3 h-3 rounded-full ${
                                log.type === 'success' ? 'bg-green-500' : 
                                log.type === 'warning' ? 'bg-yellow-500' : 
                                log.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                            }`}></span>
                            <p className="text-gray-700 font-medium">{log.event}</p>
                        </div>
                        <span className="text-sm text-gray-500">{log.time}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default SystemLogs