'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';

const Pengalaman: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
            Work Experience
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-24 sm:space-y-28">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-start group"
            >
              <div className="lg:col-span-4">
                {exp.period && (
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.25em] mb-2">
                    {exp.period}
                  </p>
                )}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <span>{exp.link.replace('https://', '')}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 mb-2 leading-tight">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-normal text-slate-500 italic mb-6">
                  {exp.department}
                </h4>
                <div className="space-y-3 max-w-2xl">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-600 font-light text-base sm:text-lg leading-relaxed">
                      <span className="text-slate-400 select-none mt-1">•</span>
                      <p>{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;