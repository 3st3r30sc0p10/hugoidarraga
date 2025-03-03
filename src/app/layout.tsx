import './globals.css';
import './textures.scss';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hugo Idárraga',
  description: 'Personal portfolio and academic work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div className="texture-background" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
