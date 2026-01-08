
import React from 'react';
import { PROJECTS } from '../data/portfolioData';

const Proyek: React.FC = () => {
  return (
    <section id="proyek" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Karya Terpilih
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Representasi dedikasi saya dalam menggabungkan estetika desain
              dengan logika pemrograman yang kuat.
            </p>
          </div>
          <div className="inline-flex items-center bg-slate-50 border border-slate-100 px-6 py-3 rounded-2xl">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest mr-4">
              Total Milestone
            </span>
            <span className="text-blue-900 font-extrabold text-2xl leading-none">
              {PROJECTS.length}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-extrabold text-slate-900 uppercase tracking-widest shadow-sm">
                  {proj.year}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors leading-tight">
                  {proj.title}
                </h3>
                <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
                  <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
                  {proj.role}
                </div>
                <div className="mt-auto">
                  <button className="flex items-center text-slate-900 font-extrabold text-xs uppercase tracking-[0.2em] group/btn">
                    Lihat Detail
                    <div className="ml-3 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-slate-900 group-hover/btn:text-white group-hover/btn:border-slate-900 transition-all duration-300">
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;
