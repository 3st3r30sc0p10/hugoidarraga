'use client';

import React from 'react';

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
        )}
        {children}
      </div>
    </div>
  );
} 