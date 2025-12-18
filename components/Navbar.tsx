import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navItems = ['Work', 'Pricing', 'Process', 'Contact'];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl">
        <div className="flex gap-1">
          {navItems.map((item, index) => (
            <button
              key={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(item)}
              className="relative px-6 py-2.5 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-white/10 mx-2" />

        <button
          onClick={() => scrollToSection('Contact')}
          className="group relative px-6 py-2.5 rounded-full bg-neon text-black text-xs font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;