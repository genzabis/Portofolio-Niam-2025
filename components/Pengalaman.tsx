
import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

const Pengalaman: React.FC = () => {
  return (
    <section id="pengalaman" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Pengalaman Kerja</h2>
          <div className="w-16 h-1 bg-blue-700 rounded-full"></div>
        </div>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                  <p className="text-blue-700 font-medium">{exp.department}</p>
                </div>
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((res, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="text-blue-500 mr-3 mt-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {res}
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

export default Pengalaman;
