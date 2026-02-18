import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'

const MapView = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Complaint Map View</h1>
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-4 h-[400px] md:h-[600px] relative">
            <iframe
              title="Full Map View"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1698134567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-md hidden md:block">
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