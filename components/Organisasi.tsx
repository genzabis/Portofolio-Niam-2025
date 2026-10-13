'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ORGANIZATIONS } from '../data/portfolioData';

const Organisasi: React.FC = () => {
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
            Leadership & Involvement
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Organizations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ORGANIZATIONS.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 border border-slate-200 bg-white hover:border-slate-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 rounded-none"
            >
              <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.25em] mb-4">
                {org.period}
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-slate-900 mb-2 leading-tight">
                {org.name}
              </h3>
              <h4 className="text-base sm:text-lg font-normal text-slate-500 italic mb-8">
                {org.role}
              </h4>
              <div className="space-y-3 font-sans font-light">
                {org.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <span className="text-slate-400 select-none mt-1">•</span>
                    <p>{hl}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organisasi;
