import './globals.css';
import './textures.scss';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hugo F. Idárraga',
  description: 'Artist & Researcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <div className="texture-background" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
