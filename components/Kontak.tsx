
import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Kontak: React.FC = () => {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Mari Berkolaborasi</h2>
            <p className="text-lg text-slate-600 mb-10">
              Apakah Anda memiliki proyek yang menarik atau sekadar ingin menyapa? Silakan hubungi saya melalui formulir ini atau kanal media sosial saya.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center group">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Kirim Email</p>
                  <p className="text-slate-900 font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 015.656 0l4-4a4 4 0 01-5.656-5.656l-1.102 1.101" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-slate-900 font-bold">Niamilah Nabil Syahputra</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-all" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-all" placeholder="Nama@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subjek</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-all" placeholder="Penawaran Proyek" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Pesan</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-all resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
