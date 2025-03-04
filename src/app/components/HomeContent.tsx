"use client";

import React from 'react';
import SectionLayout from './SectionLayout';

export default function HomeContent() {
  return (
    <div className="relative min-h-screen">
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Hugo F. Idárraga is a third-year PhD student in the Computational Media, Arts, and Cultures program at Duke University. His research interests lie at the intersection of critical machine learning studies, media theory, and adversarial technologies.
              </p>
              <p>
                Hugo investigates the political dimensions of artificial neural networks in data classification. His current work explores how contemporary deep learning models may reproduce colonial structures rooted in racial ideologies, while also examining the potential of these technologies to foster critical engagement in politics and art.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/AlgoFace-Hugo.png"
                alt="Hugo F. Idárraga"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 