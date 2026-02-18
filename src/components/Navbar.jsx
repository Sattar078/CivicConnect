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
    <div className='w-full h-16 md:h-20 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-900 dark:to-green-800 text-white flex items-center justify-between px-4 md:px-8 shadow-lg transition-colors duration-300 z-40 relative [@media(display-mode:standalone)]:fixed [@media(display-mode:standalone)]:bottom-0 [@media(display-mode:standalone)]:top-auto'>
        
            <div className='flex items-center'> <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-15 h-15 md:w-10 md:h-10 rounded-lg shadow-sm" />
              <h1 className='text-xl md:text-3xl font-bold text-white tracking-tight'>CivicConnect</h1>
            </Link></div>
            <div className='flex items-center gap-2 md:gap-4'>
            <Link to={role === 'admin' ? '/admin-home' : role === 'officer' ? '/officer-home' : role === 'civilian' ? '/home' : '/'} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="Home">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
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
            {role && (
              <Link to={role === 'admin' ? '/admin-profile' : role === 'officer' ? '/officer-profile' : '/civilian-profile'} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition text-white" title="My Profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            )}
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