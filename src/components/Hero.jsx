import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MousePointerClick } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center py-20 px-6 overflow-hidden md:px-12 lg:px-20"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-accent/8 dark:bg-accent/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col items-center z-10"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-xs font-mono font-medium text-accent tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Freelance Projects
        </motion.div>

        {/* Custom Monogram Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative group cursor-default select-none"
        >
          {/* Outer Ring Glow */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] opacity-50 blur-md group-hover:opacity-85 transition-opacity duration-300" />
          
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] p-[2.5px] shadow-lg group-hover:scale-105 transition-transform duration-300 ease-out">
            <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] flex items-center justify-center font-display font-extrabold text-slate-800 text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
              H
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight mb-4 select-none leading-[1.1]"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-indigo-500">
            Hindu Patrini
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-8"
        >
          Full Stack Developer <span className="text-accent mx-1.5">|</span> MERN Stack Specialist
        </motion.p>

        {/* Brief Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-350 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          I specialty-craft modern MERN stack web applications from idea to deployment. I focus on creating fast, clean, and highly functional digital products that help clients turn concepts into reality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('#projects')}
            className="px-8 py-4 rounded-xl font-medium bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 flex items-center justify-center gap-2 group transition-all duration-200"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-8 py-4 rounded-xl font-medium border border-slate-300 dark:border-slate-800 hover:border-accent dark:hover:border-accent hover:bg-accent/5 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-all duration-200"
          >
            Get in Touch
            <MousePointerClick size={18} />
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          {[
            { icon: FaGithub, url: 'https://github.com/HinduPatrini', label: 'GitHub' },
            { icon: FaLinkedin, url: 'https://www.linkedin.com/in/hindu-patrini-7ab07a37a', label: 'LinkedIn' },
            { icon: FaInstagram, url: 'https://www.instagram.com/hinduu_16/', label: 'Instagram' },
            { icon: Mail, url: 'mailto:hindupatrini16@gmail.com', label: 'Email' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:border-accent/40 dark:hover:border-accent/40 hover:scale-105 hover:bg-accent/5 transition-all duration-200"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-450 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
