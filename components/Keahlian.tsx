import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';

const Keahlian: React.FC = () => {
  return (
    <section id="skills" className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Capabilities</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Skills
          </h2>
        </motion.div>

        <div className="space-y-32">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              <div className="lg:col-span-4">
                <h3 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 dark:text-white transition-colors">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="lg:col-span-8 flex flex-wrap gap-4 md:gap-x-12 gap-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-lg md:text-2xl text-slate-600 dark:text-zinc-400 font-sans font-light hover:text-slate-900 dark:hover:text-white transition-colors cursor-default"
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
