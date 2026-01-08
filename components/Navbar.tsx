
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`flex items-center justify-between px-8 transition-all duration-500 ${isScrolled ? 'glass-nav w-[90%] md:w-[60%] py-3 rounded-full shadow-2xl shadow-slate-200/50' : 'w-full max-w-7xl py-2 bg-transparent'}`}>
        <div className="text-slate-900 font-extrabold text-xl tracking-tighter">
          NNS<span className="text-blue-600">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Tentang', 'Pengalaman', 'Proyek', 'Kontak'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-500 hover:text-blue-600 font-bold transition-all duration-300 text-[13px] uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#kontak" 
          className="bg-slate-900 text-white px-6 py-2 rounded-full text-[13px] font-bold hover:bg-blue-900 transition-all duration-300 shadow-lg shadow-slate-200"
        >
          Let's Talk
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
