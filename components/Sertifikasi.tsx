import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data/portfolioData';

const Sertifikasi: React.FC = () => {
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
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-8 block transition-colors">Licenses</span>
          <h2 className="text-6xl md:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-default p-8 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900/30 transition-all duration-500"
            >
              <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-6 transition-colors">{cert.year}</p>
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-slate-900 dark:text-white mb-4 transition-colors group-hover:opacity-60 duration-500 leading-tight">
                {cert.title}
              </h3>
              <p className="text-base text-slate-500 dark:text-zinc-400 italic transition-colors font-light">
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
