import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AdminMain from '../components/AdminMain'
import AdminDashboard from './AdminDashboard'
import Footer from '../components/Footer'

const AdminHome = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <div className="min-h-screen w-full">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <AdminMain onOpenDashboard={() => setIsDashboardOpen(true)} />
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default AdminHome