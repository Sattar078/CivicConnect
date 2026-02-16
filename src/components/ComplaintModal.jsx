import React from 'react'

const ComplaintModal = ({ onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const categorySelect = e.target.querySelector('select');
    
    // Generate mock details
    const details = {
      id: `#CC-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      officer: "Rajesh Kumar (Zone Officer)",
      category: categorySelect ? categorySelect.value : "General Issue"
    };

    onSubmit(details);
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-3xl w-full max-w-md relative shadow-2xl animate-fadeIn">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-xl" >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Register Complaint</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Civilian Name</label>
            <input type="text" placeholder="Enter Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No.</label>
            <input type="tel" placeholder="Enter Mobile No." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" placeholder="Enter Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input type="text" placeholder="Enter Location" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Issue Category</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
              <option value="">Select Category</option>
              <option value="road">Road</option>
              <option value="water">Water</option>
              <option value="electricity">Electricity</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Photo of Issue</label>
            <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  )
}

export default ComplaintModal