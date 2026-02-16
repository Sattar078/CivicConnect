import React from 'react'
import Navbar from '../components/Navbar'

const TrackComplaint = () => {
  // Mock data for the timeline
  const steps = [
    { status: 'Complaint Registered', date: 'Oct 24, 2023', completed: true, description: 'Your complaint has been received successfully.' },
    { status: 'In Review', date: 'Oct 25, 2023', completed: true, description: 'The municipal authority is verifying the details.' },
    { status: 'Action In Progress', date: 'Oct 26, 2023', completed: true, description: 'Maintenance team has been dispatched to the location.' },
    { status: 'Resolved', date: 'Pending', completed: false, description: 'Issue fixed and verified by the supervisor.' },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 pt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Track Complaint Status</h1>
        
        {/* Search Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
            <label className="block text-gray-700 font-bold mb-2">Enter Complaint ID</label>
            <div className="flex gap-4">
                <input type="text" placeholder="#CC-2023-8942" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">Track</button>
            </div>
        </div>

        {/* Tracking Details Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b pb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Complaint #CC-2023-8942</h2>
                    <p className="text-gray-500 mt-1">Category: Road Maintenance (Pothole)</p>
                </div>
                <div className="mt-4 md:mt-0">
                     <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">In Progress</span>
                </div>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 mb-8 last:mb-0 relative">
                        {/* Vertical Line Connector */}
                        {index !== steps.length - 1 && (
                            <div className={`absolute left-[15px] top-10 w-1 h-full ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                        )}
                        
                        {/* Status Icon/Circle */}
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center z-10 border-2 ${step.completed ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                            {step.completed ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            ) : (
                                <span className="text-sm font-bold">{index + 1}</span>
                            )}
                        </div>

                        {/* Text Content */}
                        <div className={`${step.completed ? 'opacity-100' : 'opacity-60'}`}>
                            <h3 className="text-lg font-bold text-gray-800">{step.status}</h3>
                            <p className="text-sm text-gray-500 mb-1">{step.date}</p>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrackComplaint