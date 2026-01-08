
import React from 'react';
import { EDUCATION } from '../data/portfolioData';

const Pendidikan: React.FC = () => {
  return (
    <section id="pendidikan" className="py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Pendidikan</h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-400">{edu.period}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.institution}</h3>
              <p className="text-blue-700 font-semibold mb-2">{edu.degree}</p>
              <p className="text-slate-500 font-medium text-sm mb-6">Nilai: {edu.grade}</p>
              <ul className="space-y-3 mt-auto">
                {edu.achievements.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start">
                    <span className="text-blue-300 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;
