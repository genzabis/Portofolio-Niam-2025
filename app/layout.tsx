import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Niamilah Nabil Syahputra — CPTO & Software Engineer',
  description:
    'Portfolio of Niamilah Nabil Syahputra — Chief Product & Technology Officer at The Nusantara Times, Software Engineer, and UI/UX Designer based in Indonesia.',
  authors: [{ name: 'Niamilah Nabil Syahputra' }],
  openGraph: {
    title: 'Niamilah Nabil Syahputra — CPTO & Software Engineer',
    description:
      'Chief Product & Technology Officer at The Nusantara Times. Building innovative digital products at scale.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-500 grain-overlay">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-slate-900 focus:text-white focus:rounded-full focus:text-sm focus:font-medium focus:outline-none"
        >
          Skip to Content
        </a>
        {children}
      </body>
    </html>
  );
}
