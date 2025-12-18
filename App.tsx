import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Pricing from './components/Pricing';
import ContactSection from './components/ContactSection';
import { NotificationState } from './types';
import { CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [notification, setNotification] = useState<NotificationState>({ visible: false, message: '', type: 'success' });

  const showNotification = (msg: string) => {
    setNotification({ visible: true, message: msg, type: 'success' });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, visible: false }));
    }, 4000);
  };

  return (
    <div className="min-h-screen relative text-white selection:bg-neon selection:text-black">
      <Background />
      
      <Navbar />

      <main>
        <Hero />
        <PortfolioGrid />
        <Pricing />
        <ContactSection onNotify={showNotification} />
        
        {/* Simple Footer */}
        <footer className="relative z-10 border-t border-white/5 py-8 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Yussef Designs. All rights reserved.</p>
        </footer>
      </main>

      {/* Global Notification Toast */}
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-[100] bg-zinc-900 border border-neon/50 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[320px]"
          >
            <CheckCircle className="text-neon flex-shrink-0" size={24} />
            <p className="text-sm font-medium">{notification.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;