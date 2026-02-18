import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginCivilian from './pages/LoginCivilian'
import RegisterCivilian from './pages/RegisterCivilian'
import LoginOfficer from './pages/LoginOfficer'
import RegisterOfficer from './pages/RegisterOfficer'
import LoginAdmin from './pages/LoginAdmin'
import RegisterAdmin from './pages/RegisterAdmin'
import TrackComplaint from './pages/TrackComplaint'
import CitizenDashboard from './pages/CitizenDashboard'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ForgotPassword from './pages/ForgotPassword'
import AdminDashboard from './pages/AdminDashboard'
import LandingPage from './pages/LandingPage'
import AdminHome from './pages/AdminHome'
import OfficerDashboard from './pages/OfficerDashboard'
import OfficerHome from './pages/OfficerHome'
import SystemStatus from './pages/SystemStatus'
import TeamOverview from './pages/TeamOverview'
import OfficerDirectory from './pages/OfficerDirectory'
import ManageOfficers from './pages/ManageOfficers'
import Reports from './pages/Reports'
import SystemSettings from './pages/SystemSettings'
import SystemLogs from './pages/SystemLogs'
import AllComplaints from './pages/AllComplaints'
import AddOfficer from './pages/AddOfficer'
import EditComplaint from './pages/EditComplaint'
import MyTasks from './pages/MyTasks'
import MapView from './pages/MapView'
import BroadcastAlert from './pages/BroadcastAlert'
import ComplaintDetails from './pages/ComplaintDetails'
import UpdateStatus from './pages/UpdateStatus'
import CivilianProfile from './pages/CivilianProfile'
import OfficerProfile from './pages/OfficerProfile'
import AdminProfile from './pages/AdminProfile'
import UpdateNotification from './components/UpdateNotification'
import InstallPWA from './components/InstallPWA'

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login-civilian" element={<LoginCivilian />} />
        <Route path="/register-civilian" element={<RegisterCivilian />} />
        <Route path="/login-officer" element={<LoginOfficer />} />
        <Route path="/register-officer" element={<RegisterOfficer />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/track-complaint" element={<TrackComplaint />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/officer-dashboard" element={<OfficerDashboard />} />
        <Route path="/officer-home" element={<OfficerHome />} />
        <Route path="/system-status" element={<SystemStatus />} />
        <Route path="/team-overview" element={<TeamOverview />} />
        <Route path="/officer-directory" element={<OfficerDirectory />} />
        <Route path="/manage-officers" element={<ManageOfficers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/system-settings" element={<SystemSettings />} />
        <Route path="/system-logs" element={<SystemLogs />} />
        <Route path="/all-complaints" element={<AllComplaints />} />
        <Route path="/add-officer" element={<AddOfficer />} />
        <Route path="/edit-complaint/:id" element={<EditComplaint />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/map-view" element={<MapView />} />
        <Route path="/broadcast-alert" element={<BroadcastAlert />} />
        <Route path="/complaint-details/:id" element={<ComplaintDetails />} />
        <Route path="/update-status/:id" element={<UpdateStatus />} />
        <Route path="/civilian-profile" element={<CivilianProfile />} />
        <Route path="/officer-profile" element={<OfficerProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
      </Routes>
      <UpdateNotification />
      <InstallPWA />
    </BrowserRouter>
  )
}

export default App