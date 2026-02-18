import React from 'react'
import { Link } from 'react-router-dom'

const AdminMain = ({ onOpenDashboard }) => {
  return (
    <div className="w-full dark:bg-gray-900 transition-colors duration-300">
      <section className="bg-green-50 dark:bg-gray-900 min-h-[90vh] flex items-center justify-center px-6 transition-colors duration-300">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
              Welcome, <span className="text-green-600">Admin</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Oversee municipal operations, manage officer assignments, and ensure efficient complaint resolution.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button onClick={onOpenDashboard} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105">
                Go to Dashboard
              </button>
            </div>

            <div className="flex gap-8 pt-6 border-t border-green-200 dark:border-gray-700 mt-6">
              <Link to="/team-overview" className="hover:opacity-75 transition">
                <h3 className="text-2xl font-bold text-green-600">150+</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Active Staff</p>
              </Link>
              <Link to="/reports" className="hover:opacity-75 transition">
                <h3 className="text-2xl font-bold text-green-600">98%</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Resolution Rate</p>
              </Link>
              <Link to="/manage-officers" className="hover:opacity-75 transition">
                <h3 className="text-2xl font-bold text-green-600">50+</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Zones Managed</p>
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg relative overflow-hidden transition-colors duration-300">
            <Link to="/system-status">
              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
                <h4 className="font-semibold text-gray-800 dark:text-white">System Status</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                  All systems operational. 154 active complaints.
                </p>
              </div>
            </Link>

            <Link to="/team-overview">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition cursor-pointer">
                <h4 className="font-semibold text-gray-800 dark:text-white">Team Overview</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                  12 Active Officers currently on duty.
                </p>
              </div>
            </Link>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
          </div>

        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/manage-officers">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full dark:bg-gray-800">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  👥
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Manage Officers</h3>
                <p className="text-gray-600 dark:text-gray-300">Add, remove, or update municipal officer details and assignments.</p>
              </div>
            </Link>

            <Link to="/reports">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full dark:bg-gray-800">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  📊
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">View Reports</h3>
                <p className="text-gray-600 dark:text-gray-300">Analyze complaint trends, resolution rates, and officer performance.</p>
              </div>
            </Link>

            <Link to="/system-settings">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full dark:bg-gray-800">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">System Settings</h3>
                <p className="text-gray-600 dark:text-gray-300">Configure platform settings, notifications, and access controls.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* System Health Section */}
      <section className="bg-green-50 dark:bg-gray-800 py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">System Health</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Server Status</p>
              <p className="text-green-600 font-bold text-lg">● Online</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Database Load</p>
              <p className="text-blue-600 font-bold text-lg">Normal (12%)</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Last Backup</p>
              <p className="text-gray-800 dark:text-white font-bold text-lg">2 Hours Ago</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Active Sessions</p>
              <p className="text-green-600 font-bold text-lg">45 Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent System Logs Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Recent System Logs</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">System Backup Completed</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">New Officer Account Created (ID: OFF-108)</p>
                </div>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">High Load Warning: Database CPU &gt; 80%</p>
                </div>
                <span className="text-sm text-gray-500">Yesterday</span>
              </li>
               <li className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Admin Login: SuperAdmin</p>
                </div>
                <span className="text-sm text-gray-500">Yesterday</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
                <Link to="/system-logs"><button className="text-green-600 font-bold hover:underline text-sm">View All Logs</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminMain