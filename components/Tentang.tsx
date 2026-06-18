import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Tentang: React.FC = () => {
  return (
    <section id="about" className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-12 block transition-colors">Biography</span>
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-slate-900 dark:text-white leading-tight transition-colors italic">
                Dedicated to building high-quality platforms that bridge academic precision with industry excellence.
              </h2>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed mb-16 transition-colors font-light">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-16">
                <div>
                  <h4 className="text-xs font-medium text-slate-900 dark:text-zinc-500 uppercase tracking-[0.3em] mb-4 transition-colors">Location</h4>
                  <p className="text-slate-900 dark:text-white font-serif font-normal text-lg transition-colors italic">Purwokerto, Indonesia</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-slate-900 dark:text-zinc-500 uppercase tracking-[0.3em] mb-4 transition-colors">Email</h4>
                  <p className="text-slate-900 dark:text-white font-serif font-normal text-lg transition-colors italic">{PERSONAL_INFO.email}</p>
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