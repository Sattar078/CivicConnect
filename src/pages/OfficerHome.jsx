import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerMain from '../components/OfficerMain'
import OfficerDashboard from './OfficerDashboard'

const OfficerHome = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <OfficerMain onOpenDashboard={() => setIsDashboardOpen(true)} />
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default OfficerHome