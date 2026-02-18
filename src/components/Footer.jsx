import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-10 md:pt-16 pb-8 border-t-4 border-green-600 dark:border-green-800 transition-colors duration-300 [@media(display-mode:standalone)]:hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" /> CivicConnect
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            An official initiative to empower citizens, ensure transparency, and resolve civic issues efficiently. 
            Building a cleaner, safer, and smarter community together.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">𝕏</div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">f</div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer">in</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b-2 border-green-500 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-green-400 transition flex items-center gap-2">› Home</Link></li>
            <li><Link to="/login" className="hover:text-green-400 transition flex items-center gap-2">› Citizen Login</Link></li>
            <li><Link to="/register" className="hover:text-green-400 transition flex items-center gap-2">› New Registration</Link></li>
            <li><Link to="/track-complaint" className="hover:text-green-400 transition flex items-center gap-2">› Track Status</Link></li>
          </ul>
        </div>

        {/* Government Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b-2 border-green-500 inline-block pb-1">Government</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-2">› National Portal of India</a></li>
            <li><a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-2">› Digital India</a></li>
            <li><a href="https://mohua.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-2">› Ministry of Urban Affairs</a></li>
            <li><a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition flex items-center gap-2">› MyGov Platform</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b-2 border-green-500 inline-block pb-1">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <span>Civic Center, Block C,<br/>Sansad Marg, New Delhi - 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span>1800-111-2222 (Toll Free)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <span>support@civicconnect.gov.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
        <p className="mb-2">Content owned, maintained and updated by Municipal Corporation.</p>
        <p>© {new Date().getFullYear()} CivicConnect. All Rights Reserved. |</p> </div>
    </footer>
  )
}

export default Footer