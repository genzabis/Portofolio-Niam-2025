'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data/portfolioData';

const Sertifikasi: React.FC = () => {
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
            Licenses & Credentials
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-slate-900 tracking-tighter">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-slate-200 bg-white hover:border-slate-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.25em] mb-4 block">
                  {cert.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-slate-900 mb-3 leading-snug">
                  {cert.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 italic font-light pt-6 border-t border-slate-100">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sertifikasi;
