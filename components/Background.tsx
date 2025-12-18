import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-dark">
      {/* 1. Grain/Noise Overlay for high-end texture */}
      <div className="absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Deep Perspective Grid */}
      <motion.div 
        style={{ y: yRange }}
        className="absolute inset-0 z-10 opacity-10"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                              linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* 3. Floating Mesh Gradient Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        className="absolute inset-0 z-0"
      >
        {/* Neon Green Orb */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 120, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-neon/10 rounded-full blur-[140px]"
        />

        {/* Deep Indigo Orb */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[150px]"
        />

        {/* Purple Accent Orb */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -150, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] left-[20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px]"
        />
      </motion.div>

      {/* 4. Floating Particles (The "Dust" effect) */}
      <div className="absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: ["-10%", "110%"],
              x: [
                (Math.random() * 100) + "%", 
                (Math.random() * 100 + (Math.random() > 0.5 ? 5 : -5)) + "%"
              ],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 5. Vignette Overlay to focus attention */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.4)_70%,rgba(10,10,10,0.9)_100%)] pointer-events-none" />
      
      {/* 6. Scanline Effect (Horizontal lines moving down) */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-40 h-[2px] bg-white/5 blur-[2px] opacity-30 pointer-events-none"
      />
    </div>
  );
};

export default Background;