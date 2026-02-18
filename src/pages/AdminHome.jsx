import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminMain from '../components/AdminMain'
import AdminDashboard from './AdminDashboard'

const AdminHome = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <AdminMain onOpenDashboard={() => setIsDashboardOpen(true)} />
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default AdminHome