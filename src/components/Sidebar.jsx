import React, { useState } from 'react';
import { Home, Cpu, Code2, Mail, Menu, X, Sun, Moon } from 'lucide-react';

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home & About', icon: Home, href: '#home' },
    { label: 'Services', icon: Cpu, href: '#services' },
    { label: 'Projects', icon: Code2, href: '#projects' },
    { label: 'Contact', icon: Mail, href: '#contact' },
  ];

  // Double check the href in navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-darkBg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 z-40 flex items-center justify-between px-6 transition-colors duration-300">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] flex items-center justify-center font-display font-extrabold text-slate-800 text-lg glow-logo">
            H
          </div>
          <span className="font-display font-bold tracking-tight text-slate-800 dark:text-slate-100">Hindu Patrini</span>
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/60 dark:bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-darkBg border-r border-slate-200 dark:border-slate-800/80 p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] flex items-center justify-center font-display font-extrabold text-slate-800 text-lg">
                  H
                </div>
                <span className="font-display font-bold tracking-tight text-slate-800 dark:text-slate-100">Hindu Patrini</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-accent dark:hover:text-accent-light font-medium transition-all"
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-850">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-20 hover:w-64 bg-white/95 dark:bg-darkBg/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800/60 z-45 flex-col justify-between py-8 px-4 transition-all duration-350 ease-in-out group hover:shadow-2xl hover:shadow-accent/5">
        <div className="flex flex-col items-center group-hover:items-start w-full">
          {/* Custom monogram logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-4 mb-12 px-2 w-full transition-all duration-300"
          >
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-tr from-[#a5f3fc] to-[#fbcfe8] flex items-center justify-center font-display font-extrabold text-slate-800 text-xl shadow-lg hover:shadow-accent/40 duration-300 select-none">
              H
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden whitespace-nowrap">
              <p className="font-display font-bold text-base tracking-tight text-slate-800 dark:text-slate-100">Hindu Patrini</p>
              <p className="text-[10px] font-mono text-accent tracking-widest uppercase">MERN Dev</p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="space-y-4 w-full">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center px-3 py-3.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-slate-100/80 dark:hover:bg-slate-800/40 transition-all duration-200 w-full"
                >
                  <Icon size={22} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
                  <span className="ml-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Theme Toggle bottom */}
        <div className="w-full px-1">
          <button
            onClick={toggleDarkMode}
            className="flex items-center px-3 py-3.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-slate-100/80 dark:hover:bg-slate-800/40 transition-all duration-200 w-full"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? (
              <Sun size={22} className="shrink-0 text-amber-500 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={22} className="shrink-0 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
            )}
            <span className="ml-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm whitespace-nowrap">
              {darkMode ? 'Light Theme' : 'Dark Theme'}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
