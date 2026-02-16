import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'

const MapView = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complaint Map View</h1>
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-4 h-[600px] relative">
            {/* Placeholder for Map Integration (e.g., Google Maps, Leaflet) */}
            <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center flex-col text-gray-500">
                <span className="text-6xl mb-4">🗺️</span>
                <p className="text-xl font-semibold">Interactive Map Loading...</p>
                <p className="text-sm mt-2">Showing complaints in your assigned zone.</p>
            </div>
            
            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-800 mb-2">Legend</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-3 h-3 rounded-full bg-red-500"></span> High Priority</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Medium Priority</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-3 h-3 rounded-full bg-green-500"></span> Resolved</div>
            </div>
        </div>
      </div>
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default MapView