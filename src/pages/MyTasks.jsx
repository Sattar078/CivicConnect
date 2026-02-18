import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfficerDashboard from './OfficerDashboard'
import { Link } from 'react-router-dom'

const MyTasks = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [tasks, setTasks] = useState([
        { id: '#CC-2023-001', category: 'Street Light', location: 'Sector 4', date: 'Oct 20, 2023', status: 'Pending', priority: 'High', description: 'Street light not working for 3 days.' },
        { id: '#CC-2023-005', category: 'Water Leakage', location: 'Main Road', date: 'Oct 22, 2023', status: 'In Progress', priority: 'Medium', description: 'Pipeline burst near the junction.' },
        { id: '#CC-2023-008', category: 'Garbage', location: 'Park Avenue', date: 'Oct 23, 2023', status: 'Resolved', priority: 'Low', description: 'Garbage not collected.' },
    ]);

    return (
        <div className="min-h-screen w-full bg-green-50 dark:bg-gray-900 transition-colors duration-300 [@media(display-mode:standalone)]:pb-24">
            <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">My Assigned Tasks</h1>
                
                <div className="grid gap-6">
                    {tasks.map((task, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{task.category}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            task.priority === 'High' ? 'bg-red-100 text-red-700' : 
                                            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                                            'bg-green-100 text-green-700'
                                        }`}>
                                            {task.priority} Priority
                                        </span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{task.id} • {task.date}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    task.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                                    task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {task.status}
                                </span>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                <span className="font-semibold">Location:</span> {task.location}<br/>
                                <span className="font-semibold">Description:</span> {task.description}
                            </p>

                            <div className="flex gap-3 justify-end border-t border-gray-100 dark:border-gray-700 pt-4">
                                <Link to={`/complaint-details/${task.id.replace('#', '')}`}><button className="text-gray-500 font-bold hover:text-gray-700 text-sm">View Details</button></Link>
                                <Link to={`/update-status/${task.id.replace('#', '')}`}><button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition">Update Status</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isDashboardOpen && <OfficerDashboard onClose={() => setIsDashboardOpen(false)} />}
            <Footer />
        </div>
    )
}

export default MyTasks