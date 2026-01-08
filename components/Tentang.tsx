
import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Tentang: React.FC = () => {
  const contactCards = [
    { label: 'Primary Contact', value: PERSONAL_INFO.phone, sub: 'WhatsApp Available', color: 'bg-blue-600' },
    { label: 'Official Email', value: PERSONAL_INFO.email, sub: 'Professional Inquiries', color: 'bg-slate-900' },
    { label: 'LinkedIn Network', value: 'Niamilah Nabil S.', sub: 'Professional Profile', color: 'bg-blue-800' },
  ];

  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Connect</h2>
             <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Membangun Jembatan Melalui Komunikasi Profesional</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((card, idx) => (
            <div key={idx} className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 right-0 w-24 h-24 ${card.color} opacity-[0.03] rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{card.label}</p>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 truncate">{card.value}</h3>
              <p className="text-sm text-slate-500 font-medium">{card.sub}</p>
              
              <div className="mt-8 flex justify-end">
                <div className={`w-10 h-10 rounded-full ${card.color} text-white flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tentang;
