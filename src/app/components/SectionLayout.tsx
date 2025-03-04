'use client';

import React from 'react';
import Navigation from './Navigation';

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div className="texture-background" aria-hidden="true" />
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            {title && <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 