import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-darkCard border-t border-slate-200 dark:border-slate-850 transition-colors duration-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left pane: logo & brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3.5 group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] flex items-center justify-center font-display font-extrabold text-slate-800 text-lg group-hover:scale-105 transition-transform duration-200">
              H
            </div>
            <span className="font-display font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
              Hindu Patrini
            </span>
          </a>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Built with the MERN stack.
          </p>
        </div>

        {/* Right pane: socials & copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Socials */}
          <div className="flex items-center gap-4">
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
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:border-accent/30 dark:hover:border-accent/35 hover:scale-105 transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright text */}
          <p className="text-xs font-sans text-slate-500 dark:text-slate-500">
            &copy; {currentYear} Hindu Patrini. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
