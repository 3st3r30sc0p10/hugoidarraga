'use client';

import React from 'react';
import Navigation from './Navigation';

interface SectionLayoutProps {
  currentPath: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionLayout({ currentPath, title, children }: SectionLayoutProps) {
  return (
    <div className="main-layout">
      <Navigation currentPath={currentPath} />
      <main className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
} 