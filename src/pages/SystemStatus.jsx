import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SystemStatus = () => {
  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">System Status Overview</h1>
        
        {/* Complaint System Status */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 text-green-600">Complaint System Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-800">1,240</h3>
                    <p className="text-gray-600 text-sm">Total Complaints</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl">
                    <h3 className="text-2xl font-bold text-yellow-600">45</h3>
                    <p className="text-gray-600 text-sm">Pending Review</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                    <h3 className="text-2xl font-bold text-blue-600">120</h3>
                    <p className="text-gray-600 text-sm">In Progress</p>
                </div>
                <div className="p-4 bg-green-100 rounded-xl">
                    <h3 className="text-2xl font-bold text-green-600">1,075</h3>
                    <p className="text-gray-600 text-sm">Resolved</p>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-green-600">Server Infrastructure</h2>
                <div className="space-y-4">
                    <div className="flex justify-between"><span>CPU Usage</span><span className="font-bold">12%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-green-600 h-2.5 rounded-full" style={{width: '12%'}}></div></div>
                    <div className="flex justify-between"><span>Memory Usage</span><span className="font-bold">45%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div></div>
                    <div className="flex justify-between"><span>Storage</span><span className="font-bold">60%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-purple-600 h-2.5 rounded-full" style={{width: '60%'}}></div></div>
                </div>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-green-600">Database & Network</h2>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Total Records</span>
                        <span className="font-bold">1,245,300</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Active Connections</span>
                        <span className="font-bold">45</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">API Latency</span>
                        <span className="font-bold text-green-600">24ms</span>
                    </div>
                    <div className="flex justify-between pt-2">
                        <span className="text-gray-600">Last Backup</span>
                        <span className="font-bold">2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SystemStatus