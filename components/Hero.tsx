import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 min-h-[95vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      
      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 px-4 py-1.5 rounded-full border border-neon/20 bg-neon/5 text-neon text-xs font-bold tracking-widest uppercase flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
        </span>
        Available for new projects
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] max-w-6xl mx-auto mb-10"
      >
        THUMBNAILS THAT <br />
        <span className="relative inline-block">
          <span className="text-neon italic underline decoration-4 underline-offset-8">STAND OUT</span>
          <motion.div 
            className="absolute -inset-1 bg-neon/20 blur-2xl -z-10"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
      >
        Elevate your content with high-conversion visuals. Helping creators dominate the algorithm with bold strategy and elite design.
      </motion.p>

      {/* CTAs with Shimmer Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-6"
      >
        <button 
          onClick={() => scrollToSection('work')}
          className="group relative bg-neon text-black text-lg font-black px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(204,255,0,0.3)]"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          See Portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="group relative bg-white/5 border border-white/10 text-white text-lg font-black px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Send me a message
          <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;