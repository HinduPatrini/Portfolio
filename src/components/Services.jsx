import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Layers, 
  ShoppingBag, 
  LayoutDashboard, 
  RefreshCw, 
  Palette, 
  ShieldCheck 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Web Application Development',
      description: "End-to-end web apps using the MERN stack. From planning and database design to frontend development and deployment. I handle the entire process so you don't have to manage multiple developers.",
      icon: Globe,
    },
    {
      title: 'Real-Time Applications',
      description: "Chat apps, live notifications, and instant updates powered by Socket.io. Perfect for messaging platforms, live dashboards, or collaborative tools. Built to feel fast and responsive in real time.",
      icon: Zap,
    },
    {
      title: 'Third-Party API & Payment Integration',
      description: "Seamless integration with external services like payment gateways, movie and recipe databases, and AI APIs. I connect your app to the tools it needs to function. Reliable, secure, and well-tested integrations.",
      icon: Layers,
    },
    {
      title: 'Ecommerce Websites',
      description: "Complete online stores with product listings, cart, and checkout flows. Includes order management and a smooth shopping experience. Built to help your business sell online with confidence.",
      icon: ShoppingBag,
    },
    {
      title: 'Custom Dashboards & Admin Panels',
      description: "Data-driven interfaces to manage users, products, orders, and content. Clean, intuitive layouts that make complex data easy to control. Designed for efficiency, not clutter.",
      icon: LayoutDashboard,
    },
    {
      title: 'Website Revamp / Modernization',
      description: "Upgrading old or slow websites into fast, modern, responsive experiences. Improved performance, design, and mobile compatibility. Give your existing site a fresh, professional upgrade.",
      icon: RefreshCw,
    },
    {
      title: 'UI/UX Implementation',
      description: "Clean, responsive, animated interfaces using React and Tailwind CSS. Smooth transitions and thoughtful design that feels premium. Built to engage users and reflect your brand.",
      icon: Palette,
    },
    {
      title: 'Authentication & User Management',
      description: "Secure login systems including email/password and Google OAuth. Role-based access control for different user types. Built with security and user experience in mind.",
      icon: ShieldCheck,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200 dark:border-slate-850 bg-white dark:bg-darkBg">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">02 / Offerings</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
            Services I Provide
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Providing full-spectrum web development solutions built on scalable architectures, clean code, and premium visual interfaces.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-850 bg-slate-50/30 dark:bg-darkCard/50 hover:bg-white dark:hover:bg-darkCard border-slate-200 dark:border-slate-800/80 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm transition-all duration-300 glow-card-hover"
              >
                {/* Floating blur ring on hover */}
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Card Icon */}
                <div className="mb-5 inline-flex p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:scale-105 transition-all duration-300">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-250 min-h-[3.5rem] flex items-center">
                  {service.title}
                </h3>

                {/* Description (ensures 3-line look or readable spacing) */}
                <p className="text-slate-500 dark:text-slate-405 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
