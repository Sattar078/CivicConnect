import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import CitizenDashboard from './CitizenDashboard'
import ComplaintModal from '../components/ComplaintModal'
import ComplaintSuccessModal from '../components/ComplaintSuccessModal'

const Home = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState(null);

  const handleComplaintSubmit = (details) => {
    setIsComplaintOpen(false);
    setSuccessDetails(details);
  };

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <Main onOpenComplaint={() => setIsComplaintOpen(true)} />
      {isDashboardOpen && <CitizenDashboard onClose={() => setIsDashboardOpen(false)} />}
      {isComplaintOpen && <ComplaintModal onClose={() => setIsComplaintOpen(false)} onSubmit={handleComplaintSubmit} />}
      {successDetails && <ComplaintSuccessModal onClose={() => setSuccessDetails(null)} details={successDetails} />}
      <Footer />
    </div>
  )
}

export default Home