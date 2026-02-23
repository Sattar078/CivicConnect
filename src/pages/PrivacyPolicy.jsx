import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 mt-4 flex justify-start">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition font-medium bg-gradient-to-r from-gray-100/50 to-gray-200/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-200/50 hover:bg-gray-200/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> Back
        </button>
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-white my-10 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-gray-600">
            <p><strong>1. Information Collection</strong><br/>We collect information from you when you register on our site, place a complaint, subscribe to our newsletter or fill out a form.</p>
            <p><strong>2. Use of Information</strong><br/>Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, and to process transactions.</p>
            <p><strong>3. Data Protection</strong><br/>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
            <p><strong>4. Third Party Disclosure</strong><br/>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy