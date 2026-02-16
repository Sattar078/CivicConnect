import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, ArrowLeft, Building2 } from 'lucide-react'

const LoginCivilian = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', 'civilian');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white flex flex-col justify-center items-center relative overflow-hidden">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-6 shadow-xl border-2 border-white/30">
            <Building2 size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">CivicConnect</h1>
          <p className="text-lg opacity-90 text-center">Welcome back! Access your dashboard and manage civic issues efficiently.</p>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-green-600 transition flex items-center gap-2">
            <ArrowLeft size={20} /> <span className="font-medium text-sm">Back</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-1 mt-8">Citizen Login</h2>
          <p className="text-gray-500 mb-6">Please sign in to continue</p>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-4 text-gray-400" size={20} />
                <input type="email" className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Enter your email" required />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-4 text-gray-400" size={20} />
                <input type="password" className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Enter your password" required />
              </div>
            </div>
            <Link to="/forgot-password"><span className="text-sm text-green-600 block mt-2 hover:underline cursor-pointer">forgot password?</span></Link>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition shadow-md font-bold text-lg">Login</button>
            <div className='text-center pt-2'>
               <p className="text-gray-600 mb-2">Don't have an account?</p>
               <Link to="/register-civilian"><button className="text-green-600 font-bold hover:underline">Create New Account</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginCivilian