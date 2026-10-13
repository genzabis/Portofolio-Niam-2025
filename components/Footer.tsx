import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-[85%] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-8">
          <div>
            <div className="text-[18vw] sm:text-[14vw] md:text-[9vw] font-serif font-normal tracking-tighter leading-[0.8] text-slate-900 mb-4">
              NNS<span className="text-slate-300">.</span>
            </div>
            <p className="text-sm text-slate-500 font-light max-w-md">
              Niamilah Nabil Syahputra — Full Stack Developer & Chief Product & Technology Officer.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-5 md:gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn &rarr;
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub &rarr;
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="hover:text-slate-900 transition-colors"
            >
              Email &rarr;
            </a>
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV ATS NIAMILAH NABIL S 2026.pdf"
              aria-label="Download CV"
              className="hover:text-slate-900 transition-colors"
            >
              Download ATS CV &rarr;
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 pt-8 border-t border-slate-100 text-[11px] font-normal uppercase tracking-[0.2em] text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Niamilah Nabil Syahputra. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" aria-label="Back to top" className="hover:text-slate-900 transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
