
import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden dot-grid"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] hero-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] hero-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center space-x-3 bg-white border border-slate-100 px-4 py-2 rounded-2xl shadow-sm mb-10"></div>

            <h1 className="mb-10">
              <span className="block text-slate-400 font-medium text-3xl lg:text-4xl mb-2 tracking-tight">
                Halo, Saya
              </span>
              <span className="block text-5xl lg:text-8xl font-extrabold text-slate-900 leading-[0.9] tracking-tighter">
                NIAMILAH <br />
                <span className="text-blue-900/90 font-light">NABIL S.</span>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-slate-500 mb-12 leading-relaxed border-l-4 border-blue-600/20 pl-6">
              {PERSONAL_INFO.professions.join(" — ")}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a
                href="#proyek"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-900 transition-all duration-500 shadow-2xl shadow-slate-300 text-sm uppercase tracking-widest"
              >
                Eksplorasi Karya
              </a>
              <div className="flex items-center -space-x-3"></div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100">
              <div>
                <p className="text-3xl font-extrabold text-slate-900"> - </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  IPK Kumulatif
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">16+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Proyek Aktif
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Floating Elements */}
            <div className="absolute top-10 left-0 bg-white p-4 rounded-3xl shadow-2xl border border-slate-50 z-20 animate-float">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
            </div>

            <div
              className="absolute bottom-20 -right-4 bg-white p-4 rounded-3xl shadow-2xl border border-slate-50 z-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[12px] font-bold text-slate-700">
                  Open for Work
                </span>
              </div>
            </div>

            <div className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 bg-blue-900 rounded-[4rem] transform rotate-3 scale-95 opacity-5"></div>
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <img
                  src="images/FOTO NIAM.png"
                  alt="Niamilah Nabil Syahputra"
                  class="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
