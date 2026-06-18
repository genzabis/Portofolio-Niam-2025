import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Kontak: React.FC = () => {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[80%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-slate-900 dark:text-zinc-400 font-medium text-xs uppercase tracking-[0.4em] mb-12 block transition-colors">Get in Touch</span>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-slate-900 dark:text-white transition-colors tracking-tighter mb-16 leading-none">
            Let's Collaborate.
          </h2>
          
          <p className="text-xl md:text-3xl text-slate-500 dark:text-zinc-500 font-sans font-light max-w-4xl mx-auto mb-32 leading-relaxed transition-colors">
            Open to new opportunities, collaborations, and exciting projects. Reach out directly.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
            <div>
              <p className="text-xs font-normal text-slate-500 dark:text-zinc-500 uppercase tracking-[0.3em] transition-colors mb-4">Email Address</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} aria-label={`Email ${PERSONAL_INFO.email}`} className="text-2xl md:text-4xl font-normal text-slate-900 dark:text-white hover:opacity-50 transition-opacity duration-500 italic">
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-normal text-slate-500 dark:text-zinc-500 uppercase tracking-[0.3em] transition-colors mb-4">WhatsApp / Phone</p>
              <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${PERSONAL_INFO.phone}`} className="text-2xl md:text-4xl font-normal text-slate-900 dark:text-white hover:opacity-50 transition-opacity duration-500 italic">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Kontak;
