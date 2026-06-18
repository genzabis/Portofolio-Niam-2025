import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';

const Pengalaman: React.FC = () => {
  return (
    <section id="experience" className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Career</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-32">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start group cursor-default"
            >
              <div className="lg:col-span-3">
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-500 uppercase tracking-[0.3em] transition-colors">{exp.period}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 dark:text-white mb-2 transition-colors group-hover:opacity-60 duration-500">
                  {exp.company}
                </h3>
                <h4 className="text-xl font-normal text-slate-500 dark:text-zinc-500 italic mb-10 transition-colors">
                  {exp.department}
                </h4>
                <div className="space-y-4 max-w-2xl">
                  {exp.responsibilities.map((resp, idx) => (
                    <p key={idx} className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed transition-colors font-light">
                      {resp}
                    </p>
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