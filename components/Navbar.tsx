'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a
              href="#home"
              aria-label="Home"
              className="text-2xl font-serif font-medium tracking-tighter text-slate-900 hover:opacity-75 transition-opacity"
            >
              NNS<span className="text-slate-400">.</span>
            </a>

            <div className="hidden md:flex items-center gap-2 lg:gap-6 xl:gap-12 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-600 hover:text-slate-900 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV ATS NIAMILAH NABIL S 2026.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-900 border border-slate-900/40 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <span>ATS CV</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV ATS NIAMILAH NABIL S 2026.pdf"
                className="text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 border border-slate-900/30 rounded-full text-slate-900"
              >
                CV
              </a>
              <button
                className="p-1.5 text-slate-900 focus:outline-none"
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
            className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-[5%] p-3 text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center space-y-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-normal italic tracking-wider text-slate-900 hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV ATS NIAMILAH NABIL S 2026.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white bg-slate-900 rounded-full"
              >
                Download ATS CV (PDF)
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;