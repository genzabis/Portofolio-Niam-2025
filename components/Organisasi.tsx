import React from 'react';
import { motion } from 'framer-motion';
import { ORGANIZATIONS } from '../data/portfolioData';

const Organisasi: React.FC = () => {
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
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Leadership</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Organizations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {ORGANIZATIONS.map((org, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-default p-10 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900/30 transition-all duration-500"
            >
              <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-8 transition-colors">{org.period}</p>
              <h3 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 dark:text-white mb-3 transition-colors group-hover:opacity-60 duration-500 leading-tight">
                {org.name}
              </h3>
              <h4 className="text-xl font-normal text-slate-500 dark:text-zinc-400 italic mb-10 transition-colors">
                {org.role}
              </h4>
              <div className="space-y-4 font-sans font-light">
                {org.highlights.map((hl, idx) => (
                  <p key={idx} className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed transition-colors">
                    {hl}
                  </p>
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
