import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const ComplaintDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Mock data - in a real app, fetch based on ID
  const complaint = {
    id: id || '#CC-2023-001',
    category: 'Water Leakage',
    location: 'Sector 4, Main Pipeline',
    date: 'Oct 24, 2023',
    priority: 'High',
    status: 'In Progress',
    description: 'Severe water leakage observed near the main junction. Water pressure is low in the surrounding area. Please attend immediately.',
    reporter: 'Ravi Kumar',
    contact: '9876543210',
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop'
  };

  return (
    <div className="min-h-screen w-full bg-green-50">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition font-medium">
            <ArrowLeft size={20} /> Back
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-gray-800">{complaint.category}</h1>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">{complaint.priority} Priority</span>
                    </div>
                    <p className="text-gray-500">Complaint ID: <span className="font-mono font-bold text-gray-700">{complaint.id}</span> • Reported on {complaint.date}</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold">{complaint.status}</span>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-gray-500 text-sm font-bold uppercase mb-1">Location</h3>
                        <p className="text-gray-800 text-lg">{complaint.location}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500 text-sm font-bold uppercase mb-1">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{complaint.description}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500 text-sm font-bold uppercase mb-1">Reporter Details</h3>
                        <p className="text-gray-800 font-medium">{complaint.reporter}</p>
                        <p className="text-gray-600">{complaint.contact}</p>
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition shadow-md">
                        Update Status
                    </button>
                </div>
                <div>
                    <h3 className="text-gray-500 text-sm font-bold uppercase mb-3">Attached Evidence</h3>
                    <img src={complaint.image} alt="Issue Evidence" className="w-full h-64 object-cover rounded-xl shadow-sm border border-gray-200" />
                </div>
            </div>
        </div>
      </div>
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default ComplaintDetails