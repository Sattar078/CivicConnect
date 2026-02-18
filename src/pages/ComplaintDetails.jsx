import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ComplaintDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [complaint, setComplaint] = useState({
      id: id || '#CC-2023-001',
      category: 'Street Light',
      priority: 'High',
      date: 'Oct 20, 2023',
      status: 'Pending',
      location: 'Sector 4, Main Road',
      description: 'The street light has been flickering for a week and is now completely off. It is causing visibility issues at night.',
      reporter: 'Rahul Sharma',
      contact: '9876543210',
      image: 'https://images.unsplash.com/photo-1562519736-b1a696355328?auto=format&fit=crop&q=80&w=1000'
  });
  const [relatedComplaints, setRelatedComplaints] = useState([
      { id: '#CC-2023-009', category: 'Street Light', location: 'Sector 4', status: 'Resolved' },
      { id: '#CC-2023-012', category: 'Street Light', location: 'Sector 5', status: 'Pending' }
  ]);
  const [loading, setLoading] = useState(false);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-600 font-bold text-xl">Loading Details...</div>;
  if (!complaint) return <div className="min-h-screen flex items-center justify-center bg-green-50 text-red-600 font-bold text-xl">Complaint Not Found</div>;

  return (
    <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300 [@media(display-mode:standalone)]:pb-24">
      <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 mb-6 transition font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg> Back
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden transition-colors duration-300">
            <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{complaint.category}</h1>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">{complaint.priority} Priority</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Complaint ID: <span className="font-mono font-bold text-gray-700 dark:text-gray-200">{complaint.id}</span> • Reported on {complaint.date}</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold">{complaint.status}</span>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-1">Location</h3>
                        <p className="text-gray-800 dark:text-gray-200 text-lg">{complaint.location}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-1">Description</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{complaint.description}</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-1">Reporter Details</h3>
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{complaint.reporter}</p>
                        <p className="text-gray-600 dark:text-gray-300">{complaint.contact}</p>
                    </div>
                    <div className="pt-2">
                        <Link to={`/update-status/${complaint.id.replace('#', '')}`} className="block">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md">
                                Update Status
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase mb-3">Attached Evidence</h3>
                    <img src={complaint.image} alt="Issue Evidence" className="w-full h-64 object-cover rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" />
                </div>
            </div>
        </div>

        {/* Related Complaints Section */}
        {relatedComplaints.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">Related Complaints</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedComplaints.map((item) => (
                <Link to={`/complaint-details/${item.id}`} key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">{item.id}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${item.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-1">{item.category}</h3>
                  <p className="text-sm text-gray-500 truncate">{item.location}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
      <Footer />
    </div>
  )
}

export default ComplaintDetails