import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-24 relative bg-white dark:bg-[#050505] transition-colors overflow-hidden">
      <div className="max-w-[90%] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center z-10 relative"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-slate-400 dark:text-zinc-500 mb-8">
            Portfolio & Curriculum Vitae
          </p>
          
          <h1 className="text-[12vw] leading-[0.85] font-serif font-medium text-slate-900 dark:text-white mb-6 tracking-tighter">
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="italic font-normal">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif font-normal text-slate-900 dark:text-zinc-300 mb-8 leading-snug">
              CPTO <span className="italic">at</span> The Nusantara Times<br/>
              Software Engineer <span className="italic">&</span> UI/UX Designer
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-zinc-500 leading-relaxed font-light max-w-xl mx-auto">
              Multi-disciplinary technology leader blending full-stack engineering, product strategy, and design thinking.
            </p>
          </div>
          
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[5%] right-0 sm:right-4 md:right-12 lg:right-20 w-28 h-40 sm:w-40 sm:h-52 md:w-72 md:h-[24rem] lg:w-[22rem] lg:h-[28rem] -z-10 opacity-25 sm:opacity-35 md:opacity-40 mix-blend-multiply dark:mix-blend-screen pointer-events-none"
        >
          <img 
            src="/images/niamgg.png" 
            alt="Niamilah Nabil Syahputra" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 object-[center_30%]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;