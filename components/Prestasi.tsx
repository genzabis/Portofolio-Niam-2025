import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolioData';

const Prestasi: React.FC = () => {
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
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Recognition</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Achievements
          </h2>
        </motion.div>

        <div className="space-y-24">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center group cursor-default"
            >
              <div className="lg:col-span-3">
                <p className="text-sm font-normal text-slate-500 dark:text-zinc-500 uppercase tracking-[0.3em] transition-colors">{ach.year}</p>
              </div>
              <div className="lg:col-span-9 flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 dark:text-white mb-2 md:mb-0 transition-colors group-hover:opacity-60 duration-500">
                  {ach.competition}
                </h3>
                <h4 className="text-xl font-normal text-slate-600 dark:text-zinc-400 italic transition-colors">
                  {ach.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestasi;
