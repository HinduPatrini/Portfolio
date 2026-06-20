import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Layout, Server, Wrench } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2025 – 2029',
      degree: 'B.Tech in Computer Science',
      institution: 'Gayatri Vidya Parishad College of Engineering',
      description: 'Focused on algorithms, software engineering, and full stack systems.',
      current: true,
    },
    {
      period: '2023 – 2025',
      degree: 'Intermediate (11th & 12th Grade)',
      institution: 'Sri Chaitanya Junior College',
      description: 'Major subjects in Mathematics, Physics, and Chemistry (MPC).',
      current: false,
    },
    {
      period: '2023',
      degree: '10th Standard (SSC)',
      institution: 'Sri Rama Krishna English Medium School',
      description: 'Secondary School Certification with academic honors.',
      current: false,
    },
  ];

  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'JavaScript ES6+'],
    },
    {
      title: 'Backend & Databases',
      icon: Server,
      skills: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'Passport.js'],
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: ['Git & GitHub', 'Cloudinary', 'Vercel', 'Render', 'Postman'],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">01 / Profile</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Bio & Education Timeline - 7 cols */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Bio Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                <BookOpen className="text-accent" size={24} />
                My Story
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-lg font-sans">
                I'm Hindu Patrini, a Full Stack Developer specializing in the MERN stack. I design and build fast, modern web applications from inception to deployment. I enjoy turning complex problems into intuitive, functional, and gorgeous digital products.
              </p>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-lg font-sans">
                Currently, I am looking for freelance projects to help businesses and individuals create high-quality websites and applications. If you need a reliable developer who can handle both frontend UI/UX and robust backend logic, I'd love to work with you.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                <GraduationCap className="text-accent" size={24} />
                Education Journey
              </h3>

              {/* Timeline Container */}
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Bullet marker */}
                    <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      edu.current 
                        ? 'bg-accent border-accent scale-110 shadow-lg shadow-accent/50' 
                        : 'bg-white dark:bg-darkBg border-slate-300 dark:border-slate-700 group-hover:border-accent'
                    }`} />
                    
                    {/* Card Content */}
                    <div>
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-semibold mb-2 ${
                        edu.current 
                          ? 'bg-accent/15 text-accent border border-accent/20' 
                          : 'bg-slate-100 dark:bg-slate-850 text-slate-500 dark:text-slate-450'
                      }`}>
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-display font-bold text-slate-800 dark:text-slate-150">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Skills Grid - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-bold flex items-center gap-3 mb-2 lg:mb-6">
              <Wrench className="text-accent" size={24} />
              Technical Skills
            </h3>

            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-darkCard shadow-sm hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 glow-card-hover"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-display font-bold text-slate-800 dark:text-slate-200">{group.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-medium hover:border-accent/20 dark:hover:border-accent/25 hover:text-accent dark:hover:text-accent-light transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
