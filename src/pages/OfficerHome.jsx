import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import OfficerMain from '../components/OfficerMain'
import OfficerDashboard from './OfficerDashboard'
import Footer from '../components/Footer'

const OfficerHome = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <div className="min-h-screen w-full">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <OfficerMain onOpenDashboard={() => setIsDashboardOpen(true)} />
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default OfficerHome