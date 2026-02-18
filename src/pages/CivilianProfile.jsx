import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CitizenDashboard from './CitizenDashboard'

const CivilianProfile = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Sector 4, New Delhi',
    joinedDate: 'Oct 15, 2023'
  });
  const [editForm, setEditForm] = useState(user);

  const analytics = {
    totalReported: 15,
    resolved: 12,
    pending: 3,
    avgResolutionTime: '2 days'
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => {
    setEditForm(user);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300 [@media(display-mode:standalone)]:pb-24">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">My Profile</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
                <div className="relative">
                    <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-4xl font-bold text-green-600 overflow-hidden border-4 border-white shadow-lg">
                        {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : user.name.charAt(0)}
                    </div>
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full cursor-pointer hover:bg-green-700 shadow-md transition">
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
                            className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-green-200 focus:border-green-600 focus:outline-none bg-transparent mb-1"
                        />
                    ) : (
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
                    )}
                    <p className="text-gray-500 dark:text-gray-400">Citizen</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Member since {user.joinedDate}</p>
                </div>
                <div className="md:ml-auto flex gap-3 justify-center md:justify-start mt-4 md:mt-0">
                    {isEditing ? (
                        <>
                            <button onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl font-bold hover:bg-gray-300 transition shadow-sm">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition shadow-md">
                                Save Changes
                            </button>
                        </>
                    ) : (
                        <button onClick={handleEditClick} className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition shadow-md">
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Email Address</label>
                    {isEditing ? (
                        <input type="email" name="email" value={editForm.email} onChange={handleChange} className="w-full bg-white dark:bg-gray-600 dark:text-white p-2 rounded border border-gray-200 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{user.email}</p>
                    )}
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Phone Number</label>
                    {isEditing ? (
                        <input type="text" name="phone" value={editForm.phone} onChange={handleChange} className="w-full bg-white dark:bg-gray-600 dark:text-white p-2 rounded border border-gray-200 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{user.phone}</p>
                    )}
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Address</label>
                    {isEditing ? (
                        <input type="text" name="address" value={editForm.address} onChange={handleChange} className="w-full bg-white dark:bg-gray-600 dark:text-white p-2 rounded border border-gray-200 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{user.address}</p>
                    )}
                </div>
            </div>

            <div className="mt-10 border-t border-gray-100 dark:border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">My Activity & Analytics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-blue-600">{analytics.totalReported}</h4>
                        <p className="text-sm text-gray-600 mt-1">Total Reported</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-green-600">{analytics.resolved}</h4>
                        <p className="text-sm text-gray-600 mt-1">Resolved</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-yellow-600">{analytics.pending}</h4>
                        <p className="text-sm text-gray-600 mt-1">Pending</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
                        <h4 className="text-3xl font-bold text-purple-600">{analytics.avgResolutionTime}</h4>
                        <p className="text-sm text-gray-600 mt-1">Avg. Resolution</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {isDashboardOpen && <CitizenDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default CivilianProfile