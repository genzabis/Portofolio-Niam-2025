'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolioData';

const Prestasi: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
            Honors & Awards
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Achievements
          </h2>
        </motion.div>

        <div className="divide-y divide-slate-200">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 sm:py-10 grid lg:grid-cols-12 gap-4 lg:gap-12 items-baseline group"
            >
              <div className="lg:col-span-2">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.25em]">
                  {ach.year}
                </span>
              </div>
              <div className="lg:col-span-7">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-slate-900 leading-snug group-hover:text-slate-600 transition-colors">
                  {ach.competition}
                </h3>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                  {ach.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestasi;
