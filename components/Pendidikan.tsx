import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';

const Pendidikan: React.FC = () => {
  return (
    <section className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Academic</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-800" />
          
          <div className="space-y-24">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] md:left-[29px] top-1 w-[7px] h-[7px] rounded-full bg-slate-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-[#050505]" />
                
                <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-3 transition-colors">{edu.period}</p>
                <h3 className="text-3xl md:text-5xl font-serif font-normal text-slate-900 dark:text-white mb-3 transition-colors tracking-tight">
                  {edu.institution}
                </h3>
                <h4 className="text-xl md:text-2xl font-normal text-slate-500 dark:text-zinc-400 italic mb-3 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-base font-medium text-slate-900 dark:text-white mb-8 transition-colors">{edu.grade}</p>
                <div className="space-y-3 max-w-2xl font-sans font-light">
                  {edu.achievements.map((ach, idx) => (
                    <p key={idx} className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed transition-colors">
                      {ach}
                    </p>
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
