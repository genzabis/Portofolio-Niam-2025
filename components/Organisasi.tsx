
import React from 'react';
import { ORGANIZATIONS } from '../data/portfolioData';

const Organisasi: React.FC = () => {
  return (
    <section id="organisasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pengalaman Organisasi</h2>
          <div className="w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {ORGANIZATIONS.map((org, idx) => (
            <div key={idx} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-700 rounded-full border-4 border-white"></div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{org.name}</h3>
                  <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-lg text-sm">{org.period}</span>
                </div>
                <p className="text-blue-800 font-semibold mb-6 uppercase tracking-wider text-xs">{org.role}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {org.highlights.map((item, i) => (
                    <div key={i} className="flex items-center text-slate-600 text-sm bg-white p-3 rounded-xl border border-slate-100">
                      <svg className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organisasi;
