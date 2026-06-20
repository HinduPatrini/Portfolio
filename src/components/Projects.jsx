import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 group/carousel">
      {/* Slides */}
      <div className="w-full h-full relative">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover/carousel:scale-[1.02]"
          onError={(e) => {
            // Fallback inside error handler if image not found
            e.target.onerror = null;
            e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop`;
          }}
        />
        {/* Visual Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-800 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-slate-900 transition-all duration-200 active:scale-95"
        aria-label="Previous screenshot"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-800 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-slate-900 transition-all duration-200 active:scale-95"
        aria-label="Next screenshot"
      >
        <ChevronRight size={20} />
      </button>

      {/* Bullet Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-6 bg-accent' 
                : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsList = [
    {
      title: 'CineScope',
      tagline: 'Movie discovery, made effortless.',
      description: 'A movie discovery platform built on the MERN stack, pulling live data from the OMDB API. Users can search, browse, and explore details of millions of films with a clean, ultra-fast UI.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OMDB API', 'Tailwind CSS'],
      liveUrl: 'https://cine-scope-eight-nu.vercel.app/',
      githubUrl: 'https://github.com/HinduPatrini/CineScope',
      images: [
        '/photos/cinescope/ss1.jpg',
        '/photos/cinescope/ss2.jpg',
        '/photos/cinescope/ss3.jpg',
      ],
    },
    {
      title: 'Flavr',
      tagline: 'Find your next favorite recipe.',
      description: 'A full-stack recipe finder combining the Spoonacular API with Groq AI for smart recipe generation. Includes Google OAuth secure authentication and a responsive user dashboard built with Tailwind styling.',
      tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'Passport.js', 'Tailwind CSS'],
      liveUrl: 'https://flavr-seven.vercel.app/',
      githubUrl: 'https://github.com/HinduPatrini/Flavr',
      images: [
        '/photos/flavr/ss1.jpg',
        '/photos/flavr/ss2.jpg',
        '/photos/flavr/ss3.jpg',
      ],
    },
    {
      title: 'Chattr',
      tagline: 'Real-time conversations, instantly.',
      description: 'A real-time chat application built using socket connections. Integrates Cloudinary API for multimedia uploads and uses Zustand for efficient global client state management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand', 'Cloudinary'],
      liveUrl: 'https://chattr-sandy.vercel.app/',
      githubUrl: 'https://github.com/HinduPatrini/Chattr',
      images: [
        '/photos/chattr/ss1.jpg',
        '/photos/chattr/ss2.jpg',
        '/photos/chattr/ss3.jpg',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">03 / Portfolios</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            A curated showcase of recent full-stack applications displaying API integrations, real-time messaging, and interactive web flows.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20 lg:space-y-32">
          {projectsList.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Media Pane (Carousel) */}
                <div className="w-full lg:w-1/2">
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>

                {/* Project Info Pane */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 dark:text-slate-100 mt-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-500 font-mono text-xs mt-1.5 italic">
                      "{project.tagline}"
                    </p>
                  </div>

                  <p className="text-slate-650 dark:text-slate-350 leading-relaxed font-sans text-base">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project CTA Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-accent/15 transition-all duration-200 active:scale-95"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-850 bg-white dark:bg-darkCard hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-350 font-medium text-sm flex items-center gap-2 transition-all duration-200 active:scale-95"
                    >
                      <FaGithub size={16} />
                      GitHub Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
