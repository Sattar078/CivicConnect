import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, BadgeCheck, Mail, Lock, ArrowLeft } from 'lucide-react';

const RegisterOfficer = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [badgeId, setBadgeId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!badgeId.trim()) newErrors.badgeId = 'Badge ID is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const officer = {
            name: fullName,
            badgeId: badgeId,
            email: email,
            rank: 'Zone Officer',
            zone: 'North Zone',
            phone: '+91 98765 00001',
            joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        localStorage.setItem('currentUser', JSON.stringify(officer));
        setError(null);
        navigate('/login-officer');
    };

    return (
        <div className="min-h-screen bg-green-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-300">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
                <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-6 shadow-xl border-2 border-white/30 p-4">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-center">Officer Portal</h1>
                    <p className="text-lg opacity-90 text-center">Join the force. Register to start managing civic duties.</p>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                </div>
                <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative">
                    <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-2">
                        <ArrowLeft size={20} /> <span className="font-medium text-sm">Back</span>
                    </Link>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 mt-8">Officer Registration</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Enter your official details</p>
                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div>
                            <div className="relative"><User className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="text" placeholder="Full Name" className={`w-full p-3 pl-10 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white`} value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                            <div className="relative"><BadgeCheck className="absolute left-3 top-3.5 text-gray-400" size={20} /><input type="text" placeholder="Badge ID / Employee ID" className={`w-full p-3 pl-10 border ${errors.badgeId ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white`} value={badgeId} onChange={(e) => setBadgeId(e.target.value)} /></div>
                            {errors.badgeId && <p className="text-red-500 text-xs mt-1">{errors.badgeId}</p>}
                        </div>
                        <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Official Email"
                                className={`w-full p-3 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input
                                type="password"
                                placeholder="Password"
                                className={`w-full p-3 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-md text-lg">Register</button>
                    </form>
                    <div className="text-center border-t border-gray-200 pt-4 mt-4">
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Already registered?</p>
                        <Link to="/login-officer" className="text-green-600 font-bold hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegisterOfficer;