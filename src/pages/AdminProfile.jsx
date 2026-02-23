import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminDashboard from './AdminDashboard'

const AdminProfile = () => {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('userProfileImage'));
  const [isEditing, setIsEditing] = useState(false);
  const [admin, setAdmin] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Super Admin',
      adminId: 'ADM-001',
      role: 'System Administrator',
      email: 'admin@civic.gov.in',
      lastLogin: 'Today, 10:30 AM'
    };
  });
  const [editForm, setEditForm] = useState(admin);

  const systemAnalytics = {
    totalUsers: 12500,
    activeOfficers: 45,
    systemUptime: '99.9%',
    pendingApprovals: 12
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('userProfileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setEditForm(admin);
    setIsEditing(true);
  };

  const handleSave = () => {
    setAdmin(editForm);
    localStorage.setItem('currentUser', JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300 [@media(display-mode:standalone)]:pb-24">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition font-medium bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> Back
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">Admin Profile</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
                <div className="relative">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center text-4xl font-bold text-purple-600 overflow-hidden border-4 border-white shadow-lg">
                        {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : admin.name.charAt(0)}
                    </div>
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-700 shadow-md transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <input id="profile-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="text-center md:text-left">
                    {isEditing ? (
                        <input 
                            type="text" 
                            name="name" 
                            value={editForm.name} 
                            onChange={handleChange} 
                            className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-purple-200 focus:border-purple-600 focus:outline-none bg-transparent mb-1"
                        />
                    ) : (
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{admin.name}</h2>
                    )}
                    <p className="text-purple-600 font-medium">{admin.role}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">ID: {admin.adminId}</p>
                </div>
                <div className="md:ml-auto flex gap-3 justify-center md:justify-start mt-4 md:mt-0">
                    {isEditing ? (
                        <>
                            <button onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl font-bold hover:bg-gray-300 transition shadow-sm">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="bg-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-purple-700 transition shadow-md">
                                Save Changes
                            </button>
                        </>
                    ) : (
                        <button onClick={handleEditClick} className="bg-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-purple-700 transition shadow-md">
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Admin Email</label>
                    {isEditing ? (
                        <input type="email" name="email" value={editForm.email} onChange={handleChange} className="w-full bg-white dark:bg-gray-600 dark:text-white p-2 rounded border border-gray-200 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{admin.email}</p>
                    )}
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Last Login</label>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{admin.lastLogin}</p>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-100 dark:border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">System Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-teal-600">{systemAnalytics.totalUsers}</h4>
                        <p className="text-sm text-gray-600 mt-1">Total Users</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-blue-600">{systemAnalytics.activeOfficers}</h4>
                        <p className="text-sm text-gray-600 mt-1">Active Officers</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-green-600">{systemAnalytics.systemUptime}</h4>
                        <p className="text-sm text-gray-600 mt-1">Uptime</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-red-600">{systemAnalytics.pendingApprovals}</h4>
                        <p className="text-sm text-gray-600 mt-1">Pending Approvals</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-100 dark:border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Support & Settings</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <button className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition text-left">
                        <span className="font-medium text-gray-700 dark:text-gray-200">Help & Support</span>
                        <span className="text-gray-400">›</span>
                    </button>
                    <button className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition text-left">
                        <span className="font-medium text-gray-700 dark:text-gray-200">FAQs</span>
                        <span className="text-gray-400">›</span>
                    </button>
                    <Link to="/terms" className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                        <span className="font-medium text-gray-700 dark:text-gray-200">Terms & Conditions</span>
                        <span className="text-gray-400">›</span>
                    </Link>
                    <Link to="/privacy-policy" className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                        <span className="font-medium text-gray-700 dark:text-gray-200">Privacy Policy</span>
                        <span className="text-gray-400">›</span>
                    </Link>
                    <button className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition text-left">
                        <span className="font-medium text-gray-700 dark:text-gray-200">App Permissions</span>
                        <span className="text-gray-400">›</span>
                    </button>
                    <button className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition text-left">
                        <span className="font-medium text-gray-700 dark:text-gray-200">Licenses</span>
                        <span className="text-gray-400">›</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
      {isDashboardOpen && <AdminDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default AdminProfile