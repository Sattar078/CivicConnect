import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Key, Mail, Lock, ArrowLeft, Shield } from 'lucide-react'

const RegisterAdmin = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => { 
    e.preventDefault(); 
    localStorage.setItem('userRole', 'admin');
    navigate('/admin-home'); 
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white flex flex-col justify-center items-center relative overflow-hidden">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-6 shadow-xl border-2 border-white/30">
            <Shield size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Admin Portal</h1>
          <p className="text-lg opacity-90 text-center">System Setup. Create a new administrator account.</p>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-green-600 transition flex items-center gap-2">
            <ArrowLeft size={20} /> <span className="font-medium text-sm">Back</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-1 mt-8">Admin Registration</h2>
          <p className="text-gray-500 mb-6">Verification required</p>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="relative"><User className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="text" placeholder="Full Name" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
            <div className="relative"><Key className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="password" placeholder="Secret Admin Key" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
            <div className="relative"><Mail className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="email" placeholder="Admin Email" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
            <div className="relative"><Lock className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="password" placeholder="Password" className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-md text-lg">Register</button>
          </form>
          <div className="text-center border-t border-gray-200 pt-4 mt-4">
            <p className="text-gray-600 mb-2">Already an admin?</p>
            <Link to="/login-admin"><button className="text-green-600 font-bold hover:underline">Sign In</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegisterAdmin