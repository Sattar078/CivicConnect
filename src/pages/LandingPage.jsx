import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, ShieldAlert, Shield } from 'lucide-react'

const LandingPage = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      if (savedRole === 'admin') {
        navigate('/admin-home');
      } else if (savedRole === 'civilian') {
        navigate('/home');
      } else if (savedRole === 'officer') {
        navigate('/officer-home');
      } else {
        navigate('/dashboard');
      }
    }
  }, [navigate]);

  const handleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleAction = (action) => {
    // Navigate to login or register, passing the selected role in state
    if (action === 'login') {
      if (role === 'civilian') navigate('/login-civilian');
      if (role === 'officer') navigate('/login-officer');
      if (role === 'admin') navigate('/login-admin');
    } else {
      if (role === 'civilian') navigate('/register-civilian');
      if (role === 'officer') navigate('/register-officer');
      if (role === 'admin') navigate('/register-admin');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side - Visual */}
        <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white flex flex-col justify-center relative overflow-hidden">
          <h1 className="text-5xl font-bold mb-6 relative z-10">CivicConnect</h1>
          <p className="text-lg opacity-90 mb-8 relative z-10">
            Empowering citizens, enabling authorities. Join us in building a smarter, safer community.
          </p>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        </div>

        {/* Right Side - Selection */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          {!role ? (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h2>
              <p className="text-gray-500 mb-8">Please select your role to continue</p>
              
              <div className="space-y-4">
                <button onClick={() => handleSelection('civilian')} className="w-full p-4 rounded-xl border-2 border-green-100 hover:border-green-500 hover:bg-green-50 transition flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-green-600 group-hover:text-white transition"><User size={24} /></div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">Civilian</h3>
                    <p className="text-xs text-gray-500">Report and track issues</p>
                  </div>
                </button>

                <button onClick={() => handleSelection('officer')} className="w-full p-4 rounded-xl border-2 border-green-100 hover:border-green-500 hover:bg-green-50 transition flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition"><ShieldAlert size={24} /></div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">Officer</h3>
                    <p className="text-xs text-gray-500">Manage assigned tasks</p>
                  </div>
                </button>

                <button onClick={() => handleSelection('admin')} className="w-full p-4 rounded-xl border-2 border-green-100 hover:border-green-500 hover:bg-green-50 transition flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-purple-600 group-hover:text-white transition"><Shield size={24} /></div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">Admin</h3>
                    <p className="text-xs text-gray-500">System administration</p>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <button onClick={() => setRole(null)} className="text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-2">
                ← Back
              </button>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{role} Portal</h2>
              <p className="text-gray-500 mb-8">Choose an action to proceed</p>

              <div className="space-y-4">
                <button onClick={() => handleAction('login')} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md">
                  Login
                </button>
                <button onClick={() => handleAction('register')} className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 rounded-xl transition shadow-sm">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage