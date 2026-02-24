import React, { useState } from 'react'

const ComplaintModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: '',
    category: '',
    photo: null
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.photo) newErrors.photo = 'Photo evidence is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Generate mock details
    const details = {
      id: `#CC-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      officer: "Rajesh Kumar (Zone Officer)",
      officerContact: "+91 98765 43210",
      category: formData.category
    };

    onSubmit(details);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-full max-w-md relative shadow-2xl animate-fadeIn border border-gray-100 dark:border-gray-700">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white font-bold text-xl transition" >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Register Complaint</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Civilian Name <span className="text-red-500">*</span></label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Enter Name" className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Mobile No. <span className="text-red-500">*</span></label>
            <input type="tel" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} placeholder="Enter Mobile No." className={`w-full p-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`} />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email <span className="text-red-500">*</span></label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Enter Email" className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Location <span className="text-red-500">*</span></label>
            <input type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="Enter Location" className={`w-full p-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`} />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Issue Category <span className="text-red-500">*</span></label>
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className={`w-full p-3 border ${errors.category ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 dark:text-white`}>
              <option value="">Select Category</option>
              <option value="road">Road</option>
              <option value="water">Water</option>
              <option value="electricity">Electricity</option>
              <option value="other">Other</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Photo of Issue <span className="text-red-500">*</span></label>
            <input type="file" onChange={(e) => setFormData({...formData, photo: e.target.files[0]})} className={`w-full p-2 border ${errors.photo ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-300`} />
            {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
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