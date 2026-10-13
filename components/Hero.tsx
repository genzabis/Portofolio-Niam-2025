'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-72 sm:pt-32 pb-24 relative bg-white text-slate-900 overflow-hidden isolate"
    >
      <div className="max-w-[90%] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center z-10 relative"
        >
          <h1 className="text-[clamp(1.75rem,8vw,5rem)] leading-[0.95] font-serif font-medium text-slate-900 mb-6 tracking-tighter">
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="italic font-normal">
              {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <div className="mt-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-slate-800 mb-6 leading-snug">
              Full Stack Developer <span className="italic">&</span> Chief Product & Technology Officer
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-light max-w-xl mx-auto mb-10">
              Informatics undergraduate (GPA 3.82/4.00) with experience developing 8+ web applications and digitizing 2,000+ community records.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV ATS NIAMILAH NABIL S 2026.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-900 bg-white border border-slate-300 rounded-full hover:border-slate-900 hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>Download ATS CV</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ambient grayscale portrait stamp on pure white */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[calc(8%+2rem)] sm:top-[8%] right-2 sm:right-6 md:right-12 lg:right-20 w-32 h-44 sm:w-44 sm:h-60 md:w-64 md:h-80 lg:w-72 lg:h-96 z-0 opacity-40 mix-blend-multiply pointer-events-none"
        >
          <img
            src="/images/niamgg.png"
            alt="Niamilah Nabil Syahputra"
            className="w-full h-full object-cover grayscale object-[center_30%]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;