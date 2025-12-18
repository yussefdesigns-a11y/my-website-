import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Auth
    if (username === 'admin' && password === 'password') {
      setError('');
      onLogin();
      onClose();
    } else {
      setError('Invalid credentials. Try "admin" / "password"');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md p-4"
          >
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
               {/* Close Button */}
               <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Lock className="text-neon" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Admin Access</h2>
                <p className="text-neon font-medium">Welcome back, Yussef. Please log in.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-neon hover:scale-[1.02] transition-all duration-300"
                >
                  Enter Dashboard
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;