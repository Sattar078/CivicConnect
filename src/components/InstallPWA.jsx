import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full relative border border-gray-100 dark:border-gray-700">
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
        >
            <X size={20} />
        </button>
        
        <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400 p-3">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Install App</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                Install CivicConnect on your device for a better experience with offline access and faster loading.
            </p>
            <div className="flex gap-3 w-full">
                <button 
                    onClick={() => setIsVisible(false)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                    Not Now
                </button>
                <button 
                    onClick={handleInstallClick}
                    className="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-md transition"
                >
                    Install
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;