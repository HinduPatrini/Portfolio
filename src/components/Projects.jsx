import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCarousel = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const SWIPE_THRESHOLD = 40; // px needed to trigger a swipe

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    goTo(currentIndex === 0 ? images.length - 1 : currentIndex - 1, -1);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    goTo(currentIndex === images.length - 1 ? 0 : currentIndex + 1, 1);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const delta = e.touches[0].clientX - touchStartX;
    setTouchDeltaX(delta);
    if (Math.abs(delta) > 10) setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    if (touchDeltaX < -SWIPE_THRESHOLD) {
      // Swiped Left → next slide
      goTo(currentIndex === images.length - 1 ? 0 : currentIndex + 1, 1);
    } else if (touchDeltaX > SWIPE_THRESHOLD) {
      // Swiped Right → prev slide
      goTo(currentIndex === 0 ? images.length - 1 : currentIndex - 1, -1);
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsDragging(false);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 group/carousel select-none">

      {/* Animated Slide Area */}
      <div
        className="w-full h-full relative cursor-zoom-in"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => { if (!isDragging) onImageClick(images[currentIndex]); }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop`;
            }}
          />
        </AnimatePresence>

        {/* Click to expand hover overlay — hidden on mobile touch */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/carousel:opacity-100 hidden sm:flex items-center justify-center transition-all duration-300 pointer-events-none">
          <span className="px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur border border-white/10 text-white text-xs font-mono tracking-wide flex items-center gap-1.5 shadow-xl">
            <Maximize2 size={12} /> Expand Image
          </span>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
      </div>

      {/* Swipe hint — visible only on mobile, fades out */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-3 sm:hidden z-20 pointer-events-none">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center">
          <ChevronLeft size={16} className="text-white/80" />
        </div>
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center">
          <ChevronRight size={16} className="text-white/80" />
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white hidden sm:flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-slate-800 transition-all duration-200 active:scale-95 z-20"
        aria-label="Previous screenshot"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white hidden sm:flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-slate-800 transition-all duration-200 active:scale-95 z-20"
        aria-label="Next screenshot"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide counter badge (mobile) */}
      <div className="absolute top-3 right-3 sm:hidden px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white text-[10px] font-mono z-20">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              goTo(idx, idx > currentIndex ? 1 : -1);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-6 bg-white shadow-md'
                : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const projectsList = [
    {
      title: 'CineScope',
      tagline: 'Movie discovery, made effortless.',
      description: 'A movie discovery platform built on the MERN stack, pulling live data from the OMDB API. Users can search, browse, and explore details of millions of films with a clean, ultra-fast UI.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OMDB API', 'Tailwind CSS'],
      liveUrl: 'https://cine-scope-eight-nu.vercel.app/',
      githubUrl: 'https://github.com/HinduPatrini/CineScope',
      images: [
        '/photos/cinescope/ss1.png',
        '/photos/cinescope/ss2.png',
        '/photos/cinescope/ss3.png',
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
        '/photos/flavr/ss1.png',
        '/photos/flavr/ss2.png',
        '/photos/flavr/ss3.png',
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
        '/photos/chattr/ss1.png',
        '/photos/chattr/ss2.png',
        '/photos/chattr/ss3.png',
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
                  <ProjectCarousel images={project.images} title={project.title} onImageClick={setLightboxImg} />
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/60 border border-white/10 text-white hover:bg-slate-800 transition-colors focus:ring-1 focus:ring-accent"
              aria-label="Close image modal"
            >
              <X size={20} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Expanded project screenshot"
                className="w-full h-auto max-h-[85vh] object-contain select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop`;
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
