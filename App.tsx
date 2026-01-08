
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Pengalaman from './components/Pengalaman';
import Pendidikan from './components/Pendidikan';
import Organisasi from './components/Organisasi';
import Prestasi from './components/Prestasi';
import Proyek from './components/Proyek';
import Keahlian from './components/Keahlian';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Tentang />
        <div className="bg-slate-50">
          <Pengalaman />
          <Pendidikan />
        </div>
        <Organisasi />
        <Prestasi />
        <div className="bg-slate-50">
          <Proyek />
          <Keahlian />
        </div>
        <Kontak />
      </main>
      <Footer />
    </div>
  );
};

export default App;
