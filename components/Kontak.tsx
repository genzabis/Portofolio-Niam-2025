'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Kontak: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-8 block">
            Get in Touch
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-normal text-slate-900 tracking-tighter mb-10 leading-none">
            Let's Collaborate.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            Open to software development collaborations, technology leadership roles (CPTO), and enterprise-scale web projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mb-16">
            <div className="p-6 border border-slate-200 bg-white hover:border-slate-400 transition-colors w-full sm:w-auto min-w-[260px]">
              <p className="text-xs font-normal text-slate-400 uppercase tracking-[0.25em] mb-2">
                Email Me
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label={`Email ${PERSONAL_INFO.email}`}
                className="text-xl sm:text-2xl font-serif font-normal text-slate-900 hover:text-slate-600 transition-colors italic block [overflow-wrap:anywhere]"
              >
                {PERSONAL_INFO.email.split('@')[0]}@<wbr />{PERSONAL_INFO.email.split('@')[1]}
              </a>
            </div>

            <div className="p-6 border border-slate-200 bg-white hover:border-slate-400 transition-colors w-full sm:w-auto min-w-[260px]">
              <p className="text-xs font-normal text-slate-400 uppercase tracking-[0.25em] mb-2">
                WhatsApp / Phone
              </p>
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneRaw.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${PERSONAL_INFO.phone}`}
                className="text-xl sm:text-2xl font-serif font-normal text-slate-900 hover:text-slate-600 transition-colors italic block [overflow-wrap:anywhere]"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          <div>
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV ATS NIAMILAH NABIL S 2026.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Download ATS CV (PDF)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Kontak;
