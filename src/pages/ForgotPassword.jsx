import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className='flex items-center justify-center py-20'>
        <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Forgot Password?</h2>
          <p className="text-gray-600 text-center mb-6">Enter your email address and we'll send you a link to reset your password.</p>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Reset link sent to your email!'); }}>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input type="email" id="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Enter your registered email" required />
            </div>
            
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-bold">
              Send Reset Link
            </button>
            
            <div className='text-center pt-2'>
               <Link to="/login"><button className="text-green-600 font-bold hover:underline">Back to Login</button></Link>
            </div>
          </form>
          
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword