import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8 md:pt-12 md:pb-24">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-8 md:mb-24 gap-8 md:gap-16">
          <div className="text-[16vw] md:text-[10vw] font-serif font-normal tracking-tighter leading-[0.8] text-slate-900 text-center md:text-left">
            NNS<span className="text-slate-300">.</span>
          </div>
          
          <div className="flex flex-row items-center gap-6 md:gap-4 md:flex-col md:items-end md:text-right">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-xs font-normal uppercase tracking-[0.25em] text-slate-900 hover:opacity-50 transition-opacity duration-500">
              LinkedIn
            </a>
            <a href={`https://github.com/${PERSONAL_INFO.githubUsername}`} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-xs font-normal uppercase tracking-[0.25em] text-slate-900 hover:opacity-50 transition-opacity duration-500">
              GitHub
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Send Email" className="text-xs font-normal uppercase tracking-[0.25em] text-slate-900 hover:opacity-50 transition-opacity duration-500">
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8 pt-6 md:pt-8 border-t border-slate-100">
          <p className="text-[11px] font-normal uppercase tracking-[0.2em] text-slate-400 text-center">
            &copy; {new Date().getFullYear()} Niamilah Nabil Syahputra. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11px] font-normal uppercase tracking-[0.2em] text-slate-400">
            <a href="#home" aria-label="Back to top" className="hover:text-slate-900 transition-colors">Back to Top &uarr;</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Contact via email" className="hover:text-slate-900 transition-colors">Say Hello</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
