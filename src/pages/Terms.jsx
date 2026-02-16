import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-white my-10 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        <div className="space-y-4 text-gray-600">
            <p><strong>1. Introduction</strong><br/>Welcome to CivicConnect. By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <p><strong>2. Use License</strong><br/>Permission is granted to temporarily download one copy of the materials (information or software) on CivicConnect's website for personal, non-commercial transitory viewing only.</p>
            <p><strong>3. Disclaimer</strong><br/>The materials on CivicConnect's website are provided on an 'as is' basis. CivicConnect makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p><strong>4. Limitations</strong><br/>In no event shall CivicConnect or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CivicConnect's website.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms