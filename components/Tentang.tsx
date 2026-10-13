'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Tentang: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[85%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-slate-500 font-medium text-xs uppercase tracking-[0.35em] mb-8 block">
            Professional Summary
          </span>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-slate-900 leading-tight italic">
                Building efficient digital systems with real impact, focused on user needs.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-light">
                {PERSONAL_INFO.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.25em] mb-2">Location</h4>
                  <p className="text-slate-900 font-serif text-base italic">{PERSONAL_INFO.location}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.25em] mb-2">Email</h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-slate-900 font-serif text-base italic hover:underline break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.25em] mb-2">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phoneRaw.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 font-serif text-base italic hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;