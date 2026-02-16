import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = ({ onOpenComplaint }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const recentComplaints = [
    {
      id: "#CC-2023-001",
      category: "Street Light",
      location: "Main Market Road",
      date: "2023-10-20",
      status: "Pending",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      id: "#CC-2023-002",
      category: "Garbage Collection",
      location: "Sector 4, Block B",
      date: "2023-10-18",
      status: "Resolved",
      color: "text-green-600 bg-green-100"
    },
    {
      id: "#CC-2023-003",
      category: "Water Leakage",
      location: "Near City Park",
      date: "2023-10-15",
      status: "In Progress",
      color: "text-blue-600 bg-blue-100"
    }
  ];

  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Resident, Sector 21",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "CivicConnect made it so easy to report the broken street light outside my house. It was fixed within 48 hours!"
    },
    {
      name: "Rahul Verma",
      role: "Shop Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "I used to run around government offices for garbage collection issues. Now I just post a photo and it gets done. Amazing initiative!"
    },
    {
      name: "Priya Patel",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The tracking feature is the best part. You actually know who is working on your complaint and when it will be resolved."
    }
  ];

 return (
  <div className="w-full">
  <section className="bg-white min-h-[90vh] flex items-center justify-center px-6">
    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div className="space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Smart Government <span className="text-green-600">Complaint Portal</span>
        </h1>

        <p className="text-gray-600 text-lg">
          Register your complaints, track their progress in real-time, 
          and ensure transparency in public services. 
          Built for citizens. Powered by technology.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button onClick={onOpenComplaint} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105">
            Register Complaint
          </button>

          <Link to="/track-complaint">
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition">
              Track Complaint
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 pt-6">
          <div>
            <h3 className="text-2xl font-bold text-green-600">24/7</h3>
            <p className="text-gray-500 text-sm">Service Availability</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600">Real-Time</h3>
            <p className="text-gray-500 text-sm">Status Updates</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600">Secure</h3>
            <p className="text-gray-500 text-sm">Data Protection</p>
          </div>
        </div>
      </div>

      {/* Right Visual Card */}
      <div className="bg-green-50 rounded-3xl p-8 shadow-lg relative overflow-hidden">
        
        <div className="bg-white p-6 rounded-2xl shadow-md mb-4">
          <h4 className="font-semibold text-gray-800">Road Maintenance Issue</h4>
          <p className="text-gray-500 text-sm mt-1">
            Pothole problem reported near City Center.
          </p>
          <span className="inline-block mt-3 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
            Pending
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="font-semibold text-gray-800">Water Supply Complaint</h4>
          <p className="text-gray-500 text-sm mt-1">
            Irregular water supply in Sector 12.
          </p>
          <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            Resolved
          </span>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
      </div>

    </div>
  </section>

  {/* About Section */}
  <section className="bg-green-50 py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About CivicConnect</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          CivicConnect is a digital initiative designed to bridge the gap between citizens and municipal authorities. 
          Our platform empowers you to report civic issues, track their resolution, and contribute to a cleaner, safer community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Purpose</h3>
          <p className="text-gray-600">
            To create a transparent and efficient system for grievance redressal, ensuring that every citizen's voice is heard and acted upon by the administration.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">📱</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">How to Use</h3>
          <p className="text-gray-600">
            Simply register an account, log in, and use the "Register Complaint" button to report issues with photos and location details. Track progress in real-time.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">🌟</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose Us</h3>
          <p className="text-gray-600">
            We ensure accountability with assigned officers for every complaint, providing a direct line of communication and faster resolution times for civic problems.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Recent Complaints Section */}
  <section className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Recent Complaints</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {recentComplaints.map((complaint, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-bold text-gray-500">{complaint.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${complaint.color}`}>
                {complaint.status}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{complaint.category}</h3>
            <p className="text-gray-600 text-sm mb-4">{complaint.location}</p>
            <div className="border-t pt-4 flex justify-between items-center text-sm text-gray-500">
              <span>{complaint.date}</span>
              <Link to="/track-complaint"><button className="text-green-600 font-bold hover:underline">View Status</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="bg-green-50 py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How CivicConnect Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="text-center p-6 rounded-2xl hover:bg-green-50 transition duration-300 border border-gray-100 hover:border-green-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            📝
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">1. Register Complaint</h3>
          <p className="text-gray-600">
            Log in and file a complaint about civic issues like potholes, garbage, or water supply with photo evidence.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center p-6 rounded-2xl hover:bg-green-50 transition duration-300 border border-gray-100 hover:border-green-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🔍
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">2. Track Status</h3>
          <p className="text-gray-600">
            Get real-time updates as authorities verify and assign your complaint to the concerned department.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center p-6 rounded-2xl hover:bg-green-50 transition duration-300 border border-gray-100 hover:border-green-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            ✅
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">3. Resolution</h3>
          <p className="text-gray-600">
            Receive a notification once the issue is resolved. Verify the fix and rate the service provided.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Citizens Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative">
            {/* Quote Icon */}
            <div className="absolute top-4 right-6 text-6xl text-green-100 font-serif">"</div>
            
            <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.quote}"</p>
            
            <div className="flex items-center gap-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-green-500" />
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Impact Statistics Section */}
  <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="w-48 h-48 mx-auto bg-green-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-green-100 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold mb-1">10k+</h3>
              <p className="text-green-100 text-sm">Complaints Registered</p>
          </div>
          <div className="w-48 h-48 mx-auto bg-green-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-green-100 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold mb-1">8.5k+</h3>
              <p className="text-green-100 text-sm">Issues Resolved</p>
          </div>
          <div className="w-48 h-48 mx-auto bg-green-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-green-100 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold mb-1">50+</h3>
              <p className="text-green-100 text-sm">Cities Covered</p>
          </div>
          <div className="w-48 h-48 mx-auto bg-green-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-green-100 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold mb-1">4.8/5</h3>
              <p className="text-green-100 text-sm">Citizen Satisfaction</p>
          </div>
      </div>
  </section>

  {/* Feedback Section */}
  <section className="bg-white py-16 px-6 border-t border-gray-200">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Rate Your Experience</h2>
      <p className="text-gray-600 mb-8">Help us improve CivicConnect by sharing your feedback and rating.</p>
      
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={index}
                type="button"
                className={`text-4xl transition-colors duration-200 ${starValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              >
                ★
              </button>
            );
          })}
        </div>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 mb-6 h-32 resize-none"
          placeholder="Share your thoughts..."
        ></textarea>

        <button onClick={() => alert("Thank you for your feedback!")} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-md">
          Submit Feedback
        </button>
      </div>
    </div>
  </section>
  </div>
);
}

export default Main