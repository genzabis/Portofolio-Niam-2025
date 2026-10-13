'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';

const Keahlian: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Skills & Capabilities
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-start pb-12 border-b border-slate-100 last:border-b-0"
            >
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm sm:text-base font-sans font-normal text-slate-800 bg-slate-50 border border-slate-200/90 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keahlian;
