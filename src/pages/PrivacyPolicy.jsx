import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
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