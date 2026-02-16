import React from 'react'
import { Link } from 'react-router-dom'

const OfficerMain = ({ onOpenDashboard }) => {
  return (
    <div className="w-full">
      <section className="bg-green-50 min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Welcome, <span className="text-green-600">Officer</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Manage your assigned duties, update complaint statuses, and ensure public safety efficiently.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button onClick={onOpenDashboard} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105">
                Go to Dashboard
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
            <Link to="/my-tasks">
              <div className="bg-green-50 p-6 rounded-2xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
                <h4 className="font-semibold text-gray-800">Pending Tasks</h4>
                <p className="text-gray-500 text-sm mt-1">
                  You have 5 new complaints assigned.
                </p>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-800">Performance</h4>
              <p className="text-gray-500 text-sm mt-1">
                95% resolution rate this month.
              </p>
            </div>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
          </div>

        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/my-tasks">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">My Tasks</h3>
                <p className="text-gray-600">View and manage all complaints assigned to your zone.</p>
              </div>
            </Link>

            <Link to="/map-view">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  📍
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Map View</h3>
                <p className="text-gray-600">Visualize complaint locations on an interactive map.</p>
              </div>
            </Link>

            <Link to="/broadcast-alert">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer text-center group h-full">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                  📢
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Broadcast Alert</h3>
                <p className="text-gray-600">Send notifications to citizens in your area about maintenance.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Notifications Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Notifications</h2>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <div>
                    <p className="text-gray-800 font-bold">High Priority: Water Leakage</p>
                    <p className="text-sm text-gray-500">Sector 4, Main Pipeline. Reported 30 mins ago.</p>
                  </div>
                </div>
                <Link to="/complaint-details/CC-2023-001"><button className="text-green-600 font-bold text-sm hover:underline">View</button></Link>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <div>
                    <p className="text-gray-800 font-bold">New Assignment: Street Light</p>
                    <p className="text-sm text-gray-500">MG Road, Pole #45. Reported 2 hours ago.</p>
                  </div>
                </div>
                <Link to="/complaint-details/CC-2023-002"><button className="text-green-600 font-bold text-sm hover:underline">View</button></Link>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <div>
                    <p className="text-gray-800 font-bold">Complaint Resolved Verified</p>
                    <p className="text-sm text-gray-500">Garbage Collection at Block C confirmed by supervisor.</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">Yesterday</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Your Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
              <h3 className="text-4xl font-bold text-green-600 mb-2">95%</h3>
              <p className="text-gray-600 font-medium">Resolution Rate</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
              <h3 className="text-4xl font-bold text-green-600 mb-2">24h</h3>
              <p className="text-gray-600 font-medium">Avg Response Time</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
              <h3 className="text-4xl font-bold text-green-600 mb-2">4.8</h3>
              <p className="text-gray-600 font-medium">Citizen Rating</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
              <h3 className="text-4xl font-bold text-green-600 mb-2">120</h3>
              <p className="text-gray-600 font-medium">Complaints Solved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OfficerMain