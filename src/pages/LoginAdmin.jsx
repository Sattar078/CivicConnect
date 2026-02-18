import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        navigate('/admin-home');
    };

    return (
        <div className="min-h-screen bg-green-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-300">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
                <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-400 p-10 text-white flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-6 shadow-xl border-2 border-white/30 p-4">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-center">Admin Portal</h1>
                    <p className="text-lg opacity-90 text-center">Restricted Access. System administration and oversight.</p>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                </div>
                <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative">
                    <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition flex items-center gap-2">
                        <ArrowLeft size={20} /> <span className="font-medium text-sm">Back</span>
                    </Link>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 mt-8">Admin Login</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Please sign in to continue</p>
                    <form className="space-y-5" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Admin Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-4 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    className="w-full mt-1 p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="admin@civic.gov"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-4 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    className="w-full mt-1 p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition shadow-md font-bold text-lg">Login</button>
                        <div className='text-center pt-2'>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">New Admin?</p>
                            <Link to="/register-admin"><button className="text-green-600 font-bold hover:underline">Register Here</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginAdmin;