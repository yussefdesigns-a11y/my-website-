import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface AdminDashboardProps {
  onNotify: (msg: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNotify }) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSending(true);

    // Simulate Network Request
    setTimeout(() => {
      onNotify(`Message sent to yussefdesigns@gmail.com: "${message}"`);
      setMessage('');
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background blob within card */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/10 rounded-full blur-[80px] pointer-events-none" />

        <h2 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h2>
        <p className="text-gray-400 mb-8">Send updates, notes, or test messages to your primary email.</p>

        <form onSubmit={handleSend} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Compose Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-48 bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all resize-none placeholder-gray-600"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSending || !message.trim()}
              className={`flex items-center gap-2 bg-neon text-black font-bold px-8 py-3 rounded-xl transition-all duration-300 
                ${isSending || !message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]'}`}
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((stat) => (
          <div key={stat} className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <h3 className="text-gray-400 text-sm mb-2">Total Views</h3>
            <p className="text-3xl font-bold text-white">12,40{stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;