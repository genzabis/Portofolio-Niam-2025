import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#050505] transition-colors pt-8 md:pt-12 pb-12 md:pb-24">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-12 md:mb-24 gap-8 md:gap-16">
          <div className="text-[12vw] md:text-[10vw] font-serif font-normal tracking-tighter leading-[0.8] text-slate-900 dark:text-white transition-colors text-center md:text-left">
            NNS<span className="text-slate-300 dark:text-zinc-800">.</span>
          </div>
          
          <div className="flex flex-col items-center gap-4 md:gap-8 md:items-end md:text-right">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-sm md:text-base font-normal uppercase tracking-[0.4em] text-slate-900 dark:text-white hover:opacity-50 transition-opacity duration-500">
              LinkedIn ↗
            </a>
            <a href={`https://github.com/${PERSONAL_INFO.githubUsername}`} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-sm md:text-base font-normal uppercase tracking-[0.4em] text-slate-900 dark:text-white hover:opacity-50 transition-opacity duration-500">
              GitHub ↗
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Send Email" className="text-sm md:text-base font-normal uppercase tracking-[0.4em] text-slate-900 dark:text-white hover:opacity-50 transition-opacity duration-500">
              Email ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8 pt-6 md:pt-8 border-t border-slate-100 dark:border-zinc-900 transition-colors">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-600 transition-colors">
            © {new Date().getFullYear()} Niamilah Nabil Syahputra. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-normal uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-600 transition-colors">
            <a href="#home" aria-label="Back to top" className="hover:text-slate-900 dark:hover:text-white transition-colors">Back to Top ↑</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Contact via email" className="hover:text-slate-900 dark:hover:text-white transition-colors">Say Hello</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
