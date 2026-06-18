import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-700 ${isScrolled ? 'py-5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" aria-label="Home" className="text-2xl font-serif font-medium tracking-tighter text-slate-900 dark:text-white transition-colors">
              NNS<span className="text-slate-300 dark:text-zinc-700">.</span>
            </a>

            <div className="hidden md:flex items-center space-x-16">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all duration-500"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleTheme}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all duration-500"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? 'DARK' : 'LIGHT'}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-6">
              <button onClick={toggleTheme} aria-label="Toggle Theme" className="text-slate-900 dark:text-white text-xs uppercase tracking-widest font-medium">
                {theme === 'light' ? 'DARK' : 'LIGHT'}
              </button>
              <button 
                className="text-slate-900 dark:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#050505]"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-[5%] p-2 text-slate-900 dark:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif font-normal italic tracking-wider text-slate-900 dark:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;