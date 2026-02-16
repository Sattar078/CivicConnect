import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ onOpenDashboard }) => {
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className='w-full h-20 bg-gradient-to-r from-green-600 to-green-400 text-white flex items-center justify-between px-4 shadow-lg'>
        
            <div className='py-4 px-6 w-2/5 flex items-center justify-center '> <Link to="/"><h1 className='text-4xl font-bold text-white'>CivicConnect</h1></Link></div>
            <div className='py-4 px-6 w-2/5 flex items-center justify-center gap-4 '>
            {role === 'admin' && (
            <button onClick={onOpenDashboard} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="Admin Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </button>
            )}
            {role === 'civilian' && (
            <button onClick={onOpenDashboard} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            )}
            {role === 'officer' && (
            <button onClick={onOpenDashboard} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="Officer Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </button>
            )}
            <Link to="/officer-directory" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="Officer Directory">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </Link>
            <button onClick={handleLogout} className="bg-white/20 p-2 rounded-full hover:bg-red-500 transition text-white" title="Logout">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
            </div>
    </div>
  )
}

export default Navbar