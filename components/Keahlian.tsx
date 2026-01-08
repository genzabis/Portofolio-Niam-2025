
import React from 'react';
import { SKILLS } from '../data/portfolioData';

const Keahlian: React.FC = () => {
  return (
    <section id="keahlian" className="py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Capabilities</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Keahlian & Kompetensi</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SKILLS.map((set, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-10 flex items-center tracking-tight">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-slate-200">
                  {idx === 0 ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
                {set.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {set.items.map((skill, i) => (
                  <span key={i} className="bg-slate-50 text-slate-600 px-6 py-2.5 rounded-2xl text-[13px] font-bold border border-slate-100 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300 cursor-default uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keahlian;
