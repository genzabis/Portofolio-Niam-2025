
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Pengalaman from './components/Pengalaman';
import Pendidikan from './components/Pendidikan';
import Organisasi from './components/Organisasi';
import Prestasi from './components/Prestasi';
import Proyek from './components/Proyek';
import Sertifikasi from './components/Sertifikasi';
import Keahlian from './components/Keahlian';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Tentang />
        <Pengalaman />
        <Pendidikan />
        <Organisasi />
        <Prestasi />
        <Proyek />
        <Keahlian />
        <Sertifikasi />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
};

export default App;
