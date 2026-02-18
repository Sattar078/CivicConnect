import React from 'react'

const ComplaintSuccessModal = ({ onClose, details }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-full max-w-md relative shadow-2xl animate-fadeIn text-center border border-gray-100 dark:border-gray-700">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Complaint Registered!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Your complaint has been successfully submitted. Please save these details for tracking.</p>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-left space-y-3 mb-6">
            <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Complaint ID</span>
                <span className="font-bold text-gray-800 dark:text-white">{details.id}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Date</span>
                <span className="font-bold text-gray-800 dark:text-white">{details.date}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Category</span>
                <span className="font-bold text-gray-800 dark:text-white capitalize">{details.category}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm block mb-1">Assigned Officer</span>
                <span className="font-bold text-green-600">{details.officer}</span>
            </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ComplaintSuccessModal