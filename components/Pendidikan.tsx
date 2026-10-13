'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';

const Pendidikan: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
            Academic Background
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Subtle timeline track */}
          <div className="absolute left-3 sm:left-6 top-2 bottom-2 w-px bg-slate-200" />

          <div className="space-y-20">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[9px] sm:[21px] top-1.5 w-2 h-2 rounded-full bg-slate-900 ring-4 ring-white" />

                <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.25em] mb-2">
                  {edu.period}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-slate-900 mb-2 tracking-tight">
                  {edu.institution}
                </h3>
                <h4 className="text-lg sm:text-xl font-normal text-slate-600 italic mb-2">
                  {edu.degree}
                </h4>
                <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-900 mb-6">
                  {edu.grade}
                </div>
                <div className="space-y-2 max-w-2xl font-sans font-light">
                  {edu.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <span className="text-slate-400 select-none mt-1">•</span>
                      <p>{ach}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;
