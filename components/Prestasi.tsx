
import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const Prestasi: React.FC = () => {
  return (
    <section id="prestasi" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Elegant background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Recognition</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Prestasi & Penghargaan</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                </div>
                <span className="text-slate-400 font-bold text-xs tracking-widest">{ach.year}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-300 transition-colors">{ach.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{ach.competition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestasi;
