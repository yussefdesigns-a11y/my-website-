import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'FIFA Thumbnail', category: 'Gaming', imageUrl: 'https://i.postimg.cc/3x45CPN0/FIFA-THUMBNAIL.png' },
  { id: 2, title: 'Gaming Highlights', category: 'Gaming', imageUrl: 'https://i.postimg.cc/HLD3wy7g/FINAL-THUMBNAIL-sdam.png' },
  { id: 3, title: 'Vlog Daily', category: 'Lifestyle', imageUrl: 'https://i.postimg.cc/JzG8rBQh/FINAM-THUMBNAIL-mrjaʿt.png' },
  { id: 4, title: 'Dopamine Detox', category: 'Health', imageUrl: 'https://i.postimg.cc/8Cfpc7LP/dopmine-detox-final.png' },
  { id: 5, title: 'UFC 5', category: 'Gaming', imageUrl: 'https://i.postimg.cc/Gpxq6XsQ/UFC5.png' },
  { id: 6, title: 'Travel Vlog', category: 'Travel', imageUrl: 'https://i.postimg.cc/jjHFtsBx/thumbnail-1765369636265.png' },
  { id: 7, title: 'David Laid', category: 'Fitness', imageUrl: 'https://i.postimg.cc/tTzL4bSL/david-laid-thumbnail.png' },
  { id: 8, title: 'Final Thumbnail', category: 'Misc', imageUrl: 'https://i.postimg.cc/59g6ZF3Z/final-thumbail.png' },
  { id: 9, title: 'The Great Escape', category: 'Story', imageUrl: 'https://i.postimg.cc/DwJ0JpK6/THE-GREAT-ESPASE.png' },
  { id: 10, title: 'PC Build', category: 'Tech', imageUrl: 'https://i.postimg.cc/LXHmTNrP/bna-pc.png' },
  { id: 11, title: 'Trending', category: 'Social', imageUrl: 'https://i.postimg.cc/rsHcqczL/THUMBNAIL-TRANDING.png' },
  { id: 12, title: 'Ghzi', category: 'Gaming', imageUrl: 'https://i.postimg.cc/xjZSJfTQ/iuane-ghzi-thumbnail-(1).png' },
  { id: 13, title: 'Only AI', category: 'Tech', imageUrl: 'https://i.postimg.cc/VshcrfLr/ONLY-AI.png' },
  { id: 14, title: 'Yumi', category: 'Vlog', imageUrl: 'https://i.postimg.cc/8cmKbbgk/thumbnail-yumi.png' },
  { id: 15, title: 'Thumbnail', category: 'Design', imageUrl: 'https://i.postimg.cc/1tpJ9KtX/THUMBNAOIL.png' },
  { id: 16, title: 'Faklaydhm', category: 'Gaming', imageUrl: 'https://i.postimg.cc/qq4QgC6J/faʿklaydhm.png' },
  { id: 17, title: 'Loma', category: 'Lifestyle', imageUrl: 'https://i.postimg.cc/sxTPXHRc/loma.png' },
  { id: 18, title: 'Ronaldo', category: 'Sports', imageUrl: 'https://i.postimg.cc/13n0mK75/RONLDO-THUMBAIL.png' },
  { id: 19, title: 'Growth', category: 'Business', imageUrl: 'https://i.postimg.cc/GthkMMD2/level-devel-thumn.png' },
  { id: 20, title: 'Clash', category: 'Gaming', imageUrl: 'https://i.postimg.cc/GmZVZDqb/cscscscsc.png' },
  { id: 21, title: 'Cinematic', category: 'Edit', imageUrl: 'https://i.postimg.cc/1zsbKqBh/Universal-Upscaler-e3d008cc-a878-458d-90bd-be08449f20cc.jpg' },
  { id: 22, title: 'Setup', category: 'Tech', imageUrl: 'https://i.postimg.cc/63Bgtzh4/thumbnail-setup.png' },
  { id: 23, title: 'Money', category: 'Finance', imageUrl: 'https://i.postimg.cc/ZqdH0pMS/thumbnail-monry.png' },
  { id: 24, title: 'Thumbnail', category: 'Design', imageUrl: 'https://i.postimg.cc/VkY5J8Zj/THUMBNAL.png' },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-card transition-all duration-500 hover:border-neon/50"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(204,255,0,0.1), transparent 40%)`
          ),
        }}
      />

      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

const PortfolioGrid: React.FC = () => {
  return (
    <section id="work" className="relative z-10 py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
        >
          SELECTED <span className="text-neon italic">WORKS</span>
        </motion.h2>
        <div className="h-1 w-12 bg-neon mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;